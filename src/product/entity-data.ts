import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const ENTITY_FACTS: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: 'Brand', value: 'Agrospear — agrochemical manufacturing and export division' },
    { label: 'Legal entity', value: BRAND_COMPANY_NAME },
    { label: 'Brand relationship', value: `Agrospear is the agrochemical division of Agrospear (${BRAND_PARENT_BRAND}), which is operated by ${BRAND_COMPANY_NAME}. Agrospear covers crop protection product formulation and manufacturing; Agrospear focuses exclusively on agrochemical OEM, ODM & private label manufacturing.` },
    { label: 'Product focus', value: 'Agrochemical formulation & manufacturing — OEM, ODM & private label' },
    { label: 'Factories', value: '20,000 m² in-house plant in Qingdao, China' },
    { label: 'Minimum order', value: 'Tiered: 1 ton (existing) · 5 tons (pilot) · 20+ tons (volume) per approved formulation' },
    { label: 'Markets', value: 'Worldwide — Europe, Americas, Asia, Africa, Middle East' },
    { label: 'Business model', value: 'B2B formulation & manufacturing only — no end-consumer sales' },
  ],
  es: [
    { label: 'Marca', value: 'Agrospear — división de fabricación y exportación de agroquímicos' },
    { label: 'Entidad legal', value: BRAND_COMPANY_NAME },
    { label: 'Relación de marca', value: `Agrospear es la división de agroquímicos de Agrospear (${BRAND_PARENT_BRAND}), operada por ${BRAND_COMPANY_NAME}. Agrospear cubre formulación y fabricación de productos de protección de cultivos; Agrospear se enfoca exclusivamente en fabricación OEM, ODM y etiqueta privada de agroquímicos.` },
    { label: 'Enfoque de producto', value: 'Formulación y fabricación de agroquímicos: OEM, ODM y etiqueta privada' },
    { label: 'Fábricas', value: 'Planta propia de 20.000 m² en Qingdao, China' },
    { label: 'Pedido mínimo', value: 'Escalonado: 1 tonelada (existente) · 5 toneladas (piloto) · 20+ toneladas (volumen) por formulación aprobada' },
    { label: 'Mercados', value: 'Mundial: Europa, América, Asia, África, Oriente Medio' },
    { label: 'Modelo de negocio', value: 'Formulación y fabricación B2B — sin venta al consumidor final' },
  ],
}

export const ENTITY_SAME_AS = [
  'https://www.youtube.com/@agrospear',
  'https://www.instagram.com/agrospear_watersports/',
  'https://www.facebook.com/profile.php?id=61572404318679',
  'https://www.linkedin.com/company/agrospear',
  'https://agrospear.en.alibaba.com',
  'https://agrospear.en.made-in-china.com',
] as const

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
  { type: 'WebPage', name: 'Factory & manufacturing capability', path: '/factory' },
  { type: 'WebPage', name: 'Quality, testing & certifications', path: '/quality' },
  { type: 'WebPage', name: 'OEM MOQ & lead time guide', path: '/oem-moq-guide' },
  { type: 'WebPage', name: 'OEM trust & factory assurance', path: '/oem-trust-assurance' },
  { type: 'CollectionPage', name: 'Projects', path: '/projects' },
  { type: 'CollectionPage', name: 'Knowledge Center', path: '/knowledge' },
]

export const PAGE_TITLES: Record<string, string> = {
  '/oem-manufacturing': 'OEM Manufacturing',
  '/odm-development': 'ODM Product Development',
  '/oem-formulation': 'OEM Agrochemical Formulations',
  '/solutions/distributors': 'Solutions: Distributors',
  '/solutions/retail-partners': 'Solutions: Retail Partners',
  '/solutions/crop-protection': 'Solutions: Crop Protection',
  '/b2b-solutions-matrix': 'B2B Solutions Matrix',
  '/oem-moq-guide': 'OEM MOQ & Flexible Branding Guide',
  '/oem-trust-assurance': 'OEM Trust & Factory Assurance',
  '/custom-formulation-moq': 'Custom Formulation MOQ Explained',
  '/agrochemical-certification': 'Agrochemical Certification Guide',
  '/what-is-agrochemical-formulation': 'What is Agrochemical Formulation',
}
