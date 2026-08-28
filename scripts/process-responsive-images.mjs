#!/usr/bin/env node
/**
 * process-responsive-images.mjs
 *
 * Batch-generates responsive image variants using Sharp.
 * Solves the limitation of free Cloudflare R2 which has no on-the-fly
 * image resizing — we pre-generate multiple widths and formats, then
 * upload them all to R2 so the browser can pick the best via srcset.
 *
 * Source images live in scripts/agrospear-images/ (committed to repo).
 * Output goes to dist/responsive/ with a JSON manifest.
 *
 * Usage:
 *   node scripts/process-responsive-images.mjs                   # process all
 *   node scripts/process-responsive-images.mjs --dry-run         # preview only
 *   node scripts/process-responsive-images.mjs --src /other/dir  # custom source
 *
 * Output structure:
 *   dist/responsive/
 *     products/agrospear-og-default-480.avif
 *     products/agrospear-og-default-480.webp
 *     products/agrospear-og-default-768.avif
 *     products/agrospear-og-default-768.webp
 *     products/agrospear-og-default-1024.avif
 *     products/agrospear-og-default-1024.webp
 *     products/agrospear-og-default-1280.avif
 *     products/agrospear-og-default-1280.webp
 *     products/agrospear-og-default.avif        # original (max size)
 *     products/agrospear-og-default.webp
 *     factory/agrospear-factory-exterior-480.webp
 *     ...
 *     manifest.json                             # size map for React components
 */

import { readdir, mkdir, writeFile, stat } from 'node:fs/promises'
import { join, basename, extname, relative, dirname } from 'node:path'
import sharp from 'sharp'

// ─── Config ──────────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const SRC_DIR = args.includes('--src')
  ? args[args.indexOf('--src') + 1]
  : join(import.meta.dirname, 'agrospear-images')
const OUT_DIR = join(import.meta.dirname, '..', 'dist', 'responsive')

// Responsive width breakpoints (pixels)
const WIDTHS = [480, 768, 1024, 1280]

// Output formats and quality
const FORMATS = [
  { ext: 'avif', quality: 65 },
  { ext: 'webp', quality: 80 },
]

// Images smaller than this skip width generation (already optimal)
const MIN_WIDTH_FOR_VARIANTS = 600

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function getImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const images = []
  for (const entry of entries) {
    if (entry.isDirectory()) {
      images.push(...(await getImages(join(dir, entry.name))))
    } else if (/\.(avif|webp|jpg|jpeg|png)$/i.test(entry.name)) {
      images.push(join(dir, entry.name))
    }
  }
  return images
}

function outPath(relPath, width, ext) {
  const parsed = dirname(relPath)
  const name = basename(relPath, extname(relPath))
  return join(OUT_DIR, parsed, `${name}-${width}.${ext}`)
}

function originalOutPath(relPath, ext) {
  const parsed = dirname(relPath)
  const name = basename(relPath, extname(relPath))
  return join(OUT_DIR, parsed, `${name}.${ext}`)
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`[responsive] Source: ${SRC_DIR}`)
  console.log(`[responsive] Output: ${OUT_DIR}`)
  console.log(`[responsive] Widths: ${WIDTHS.join(', ')}`)
  console.log(`[responsive] Formats: ${FORMATS.map(f => f.ext).join(', ')}`)
  if (DRY_RUN) console.log('[responsive] DRY RUN — no files will be written\n')

  const srcImages = await getImages(SRC_DIR)
  console.log(`[responsive] Found ${srcImages.length} source images\n`)

  const manifest = {} // { "products/hero.avif": { src: "...", srcSet: "..." } }
  let totalOutput = 0
  let totalBytes = 0

  for (const srcPath of srcImages) {
    const rel = relative(SRC_DIR, srcPath).replace(/\\/g, '/')
    const dir = dirname(rel)
    const name = basename(srcPath, extname(srcPath))

    const meta = await sharp(srcPath).metadata()
    const srcWidth = meta.width || 0
    const srcHeight = meta.height || 0

    if (srcWidth < 100 || srcHeight < 100) {
      console.log(`  SKIP  ${rel} (${srcWidth}×${srcHeight} — too small)`)
      continue
    }

    console.log(`  PROC  ${rel} (${srcWidth}×${srcHeight})`)

    // Determine which widths to generate (skip those >= source width)
    const targetWidths = WIDTHS.filter(w => w < srcWidth)

    for (const fmt of FORMATS) {
      // Always output the original at full size
      const origOut = join(OUT_DIR, rel).replace(extname(rel), `.${fmt.ext}`)
      if (!DRY_RUN) {
        await mkdir(dirname(origOut), { recursive: true })
        await sharp(srcPath)
          .resize({ width: srcWidth, withoutEnlargement: true })
          .toFormat(fmt.ext, { quality: fmt.quality })
          .toFile(origOut)
      }
      const origStat = await stat(srcPath).catch(() => ({ size: 0 }))
      totalOutput++
      totalBytes += origStat.size

      // Generate responsive variants
      for (const w of targetWidths) {
        const resizedHeight = Math.round((srcHeight / srcWidth) * w)
        const outP = outPath(rel, w, fmt.ext)

        if (!DRY_RUN) {
          await mkdir(dirname(outP), { recursive: true })
          await sharp(srcPath)
            .resize({ width: w, withoutEnlargement: true })
            .toFormat(fmt.ext, { quality: fmt.quality })
            .toFile(outP)
        }

        const outStat = await stat(outP).catch(() => ({ size: 0 }))
        totalOutput++
        totalBytes += outStat.size
      }

      // Build manifest entry
      const key = `${dir}/${name}.${fmt.ext}`
      const cdnBase = `https://assets.agrospear.com/images/agrochemical`
      const srcSetParts = targetWidths.map(w => {
        const outP = outPath(rel, w, fmt.ext)
        const relOut = relative(OUT_DIR, outP).replace(/\\/g, '/')
        return `${cdnBase}/${relOut} ${w}w`
      })
      // Add original as largest
      const origRel = relative(OUT_DIR, origOut).replace(/\\/g, '/')
      srcSetParts.push(`${cdnBase}/${origRel} ${srcWidth}w`)

      manifest[key] = {
        src: `${cdnBase}/${origRel}`,
        srcSet: srcSetParts.join(', '),
        width: srcWidth,
        height: srcHeight,
        format: fmt.ext,
        widths: [...targetWidths, srcWidth],
      }
    }

    console.log(`        → ${targetWidths.length} sizes × ${FORMATS.length} formats`)
  }

  // Write manifest
  if (!DRY_RUN) {
    await mkdir(OUT_DIR, { recursive: true })
    await writeFile(join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2))
    console.log(`\n[responsive] Manifest: ${Object.keys(manifest).length} entries`)
  }

  const mb = (totalBytes / 1024 / 1024).toFixed(1)
  console.log(`[responsive] ${DRY_RUN ? 'Would generate' : 'Generated'} ${totalOutput} files (${mb} MB)`)
}

main().catch(err => {
  console.error('[responsive] Fatal:', err)
  process.exit(1)
})
