/**
 * Product-specific asset configuration — legacy CDN prefix, R2 key prefix,
 * and missing-image fallback map.
 *
 * The framework's assetUrl() function consumes these values to rewrite
 * legacy CDN hotlinks onto the R2-backed CDN. When deploying a new product,
 * replace the prefix and map below with the new brand's asset structure.
 */

export const ASSET_CDN_PREFIX = 'images/agrochemical/'

export const ASSET_LEGACY_SUBDIR = 'agrospear/'

export const MISSING_IMAGE_MAP: Record<string, string> = {
  'categories/rescue.webp': 'categories/agrospear-rescue-operations.webp',
  'certifications/certifications-hero.webp': 'factory/agrospear-factory-building.webp',
  'factory/agrospear-factory-aerial-1.webp': 'factory/agrospear-factory-building.webp',
  'hero/hero-4.webp': 'hero/tech-meeting-small.webp',
  'hero/hero-5.webp': 'hero/agrospear-hero-design-concept.webp',
  'hero/hero-scenic.webp': 'hero/production-dept.webp',
  'lifestyle/agrospear-lifestyle-1.webp': 'use-cases/agrospear-family-use-case.webp',
  'lifestyle/agrospear-lifestyle-6.webp': 'use-cases/agrospear-outdoor-adventure.webp',
  'news/agrospear-rd-center-innovation.webp': 'factory/agrospear-design-discussion.webp',
  'news/dealers.webp': 'news/agrospear-dealers-network.webp',
  'news/oem-production-line.webp': 'factory/agrospear-production-department.webp',
  'news/outdoor.webp': 'news/agrospear-outdoor-events.webp',
  'news/quality.webp': 'news/agrospear-quality-news.webp',
  'news/supply-chain.webp': 'news/agrospear-supply-chain.webp',
  'partners/partners-hero.webp': 'team/agrospear-meeting-overseas.webp',
  'use-cases/beginner.webp': 'use-cases/agrospear-beginner-use-case.webp',
  'use-cases/family.webp': 'use-cases/agrospear-family-use-case.webp',
  'use-cases/outdoor.webp': 'use-cases/agrospear-outdoor-adventure.webp',
}
