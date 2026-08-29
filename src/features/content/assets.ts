/**
 * Central asset URL rewrite.
 *
 * Content may contain legacy or transitional CDN paths. At every render
 * boundary, image URLs are normalized to the canonical R2 image namespace;
 * documents and videos retain their dedicated namespaces.
 */

import { BRAND_ASSETS_CDN, BRAND_PARENT_DOMAIN } from '@/config/branding'
import { ASSET_CDN_PREFIX, ASSET_LEGACY_SUBDIR, MISSING_IMAGE_MAP } from '@/product/asset-map'

const CDN_BASE = BRAND_ASSETS_CDN
const LEGACY_PREFIX = `https://assets.${BRAND_PARENT_DOMAIN}/images/${ASSET_LEGACY_SUBDIR}`
const CANONICAL_IMAGE_PREFIX = `${CDN_BASE}/${ASSET_CDN_PREFIX}`
const IMAGE_SUBDIRECTORIES = new Set(['factory', 'products', 'quality', 'news', 'lifestyle', 'hero', 'categories', 'partners', 'use-cases', 'team'])

function canonicalizeImagePath(url: string): string | undefined {
  const sitePrefix = `${CDN_BASE}/site/`
  if (url.startsWith(sitePrefix)) {
    const relativePath = url.slice(sitePrefix.length)
    const [directory] = relativePath.split('/')
    if (IMAGE_SUBDIRECTORIES.has(directory)) {
      return `${CANONICAL_IMAGE_PREFIX}${relativePath}`
    }
  }

  return undefined
}

export function assetUrl(url: string): string {
  if (!url) return url

  const canonicalImageUrl = canonicalizeImagePath(url)
  if (canonicalImageUrl) return canonicalImageUrl

  if (!url.startsWith(LEGACY_PREFIX)) return url

  const rel = url.slice(LEGACY_PREFIX.length)
  return `${CANONICAL_IMAGE_PREFIX}${MISSING_IMAGE_MAP[rel] ?? rel}`
}
