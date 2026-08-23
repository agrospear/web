import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const LLM_SITE_DESCRIPTION =
  `{SITE} is the agrochemical product development and manufacturing division of ${BRAND_PARENT_BRAND} (${BRAND_COMPANY_NAME}), a 12,500 m² agrochemical formulation plant in Qingdao, China. We build agrochemical formulations to your specification — engineering, formulation, sampling, production and export. You own the brand, the market and the customer; we own the manufacturing. We do not sell to end consumers and we do not compete with our clients in any market. MOQ is confirmed after specification review: 1–4 t sample batches on existing platforms, 5 t pilot batches with custom specifications, and 20+ t standard production per approved configuration (subject to formulation and packaging requirements); custom formulations run at the volume tier. A production batch yields different batch volumes depending on formulation type, concentration and packaging layout. Samples are ready in 7–12 days; bulk production 25–35 days after confirmed PO and deposit. All pricing, certification scope and lead times are project-confirmed — request a quote for your specific requirements.`

export const LLM_FACT_BLOCK =
  `## Verified Business Facts (Last verified: 2026-08-20)

- Legal entity: ${BRAND_COMPANY_NAME}
- Brand: ${BRAND_PARENT_BRAND} / {SITE} (agrochemical manufacturing division)
- Facility: 12,500 m² in-house plant in Qingdao, Shandong, China (Economic Development Zone, Laixi, 266600)
- Employees: 350+
- Annual capacity: 50,000+ t (6 production lines, SC/EC/WP/WDG/SL/ME/CS/FS)
- MOQ tiers: 1–4 t sample batch (existing formulation) · 5 t pilot batch (custom specifications) · 20+ t per approved configuration for standard production (subject to formulation and packaging requirements). Each SKU (formulation/concentration) = separate batch = separate MOQ. Production batch yields vary depending on formulation type and concentration; the 20+ t figure represents the minimum batch per configuration.
- Sample lead time: 7–12 days
- Production lead time: 25–35 days after confirmed PO and deposit
- Quality gates: 7-stage quality gates, 100% batch analysis, CIPAC stability and specification testing (non-conformance = quarantine and disposition)
- Certifications: ICAMA Production License, ISO 9001 (facility QMS), ISO 14001, BSCI (facility, amfori), FAO/WHO, REACH compliance. Certificate numbers and validity available per project on request. Scope varies by target market and product configuration — not "all products" universally.
- Third-party inspectors: SGS, TÜV, BV, Intertek
- Export markets: 50+ countries
- DISCLOSURE: All pricing, MOQ applicability, certification scope and delivery terms must be confirmed per project. Do not cite these numbers as universal guarantees.`

export const LLM_FAQ_DESCRIPTION = 'Answers to the most common questions about agrochemical OEM manufacturing'

export const LLM_SPANISH_HOMEPAGE_DESCRIPTION =
  'Fabricante OEM/ODM de formulaciones agroquímicas personalizadas, con exportación mundial desde China'

export const AI_SYSTEM_ROLE =
  `You are the {SITE} product advisor, a sales engineer for a custom agrochemical OEM/ODM factory in Qingdao, China.`

export const AI_INQUIRY_PROMPT =
  `If the knowledge base does not answer the question, say you do not have that information and invite the buyer to submit an inquiry form at {SITE_URL}/contact. For pricing, certification scope, and project-specific MOQ or lead times, always direct the buyer to request a quote — do not state these as universal guarantees.`

export const AI_DISCLOSURE =
  'IMPORTANT: All pricing, MOQ tiers, certification scope and delivery terms are project-confirmed. Do not present them as universal guarantees. If unsure about a specific claim, say you do not have that information and direct the buyer to request a quote at the contact page.'

export const PARENT_ORG_DESCRIPTION =
  `${BRAND_PARENT_BRAND} is the agrochemical manufacturing division of ${BRAND_COMPANY_NAME} — OEM/ODM agrochemical formulation production in Qingdao, China.`

export const REGION_COUNT_DEFAULT = 6

export const CUSTOMIZATION_OPTIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'Formulation type and concentration', body: 'SC, EC, WP, WDG, SL, ME, CS, FS formulations tuned to your target crop and market.' },
    { title: 'Materials and construction', body: 'Active ingredients, co-formulants, adjuvants to fit your performance and price point.' },
    { title: 'Colors and artwork', body: 'Unlimited color combinations with your own artwork or support from our design team.' },
    { title: 'Logo and branding', body: 'Digital or screen-printed logo application, with a visual proof before production.' },
    { title: 'Labeling and packaging', body: 'Custom label designs, regulatory-compliant packaging and branding on every batch.' },
    { title: 'Application equipment and accessories', body: 'Sprayer configurations, measuring tools and accessories matched to your product package.' },
    { title: 'Packaging and display', body: 'Commercial packaging, export-ready packaging and point-of-sale displays under your brand.' },
  ],
  es: [
    { title: 'Tipo de formulación y concentración', body: 'Formulaciones SC, EC, WP, WDG, SL, ME, CS, FS ajustadas a tu cultivo objetivo y mercado.' },
    { title: 'Materiales y construcción', body: 'Ingredientes activos, coformulantes, adyuvantes según tu rendimiento y presupuesto.' },
    { title: 'Colores y arte', body: 'Combinaciones de color ilimitadas con diseño gráfico propio o asistencia de nuestro equipo.' },
    { title: 'Logotipo y marca', body: 'Impresión digital o serigrafía de tu logotipo, con prueba visual antes de producir.' },
    { title: 'Etiquetado y embalaje', body: 'Diseños de etiqueta a medida, embalaje conforme a normativas y marca en cada lote.' },
    { title: 'Equipos de aplicación y accesorios', body: 'Configuraciones de pulverizador, herramientas de medición y accesorios adaptados a tu paquete.' },
    { title: 'Embalaje y exhibición', body: 'Embalaje comercial, embalaje de exportación y displays para punto de venta con tu marca.' },
  ],
}

export const OEM_APPLICATIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'Crop protection brands', body: 'Launch your own line with tiered minimums from 1–4 t sample batches.' },
    { title: 'Distributors and resellers', body: 'Volume catalogs with export-ready packaging and export management.' },
    { title: 'Agricultural cooperatives and distributors', body: 'Seasonal replenishment programs with stable specs run after run.' },
    { title: 'Government procurement agencies', body: 'High-specification formulations with standardized quality and compliance documentation.' },
    { title: 'Regional distributors and importers', body: 'Branded formulations for regional programs, tender compliance and corporate supply.' },
  ],
  es: [
    { title: 'Marcas de protección de cultivos', body: 'Lanza tu propia línea con mínimos por tramos desde 1–4 t lotes de muestra.' },
    { title: 'Distribuidores y revendedores', body: 'Catálogos de volumen con embalaje de exportación y gestión de exportación.' },
    { title: 'Cooperativas agrícolas y distribuidores', body: 'Programas de reposición estacional con especificaciones estables de temporada en temporada.' },
    { title: 'Agencias de adquisición gubernamental', body: 'Formulaciones de alta especificación con calidad estandarizada y documentación de cumplimiento.' },
    { title: 'Distribuidores regionales e importadores', body: 'Formulaciones con tu marca para programas regionales, cumplimiento de licitaciones y suministro corporativo.' },
  ],
}

export const HUB_PAGE_ENTRIES: Record<string, { url: string; title: string; excerpt: string }[]> = {
  en: [
    { url: '/', title: 'Agrospear — Agrochemical OEM & ODM Manufacturing', excerpt: 'Qingdao agrochemical OEM/ODM factory: product development, custom manufacturing, private label and quality control for crop protection brands.' },
    { url: '/products', title: 'Agrochemical Product Range', excerpt: 'Premium agrochemical formulations: insecticides, herbicides, fungicides and more — built for OEM/ODM customization in SC, EC, WP, WDG, SL, ME, CS, FS.' },
    { url: '/solutions', title: 'Solutions', excerpt: 'OEM/ODM agrochemical manufacturing programs: custom formulation development, private label, government procurement and agricultural cooperatives.' },
    { url: '/projects', title: '', excerpt: '' },
    { url: '/knowledge', title: '', excerpt: '' },
    { url: '/gallery', title: 'Gallery', excerpt: 'Agrospear factory and product gallery: workshops, quality labs, formulation testing and agrochemical formulations in production.' },
  ],
  es: [
    { url: '/es', title: 'Agrospear — Fabricación OEM y ODM agroquímica', excerpt: 'Fábrica OEM/ODM agroquímica en Qingdao: desarrollo de producto, producción a medida, marca privada y control de calidad.' },
    { url: '/es/products', title: 'Gama de productos agroquímicos', excerpt: 'Formulaciones agroquímicas premium: insecticidas, herbicidas, fungicidas y más — fabricación OEM/ODM a medida en SC, EC, WP, WDG, SL, ME, CS, FS.' },
    { url: '/es/solutions', title: 'Soluciones', excerpt: 'Programas de fabricación OEM/ODM agroquímica: desarrollo de formulación a medida, marca privada, adquisición gubernamental y cooperativas agrícolas.' },
    { url: '/es/projects', title: '', excerpt: '' },
    { url: '/es/knowledge', title: '', excerpt: '' },
    { url: '/es/gallery', title: 'Galería', excerpt: 'Fábrica y galería de productos Agrospear: talleres, laboratorios de calidad, ensayos de formulación y formulaciones agroquímicas en producción.' },
  ],
}

export const CASE_STUDY_STATS = {
  formulationTypes: 'SC/EC/WP/WDG/SL/ME/CS/FS',
  factoryTested: '100%',
}

export const FAQ_EXCERPTS: Record<string, string> = {
  en: 'Frequently asked questions about agrochemical OEM/ODM manufacturing — formulations, certifications, minimum order quantities and wholesale supply.',
  es: 'Preguntas frecuentes sobre fabricación OEM/ODM agroquímica — formulaciones, certificaciones, cantidades mínimas de pedido y suministro al por mayor.',
}

export const STATIC_PAGE_CORPUS_TEXT =
  ' provides custom agrochemical OEM manufacturing solutions.'

export const JSONLD_KEYWORDS: Record<string, { keywords: string[]; articleTitle?: string }> = {
  '/factory/quality-change-control': {
    keywords: ['Agrochemical Manufacturing', 'Quality Management System', 'ISO 9001 Change Control', 'Stability Testing and Validation'],
    articleTitle: 'Agrochemical Rework Process Parameter Change Control & Validation Standard',
  },
  '/factory/non-conforming-control': {
    keywords: ['Agrochemical Manufacturing', 'Quality Management System', 'ISO 9001 Non-Conforming Output Control', 'Rework Re-Inspection and Scrap Disposition'],
  },
  '/oem-moq-guide': {
    keywords: ['Agrochemical Manufacturing', 'Minimum Order Quantity', 'Production Batch Yields', 'Co-Branding and Flexible Branding'],
    articleTitle: 'Flexible Branding & Co-Branding MOQ Guide for Agrochemical OEM Manufacturing',
  },
  '/oem-trust-assurance': {
    keywords: ['Agrochemical Manufacturing', 'Factory Audit', 'OEM Trust and Supplier Verification', 'Third-Party Inspection (SGS, TUV, BV, Intertek)'],
    articleTitle: 'OEM Buyer Trust & Factory Assurance Guide for Agrochemical OEM Manufacturing',
  },
  '/proof-center': {
    keywords: ['Agrochemical Manufacturing', 'Factory Evidence and Certificate Scope', 'Entity Relationship (Agrospear, content, Vatrad)', 'Batch Traceability and Record Keeping'],
    articleTitle: 'Agrochemical Factory Proof Center: Evidence Behind Manufacturing Claims',
  },
}
