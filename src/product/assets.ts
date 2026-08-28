/**
 * Canonical public image asset registry.
 *
 * Image binaries live in the agrospear-files-prod R2 bucket. Only small text
 * keys are kept in source code; the upload workflow owns the binaries.
 */

import { SITE_DOMAIN } from '@/config/site'

export const ASSETS_BUCKET = 'agrospear-files-prod' as const
export const ASSETS_PREFIX = 'images/agrochemical' as const
export const ASSETS_CDN = `https://assets.${SITE_DOMAIN}` as const

export const ASSET_KEYS = {
  hero: {
    avif: `${ASSETS_PREFIX}/products/agrospear-og-default.avif`,
    webp: `${ASSETS_PREFIX}/products/agrospear-og-default.webp`,
    avif768: `${ASSETS_PREFIX}/products/agrospear-og-default-768.avif`,
    avif480: `${ASSETS_PREFIX}/products/agrospear-og-default-480.avif`,
  },
  factory: {
    exterior: `${ASSETS_PREFIX}/factory/agrospear-factory-exterior.webp`,
    formulationLab: `${ASSETS_PREFIX}/factory/agrospear-formulation-lab.webp`,
    qualityLab: `${ASSETS_PREFIX}/factory/agrospear-quality-lab.webp`,
  },
  categories: {
    herbicides: `${ASSETS_PREFIX}/products/herbicides-category.webp`,
    insecticides: `${ASSETS_PREFIX}/products/insecticides-category.webp`,
    fungicides: `${ASSETS_PREFIX}/products/fungicides-category.webp`,
    pgr: `${ASSETS_PREFIX}/products/pgr-category.webp`,
  },
} as const

export function assetUrl(key: string): string {
  return `${ASSETS_CDN}/${key.replace(/^\/+/, '')}`
}
