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
    { url: '/manufacturing', title: 'Manufacturing', excerpt: 'Agrospear manufacturing hub: 12,500 m² agrochemical factory, OEM/ODM production, quality control and factory evidence for crop protection brands.' },
    { url: '/manufacturing/factory', title: 'Factory & Manufacturing', excerpt: 'Tour the Agrospear factory: 12,500 m² plant with compounding, grinding, filling, labeling, and quality lab for agrochemical OEM/ODM manufacturing.' },
    { url: '/manufacturing/agrochemical-manufacturing', title: 'Agrochemical Manufacturing', excerpt: 'End-to-end agrochemical manufacturing: formulation development, compounding, filling, labeling, QC and export for crop protection brands.' },
    { url: '/solutions', title: 'Solutions', excerpt: 'OEM/ODM agrochemical manufacturing programs: custom formulation development, private label, government procurement and agricultural cooperatives.' },
    { url: '/solutions/agrochemical-oem', title: 'Agrochemical OEM Manufacturing', excerpt: 'Agrochemical OEM manufacturing: custom formulation, private label, contract production for crop protection brands. ISO 9001 factory, ICAMA registered.' },
    { url: '/products/herbicides', title: 'Herbicide Formulations', excerpt: 'Custom herbicide formulations: selective & non-selective, SC/EC/WP/WDG, OEM/ODM from 5-ton pilot, factory direct from Qingdao, China.' },
    { url: '/products/insecticides', title: 'Insecticide Formulations', excerpt: 'Custom insecticide formulations: systemic & contact modes of action, SC/EC/CS/ME, OEM from 5-ton pilot, factory direct from Qingdao.' },
    { url: '/products/fungicides', title: 'Fungicide Formulations', excerpt: 'Custom fungicide formulations: protective & curative, SC/WP/WDG, OEM from 5-ton pilot, factory direct from Qingdao, China.' },
    { url: '/products/pgr', title: 'Plant Growth Regulator Formulations', excerpt: 'Custom PGR formulations: gibberellins, auxins, ethylene regulators, OEM from pilot batches, factory direct from Qingdao, China.' },
    { url: '/products/seed-treatment', title: 'Seed Treatment Formulations', excerpt: 'Custom FS flowable concentrate formulations for seed coating: insecticide, fungicide and combination treatments, OEM from Qingdao.' },
    { url: '/products/premix-formulations', title: 'Pre-Mixture & Combination Formulations', excerpt: 'Custom pre-mixture formulations with dual and triple active ingredients: validated compatibility, SC/EC/WDG types, OEM from Qingdao.' },
    { url: '/products/adjuvants', title: 'Adjuvant & Surfactant Formulations', excerpt: 'Custom adjuvant formulations: non-ionic surfactants, organosilicone spreaders, crop oil concentrates, OEM from Qingdao, China.' },
    { url: '/products/biopesticides', title: 'Biopesticide Formulations', excerpt: 'Custom biopesticide formulations: microbial and biochemical actives, SC/WP/OD types, cold-chain production, OEM from Qingdao.' },
    { url: '/manufacturing/research-development', title: 'R&D Center', excerpt: 'Agrospear R&D center: formulation engineering, pilot plant, quality inspection lab and prototype workshop for custom agrochemical development.' },
    { url: '/manufacturing/quality-control', title: 'Quality Control & Testing', excerpt: '7-stage quality control framework: 100% batch analysis, CIPAC stability testing, third-party inspection and controlled document traceability.' },
    { url: '/manufacturing/factory-audit', title: 'Factory Audit Guide', excerpt: 'Factory audit preparation: audit areas, compliance documentation, third-party inspection support and transparency commitment.' },
    { url: '/manufacturing/pesticide-formulation', title: 'Pesticide Formulation Process', excerpt: 'End-to-end formulation process: compounding, grinding, filling, labeling and quality release for agrochemical OEM production.' },
    { url: '/manufacturing/packaging', title: 'Packaging & Labeling', excerpt: 'Custom agrochemical packaging and labeling: label design, branded retail boxes, DG-compliant export packing, OEM brand integration.' },
    { url: '/markets', title: 'Markets', excerpt: 'Agrospear market pages: agrochemical OEM manufacturing for Africa, Southeast Asia, Latin America and global markets.' },
    { url: '/markets/africa', title: 'Agrochemical Market — Africa', excerpt: 'Agrochemical OEM manufacturing for African markets: vector control, food security, registration support and tender compliance.' },
    { url: '/markets/southeast-asia', title: 'Agrochemical Market — Southeast Asia', excerpt: 'Agrochemical OEM manufacturing for Southeast Asian markets: rice and plantation crop protection, registration and distributor supply.' },
    { url: '/markets/latin-america', title: 'Agrochemical Market — Latin America', excerpt: 'Agrochemical OEM manufacturing for Latin American markets: soybean, corn and fruit crop protection, registration and private label.' },
    { url: '/request-quote', title: 'Request a Quote', excerpt: 'Request a quote for custom agrochemical manufacturing: OEM/ODM formulation, private label, or bulk supply. Response within one business day.' },
    { url: '/projects', title: '', excerpt: '' },
    { url: '/knowledge', title: '', excerpt: '' },
    { url: '/gallery', title: 'Gallery', excerpt: 'Agrospear factory and product gallery: workshops, quality labs, formulation testing and agrochemical formulations in production.' },
  ],
  es: [
    { url: '/es', title: 'Agrospear — Fabricación OEM y ODM agroquímica', excerpt: 'Fábrica OEM/ODM agroquímica en Qingdao: desarrollo de producto, producción a medida, marca privada y control de calidad.' },
    { url: '/es/products', title: 'Gama de productos agroquímicos', excerpt: 'Formulaciones agroquímicas premium: insecticidas, herbicidas, fungicidas y más — fabricación OEM/ODM a medida en SC, EC, WP, WDG, SL, ME, CS, FS.' },
    { url: '/es/manufacturing', title: 'Fabricación', excerpt: 'Hub de fabricación Agrospear: fábrica agroquímica de 12.500 m², producción OEM/ODM, control de calidad y evidencia de fábrica.' },
    { url: '/es/manufacturing/factory', title: 'Fábrica y fabricación', excerpt: 'Visita la fábrica Agrospear: planta de 12.500 m² con mezclado, molienda, llenado, etiquetado y laboratorio de calidad.' },
    { url: '/es/manufacturing/agrochemical-manufacturing', title: 'Fabricación agroquímica', excerpt: 'Fabricación agroquímica integral: desarrollo de formulación, mezclado, llenado, etiquetado, QC y exportación.' },
    { url: '/es/solutions', title: 'Soluciones', excerpt: 'Programas de fabricación OEM/ODM agroquímica: desarrollo de formulación a medida, marca privada, adquisición gubernamental y cooperativas agrícolas.' },
    { url: '/es/solutions/agrochemical-oem', title: 'Fabricación OEM agroquímica', excerpt: 'Fabricación OEM agroquímica: formulación a medida, marca privada, producción por contrato. Fábrica ISO 9001, ICAMA registrada.' },
    { url: '/es/products/herbicides', title: 'Formulaciones de herbicida', excerpt: 'Formulaciones de herbicida personalizadas: selectivos y no selectivos, tipos SC/EC/WP/WDG, OEM/ODM desde piloto de 5 toneladas.' },
    { url: '/es/products/insecticides', title: 'Formulaciones de insecticida', excerpt: 'Formulaciones de insecticida personalizadas: modos sistémicos y de contacto, tipos SC/EC/CS/ME, OEM desde piloto de 5 toneladas.' },
    { url: '/es/products/fungicides', title: 'Formulaciones de fungicida', excerpt: 'Formulaciones de fungicida personalizadas: protectores y curativos, tipos SC/WP/WDG, OEM desde piloto de 5 toneladas.' },
    { url: '/es/products/pgr', title: 'Formulaciones de reguladores de crecimiento', excerpt: 'Formulaciones de PGR personalizadas: giberelinas, auxinas, reguladores de etileno, OEM desde lotes piloto, directo de Qingdao.' },
    { url: '/es/products/seed-treatment', title: 'Formulaciones de tratamiento de semillas', excerpt: 'Formulaciones FS personalizadas para recubrimiento de semillas: insecticidas, fungicidas y combinaciones, OEM desde Qingdao.' },
    { url: '/es/products/premix-formulations', title: 'Formulaciones de pre-mezclas', excerpt: 'Formulaciones de pre-mezcla con ingredientes activos duales y triples: compatibilidad validada, tipos SC/EC/WDG, OEM desde Qingdao.' },
    { url: '/es/products/adjuvants', title: 'Formulaciones de coadyuvantes', excerpt: 'Formulaciones de coadyuvantes personalizadas: tensioactivos no iónicos, expansores organosiliconados, OEM desde Qingdao, China.' },
    { url: '/es/products/biopesticides', title: 'Formulaciones de biopesticidas', excerpt: 'Formulaciones de biopesticidas personalizadas: activos microbianos y bioquímicos, tipos SC/WP/OD, producción en cadena de frío.' },
    { url: '/es/manufacturing/research-development', title: 'Centro de I+D', excerpt: 'Centro de I+D Agrospear: ingeniería de formulación, planta piloto, laboratorio de inspección de calidad y taller de prototipos.' },
    { url: '/es/manufacturing/quality-control', title: 'Control de calidad y ensayos', excerpt: 'Marco de control de calidad de 7 etapas: análisis 100% por lote, pruebas de estabilidad CIPAC, inspección de terceros.' },
    { url: '/es/manufacturing/factory-audit', title: 'Guía de auditoría de fábrica', excerpt: 'Preparación para auditoría de fábrica: áreas de auditoría, documentación de cumplimiento, soporte de inspección de terceros.' },
    { url: '/es/manufacturing/pesticide-formulation', title: 'Proceso de formulación de pesticidas', excerpt: 'Proceso de formulación integral: mezclado, molienda, llenado, etiquetado y liberación de calidad para producción OEM.' },
    { url: '/es/manufacturing/packaging', title: 'Embalaje y etiquetado', excerpt: 'Embalaje y etiquetado de agroquímicos: diseño de etiqueta, embalaje minorista con marca, embalaje de exportación conforme a DG.' },
    { url: '/es/markets', title: 'Mercados', excerpt: 'Páginas de mercado Agrospear: fabricación OEM de agroquímicos para África, Sudeste Asiático, América Latina y mercados globales.' },
    { url: '/es/markets/africa', title: 'Mercado agroquímico — África', excerpt: 'Fabricación OEM de agroquímicos para mercados africanos: control de vectores, seguridad alimentaria, registro y licitaciones.' },
    { url: '/es/markets/southeast-asia', title: 'Mercado agroquímico — Sudeste Asiático', excerpt: 'Fabricación OEM de agroquímicos para mercados del Sudeste Asiático: protección de cultivos de arroz y plantaciones.' },
    { url: '/es/markets/latin-america', title: 'Mercado agroquímico — América Latina', excerpt: 'Fabricación OEM de agroquímicos para mercados latinoamericanos: soja, maíz y frutales, registro y marca privada.' },
    { url: '/es/request-quote', title: 'Solicitar cotización', excerpt: 'Solicita una cotización para fabricación agroquímica a medida: formulación OEM/ODM, marca privada o suministro a granel.' },
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
