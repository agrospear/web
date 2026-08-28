import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND, getBrandSocial } from '@/config/branding'

export const ENTITY_FACTS: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: 'Brand', value: 'Agrospear — agrochemical manufacturing and export division' },
    { label: 'Legal entity', value: BRAND_COMPANY_NAME },
    { label: 'Brand relationship', value: `Agrospear is the agrochemical manufacturing division and buyer-facing brand operated by ${BRAND_COMPANY_NAME} (${BRAND_PARENT_BRAND}). It focuses exclusively on crop protection product formulation, OEM, ODM and private-label manufacturing.` },
    { label: 'Product focus', value: 'Agrochemical formulation & manufacturing — OEM, ODM & private label' },
    { label: 'Factories', value: '20,000 m² in-house plant in Qingdao, China' },
    { label: 'Minimum order', value: 'Tiered: 1 ton (existing) · 5 tons (pilot) · 20+ tons (volume) per approved formulation' },
    { label: 'Markets', value: 'Worldwide — Europe, Americas, Asia, Africa, Middle East' },
    { label: 'Business model', value: 'B2B formulation & manufacturing only — no end-consumer sales' },
  ],
  es: [
    { label: 'Marca', value: 'Agrospear — división de fabricación y exportación de agroquímicos' },
    { label: 'Entidad legal', value: BRAND_COMPANY_NAME },
    { label: 'Relación de marca', value: `Agrospear es la división de fabricación agroquímica y la marca orientada al comprador operada por ${BRAND_COMPANY_NAME} (${BRAND_PARENT_BRAND}). Se enfoca exclusivamente en formulación, fabricación OEM, ODM y marca privada de productos de protección de cultivos.` },
    { label: 'Enfoque de producto', value: 'Formulación y fabricación de agroquímicos: OEM, ODM y etiqueta privada' },
    { label: 'Fábricas', value: 'Planta propia de 20.000 m² en Qingdao, China' },
    { label: 'Pedido mínimo', value: 'Escalonado: 1 tonelada (existente) · 5 toneladas (piloto) · 20+ toneladas (volumen) por formulación aprobada' },
    { label: 'Mercados', value: 'Mundial: Europa, América, Asia, África, Oriente Medio' },
    { label: 'Modelo de negocio', value: 'Formulación y fabricación B2B — sin venta al consumidor final' },
  ],
}

export function getEntitySameAs(locale: string = 'en'): readonly string[] {
  const social = getBrandSocial(locale)
  return [social.facebook, social.linkedin, social.youtube] as const
}

export const ENTITY_SERVICES = ['custom-formulation', 'private-label', 'bulk-supply', 'registration-support']

export const ENTITY_KNOWS_ABOUT = [
  'agrochemical manufacturing',
  'custom crop protection formulations',
  'pesticide product development',
  'formulation engineering',
  'private label agrochemicals',
  'OEM manufacturing',
  'herbicide production',
  'insecticide production',
  'fungicide production',
  'pesticide registration support',
  'MOQ tiers',
  'production lead time',
  'quality control',
  'factory audit',
]

export const ENTITY_SUBJECT_OF = [
  { type: 'WebPage', name: 'Company entity', path: '/about/agrospear-entity' },
  { type: 'WebPage', name: 'Proof Center — factory evidence', path: '/proof-center' },
  { type: 'WebPage', name: 'Factory & manufacturing capability', path: '/manufacturing/factory' },
  { type: 'WebPage', name: 'Quality, testing & certifications', path: '/manufacturing/quality-control' },
  { type: 'WebPage', name: 'OEM MOQ & lead time guide', path: '/oem-moq-guide' },
  { type: 'WebPage', name: 'OEM trust & factory assurance', path: '/oem-trust-assurance' },
  { type: 'WebPage', name: 'Manufacturing hub', path: '/manufacturing' },
  { type: 'WebPage', name: 'Agrochemical manufacturing', path: '/manufacturing/agrochemical-manufacturing' },
  { type: 'WebPage', name: 'R&D Center', path: '/manufacturing/research-development' },
  { type: 'WebPage', name: 'Quality control', path: '/manufacturing/quality-control' },
  { type: 'WebPage', name: 'QC/QA document library', path: '/manufacturing/qcqa-documents' },
  { type: 'WebPage', name: 'Factory audit guide', path: '/manufacturing/factory-audit' },
  { type: 'WebPage', name: 'Pesticide formulation process', path: '/manufacturing/pesticide-formulation' },
  { type: 'WebPage', name: 'Packaging & labeling', path: '/manufacturing/packaging' },
  { type: 'WebPage', name: 'Agrochemical OEM', path: '/solutions/agrochemical-oem' },
  { type: 'WebPage', name: 'Private label pesticides', path: '/solutions/private-label-pesticides' },
  { type: 'WebPage', name: 'Custom formulation', path: '/solutions/custom-formulation' },
  { type: 'WebPage', name: 'Government tender', path: '/solutions/government-tender' },
  { type: 'WebPage', name: 'Markets hub', path: '/markets' },
  { type: 'WebPage', name: 'Africa market', path: '/markets/africa' },
  { type: 'WebPage', name: 'Southeast Asia market', path: '/markets/southeast-asia' },
  { type: 'WebPage', name: 'Latin America market', path: '/markets/latin-america' },
  { type: 'CollectionPage', name: 'Projects', path: '/projects' },
  { type: 'CollectionPage', name: 'Knowledge Center', path: '/knowledge' },
]

export const PAGE_TITLES: Record<string, string> = {
  '/oem-manufacturing': 'Agrochemical OEM Manufacturer China',
  '/odm-development': 'Agrochemical ODM Manufacturer China',
  '/solutions/distributors': 'Agrochemical Distribution Partner Program',
  '/solutions/co-branding': 'Co-Branding Agrochemical Solutions',
  '/solutions/distributor-partners': 'Agrochemical Distributor Partners China',
  '/solutions/agrochemical-oem': 'Agrochemical OEM Manufacturer China — Private Label & Contract Production',
  '/solutions/private-label-pesticides': 'Private Label Pesticide Manufacturer China',
  '/solutions/custom-formulation': 'Custom Agrochemical Formulation Manufacturer China',
  '/solutions/government-tender': 'Government & Institutional Agrochemical Procurement China',
  '/crop-protection-solutions': 'Crop Protection Manufacturer China',
  '/b2b-solutions-matrix': 'B2B Agrochemical Solutions Matrix',
  '/oem-moq-guide': 'Agrochemical MOQ Guide — Flexible Branding & Minimum Orders',
  '/oem-trust-assurance': 'OEM Trust & Factory Assurance — Verify Before You Order',
  '/agrochemical-certification-guide': 'Agrochemical Certification Guide — ICAMA, FAO/WHO & Compliance',
  '/what-is-agrochemical-oem': 'What is Agrochemical OEM Manufacturing',
  '/manufacturing': 'Agrochemical Manufacturer China — OEM & ODM Factory',
  '/manufacturing/agrochemical-manufacturing': 'Agrochemical Manufacturing China — OEM/ODM Production',
  '/manufacturing/factory': 'Agrochemical Factory China — Pesticide Manufacturing Facility',
  '/products/herbicides': 'Herbicide Manufacturer China',
  '/products/insecticides': 'Insecticide Manufacturer China',
  '/products/fungicides': 'Fungicide Manufacturer China',
  '/products/pgr': 'PGR Manufacturer China — Plant Growth Regulator OEM',
  '/products/seed-treatment': 'Seed Treatment Manufacturer China — FS OEM',
  '/products/premix-formulations': 'Premix Formulation Manufacturer China — OEM Combination Pesticides',
  '/products/adjuvants': 'Adjuvant Manufacturer China — OEM Surfactant Formulations',
  '/products/biopesticides': 'Biopesticide Manufacturer China — OEM Biological Crop Protection',
  '/manufacturing/research-development': 'R&D Center — Formulation Development & Innovation',
  '/manufacturing/quality-control': 'Quality Control & Testing — 7-Stage QC Framework',
  '/manufacturing/factory-audit': 'Factory Audit Guide — Verify Your Agrochemical Manufacturer',
  '/manufacturing/pesticide-formulation': 'Pesticide Formulation Process — From AI to Finished Product',
  '/manufacturing/packaging': 'Agrochemical Packaging & Labeling — OEM Brand Integration',
  '/markets': 'Agrochemical Markets — Regional OEM Solutions',
  '/markets/africa': 'Agrochemical Supplier Africa — OEM Crop Protection',
  '/markets/southeast-asia': 'Agrochemical Supplier Southeast Asia — OEM Crop Protection',
  '/markets/latin-america': 'Agrochemical Supplier Latin America — OEM Crop Protection',
  '/request-quote': 'Request a Quote — Agrochemical OEM/ODM Manufacturing',
}
