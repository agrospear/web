import { useTranslation } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { BRAND_ASSETS_CDN } from '@/config/branding'

interface CategoryCard {
  slug: string
  label: string
  sub: string
  image: string
  href: string
  gradFrom: string
  gradTo: string
}

const CATEGORIES_EN: CategoryCard[] = [
  {
    slug: 'herbicide',
    label: 'Herbicides',
    sub: 'Selective & non-selective weed control — glyphosate, glufosinate, 2,4-D, atrazine',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/herbicides-category.webp`,
    href: '/products/herbicide',
    gradFrom: '#fffbeb',
    gradTo: '#fef3c7',
  },
  {
    slug: 'insecticide',
    label: 'Insecticides',
    sub: 'Systemic, contact & translaminar — imidacloprid, abamectin, lambda-cyhalothrin',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/insecticides-category.webp`,
    href: '/products/insecticide',
    gradFrom: '#fef2f2',
    gradTo: '#fee2e2',
  },
  {
    slug: 'fungicide',
    label: 'Fungicides',
    sub: 'Preventive & curative disease control — azoxystrobin, tebuconazole, mancozeb',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/fungicides-category.webp`,
    href: '/products/fungicide',
    gradFrom: '#eff6ff',
    gradTo: '#dbeafe',
  },
  {
    slug: 'pgr',
    label: 'Plant Growth Regulators',
    sub: 'Yield enhancers & growth modifiers — gibberellic acid, paclobutrazol, ethephon',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/pgr-category.webp`,
    href: '/products/pgr',
    gradFrom: '#ecfdf5',
    gradTo: '#d1fae5',
  },
  {
    slug: 'seed-treatment',
    label: 'Seed Treatment',
    sub: 'FS & WS formulations for seed dressing and coating applications',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/pgr-category.webp`,
    href: '/products/seed-treatment',
    gradFrom: '#f5f3ff',
    gradTo: '#ede9fe',
  },
  {
    slug: 'mixture',
    label: 'Premix Formulations',
    sub: 'Multi-active ingredient combinations for broad-spectrum crop protection',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/herbicides-category.webp`,
    href: '/products/mixture',
    gradFrom: '#eef2ff',
    gradTo: '#e0e7ff',
  },
]

const CATEGORIES_ES: CategoryCard[] = [
  {
    slug: 'herbicide',
    label: 'Herbicidas',
    sub: 'Selectivos y no selectivos — glifosato, glufosinato, 2,4-D, atrazina',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/herbicides-category.webp`,
    href: '/products/herbicide',
    gradFrom: '#fffbeb',
    gradTo: '#fef3c7',
  },
  {
    slug: 'insecticide',
    label: 'Insecticidas',
    sub: 'Sist\u00e9micos, contacto y translaminares — imidacloprid, abamectina, lambda-cialotrina',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/insecticides-category.webp`,
    href: '/products/insecticide',
    gradFrom: '#fef2f2',
    gradTo: '#fee2e2',
  },
  {
    slug: 'fungicide',
    label: 'Fungicidas',
    sub: 'Preventivos y curativos — azoxistrobina, tebuconazol, mancozeb',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/fungicides-category.webp`,
    href: '/products/fungicide',
    gradFrom: '#eff6ff',
    gradTo: '#dbeafe',
  },
  {
    slug: 'pgr',
    label: 'Reguladores de crecimiento',
    sub: 'Mejoradores de rendimiento y modificadores — \u00e1cido giber\u00e9lico, paclobutrazol, etef\u00f3n',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/pgr-category.webp`,
    href: '/products/pgr',
    gradFrom: '#ecfdf5',
    gradTo: '#d1fae5',
  },
  {
    slug: 'seed-treatment',
    label: 'Tratamiento de semillas',
    sub: 'Formulaciones FS y WS para desinfecci\u00f3n y recubrimiento de semillas',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/pgr-category.webp`,
    href: '/products/seed-treatment',
    gradFrom: '#f5f3ff',
    gradTo: '#ede9fe',
  },
  {
    slug: 'mixture',
    label: 'Formulaciones premix',
    sub: 'Combinaciones multi-ingrediente activo para protecci\u00f3n amplia de cultivos',
    image: `${BRAND_ASSETS_CDN}/images/sups/products/herbicides-category.webp`,
    href: '/products/mixture',
    gradFrom: '#eef2ff',
    gradTo: '#e0e7ff',
  },
]

export function ProductCategories() {
  const { locale, t } = useTranslation()
  const fl = useLocalizePath()
  const categories = locale === 'es' ? CATEGORIES_ES : CATEGORIES_EN

  return (
    <section className="py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="mx-auto max-w-6xl px-5 md:px-7">
        <p className="kicker text-primary!">{t('agro.productCategories.kicker')}</p>
        <h2 className="mt-3 font-display text-[1.6rem] font-extrabold leading-[1.1] tracking-tight md:text-[2.1rem]" style={{ color: 'var(--foreground)' }}>
          {t('agro.productCategories.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed" style={{ color: 'var(--fg-3)' }}>
          {t('agro.productCategories.sub')}
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={fl(cat.href)}
              className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5" style={{ background: '#fff', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="aspect-[4/3] md:aspect-auto md:w-2/5 overflow-hidden rounded-t-2xl md:rounded-t-none md:rounded-l-2xl flex items-center justify-center p-4" style={{ background: `linear-gradient(to bottom right, ${cat.gradFrom}, ${cat.gradTo})` }}>
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-5 md:w-3/5">
                <h3 className="text-[17px] font-bold" style={{ color: 'var(--foreground)' }}>{cat.label}</h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--fg-3)' }}>{cat.sub}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: 'var(--primary)' }}>
                  {locale === 'es' ? 'Ver productos' : 'View products'} <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
