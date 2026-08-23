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

export const SHADOWED_PATHS: Set<string> = new Set([
  '/', '/solutions', '/products', '/who-we-serve', '/how-it-works', '/gallery', '/about',
  '/contact', '/customizer', '/waitlist', '/changelog',
  '/custom-sup-manufacturing', '/private-label-sup', '/sup-for-resorts', '/sup-for-clubs',
  '/sup-startup-brands', '/terms', '/privacy',
  '/custom-sup-development', '/solutions/private-label-sup', '/solutions/resort-sup',
  '/solutions/club-sup', '/solutions/school-sup', '/solutions/custom-sup',
  '/knowledge', '/oem-agrochemical-moq',
  '/agrochemical-certification-guide',
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
  '/oem-odm': 'oem-manufacturing',
  '/oem-manufacturing': 'oem-manufacturing',
  '/odm-development': 'odm-development',
  '/product-development': 'product-development',
  '/oem/agrochemical-oem-africa': 'agrochemical-oem-africa',
  '/oem/agrochemical-oem-southeast-asia': 'agrochemical-oem-southeast-asia',
  '/oem/agrochemical-oem-latin-america': 'agrochemical-oem-latin-america',
  '/oem/agrochemical-oem-west-asia': 'agrochemical-oem-west-asia',
  '/oem/agrochemical-oem-central-asia': 'agrochemical-oem-central-asia',
  '/oem-adjuvants': 'oem-adjuvants',
  '/solutions/co-branding': 'solutions-co-branding',
  '/solutions/distributor-partners': 'solutions-distributor-partners',
  '/solutions/distributors': 'solutions-distributors',
  '/b2b-solutions-matrix': 'b2b-solutions-matrix',
  '/oem-odm-private-label-comparison': 'oem-odm-private-label-comparison',
  '/start-agrochemical-project': 'start-agrochemical-project',
  '/oem-onboarding-guide': 'oem-onboarding-guide',
  '/formulation-type-comparison': 'formulation-type-comparison',
  '/agrochemical-regulation-by-market': 'agrochemical-regulation-by-market',
  '/factory-audit-checklist': 'factory-audit-checklist',
  '/about/identity': 'about-identity',
  '/herbicide': 'herbicide',
  '/insecticide': 'insecticide',
  '/fungicide': 'fungicide',
  '/pgr': 'pgr',
  '/seed-treatment': 'seed-treatment',
  '/mixture': 'mixture',
}
