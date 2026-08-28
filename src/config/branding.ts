/**
 * Branding configuration — visual identity, social links, and contact info.
 *
 * Every brand-specific string (logo URL, social profile URLs, contact
 * details, company boilerplate) lives here. Code imports from this module
 * instead of hardcoding any of these values.
 */

import { SITE_DOMAIN } from './site'
import { PRODUCT_BOILERPLATE, PRODUCT_BUILD_LINE, PRODUCT_NOT_ROB } from '@/product/brand-constants'
import { ACTIVE_LOCALES, type ActiveLocale } from './locales'
import { ASSET_KEYS, ASSETS_BUCKET, ASSETS_CDN, assetUrl } from '@/product/assets'

export const BRAND_LOGO_URL = '/apple-touch-icon.png' as const
export const BRAND_FAVICON_ICO = '/favicon.ico' as const
export const BRAND_FAVICON_SVG = '/favicon.svg' as const

// Canonical R2 CDN assets. The registry keeps paths consistent across the site.
export const BRAND_OG_IMAGE = assetUrl(ASSET_KEYS.hero.webp)
export const BRAND_HERO_IMAGE = assetUrl(ASSET_KEYS.hero.avif)
export const BRAND_HERO_IMAGE_768 = assetUrl(ASSET_KEYS.hero.avif768)
export const BRAND_HERO_IMAGE_480 = assetUrl(ASSET_KEYS.hero.avif480)
export const BRAND_HERO_IMAGE_WEBP = BRAND_OG_IMAGE
export const BRAND_ASSETS_CDN = ASSETS_CDN
export const BRAND_ASSETS_BUCKET = ASSETS_BUCKET

export type BrandSocial = {
  facebook: string
  linkedin: string
  youtube: string
}

/**
 * Social profiles by active site language. Keep each locale's profiles
 * explicit: social URLs are external entities and must not be inferred from
 * translated names or generated slugs.
 *
 * Spanish currently falls back to the verified English profiles until a
 * dedicated Spanish profile is supplied.
 */
export const BRAND_SOCIAL_BY_LOCALE: Partial<Record<ActiveLocale, BrandSocial>> & Pick<Record<ActiveLocale, BrandSocial>, 'en'> = {
  en: {
    facebook: 'https://www.facebook.com/agrospear',
    linkedin: 'https://www.linkedin.com/company/agrospear',
    youtube: 'https://www.youtube.com/@agrospear',
  },
  es: {
    facebook: 'https://www.facebook.com/agrospear',
    linkedin: 'https://www.linkedin.com/company/agrospear',
    youtube: 'https://www.youtube.com/@agrospear',
  },
} as const

export const BRAND_SOCIAL = BRAND_SOCIAL_BY_LOCALE.en

export function getBrandSocial(locale: ActiveLocale | string = 'en'): BrandSocial {
  const activeLocale = ACTIVE_LOCALES.includes(locale as ActiveLocale) ? (locale as ActiveLocale) : 'en'
  return BRAND_SOCIAL_BY_LOCALE[activeLocale] ?? BRAND_SOCIAL_BY_LOCALE.en
}

export const BRAND_CONTACT = {
  email: `info@${SITE_DOMAIN}`,
  whatsapp: '+86 13395321653',
  whatsappLink: 'https://wa.me/8613395321653',
  address: 'Economic Development Zone, Laixi, Qingdao, China, 266600',
} as const

export const BRAND_BOILERPLATE = PRODUCT_BOILERPLATE as typeof PRODUCT_BOILERPLATE
export const BRAND_BUILD_LINE = PRODUCT_BUILD_LINE as typeof PRODUCT_BUILD_LINE
export const BRAND_NOT_ROB = PRODUCT_NOT_ROB as typeof PRODUCT_NOT_ROB
export const BRAND_COMPANY_NAME = 'Qingdao Vatrad Group Co., Ltd.' as const
export const BRAND_PARENT_BRAND = 'Agrospear' as const
export const BRAND_PARENT_DOMAIN = 'agrospear.com' as const
export const BRAND_PARENT_URL = `https://${BRAND_PARENT_DOMAIN}` as const
