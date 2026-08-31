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
  /**
   * Illustrative gallery imagery (architecture/field shots) added to the site
   * during the 2026 SEO/GEO audit. Sourced as generic, unbranded imagery — NOT
   * photographs of Agrospear's own facility. Used below any factory page block
   * that must not claim these are actual plant photography.
   */
  quality: {
    inspection: `${ASSETS_PREFIX}/quality/quality-inspection.jpg`,
    soilAnalysis: `${ASSETS_PREFIX}/quality/soil-analysis.jpg`,
    labViscosity: `${ASSETS_PREFIX}/quality/lab-viscosity.jpg`,
  },
  field: {
    sprayingSoybean: `${ASSETS_PREFIX}/field/spraying-soybean.jpg`,
    riceBlast: `${ASSETS_PREFIX}/field/rice-blast.jpg`,
    soybeanWeeds: `${ASSETS_PREFIX}/field/soybean-weeds.jpg`,
    insectApplication: `${ASSETS_PREFIX}/field/insect-application.jpg`,
    aphids: `${ASSETS_PREFIX}/field/aphids.jpg`,
    ricePlanthopper: `${ASSETS_PREFIX}/field/rice-planthopper.jpg`,
    tomatoPests: `${ASSETS_PREFIX}/field/tomato-pests.jpg`,
    cucumberDisease: `${ASSETS_PREFIX}/field/cucumber-disease.jpg`,
    cerealRust: `${ASSETS_PREFIX}/field/cereal-rust.jpg`,
    grapevineProtection: `${ASSETS_PREFIX}/field/grapevine-protection.jpg`,
  },
  equipment: {
    mixingTank: `${ASSETS_PREFIX}/equipment/mixing-tank.jpg`,
    cropProtectionProducts: `${ASSETS_PREFIX}/equipment/crop-protection-products.jpg`,
    cropProtectionEquipment: `${ASSETS_PREFIX}/equipment/crop-protection-equipment.jpg`,
  },
  docs: {
    sdsSample: `${ASSETS_PREFIX}/docs/sds-sample.jpg`,
    quotationTemplate: `${ASSETS_PREFIX}/docs/quotation-template.jpg`,
  },
  icons: {
    pipette: `${ASSETS_PREFIX}/icons/lab-icons-pipette.jpg`,
    quality: `${ASSETS_PREFIX}/icons/lab-icons-quality.jpg`,
  },
} as const

export function assetUrl(key: string): string {
  return `${ASSETS_CDN}/${key.replace(/^\/+/, '')}`
}
