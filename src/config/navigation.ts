/**
 * Navigation configuration — site structure and page hierarchy.
 *
 * Defines the navigation tree, footer links, and page metadata that
 * previously were hardcoded across multiple marketing components.
 * Content-driven routes (products, solutions, news) are resolved by
 * the Content Registry and are not listed here.
 *
 * To deploy a new product: adjust the navigation items below.
 * The actual route handlers are generated from this structure.
 */

import { BRAND_PARENT_URL } from './branding'

export const ENTITY_PAGE_PATH = '/about/agrospear-entity' as const

export const ABOUT_BRAND_PATH = '/about/agrospear' as const

export const LEGACY_REDIRECTS: Record<string, string> = {
  '/about/agrospear-brand': '/about',
  '/agrospear-story': ABOUT_BRAND_PATH,
  '/brand-global-presence': '/about',
  '/brand-why-agrospear': ABOUT_BRAND_PATH,
  '/aquagrospear': '/about',
  '/people': '/about',
  '/geo-report': ABOUT_BRAND_PATH,
  '/disclaimer': '/terms',
  '/bundles': '/products',
  '/products/compare': '/oem-vs-private-label',
  '/tech-specs': '/technology',
  '/oem-process': '/solutions/agrochemical-oem',
  '/solutions/by-industry': '/solutions',
  '/solutions/by-use-case': '/solutions',
  '/solutions/oem-brands': '/solutions/agrochemical-oem',
  '/buyer-center': '/solutions',
  '/v2': '/products',
  '/use-cases': '/solutions',
  '/use-cases/disaster-relief': `${BRAND_PARENT_URL}/disaster-relief-humanitarian-aid`,
  '/compare': '/oem-vs-private-label',
  '/compare/agrospear-vs-traditional-manufacturers': '/about',
  '/compare/single-chamber-vs-multi-chamber': '/knowledge',
  '/design-powerhouse': '/technology',
  '/engineering-perfection': '/manufacturing/research-development',
  '/engineering-team': '/manufacturing/research-development',
  '/knowledge-graph': '/knowledge',
  '/ai-answer-center': '/faq',
  '/learn/materials': '/knowledge',
  '/guides/herbicide-selection': '/knowledge',
  '/guides/insecticide-basics': '/knowledge',
  '/guides/fungicide-program': '/knowledge',
  '/guides/seed-treatment-guide': '/knowledge',
  '/guides/adjuvant-selection': '/knowledge',
  '/guides/registration-basics': '/knowledge',
  '/guides/formulation-types': '/knowledge',
  '/guides/biopesticide-intro': '/knowledge',
  '/guides/spray-season-prep': '/knowledge',
  '/guides/understanding-specs': '/knowledge',
  '/guides/weather-conditions': '/knowledge',
  '/research/quality-testing-standards': '/knowledge',
  '/resources/download-catalog': '/products',
  '/oem-manufacturing': '/solutions/agrochemical-oem',
  '/herbicide': '/products/herbicides',
  '/insecticide': '/products/insecticides',
  '/fungicide': '/products/fungicides',
  '/factory': '/manufacturing/factory',
  '/start-agrochemical-project': '/request-quote',
  '/product-development': '/solutions/custom-formulation',
  '/pgr': '/products/pgr',
  '/seed-treatment': '/products/seed-treatment',
  '/mixture': '/products/premix-formulations',
  '/oem-adjuvants': '/products/adjuvants',
  '/biopesticide': '/products/biopesticides',
  '/randdcenter': '/manufacturing/research-development',
  '/quality': '/manufacturing/quality-control',
  '/factory-audit-checklist': '/manufacturing/factory-audit',
  '/oem/agrochemical-oem-africa': '/markets/africa',
  '/oem/agrochemical-oem-southeast-asia': '/markets/southeast-asia',
  '/oem/agrochemical-oem-latin-america': '/markets/latin-america',
  '/quality-testing': '/manufacturing/quality-control',
  '/safety': '/manufacturing/quality-control',
  '/trust': '/manufacturing/quality-control',
  '/quality-control': '/manufacturing/quality-control',
  '/products/glyphosate-41-sl': '/products/herbicides/glyphosate-41-sl',
  '/products/glufosinate-20-sl': '/products/herbicides/glufosinate-20-sl',
  '/products/atrazine-80-wp': '/products/herbicides/atrazine-80-wp',
  '/products/nicosulfuron-4-od': '/products/herbicides/nicosulfuron-4-od',
  '/products/acetochlor-90-ec': '/products/herbicides/acetochlor-90-ec',
  '/products/lambda-cyhalothrin-25-ec': '/products/insecticides/lambda-cyhalothrin-25-ec',
  '/products/chlorpyrifos-40-ec': '/products/insecticides/chlorpyrifos-40-ec',
  '/products/abamectin-18-ec': '/products/insecticides/abamectin-18-ec',
  '/products/imidacloprid-70-ws': '/products/insecticides/imidacloprid-70-ws',
  '/products/thiamethoxam-25-wg': '/products/insecticides/thiamethoxam-25-wg',
  '/products/tebuconazole-25-ec': '/products/fungicides/tebuconazole-25-ec',
  '/products/azoxystrobin-25-sc': '/products/fungicides/azoxystrobin-25-sc',
  '/products/mancozeb-80-wp': '/products/fungicides/mancozeb-80-wp',
  '/products/metalaxyl-35-fs': '/products/seed-treatment/metalaxyl-35-fs',
  '/products/paclobutrazol-15-wp': '/products/pgr/paclobutrazol-15-wp',
}

export const GONE_PATHS: string[] = [
  '/waitlist', '/changelog', '/es/waitlist', '/es/changelog', '/zh/waitlist', '/zh/changelog',
]
