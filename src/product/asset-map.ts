/**
 * Product-specific asset configuration — legacy CDN prefix, R2 key prefix,
 * and missing-image fallback map.
 *
 * The framework's assetUrl() function consumes these values to rewrite
 * legacy CDN hotlinks onto the R2-backed CDN. When deploying a new product,
 * replace the prefix and map below with the new brand's asset structure.
 */

export const ASSET_CDN_PREFIX = 'images/sups/'

export const ASSET_LEGACY_SUBDIR = 'agrospear/'

export const MISSING_IMAGE_MAP: Record<string, string> = {
  'categories/rescue.webp': 'categories/agrospear-rescue-operations.webp',
  'categories/rib.webp': 'categories/agrospear-rib-boat-category.webp',
  'certifications/certifications-hero.webp': 'factory/agrospear-factory-building.webp',
  'factory/design discussagrospear-inflatable-boat-agrospear-factory-exterior.webp': 'factory/agrospear-design-discussion.webp',
  'factory/agrospear-factory-aerial-1.webp': 'factory/agrospear-factory-building.webp',
  'hero/hero-4.webp': 'hero/tech-meeting-small.webp',
  'hero/hero-5.webp': 'hero/agrospear-hero-design-concept.webp',
  'hero/hero-scenic.webp': 'hero/production-dept.webp',
  'lifestyle/agrospear-lifestyle-1.webp': 'use-cases/agrospear-family-use-case.webp',
  'lifestyle/agrospear-lifestyle-6.webp': 'use-cases/agrospear-outdoor-adventure.webp',
  'news/agrospear-rd-center-innovation.webp': 'factory/agrospear-design-discussion.webp',
  'news/agrospear-team-surfski.webp': 'team/agrospear-paddle-girls-team.webp',
  'news/dealers.webp': 'news/agrospear-dealers-network.webp',
  'news/oem-production-line.webp': 'factory/agrospear-production-department.webp',
  'news/outdoor.webp': 'news/agrospear-outdoor-events.webp',
  'news/quality.webp': 'news/agrospear-quality-news.webp',
  'news/supply-chain.webp': 'news/agrospear-supply-chain.webp',
  'partners/partners-hero.webp': 'team/agrospear-meeting-overseas.webp',
  'products/accessories/oar-pump-1.webp': 'products/agrospear-accessories-product.webp',
  'products/life-jacket-2.webp': 'products/agrospear-life-vest-classic.webp',
  'products/life-jacket-agrospear-inflatable-boat-agrospear-factory-exterior.webp': 'products/agrospear-inflatable-boat-factory.webp',
  'products/sup-series/sup-explorer-11.webp': 'products/agrospear-formulation-product.webp',
  'products/sup-touring.webp': 'products/agrospear-sup-boards-collection.webp',
  'use-cases/beginner.webp': 'use-cases/agrospear-beginner-use-case.webp',
  'use-cases/family.webp': 'use-cases/agrospear-family-use-case.webp',
  'use-cases/outdoor.webp': 'use-cases/agrospear-outdoor-adventure.webp',
}
