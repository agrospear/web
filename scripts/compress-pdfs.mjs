/**
 * Compress PDF files using Ghostscript CLI.
 *
 * Generates smaller PDFs suitable for web download while preserving quality.
 * Uses Ghostscript's built-in PDFSETTINGS presets:
 *
 *   screen  — 72 DPI, smallest file, low quality (not recommended for print docs)
 *   ebook   — 150 DPI, good balance of size and quality (default)
 *   printer — 300 DPI, high quality, larger file
 *
 * Usage:
 *   node scripts/compress-pdfs.mjs                          # compress public/downloads/ → dist/compressed/
 *   node scripts/compress-pdfs.mjs --src <dir> --out <dir>  # custom dirs
 *   node scripts/compress-pdfs.mjs --quality printer        # higher quality
 *   node scripts/compress-pdfs.mjs --dry-run                # preview without compressing
 *   node scripts/compress-pdfs.mjs --quality ebook --keep-original  # keep originals alongside compressed
 *
 * Requires: Ghostscript (gs) installed on the system.
 *   Ubuntu:  sudo apt-get install ghostscript
 *   macOS:   brew install ghostscript
 *   Windows: https://www.ghostscript.com/releases/gsdnld.html
 */

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, basename, extname } from 'node:path'

/* ────────────────────────────── CLI args ────────────────────────────── */

const args = process.argv.slice(2)

function flagValue(name, fallback) {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}

const SRC_DIR = flagValue('src', 'public/downloads')
const OUT_DIR = flagValue('out', 'dist/compressed')
const QUALITY = flagValue('quality', 'ebook') // screen | ebook | printer
const DRY_RUN = args.includes('--dry-run')
const KEEP_ORIGINAL = args.includes('--keep-original')
const SILENT = args.includes('--silent')

const VALID_QUALITIES = ['screen', 'ebook', 'printer']
if (!VALID_QUALITIES.includes(QUALITY)) {
  console.error(`Invalid quality: ${QUALITY}. Must be one of: ${VALID_QUALITIES.join(', ')}`)
  process.exit(1)
}

/* ────────────────────────────── Ghostscript check ────────────────────────────── */

function checkGhostscript() {
  try {
    const version = execFileSync('gs', ['--version'], { encoding: 'utf8', timeout: 5000 }).trim()
    if (!SILENT) console.log(`Ghostscript ${version} detected`)
    return true
  } catch {
    console.error('Ghostscript (gs) not found. Install it:')
    console.error('  Ubuntu/Debian: sudo apt-get install ghostscript')
    console.error('  macOS:         brew install ghostscript')
    console.error('  Windows:       https://www.ghostscript.com/releases/gsdnld.html')
    return false
  }
}

/* ────────────────────────────── PDF discovery ────────────────────────────── */

function findPdfs(dir) {
  const results = []
  if (!existsSync(dir)) return results
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...findPdfs(fullPath))
    } else if (entry.name.toLowerCase().endsWith('.pdf')) {
      results.push(fullPath)
    }
  }
  return results
}

/* ────────────────────────────── Compression ────────────────────────────── */

function compressPdf(input, output, quality) {
  const settings = {
    screen: '-dPDFSETTINGS=/screen -dDownsampleColorImages=true -dColorImageResolution=72',
    ebook: '-dPDFSETTINGS=/ebook -dDownsampleColorImages=true -dColorImageResolution=150',
    printer: '-dPDFSETTINGS=/printer -dDownsampleColorImages=true -dColorImageResolution=300',
  }

  const gsArgs = [
    '-sDEVICE=pdfwrite',
    '-dCompatibilityLevel=1.4',
    settings[quality],
    '-dNOPAUSE',
    '-dQUIET',
    '-dBATCH',
    `-sOutputFile=${output}`,
    input,
  ]

  execFileSync('gs', gsArgs, { timeout: 120_000 })
}

/* ────────────────────────────── Stats ────────────────────────────── */

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function ratio(original, compressed) {
  if (original === 0) return '0%'
  const pct = ((1 - compressed / original) * 100).toFixed(1)
  return `${pct}%`
}

/* ────────────────────────────── Main ────────────────────────────── */

function run() {
  if (!checkGhostscript()) process.exit(1)

  const pdfs = findPdfs(SRC_DIR)
  if (pdfs.length === 0) {
    console.error(`No PDF files found in ${SRC_DIR}`)
    process.exit(1)
  }

  if (!SILENT) {
    console.log(`\nFound ${pdfs.length} PDF(s) in ${SRC_DIR}`)
    console.log(`Quality: ${QUALITY}`)
    console.log(`Output:  ${OUT_DIR}\n`)
  }

  if (DRY_RUN) {
    let totalOriginal = 0
    for (const pdf of pdfs) {
      const size = statSync(pdf).size
      totalOriginal += size
      const rel = relative(SRC_DIR, pdf)
      console.log(`  [dry-run] ${rel} (${formatBytes(size)})`)
    }
    console.log(`\nTotal: ${pdfs.length} files, ${formatBytes(totalOriginal)}`)
    return
  }

  mkdirSync(OUT_DIR, { recursive: true })

  let totalOriginal = 0
  let totalCompressed = 0
  let success = 0
  let failed = 0
  const results = []

  for (const pdf of pdfs) {
    const rel = relative(SRC_DIR, pdf)
    const outPath = join(OUT_DIR, rel)
    mkdirSync(join(outPath, '..'), { recursive: true })

    const originalSize = statSync(pdf).size
    totalOriginal += originalSize

    try {
      compressPdf(pdf, outPath, QUALITY)
      const compressedSize = statSync(outPath).size
      totalCompressed += compressedSize
      success++

      const saved = ratio(originalSize, compressedSize)
      results.push({ file: rel, originalSize, compressedSize, saved })

      if (!SILENT) {
        const icon = compressedSize < originalSize ? '✓' : '≈'
        console.log(`  ${icon} ${rel}: ${formatBytes(originalSize)} → ${formatBytes(compressedSize)} (-${saved})`)
      }
    } catch (err) {
      failed++
      console.error(`  ✗ ${rel}: ${err.message}`)
    }
  }

  // Summary
  console.log(`\n${'─'.repeat(60)}`)
  console.log(`Compression complete: ${QUALITY} preset`)
  console.log(`  Files processed: ${success}/${pdfs.length}`)
  console.log(`  Original total:  ${formatBytes(totalOriginal)}`)
  console.log(`  Compressed total:${formatBytes(totalCompressed)}`)
  console.log(`  Total saved:     ${ratio(totalOriginal, totalCompressed)}`)
  if (failed > 0) console.log(`  Failed:          ${failed}`)
  console.log(`${'─'.repeat(60)}\n`)

  // Write manifest for upload scripts
  const manifestPath = join(OUT_DIR, 'manifest.json')
  const manifest = {
    quality: QUALITY,
    sourceDir: SRC_DIR,
    outputDir: OUT_DIR,
    timestamp: new Date().toISOString(),
    files: results.map((r) => ({
      file: r.file,
      originalSize: r.originalSize,
      compressedSize: r.compressedSize,
      saved: r.saved,
    })),
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  if (!SILENT) console.log(`Manifest written to ${manifestPath}`)

  if (failed > 0) process.exitCode = 1
}

run()
