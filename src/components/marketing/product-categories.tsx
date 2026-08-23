import { useTranslation } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'

interface CategoryCard {
  slug: string
  label: string
  sub: string
  image: string
  href: string
  color: string
}

const CATEGORIES_EN: CategoryCard[] = [
  {
    slug: 'herbicide',
    label: 'Herbicides',
    sub: 'Selective & non-selective weed control — glyphosate, glufosinate, 2,4-D, atrazine',
    image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
    href: '/products/herbicide',
    color: 'from-amber-50 to-amber-100',
  },
  {
    slug: 'insecticide',
    label: 'Insecticides',
    sub: 'Systemic, contact & translaminar — imidacloprid, abamectin, lambda-cyhalothrin',
    image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif',
    href: '/products/insecticide',
    color: 'from-red-50 to-red-100',
  },
  {
    slug: 'fungicide',
    label: 'Fungicides',
    sub: 'Preventive & curative disease control — azoxystrobin, tebuconazole, mancozeb',
    image: 'https://assets.agrospear.com/site/products/2026/fungicides/azoxystrobin-250-sc.avif',
    href: '/products/fungicide',
    color: 'from-blue-50 to-blue-100',
  },
  {
    slug: 'pgr',
    label: 'Plant Growth Regulators',
    sub: 'Yield enhancers & growth modifiers — gibberellic acid, paclobutrazol, ethephon',
    image: 'https://assets.agrospear.com/site/products/2026/pgr/pgr-01.avif',
    href: '/products/pgr',
    color: 'from-emerald-50 to-emerald-100',
  },
  {
    slug: 'seed-treatment',
    label: 'Seed Treatment',
    sub: 'FS & WS formulations for seed dressing and coating applications',
    image: 'https://assets.agrospear.com/site/products/2026/seed-treatment/seed-treatment-01.avif',
    href: '/products/seed-treatment',
    color: 'from-violet-50 to-violet-100',
  },
  {
    slug: 'mixture',
    label: 'Premix Formulations',
    sub: 'Multi-active ingredient combinations for broad-spectrum crop protection',
    image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
    href: '/products/mixture',
    color: 'from-indigo-50 to-indigo-100',
  },
]

const CATEGORIES_ES: CategoryCard[] = [
  {
    slug: 'herbicide',
    label: 'Herbicidas',
    sub: 'Selectivos y no selectivos — glifosato, glufosinato, 2,4-D, atrazina',
    image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
    href: '/products/herbicide',
    color: 'from-amber-50 to-amber-100',
  },
  {
    slug: 'insecticide',
    label: 'Insecticidas',
    sub: 'Sist\u00e9micos, contacto y translaminares — imidacloprid, abamectina, lambda-cialotrina',
    image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif',
    href: '/products/insecticide',
    color: 'from-red-50 to-red-100',
  },
  {
    slug: 'fungicide',
    label: 'Fungicidas',
    sub: 'Preventivos y curativos — azoxistrobina, tebuconazol, mancozeb',
    image: 'https://assets.agrospear.com/site/products/2026/fungicides/azoxystrobin-250-sc.avif',
    href: '/products/fungicide',
    color: 'from-blue-50 to-blue-100',
  },
  {
    slug: 'pgr',
    label: 'Reguladores de crecimiento',
    sub: 'Mejoradores de rendimiento y modificadores — \u00e1cido giber\u00e9lico, paclobutrazol, etef\u00f3n',
    image: 'https://assets.agrospear.com/site/products/2026/pgr/pgr-01.avif',
    href: '/products/pgr',
    color: 'from-emerald-50 to-emerald-100',
  },
  {
    slug: 'seed-treatment',
    label: 'Tratamiento de semillas',
    sub: 'Formulaciones FS y WS para desinfecci\u00f3n y recubrimiento de semillas',
    image: 'https://assets.agrospear.com/site/products/2026/seed-treatment/seed-treatment-01.avif',
    href: '/products/seed-treatment',
    color: 'from-violet-50 to-violet-100',
  },
  {
    slug: 'mixture',
    label: 'Formulaciones premix',
    sub: 'Combinaciones multi-ingrediente activo para protecci\u00f3n amplia de cultivos',
    image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
    href: '/products/mixture',
    color: 'from-indigo-50 to-indigo-100',
  },
]

export function ProductCategories() {
  const { locale, t } = useTranslation()
  const fl = useLocalizePath()
  const categories = locale === 'es' ? CATEGORIES_ES : CATEGORIES_EN

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-7">
        <p className="kicker text-primary!">{t('agro.productCategories.kicker')}</p>
        <h2 className="mt-3 font-display text-[1.6rem] font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-[2.1rem]">
          {t('agro.productCategories.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-gray-500">
          {t('agro.productCategories.sub')}
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={fl(cat.href)}
              className="group rounded-2xl border border-gray-100 bg-white p-0 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className={`aspect-[4/3] overflow-hidden rounded-t-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center p-4`}>
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-[15px] font-bold text-gray-900">{cat.label}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-500">{cat.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
