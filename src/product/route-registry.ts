/**
 * Product-specific route configuration for the content loader.
 *
 * SHADOWED_PATHS: route paths owned by static route handlers; registry
 * entries under these paths are never rendered from the content system.
 *
 * EXTRA_PATHS: dedicated-route pages served outside the registry,
 * mapping URL path → YAML slug.
 *
 * When deploying a new product, replace these with the new site's
 * route structure. The loader mechanism itself is framework-level.
 */

import { ENTITY_PAGE_PATH } from '@/config/navigation'

/**
 * Maps export_market display names to their URL slugs.
 * Used by ProductView to turn export market pills into clickable links.
 */
export const MARKET_SLUGS: Record<string, string> = {
  'Africa': 'africa',
  'Southeast Asia': 'southeast-asia',
  'Latin America': 'latin-america',
  'Middle East': 'west-asia',
  'Central Asia': 'central-asia',
  'Eastern Europe': 'eastern-europe',
  'África': 'africa',
  'Sudeste Asiático': 'southeast-asia',
  'América Latina': 'latin-america',
  'Oriente Medio': 'west-asia',
  'Asia Central': 'central-asia',
  'Europa del Este': 'eastern-europe',
}

/**
 * Maps product MDX `category` field to the URL slug used in nested URLs.
 * e.g. category="herbicide" → "/products/herbicides/{slug}"
 */
export const CATEGORY_SLUGS: Record<string, string> = {
  herbicide: 'herbicides',
  insecticide: 'insecticides',
  fungicide: 'fungicides',
  pgr: 'pgr',
  'seed-treatment': 'seed-treatment',
  adjuvant: 'adjuvants',
  biopesticide: 'biopesticides',
  mixture: 'premix-formulations',
}

/** Reverse mapping: URL category slug → MDX category value. */
export const CATEGORY_FROM_URL: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([cat, urlSlug]) => [urlSlug, cat]),
)

/**
 * Build a nested product URL: /products/{category-slug}/{product-slug}
 * Falls back to /products/{slug} if category is unknown.
 */
export function productPath(slug: string, category?: string): string {
  if (category && CATEGORY_SLUGS[category]) {
    return `/products/${CATEGORY_SLUGS[category]}/${slug}`
  }
  return `/products/${slug}`
}

export const SHADOWED_PATHS: Set<string> = new Set([
  '/', '/solutions', '/products', '/who-we-serve', '/how-it-works', '/gallery', '/about',
  '/contact', '/customizer', '/waitlist', '/changelog',
  '/knowledge', '/oem-agrochemical-moq',
  '/agrochemical-certification-guide',
  '/manufacturing',
  '/quality',
  '/herbicide', '/insecticide', '/fungicide', '/pgr', '/seed-treatment', '/mixture',
  '/factory', '/oem-manufacturing', '/product-development', '/start-agrochemical-project',
  '/biopesticide', '/oem-adjuvants', '/randdcenter', '/factory-audit-checklist',
  '/oem/agrochemical-oem-africa', '/oem/agrochemical-oem-southeast-asia', '/oem/agrochemical-oem-latin-america',
  ENTITY_PAGE_PATH,
])

export const EXTRA_PATHS: Record<string, string> = {
  '/research/formulation-technology': 'research-formulation-technology',
  '/research/adjuvant-types': 'research-adjuvant-types',
  '/research/icama-registration': 'research-icama-registration',
  '/research/formulation-stability': 'research-formulation-stability',
  '/research/oem-buyer-guide': 'research-oem-buyer-guide',
  '/randdcenter/formulation-engineering': 'formulation-engineering',
  '/randdcenter/formulation-pilot-plant': 'formulation-pilot-plant',
  '/randdcenter/formulation-lab': 'formulation-lab',
  '/randdcenter/formulation-equipment': 'formulation-equipment',
  '/randdcenter/quality-inspection-lab': 'quality-inspection-lab',
  '/randdcenter/prototype-workshop': 'prototype-workshop',
  '/odm-development': 'odm-development',
  '/oem/agrochemical-oem-west-asia': 'agrochemical-oem-west-asia',
  '/oem/agrochemical-oem-central-asia': 'agrochemical-oem-central-asia',
  '/solutions/co-branding': 'solutions-co-branding',
  '/solutions/distributor-partners': 'solutions-distributor-partners',
  '/solutions/distributors': 'solutions-distributors',
  '/b2b-solutions-matrix': 'b2b-solutions-matrix',
  '/oem-odm-private-label-comparison': 'oem-odm-private-label-comparison',
  '/oem-onboarding-guide': 'oem-onboarding-guide',
  '/formulation-type-comparison': 'formulation-type-comparison',
  '/agrochemical-regulation-by-market': 'agrochemical-regulation-by-market',
  '/about/identity': 'about-identity',
  '/manufacturing': 'manufacturing',
}
