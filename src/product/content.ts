import type { Locale } from '@/features/i18n/locale'
import { FACTS, MOQ_SHORT, COLLABORATION_MODES } from './facts'

/**
 * Marketing content for the Agrospear site, localized en/es.
 *
 * Content (headlines, body copy, products, FAQ, landings) lives here rather
 * than in the i18n dictionaries, which stay reserved for structural UI strings
 * (nav, buttons, form labels). Every entry is bilingual so both locale routes
 * render the same structure.
 */

export interface Localized<T> extends Record<string, T> {
  en: T
  es: T
}

export function pick<T>(d: Localized<T>, locale: Locale): T {
  if (locale in d) return d[locale as keyof Localized<T>]
  return d.en
}

/* ─────────────────────────── home: hero ─────────────────────────── */

export interface HeroContent {
  kicker: string
  titlePre: string
  titleAccent: string
  titlePost: string
  sub: string
  ctaPrimary: string
  ctaSecondary: string
  ctaTertiary: string
  ctaQuartiary: string
  ctaMicro: string
  stats: { value: string; label: string }[]
  mockupLabel: string
  mockupBrand: string
  mockupHint: string
  heroNote: string
  float1: { value: string; label: string }
  float2: { value: string; label: string }
}

export const hero: Localized<HeroContent> = {
  en: {
    kicker: 'Designated Agrochemical Manufacturer · Qingdao, China · 8 Formulation Lines · From 1-ton Samples to Container Loads',
    titlePre: 'Custom Agrochemical Manufacturing for',
    titleAccent: 'Brands, Distributors & Importers',
    titlePost: '',
    sub: 'From raw active ingredient to export-ready crop protection product — all under one roof. Eight formulation types (SC, EC, WP, WDG, SL, ME, CS, FS), 200+ workers, two daily shifts, and 50,000+ tons annual capacity. OEM, ODM and private-label programs for brands, distributors and importers in 60+ countries.',
    ctaPrimary: 'Start Your Agrochemical Project',
    ctaSecondary: 'View Factory, MOQ & Quality Evidence',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: `Reply within ${FACTS.ndaWindow} · NDA available before file exchange · MOQ confirmed after specification review`,
    stats: [
      { value: FACTS.warehouseM2, label: 'In-house factory — Qingdao, China' },
      { value: FACTS.annualCapacity, label: 'Annual production capacity' },
      { value: FACTS.exportCountries, label: 'Export countries served' },
      { value: FACTS.ndaWindow, label: 'NDA response window' },
    ],
    mockupLabel: 'Signature Formulation',
    mockupBrand: 'Glyphosate 480g/L SL',
    mockupHint: 'Your formulation · your concentration · your label',
    heroNote: FACTS.moqNote,
    float1: { value: 'Sample quantities', label: 'Formulation approval (before volume commitment)' },
    float2: { value: FACTS.leadTime, label: 'Production lead time (after PO)' },
  },
  es: {
    kicker: 'Fabricante de agroquímicos designado · Qingdao, China · 8 líneas de formulación · De muestras de 1 tonelada a contenedores completos',
    titlePre: 'Fabricación de agroquímicos a medida para',
    titleAccent: 'marcas, distribuidores e importadores',
    titlePost: '',
    sub: 'Del ingrediente activo en bruto al producto de protección de cultivos listo para exportar — todo bajo un mismo techo. Ocho tipos de formulación (SC, EC, WP, WDG, SL, ME, CS, FS), 200+ operarios, dos turnos diarios y 50.000+ toneladas de capacidad anual. Programas OEM, ODM y marca propia para marcas, distribuidores e importadores en 60+ países.',
    ctaPrimary: 'Inicia tu proyecto de agroquímicos',
    ctaSecondary: 'Ver fábrica, MOQ y evidencia de calidad',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: `Respuesta en ${FACTS.ndaWindow} · NDA disponible antes del intercambio de archivos · MOQ confirmado tras revisar la especificación`,
    stats: [
      { value: FACTS.warehouseM2, label: 'Fábrica propia — Qingdao, China' },
      { value: FACTS.annualCapacity, label: 'Capacidad de producción anual' },
      { value: FACTS.exportCountries, label: 'Países de exportación' },
      { value: FACTS.ndaWindow, label: 'Plazo de respuesta NDA' },
    ],
    mockupLabel: 'Formulación insignia',
    mockupBrand: 'Glifosato 480g/L SL',
    mockupHint: 'Tu formulación · tu concentración · tu etiqueta',
    heroNote: FACTS.moqNoteEs,
    float1: { value: 'Cantidades de muestra', label: 'Aprobación de formulación (antes de compromiso de volumen)' },
    float2: { value: FACTS.leadTime, label: 'Plazo de producción (tras PO)' },
  },
}

/* ─────────────────────────── home: why us (Agrospear advantage) ─────────────────────────── */

export interface WhyBullet {
  title: string
  body: string
}

export interface WhyContent {
  kicker: string
  title: string
  sub: string
  image: string
  imageCaption: string
  bullets: WhyBullet[]
}

export const why: Localized<WhyContent> = {
  en: {
    kicker: 'The Manufacturing Brand',
    title: 'Powered by Agrospear',
    sub: `Agrospear is the agrochemical formulation and manufacturing division of Qingdao Vatrad Group Co., Ltd. — a designated pesticide manufacturer operating since 2012. Our ${FACTS.warehouseM2} plant in Qingdao houses dedicated workshops for liquid formulations (SC, EC, SL, ME, CS, FS) and solid formulations (WP, WDG), with 200+ workers running two daily shifts across herbicide, insecticide, fungicide and PGR production lines. 25+ engineers spanning R&D, formulation chemistry, analytical lab and production engineering average 7+ years of agrochemical manufacturing experience and hold multiple formulation technology patents.`,
    image: 'https://assets.agrospear.com/images/factory/agrospear-production-department.webp',
    imageCaption: 'Agrospear manufacturing facility, Qingdao, China',
    bullets: [
      {
        title: `${FACTS.warehouseM2} integrated plant`,
        body: 'From raw active ingredient sourcing and compounding to finished product filling — all under one roof in Qingdao, with dedicated liquid and solid formulation workshops.',
      },
      {
        title: 'Producing since 2012',
        body: 'Over a decade of continuous agrochemical production across herbicides, insecticides, fungicides and PGRs, with two daily shifts and 50,000+ tons annual output.',
      },
      {
        title: '25+ engineers',
        body: 'R&D, formulation chemistry, analytical lab and production engineering — with multiple formulation technology patents and an average of 7+ years in agrochemical manufacturing.',
      },
      {
        title: `${FACTS.exportCountries}+ export markets`,
        body: 'Active registrations and shipments across Asia, Africa, the Middle East, Latin America and the EU — with country-specific documentation and registration support.',
      },
    ],
  },
  es: {
    kicker: 'La marca de fabricación',
    title: 'Con el respaldo de Agrospear',
    sub: `Agrospear es la división de formulación y fabricación de agroquímicos de Qingdao Vatrad Group Co., Ltd. — fabricante de pesticidas designado en activo desde 2012. Nuestra planta de ${FACTS.warehouseM2} en Qingdao alberga talleres dedicados para formulaciones líquidas (SC, EC, SL, ME, CS, FS) y formulaciones sólidas (WP, WDG), con 200+ operarios en dos turnos diarios en líneas de herbicidas, insecticidas, fungicidas y PGR. Más de 25 ingenieros entre I+D, química de formulación, laboratorio analítico e ingeniería de producción, con una media de más de 7 años en fabricación de agroquímicos y múltiples patentes de tecnología de formulación.`,
    image: 'https://assets.agrospear.com/images/factory/agrospear-production-department.webp',
    imageCaption: 'Instalaciones de fabricación de Agrospear, Qingdao, China',
    bullets: [
      {
        title: `Planta integrada de ${FACTS.warehouseM2}`,
        body: 'Desde el abastecimiento y dosificación de ingrediente activo en bruto hasta el llenado del producto terminado — todo bajo un mismo techo en Qingdao, con talleres dedicados para formulaciones líquidas y sólidas.',
      },
      {
        title: 'Produciendo desde 2012',
        body: 'Más de una década de producción continua de agroquímicos entre herbicidas, insecticidas, fungicidas y PGR, con dos turnos diarios y 50.000+ toneladas de producción anual.',
      },
      {
        title: '+25 ingenieros',
        body: 'I+D, química de formulación, laboratorio analítico e ingeniería de producción — con múltiples patentes de tecnología de formulación y una media de 7+ años en fabricación de agroquímicos.',
      },
      {
        title: `${FACTS.exportCountries}+ mercados de exportación`,
        body: 'Registros y envíos activos en Asia, África, Oriente Medio, América Latina y la UE — con documentación específica por país y soporte de registro.',
      },
    ],
  },
}

/* ─────────────────────────── capability strip ─────────────────────────── */

export const strip: Localized<string[]> = {
  en: ['OEM & ODM', 'Private Label', 'Sample Service', 'Formulation & R&D', 'QC on every batch', 'Worldwide export'],
  es: ['OEM & ODM', 'Marca privada', 'Servicio de muestras', 'Formulación e I+D', 'QC en cada lote', 'Exportación mundial'],
}

/* ─────────────────────────── home: trust bar ─────────────────────────── */

export interface TrustStat {
  value: string
  label: string
}

export interface TrustBarContent {
  stats: TrustStat[]
}

export const trustBar: Localized<TrustBarContent> = {
  en: {
    stats: [
      { value: MOQ_SHORT.existingPlatform, label: 'for volume production; pilot runs from 5 tons' },
      { value: FACTS.sampleTime, label: 'samples to your lab after formulation confirmation' },
      { value: FACTS.leadTime, label: 'batch production after confirmed PO and deposit' },
      { value: FACTS.annualCapacity, label: 'annual in-house capacity at the Qingdao plant' },
      { value: FACTS.warehouseM2, label: 'owned plant, from raw AI to finished product' },
      { value: FACTS.workers, label: 'factory workers and engineers on site' },
      { value: 'ISO 9001 · ISO 14001 · GMP · FAO/WHO · REACH', label: 'certified; compliant formulations for global markets' },
      { value: FACTS.exportCountries, label: 'export markets across Asia, Africa, LATAM and the EU' },
      { value: FACTS.qualityTest, label: '100% purity and residue testing on every batch before release' },
      { value: FACTS.productionLines, label: 'producing SC, EC, WP, WDG, SL, ME, CS and FS formulations' },
    ],
  },
  es: {
    stats: [
      { value: MOQ_SHORT.existingPlatform, label: 'para volumen; piloto desde 5 toneladas' },
      { value: FACTS.sampleTime, label: 'muestras en tu laboratorio tras confirmar la formulación' },
      { value: FACTS.leadTime, label: 'producción en serie tras PO y depósito confirmados' },
      { value: FACTS.annualCapacity, label: 'capacidad anual interna en la planta de Qingdao' },
      { value: FACTS.warehouseM2, label: 'planta propia, del IA en bruto al producto terminado' },
      { value: FACTS.workers, label: 'operarios e ingenieros de planta' },
      { value: 'ISO 9001 · ISO 14001 · GMP · FAO/WHO · REACH', label: 'certificada; formulaciones conformes para mercados globales' },
      { value: FACTS.exportCountries, label: 'mercados de exportación en Asia, África, LATAM y la UE' },
      { value: FACTS.qualityTest, label: '100% análisis de pureza y residuos en cada lote antes de su liberación' },
      { value: FACTS.productionLines, label: 'producción de formulaciones SC, EC, WP, WDG, SL, ME, CS y FS' },
    ],
  },
}

/* ─────────────────────────── home: Manufacturing Scope (OEM/ODM/Private Label/Volume) ─────────────────────────── */

export interface ScopeCard {
  title: string
  body: string
}

export interface SolveContent {
  kicker: string
  title: string
  sub: string
  cta: string
  items: ScopeCard[]
}

export const solve: Localized<SolveContent> = {
  en: {
    kicker: 'Manufacturing Scope',
    title: 'Four Ways Brands and Buyers Partner With Our Plant',
    sub: 'OEM, ODM, private label or bulk supply — every route runs through the same in-house engineering, QC system and export documentation team, with dedicated formulation workshops for each product category.',
    cta: 'Request a Manufacturing Quote',
    items: [
      {
        title: 'OEM — Build to Your Specification',
        body: COLLABORATION_MODES.oem.full,
      },
      {
        title: 'ODM — Develop the Formulation with Our R&D Team',
        body: COLLABORATION_MODES.odm.full,
      },
      {
        title: 'Private Label — Your Brand on a Proven Formulation',
        body: COLLABORATION_MODES.privateLabel.full,
      },
      {
        title: 'Bulk Supply — Repeat Orders & Government Procurement',
        body: 'High-volume agrochemical supply for distributors, importers and government procurement agencies — including national subsidy programs in West and East Africa, seasonal tender orders in South and Southeast Asia, and repeat-container contracts for established brands. Locked specifications, full batch traceability (ERP-linked from raw material lot to shipping container), consistent quality across reorders, and priority scheduling for seasonal demand windows.',
      },
    ],
  },
  es: {
    kicker: 'Alcance de fabricación',
    title: 'Cuatro formas de colaborar con nuestra planta',
    sub: 'OEM, ODM, marca privada o suministro por volumen — cada vía pasa por el mismo equipo de ingeniería, sistema de QC y documentación de exportación, con talleres de formulación dedicados para cada categoría de producto.',
    cta: 'Solicita un presupuesto de fabricación',
    items: [
      {
        title: 'OEM — Fabrica según tu especificación',
        body: COLLABORATION_MODES.oem.full,
      },
      {
        title: 'ODM — Desarrolla la formulación con nuestro equipo de I+D',
        body: COLLABORATION_MODES.odm.full,
      },
      {
        title: 'Marca privada — Tu marca en una formulación probada',
        body: COLLABORATION_MODES.privateLabel.full,
      },
      {
        title: 'Suministro por volumen — pedidos repetidos y compras gubernamentales',
        body: 'Suministro de agroquímicos de alto volumen para distribuidores, importadores y agencias de compras gubernamentales — incluyendo programas de subsidios nacionales en África Occidental y Oriental, pedidos de licitación estacional en el Sur y Sudeste Asiático, y contratos de contenedor repetido para marcas consolidadas. Especificaciones fijadas, trazabilidad completa por lote (vinculada por ERP desde la materia prima al contenedor de embarque), calidad homogénea entre reposiciones y programación prioritaria para ventanas de demanda estacional.',
      },
    ],
  },
}

/* ─────────────────────────── home: Inside the Plant (manufacturing capability) ─────────────────────────── */

export interface CapabilityBlock {
  name: string
  body: string
}

export interface CapabilityContent {
  kicker: string
  title: string
  sub: string
  items: CapabilityBlock[]
}

export const capability: Localized<CapabilityContent> = {
  en: {
    kicker: 'Manufacturing Capability',
    title: 'Inside the Plant',
    sub: 'Every process below runs in-house. Nothing critical is subcontracted — from reactor to shipping container.',
    items: [
      {
        name: 'Formulation & Compounding',
        body: 'Computer-controlled dosing reactors with ±0.1% accuracy for active ingredients and adjuvants. Dedicated compounding vessels for each formulation type — SC, EC, WP, WDG, SL, ME, CS and FS — with recipe-managed batching and inline concentration monitoring throughout the compounding cycle.',
      },
      {
        name: 'Mixing & Milling',
        body: 'High-shear rotor-stator mixers and bead mills for suspension concentrates (target D50 < 5 μm), homogenization tunnels for emulsifiable concentrates and micro-emulsions, and air-classified jet mills for wettable powders and WDG pre-mix — ensuring uniform particle size distribution and long-term physical stability.',
      },
      {
        name: 'Granulation & Drying',
        body: 'Fluid-bed granulators and pan granulators for WDG production with controlled granule size (0.5–2.0 mm), integrated drying tunnels with moisture monitoring below 2%, and dust-collection systems for operator safety. Spray-drying capability for specialized soluble powder formulations.',
      },
      {
        name: 'Filling & Packaging',
        body: 'Automated rotary filling lines for bottles (100 mL–5 L), gravity and piston fillers for jugs, drums and IBCs (20 L–1000 L), with inline weight verification (±0.5% tolerance), tamper-evident sealing and leak-testing on every container before it leaves the line.',
      },
      {
        name: 'Labeling & Coding',
        body: 'Pressure-sensitive, shrink-sleeve and wrap-around labeling stations with thermal-transfer batch coding (lot number, production date, expiry date, registration code) — fully compliant with GHS, target-market labeling regulations and ICAMA registration requirements.',
      },
      {
        name: 'Quality Control Lab',
        body: 'HPLC purity analysis and GC residue testing on incoming raw materials and finished batches, accelerated and long-term stability chambers (54 °C / 14 days and 25 °C / 24 months per FAO/WHO), laser diffraction particle sizing, rheometry for viscosity and pH at every production stage — with out-of-spec auto-reject and root-cause investigation before rework.',
      },
      {
        name: 'Export Packing & Documentation',
        body: 'UN-rated packaging for Class 6.1 and Class 9 hazardous goods, heat-treated palletized loads, and export-grade packing per destination. MSDS, certificate of analysis, phytosanitary certificates and ICAMA export licenses prepared in-house — covering Asia, Africa, the Middle East, LATAM and EU requirements.',
      },
    ],
  },
  es: {
    kicker: 'Capacidad de fabricación',
    title: 'Dentro de la planta',
    sub: 'Todos los procesos siguientes se realizan en casa. Nada crítico se subcontrata — del reactor al contenedor de embarque.',
    items: [
      {
        name: 'Formulación y dosificación',
        body: 'Reactores de dosificación controlados por ordenador con precisión de ±0,1% para ingredientes activos y coadyuvantes. Vasijas de compounding dedicadas para cada tipo de formulación — SC, EC, WP, WDG, SL, ME, CS y FS — con lotes gestionados por receta y monitorización de concentración en línea durante todo el ciclo.',
      },
      {
        name: 'Mezcla y molienda',
        body: 'Mezcladores rotor-estator de alto cizallamiento y molinos de perlas para concentrados en suspensión (D50 objetivo < 5 μm), túneles de homogeneización para concentrados emulsionables y microemulsiones, y molinos de chorro con clasificación neumática para polvos mojables y pre-mezcla WDG — asegurando distribución uniforme del tamaño de partícula y estabilidad física a largo plazo.',
      },
      {
        name: 'Granulación y secado',
        body: 'Granuladores de lecho fluido y de plato para producción de WDG con tamaño de gránulo controlado (0,5–2,0 mm), túneles de secado integrados con monitorización de humedad por debajo del 2%, y sistemas de captación de polvo para seguridad del operario. Capacidad de secado por atomización para formulaciones especializadas de polvo soluble.',
      },
      {
        name: 'Envasado y embalaje',
        body: 'Líneas rotativas de llenado automatizado para botellas (100 mL–5 L), llenadores de gravedad y pistón para garrafas, tambores e IBC (20 L–1000 L), con verificación de peso en línea (tolerancia ±0,5%), sellado a prueba de manipulaciones y prueba de estanqueidad en cada envase antes de salir de la línea.',
      },
      {
        name: 'Etiquetado y codificación',
        body: 'Estaciones de etiquetado autoadhesivo, manga termorretráctil y envolvente con codificación térmica por transferencia (número de lote, fecha de producción, fecha de caducidad, código de registro) — totalmente conformes con GHS, normativa de etiquetado del mercado de destino y requisitos de registro ICAMA.',
      },
      {
        name: 'Laboratorio de control de calidad',
        body: 'Análisis de pureza por HPLC y ensayo de residuos por GC en materias primas entrantes y lotes terminados, cámaras de estabilidad acelerada y a largo plazo (54 °C / 14 días y 25 °C / 24 meses según FAO/WHO), tamaño de partícula por difracción láser, reometría de viscosidad y pH en cada etapa — con rechazo automático fuera de especificación e investigación de causa raíz antes de reprocesar.',
      },
      {
        name: 'Embalaje y documentación de exportación',
        body: 'Embalaje clasificado UN para mercancías peligrosas Clase 6.1 y Clase 9, cargas paletizadas con tratamiento térmico y embalado para exportación según destino. FDS, certificado de análisis, certificados fitosanitarios y licencias de exportación ICAMA preparados en casa — cubriendo los requisitos de Asia, África, Oriente Medio, LATAM y la UE.',
      },
    ],
  },
}

/* ─────────────────────────── home: quality control (How Every Batch Is Verified) ─────────────────────────── */

export interface QualityStep {
  title: string
  body: string
}

export interface QualityContent {
  kicker: string
  title: string
  sub: string
  steps: QualityStep[]
}

export const quality: Localized<QualityContent> = {
  en: {
    kicker: 'Quality Control',
    title: 'How Every Batch Is Verified',
    sub: 'Quality is a documented process, not a promise. Here is what happens to your order before it ships.',
    steps: [
      {
        title: 'Incoming Raw Material QC',
        body: 'Active ingredients, solvents, adjuvants and packaging materials are quarantined until QC sign-off. Raw AI undergoes HPLC purity and impurity profiling before any batch enters the line.',
      },
      {
        title: 'Formulation Verification',
        body: 'QC checkpoints at every production stage, with in-process samples pulled and tested for concentration, pH, viscosity and particle size against the batch standard.',
      },
      {
        title: 'Stability Testing',
        body: 'Accelerated stability testing (54 °C / 14 days) on every batch, with long-term stability data maintained per FAO/WHO guidelines. Any batch failing stability criteria is rejected.',
      },
      {
        title: 'Purity & Residue Testing',
        body: 'HPLC purity analysis and GC residue testing on every batch, with out-of-spec results triggering automatic rejection and root-cause investigation before the batch can be reprocessed.',
      },
      {
        title: 'Final Inspection',
        body: '100-point checklist per batch, plus weight, labeling and packaging verification against the approved specification and reference sample.',
      },
      {
        title: 'Batch Traceability',
        body: 'Every material lot receives a unique ERP number. Each batch\'s bill of materials links back to the original supplier lot. Records retained 5 years, per GMP and FAO/WHO requirements.',
      },
    ],
  },
  es: {
    kicker: 'Control de calidad',
    title: 'Cómo se verifica cada lote',
    sub: 'La calidad es un proceso documentado, no una promesa. Esto es lo que le ocurre a tu pedido antes de enviarlo.',
    steps: [
      {
        title: 'Control de calidad de materias primas',
        body: 'Los ingredientes activos, disolventes, coadyuvantes y materiales de embalaje quedan en cuarentena hasta la validación. El IA en bruto se analiza por HPLC en pureza e impurezas antes de entrar en la línea.',
      },
      {
        title: 'Verificación de formulación',
        body: 'Puntos de control en cada etapa de producción, con muestras en proceso analizadas en concentración, pH, viscosidad y tamaño de partículas contra el estándar del lote.',
      },
      {
        title: 'Ensayo de estabilidad',
        body: 'Ensayo de estabilidad acelerada (54 °C / 14 días) en cada lote, con datos de estabilidad a largo plazo mantenidos según directrices FAO/WHO. Todo lote que no supere los criterios se rechaza.',
      },
      {
        title: 'Ensayo de pureza y residuos',
        body: 'Análisis de pureza por HPLC y ensayo de residuos por GC en cada lote, con rechazo automático e investigación de causa raíz antes de reprocesar cualquier lote fuera de especificación.',
      },
      {
        title: 'Inspección final',
        body: 'Checklist de 100 puntos por lote, además de verificación de peso, etiquetado y embalaje contra la especificación aprobada y la muestra de referencia.',
      },
      {
        title: 'Trazabilidad de lote',
        body: 'Cada lote de material recibe un número ERP único. La lista de materiales de cada lote enlaza con el lote del proveedor original. Registros conservados 5 años, según GMP y FAO/WHO.',
      },
    ],
  },
}

/* ─────────────────────────── home: commercial terms ─────────────────────────── */

export interface CommercialCell {
  label: string
  lines: string[]
}

export interface MoqTier {
  stage: string
  quantity: string
  purpose: string
  note: string
}

export interface CommercialContent {
  kicker: string
  title: string
  sub: string
  cells: CommercialCell[]
  moqTiers: MoqTier[]
  certs: string
}

export const commercial: Localized<CommercialContent> = {
  en: {
    kicker: 'Commercial Terms',
    title: 'Commercial Terms, Stated Upfront',
    sub: 'Standard MOQ, sampling, production and delivery terms are listed below. Projects involving new formulations, custom registration, compliance testing or custom packaging are quoted separately.',
    cells: [
      {
        label: 'Minimum order',
        lines: [
          FACTS.moqExplanation.coBrand,
          FACTS.moqExplanation.pilot,
          FACTS.moqExplanation.standard,
        ],
      },
      {
        label: 'Lead time',
        lines: [
          '25-35 days from confirmed PO and deposit',
          'New formulation registration: +60-90 days',
          'Expedited production available for seasonal demand',
        ],
      },
      {
        label: 'Sampling',
        lines: [
          'Formulation samples ship in 7-14 days',
          'Sample cost credited against bulk order',
        ],
      },
      {
        label: 'Export & documentation',
        lines: [
          'Export documentation handled in-house',
          'UN-rated export packaging; MSDS and CoA with every shipment',
        ],
      },
    ],
    certs:
      'ISO 9001 quality management · ISO 14001 environmental management · GMP for agrochemical production · FAO/WHO international pesticide specifications · REACH compliance for products exported to the EU.',
    moqTiers: [
      {
        stage: 'Sample & approval',
        quantity: `${FACTS.moqExplanation.sample}`,
        purpose: 'Confirm formulation, concentration, packaging and labeling before any production run',
        note: `${FACTS.sampleTime}; physical sample, not a datasheet`,
      },
      {
        stage: 'Standard formulation',
        quantity: `${FACTS.moqExplanation.coBrand}`,
        purpose: 'Test a standard formulation with your private label',
        note: 'Fastest way to validate a branded product',
      },
      {
        stage: 'Pilot batch / initial stock',
        quantity: `${FACTS.moqExplanation.pilot}`,
        purpose: 'Validate the market or build initial inventory with custom packaging',
        note: 'Lowest volume with custom label and packaging',
      },
      {
        stage: 'Standard volume production',
        quantity: `${FACTS.moqExplanation.standard}`,
        purpose: 'Regular production runs at the best unit price',
        note: `${FACTS.moqExplanation.customMould}`,
      },
    ],
  },
  es: {
    kicker: 'Condiciones comerciales',
    title: 'Condiciones comerciales, expresadas por adelantado',
    sub: 'Los términos estándar de MOQ, muestreo, producción y entrega se indican a continuación. Los proyectos con nuevas formulaciones, registro a medida, ensayos de cumplimiento o packaging a medida se presupuestan por separado.',
    cells: [
      {
        label: 'Pedido mínimo',
        lines: [
          FACTS.moqExplanation.coBrand,
          FACTS.moqExplanation.pilot,
          FACTS.moqExplanation.standard,
        ],
      },
      {
        label: 'Plazo de entrega',
        lines: [
          '25-35 días desde el PO confirmado y el depósito',
          'Registro de nueva formulación: +60-90 días',
          'Producción acelerada disponible para demanda estacional',
        ],
      },
      {
        label: 'Muestras',
        lines: [
          'Las muestras de formulación salen en 7-14 días',
          'El coste de la muestra se descuenta del pedido de volumen',
        ],
      },
      {
        label: 'Exportación y documentación',
        lines: [
          'Documentación de exportación gestionada en casa',
          'Embalaje clasificado UN; FDS y CdA con cada embarque',
        ],
      },
    ],
    certs:
      'ISO 9001 gestión de calidad · ISO 14001 gestión ambiental · GMP para producción de agroquímicos · Especificaciones FAO/WHO de pesticidas internacionales · Conformidad REACH para productos exportados a la UE.',
    moqTiers: [
      {
        stage: 'Muestra y aprobación',
        quantity: `${FACTS.moqExplanation.sample}`,
        purpose: 'Confirmar formulación, concentración, embalaje y etiquetado antes de cualquier producción',
        note: `${FACTS.sampleTime}; muestra física, no una ficha técnica`,
      },
      {
        stage: 'Formulación estándar',
        quantity: `${FACTS.moqExplanation.coBrand}`,
        purpose: 'Probar una formulación estándar con tu marca privada',
        note: 'La vía más rápida para validar un producto con marca',
      },
      {
        stage: 'Lote piloto / stock inicial',
        quantity: `${FACTS.moqExplanation.pilot}`,
        purpose: 'Validar el mercado o construir inventario inicial con embalaje personalizado',
        note: 'El volumen más bajo con etiqueta y embalaje personalizados',
      },
      {
        stage: 'Producción de volumen estándar',
        quantity: `${FACTS.moqExplanation.standard}`,
        purpose: 'Producción regular al mejor precio unitario',
        note: `${FACTS.moqExplanation.customMould}`,
      },
    ],
  },
}

/* ─────────────────────────── who we serve / customer needs ─────────────────────────── */

export interface Segment {
  slug: string
  title: string
  body: string
  points: string[]
  cta: string
  href: string
}

export interface ServeContent {
  kicker: string
  title: string
  sub: string
  segments: Segment[]
}

export const serve: Localized<ServeContent> = {
  en: {
    kicker: 'Who We Serve',
    title: 'Built for Businesses Creating Their Own Agrochemical Products',
    sub: 'Whether you are launching a new agrochemical brand, expanding into a new crop protection category or sourcing for a government subsidy program, our manufacturing solutions adapt to your business model and target market.',
    segments: [
      {
        slug: 'agrochemical-brands',
        title: 'Agrochemical Brands',
        body: 'Develop custom formulations that match your brand positioning, target crops, pest spectrum and product strategy — from a single flagship SKU to a full product portfolio.',
        points: ['Custom formulations from concept', 'Brand labeling & GHS pictograms', 'Product development & R&D iteration', 'Private label on proven platforms', 'Registration data packages for target markets'],
        cta: 'Explore Custom Formulation',
        href: '/product-development',
      },
      {
        slug: 'distributors-importers',
        title: 'Distributors & Importers',
        body: 'Expand your product portfolio with customized agrochemical formulations designed for your market — whether supplying commercial farmers in LATAM or government tenders in West Africa.',
        points: ['Formulation customization per market', 'Multiple formulations under one contract', 'OEM production to your specification', 'Country-specific labeling & documentation', 'Seasonal scheduling for peak demand'],
        cta: 'View OEM Solutions',
        href: '/solutions/custom-formulation',
      },
      {
        slug: 'government-procurement',
        title: 'Government Procurement Agencies',
        body: 'Source quality-assured crop protection products with full regulatory documentation, batch traceability and ICAMA compliance — from national input subsidy programs in West and East Africa to regional tender orders in South and Southeast Asia.',
        points: ['Regulatory compliance & ICAMA registration', 'Competitive tender pricing', 'Bulk supply with locked specifications', 'Full batch traceability (ERP-linked)', 'Phytosanitary & export documentation per country'],
        cta: 'Learn More',
        href: '/solutions/government-procurement',
      },
      {
        slug: 'retail-private-label',
        title: 'Retailers & Private Label Buyers',
        body: 'Create differentiated agrochemical product lines instead of competing on the same standard products — your brand, your label, your shelf positioning, with retail-ready packaging and regulatory compliance.',
        points: ['Private label on validated formulations', 'Custom packaging & retail-ready sizes', 'Regulatory text per destination market', 'Batch coding & expiry management', 'Low pilot MOQ for market testing'],
        cta: 'View Solutions',
        href: '/solutions/private-label-agrochemical',
      },
    ],
  },
  es: {
    kicker: 'A quién servimos',
    title: 'Hecho para empresas que crean sus propios productos agroquímicos',
    sub: 'Ya sea que estés lanzando una nueva marca de agroquímicos, ampliando a una nueva categoría de protección de cultivos o abasteciendo un programa de subsidios gubernamental, nuestras soluciones de fabricación se adaptan a tu modelo de negocio y mercado de destino.',
    segments: [
      {
        slug: 'agrochemical-brands',
        title: 'Marcas de agroquímicos',
        body: 'Desarrolla formulaciones personalizadas que coincidan con el posicionamiento de tu marca, tus cultivos objetivo, espectro de plagas y estrategia de producto — desde un SKU insignia hasta un portafolio completo.',
        points: ['Formulaciones personalizadas desde el concepto', 'Etiquetado de marca y pictogramas GHS', 'Desarrollo de producto e iteración I+D', 'Marca privada en plataformas probadas', 'Paquetes de datos de registro por mercado'],
        cta: 'Explorar formulación personalizada',
        href: '/product-development',
      },
      {
        slug: 'distributors-importers',
        title: 'Distribuidores e importadores',
        body: 'Amplía tu cartera de productos con formulaciones agroquímicas personalizadas para tu mercado — ya sea suministrando a agricultores comerciales en LATAM o licitaciones gubernamentales en África Occidental.',
        points: ['Personalización de formulación por mercado', 'Varias formulaciones bajo un contrato', 'Producción OEM según tu especificación', 'Etiquetado y documentación por país', 'Programación estacional para demanda puntual'],
        cta: 'Ver soluciones OEM',
        href: '/solutions/custom-formulation',
      },
      {
        slug: 'government-procurement',
        title: 'Agencias de compras gubernamentales',
        body: 'Adquiere productos de protección de cultivos con garantía de calidad, documentación regulatoria completa, trazabilidad por lote y cumplimiento ICAMA — desde programas nacionales de subsidios en África Occidental y Oriental hasta licitaciones regionales en el Sur y Sudeste Asiático.',
        points: ['Cumplimiento regulatorio y registro ICAMA', 'Precios competitivos para licitaciones', 'Suministro por volumen con especificaciones fijadas', 'Trazabilidad completa (vinculada por ERP)', 'Documentación fitosanitaria y de exportación por país'],
        cta: 'Saber más',
        href: '/solutions/government-procurement',
      },
      {
        slug: 'retail-private-label',
        title: 'Minoristas y compradores de marca privada',
        body: 'Crea líneas de productos agroquímicos diferenciadas en lugar de competir con los mismos productos estándar — tu marca, tu etiqueta, tu posicionamiento en anaquel, con embalaje listo para retail y cumplimiento regulatorio.',
        points: ['Marca privada en formulaciones validadas', 'Embalaje personalizado y tamaños retail', 'Texto regulatorio según mercado de destino', 'Codificación de lote y gestión de caducidad', 'MOQ piloto bajo para testeo de mercado'],
        cta: 'Ver soluciones',
        href: '/solutions/private-label-agrochemical',
      },
    ],
  },
}

/* ─────────────────────────── solutions ─────────────────────────── */

export interface SolutionPillar {
  title: string
  body: string
  points: string[]
}

export interface SolutionsContent {
  kicker: string
  title: string
  sub: string
  pillars: SolutionPillar[]
}

export const solutions: Localized<SolutionsContent> = {
  en: {
    kicker: 'Customization Capability',
    title: 'Custom Agrochemical Solutions For Your Business',
    sub: 'From OEM/ODM programs for brands to private-label lines for distributors and sourcing teams — every requirement turns into a manufacturable product.',
    pillars: [
      {
        title: 'Formulation Design',
        body: 'Define the formulation as your product requires.',
        points: ['Active ingredient', 'Concentration', 'Formulation type', 'Adjuvants'],
      },
      {
        title: 'Packaging & Labeling',
        body: 'Put your identity on every container.',
        points: ['Label design', 'Packaging size', 'Batch coding', 'Regulatory text'],
      },
      {
        title: 'Registration Support',
        body: 'Navigate regulatory requirements with our documentation.',
        points: ['Data packages', 'Stability data', 'Toxicology dossiers', 'Local registration'],
      },
      {
        title: 'Production Requirements',
        body: 'Tailor how your project is produced.',
        points: ['Quantity', 'Specification', 'Destination market'],
      },
    ],
  },
  es: {
    kicker: 'Capacidad de personalización',
    title: 'Soluciones agroquímicas personalizadas para tu negocio',
    sub: 'De los programas OEM/ODM para marcas a las líneas de marca privada para distribuidores y equipos de compra — cada requisito se convierte en un producto fabricable.',
    pillars: [
      {
        title: 'Diseño de formulación',
        body: 'Define la formulación según lo que requiere tu producto.',
        points: ['Ingrediente activo', 'Concentración', 'Tipo de formulación', 'Coadyuvantes'],
      },
      {
        title: 'Embalaje y etiquetado',
        body: 'Pon tu identidad en cada envase.',
        points: ['Diseño de etiqueta', 'Tamaño de embalaje', 'Codificación de lote', 'Texto regulatorio'],
      },
      {
        title: 'Soporte de registro',
        body: 'Navega los requisitos regulatorios con nuestra documentación.',
        points: ['Paquetes de datos', 'Datos de estabilidad', 'Dossier toxicológico', 'Registro local'],
      },
      {
        title: 'Requisitos de producción',
        body: 'Adapta cómo se produce tu proyecto.',
        points: ['Cantidad', 'Especificación', 'Mercado de destino'],
      },
    ],
  },
}

/* ─────────────────────────── formulation specification builder ─────────────────────────── */

export interface StudioStep {
  title: string
  body: string
}

export interface StudioContent {
  kicker: string
  title: string
  sub: string
  scrollHint: string
  steps: StudioStep[]
}

export const studio: Localized<StudioContent> = {
  en: {
    kicker: 'Configurator',
    title: 'Specification Builder',
    sub: 'Scroll the build — from the active ingredient to the container it ships in, every layer is specified by you.',
    scrollHint: 'Scroll to explore',
    steps: [
      {
        title: 'Active Ingredient & Concentration',
        body: 'Choose a proven formulation or specify a custom active ingredient and concentration — from glyphosate 480g/L SL to abamectin 5% EC and beyond.',
      },
      {
        title: 'Formulation Type',
        body: 'SC, EC, WP, WDG, SL, ME, CS or FS — each with specific manufacturing protocols, stability profiles and regulatory requirements per target market.',
      },
      {
        title: 'Packaging & Container',
        body: 'Select container type and size — from 100 mL bottles to 1000 L IBCs, with UN-rated packaging for hazardous goods shipping.',
      },
      {
        title: 'Labeling & Regulatory',
        body: 'Full label design with your brand, batch coding, GHS hazard pictograms, registration numbers and regulatory text per destination market requirements.',
      },
      {
        title: 'Documentation & Export',
        body: 'MSDS, certificate of analysis, phytosanitary certificates and export documentation — all handled in-house per your target market.',
      },
    ],
  },
  es: {
    kicker: 'Configurador',
    title: 'Constructor de especificaciones',
    sub: 'Desliza por todo el proceso — del ingrediente activo al envase en el que se envía, cada capa es especificada por ti.',
    scrollHint: 'Desliza para explorar',
    steps: [
      {
        title: 'Ingrediente activo y concentración',
        body: 'Elige una formulación probada o especifica un ingrediente activo y concentración propios — desde glifosato 480g/L SL hasta abamectina 5% EC y más.',
      },
      {
        title: 'Tipo de formulación',
        body: 'SC, EC, WP, WDG, SL, ME, CS o FS — cada una con protocolos de fabricación específicos, perfiles de estabilidad y requisitos regulatorios según mercado de destino.',
      },
      {
        title: 'Embalaje y envase',
        body: 'Selecciona el tipo y tamaño de envase — desde botellas de 100 mL hasta IBC de 1000 L, con embalaje clasificado UN para transporte de mercancías peligrosas.',
      },
      {
        title: 'Etiquetado y regulatorio',
        body: 'Diseño completo de etiqueta con tu marca, codificación de lote, pictogramas de peligro GHS, números de registro y texto regulatorio según requisitos del mercado de destino.',
      },
      {
        title: 'Documentación y exportación',
        body: 'FDS, certificado de análisis, certificados fitosanitarios y documentación de exportación — todo gestionado en casa según tu mercado de destino.',
      },
    ],
  },
}

/* ─────────────────────────── products ─────────────────────────── */

export interface Product {
  slug: string
  series: string
  sku: string
  name: string
  tagline: string
  desc: string
  uses: string[]
  for: string[]
  specs: string
  artwork: string
  image: string
  hue: number
}

export interface ProductsContent {
  kicker: string
  title: string
  sub: string
  items: Product[]
}

export interface ProductFilterGroup {
  key: string
  label: string
}

export const productFilters: Localized<{ all: string; groups: ProductFilterGroup[] }> = {
  en: {
    all: 'All Formulations',
    groups: [
      { key: 'herbicide', label: 'Herbicides' },
      { key: 'insecticide', label: 'Insecticides' },
      { key: 'fungicide', label: 'Fungicides' },
      { key: 'pgr', label: 'Plant Growth Regulators' },
      { key: 'seed-treatment', label: 'Seed Treatment' },
    ],
  },
  es: {
    all: 'Todas las formulaciones',
    groups: [
      { key: 'herbicide', label: 'Herbicidas' },
      { key: 'insecticide', label: 'Insecticidas' },
      { key: 'fungicide', label: 'Fungicidas' },
      { key: 'pgr', label: 'Reguladores de crecimiento' },
      { key: 'seed-treatment', label: 'Tratamiento de semillas' },
    ],
  },
}
export const products: Localized<ProductsContent> = {
  en: {
    kicker: 'Product Formulations',
    title: 'Agrochemical Formulations Available For Customization',
    sub: 'Each formulation is a manufacturing platform — choose a starting point and we adapt the concentration, packaging and labeling to your product.',
    items: [
      {
        slug: 'glyphosate-480-sl',
        series: 'herbicide',
        sku: 'AGRO-GLY480',
        name: 'Glyphosate 480g/L SL',
        tagline: 'The non-selective standard',
        desc: 'Our most widely produced herbicide formulation — broad-spectrum non-selective weed control for agricultural and non-crop applications. The default starting point for most new herbicide brands.',
        uses: ['Non-selective', 'Broadleaf', 'Grasses'],
        for: ['Herbicide brands', 'Distributors'],
        specs: 'Glyphosate 480g/L SL · soluble liquid · ISO 9001 / GMP',
        artwork: 'Full-range herbicide · field-proven formulation · global registration data available',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
        hue: 120,
      },
      {
        slug: 'glufosinate-200-sl',
        series: 'herbicide',
        sku: 'AGRO-GLU200',
        name: 'Glufosinate 200g/L SL',
        tagline: 'Non-selective alternative',
        desc: 'Effective non-selective herbicide for broadleaf and grassy weeds, ideal for orchards, vineyards and row crops as a glyphosate alternative in resistance management programs.',
        uses: ['Non-selective', 'Orchards', 'Vineyards'],
        for: ['Herbicide brands', 'Fruit growers'],
        specs: 'Glufosinate 200g/L SL · soluble liquid · ISO 9001 / GMP',
        artwork: 'Resistance management · rapid burndown · rainfast within hours',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/glufosinate-200-sl.avif',
        hue: 130,
      },
      {
        slug: 'imidacloprid-350-sc',
        series: 'insecticide',
        sku: 'AGRO-IMI350',
        name: 'Imidacloprid 350g/L SC',
        tagline: 'Systemic neonicotinoid protection',
        desc: 'Broad-spectrum systemic insecticide for sucking and chewing pests in cotton, rice, vegetables and fruit crops. Suspension concentrate for excellent foliar coverage and rainfastness.',
        uses: ['Sucking pests', 'Chewing pests', 'Systemic'],
        for: ['Insecticide brands', 'Vegetable growers'],
        specs: 'Imidacloprid 350g/L SC · suspension concentrate · ISO 9001 / GMP',
        artwork: 'Systemic action · long residual · seed treatment compatible',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif',
        hue: 45,
      },
      {
        slug: 'abamectin-5-ec',
        series: 'insecticide',
        sku: 'AGRO-ABA5',
        name: 'Abamectin 5% EC',
        tagline: 'Miticide and insecticide',
        desc: 'Potent miticide and insecticide for mites, leafminers and diamondback moth in vegetables, fruit trees and ornamentals. Emulsifiable concentrate with translaminar movement for hidden pest control.',
        uses: ['Mites', 'Leafminers', 'Translaminar'],
        for: ['Insecticide brands', 'Fruit growers'],
        specs: 'Abamectin 5% EC · emulsifiable concentrate · ISO 9001 / GMP',
        artwork: 'Translaminar activity · low crop impact · IPM compatible',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/abamectin-5-ec.avif',
        hue: 35,
      },
      {
        slug: 'azoxystrobin-250-sc',
        series: 'fungicide',
        sku: 'AGRO-AZO250',
        name: 'Azoxystrobin 250g/L SC',
        tagline: 'Broad-spectrum strobilurin',
        desc: 'Premium strobilurin fungicide with broad-spectrum disease control for cereals, rice, vegetables and fruit crops. Suspension concentrate with systemic and translaminar activity for preventive and curative action.',
        uses: ['Broad-spectrum', 'Systemic', 'Preventive'],
        for: ['Fungicide brands', 'Cereal growers'],
        specs: 'Azoxystrobin 250g/L SC · suspension concentrate · ISO 9001 / GMP',
        artwork: 'Systemic + translaminar · yield enhancement · disease prevention',
        image: 'https://assets.agrospear.com/site/products/2026/fungicides/azoxystrobin-250-sc.avif',
        hue: 270,
      },
      {
        slug: 'difenoconazole-250-ec',
        series: 'fungicide',
        sku: 'AGRO-DIF250',
        name: 'Difenoconazole 250g/L EC',
        tagline: 'Triazole fungicide standard',
        desc: 'Systemic triazole fungicide with preventive and curative activity against a wide range of foliar and soil-borne diseases in cereals, vegetables and fruit crops. Emulsifiable concentrate formulation.',
        uses: ['Systemic', 'Curative', 'Foliar diseases'],
        for: ['Fungicide brands', 'Fruit growers'],
        specs: 'Difenoconazole 250g/L EC · emulsifiable concentrate · ISO 9001 / GMP',
        artwork: 'Triazole chemistry · broad disease spectrum · curative action',
        image: 'https://assets.agrospear.com/site/products/2026/fungicides/difenoconazole-250-ec.avif',
        hue: 260,
      },
      {
        slug: '24d-720-sl',
        series: 'herbicide',
        sku: 'AGRO-24D720',
        name: '2,4-D 720g/L SL',
        tagline: 'Selective broadleaf herbicide',
        desc: 'Classic selective herbicide for broadleaf weed control in cereals, maize, sugarcane and pastures. High-concentration soluble liquid for economical large-area application.',
        uses: ['Selective', 'Broadleaf', 'Cereals'],
        for: ['Herbicide brands', 'Cereal growers'],
        specs: '2,4-D 720g/L SL · soluble liquid · ISO 9001 / GMP',
        artwork: 'High concentration · economical application · post-emergence',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/24d-720-sl.avif',
        hue: 140,
      },
      {
        slug: 'acetamiprid-20-sp',
        series: 'insecticide',
        sku: 'AGRO-ACE20',
        name: 'Acetamiprid 20% SP',
        tagline: 'Neonicotinoid for sucking pests',
        desc: 'Systemic neonicotinoid insecticide for aphids, whiteflies and thrips in vegetables, fruit and cotton. Soluble powder formulation with excellent systemic activity and low mammalian toxicity.',
        uses: ['Aphids', 'Whiteflies', 'Systemic'],
        for: ['Insecticide brands', 'Vegetable growers'],
        specs: 'Acetamiprid 20% SP · soluble powder · ISO 9001 / GMP',
        artwork: 'Low mammalian toxicity · systemic action · bee-safe when used correctly',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/acetamiprid-20-sp.avif',
        hue: 50,
      },
      {
        slug: 'tebuconazole-430-sc',
        series: 'fungicide',
        sku: 'AGRO-TEB430',
        name: 'Tebuconazole 430g/L SC',
        tagline: 'Versatile triazole fungicide',
        desc: 'High-concentration triazole fungicide for disease control in cereals, peanuts, vegetables and fruit crops. Suspension concentrate with systemic activity for both foliar and seed treatment applications.',
        uses: ['Systemic', 'Seed treatment', 'Foliar'],
        for: ['Fungicide brands', 'Cereal growers'],
        specs: 'Tebuconazole 430g/L SC · suspension concentrate · ISO 9001 / GMP',
        artwork: 'Dual use: foliar + seed treatment · high concentration · broad spectrum',
        image: 'https://assets.agrospear.com/site/products/2026/fungicides/tebuconazole-430-sc.avif',
        hue: 250,
      },
      {
        slug: 'cypermethrin-100-ec',
        series: 'insecticide',
        sku: 'AGRO-CYP100',
        name: 'Cypermethrin 100g/L EC',
        tagline: 'Pyrethroid insecticide',
        desc: 'Synthetic pyrethroid insecticide with contact and stomach action against lepidoptera, coleoptera and hemiptera in cotton, vegetables and fruit crops. Fast knockdown with residual activity.',
        uses: ['Contact', 'Knockdown', 'Lepidoptera'],
        for: ['Insecticide brands', 'Cotton growers'],
        specs: 'Cypermethrin 100g/L EC · emulsifiable concentrate · ISO 9001 / GMP',
        artwork: 'Fast knockdown · residual activity · broad insect spectrum',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/cypermethrin-100-ec.avif',
        hue: 40,
      },
      {
        slug: 'nicosulfuron-40-od',
        series: 'herbicide',
        sku: 'AGRO-NIC40',
        name: 'Nicosulfuron 40g/L OD',
        tagline: 'Selective maize herbicide',
        desc: 'Sulfonylurea herbicide for post-emergence control of annual and perennial weeds in maize. Oil dispersion formulation for superior foliar adherence and rainfastness in field conditions.',
        uses: ['Selective', 'Maize', 'Post-emergence'],
        for: ['Herbicide brands', 'Maize growers'],
        specs: 'Nicosulfuron 40g/L OD · oil dispersion · ISO 9001 / GMP',
        artwork: 'Maize-specific · low application rate · post-emergence window',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/nicosulfuron-40-od.avif',
        hue: 150,
      },
      {
        slug: 'chlorpyrifos-480-ec',
        series: 'insecticide',
        sku: 'AGRO-CHL480',
        name: 'Chlorpyrifos 480g/L EC',
        tagline: 'Organophosphate insecticide',
        desc: 'Broad-spectrum organophosphate insecticide for soil and foliar pests in a wide range of crops. Emulsifiable concentrate with contact, stomach and respiratory action for termites, cutworms and stem borers.',
        uses: ['Soil pests', 'Termites', 'Broad-spectrum'],
        for: ['Insecticide brands', 'Rice growers'],
        specs: 'Chlorpyrifos 480g/L EC · emulsifiable concentrate · ISO 9001 / GMP',
        artwork: 'Soil + foliar activity · termite control · long residual',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/chlorpyrifos-480-ec.avif',
        hue: 30,
      },
      {
        slug: 'mancozeb-80-wp',
        series: 'fungicide',
        sku: 'AGRO-MAN80',
        name: 'Mancozeb 80% WP',
        tagline: 'Multi-site contact fungicide',
        desc: 'Multi-site contact fungicide for preventive disease control in potatoes, tomatoes, grapes and vegetables. Wettable powder formulation with low resistance risk due to multi-site mode of action.',
        uses: ['Contact', 'Preventive', 'Multi-site'],
        for: ['Fungicide brands', 'Potato growers'],
        specs: 'Mancozeb 80% WP · wettable powder · ISO 9001 / GMP',
        artwork: 'Multi-site MOA · low resistance risk · tank-mix compatible',
        image: 'https://assets.agrospear.com/site/products/2026/fungicides/mancozeb-80-wp.avif',
        hue: 240,
      },
      {
        slug: 'emamectin-benzoate-5-wdg',
        series: 'insecticide',
        sku: 'AGRO-EMA5',
        name: 'Emamectin Benzoate 5% WDG',
        tagline: 'Premium lepidoptera control',
        desc: 'Advanced semi-synthetic avermectin insecticide for lepidoptera pest complex in vegetables, cotton and fruit. Water dispersible granule formulation with translaminar activity and IPM compatibility.',
        uses: ['Lepidoptera', 'Translaminar', 'IPM'],
        for: ['Insecticide brands', 'Cotton growers'],
        specs: 'Emamectin Benzoate 5% WDG · water dispersible granule · ISO 9001 / GMP',
        artwork: 'Low application rate · IPM compatible · translaminar activity',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/emamectin-benzoate-5-wdg.avif',
        hue: 55,
      },
      {
        slug: 'paraquat-276-sl',
        series: 'herbicide',
        sku: 'AGRO-PAR276',
        name: 'Paraquat 276g/L SL',
        tagline: 'Rapid non-selective burndown',
        desc: 'Fast-acting non-selective herbicide for burndown of existing vegetation in no-till systems, inter-row weed control and pre-harvest desiccation. Note: restricted or banned in some markets — registration status confirmed per destination.',
        uses: ['Burndown', 'No-till', 'Pre-harvest'],
        for: ['Herbicide brands', 'Row crop growers'],
        specs: 'Paraquat 276g/L SL · soluble liquid · ISO 9001 / GMP · market restrictions apply',
        artwork: 'Rapid burndown · rainfast in minutes · restricted in some markets',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/paraquat-276-sl.avif',
        hue: 160,
      },
    ],
  },
  es: {
    kicker: 'Formulaciones de producto',
    title: 'Formulaciones agroquímicas disponibles para personalización',
    sub: 'Cada formulación es una plataforma de fabricación: elige un punto de partida y adaptamos la concentración, el embalaje y el etiquetado a tu producto.',
    items: [
      {
        slug: 'glyphosate-480-sl',
        series: 'herbicide',
        sku: 'AGRO-GLY480',
        name: 'Glifosato 480g/L SL',
        tagline: 'El herbicida no selectivo estándar',
        desc: 'Nuestra formulación de herbicida más producida: control de malezas no selectivo de amplio espectro para aplicaciones agrícolas y no agrícolas. El punto de partida para la mayoría de las nuevas marcas de herbicidas.',
        uses: ['No selectivo', 'Hoja ancha', 'Gramíneas'],
        for: ['Marcas de herbicidas', 'Distribuidores'],
        specs: 'Glifosato 480g/L SL · líquido soluble · ISO 9001 / GMP',
        artwork: 'Herbicida de amplio espectro · formulación probada en campo · datos de registro global disponibles',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
        hue: 120,
      },
      {
        slug: 'glufosinate-200-sl',
        series: 'herbicide',
        sku: 'AGRO-GLU200',
        name: 'Glufosinato 200g/L SL',
        tagline: 'Alternativa no selectiva',
        desc: 'Herbicida no selectivo eficaz para malezas de hoja ancha y gramíneas, ideal para huertos, viñedos y cultivos en hilera como alternativa al glifosato en programas de manejo de resistencia.',
        uses: ['No selectivo', 'Huertos', 'Viñedos'],
        for: ['Marcas de herbicidas', 'Fruticultores'],
        specs: 'Glufosinato 200g/L SL · líquido soluble · ISO 9001 / GMP',
        artwork: 'Manejo de resistencia · quema rápida · resistente a lluvia en horas',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/glufosinate-200-sl.avif',
        hue: 130,
      },
      {
        slug: 'imidacloprid-350-sc',
        series: 'insecticide',
        sku: 'AGRO-IMI350',
        name: 'Imidacloprid 350g/L SC',
        tagline: 'Protección neonicotinoide sistémica',
        desc: 'Insecticida sistémico de amplio espectro para plagas chupadoras y masticadoras en algodón, arroz, hortalizas y frutales. Concentrado en suspensión con excelente cobertura foliar y resistencia a la lluvia.',
        uses: ['Plagas chupadoras', 'Plagas masticadoras', 'Sistémico'],
        for: ['Marcas de insecticidas', 'Horticultores'],
        specs: 'Imidacloprid 350g/L SC · concentrado en suspensión · ISO 9001 / GMP',
        artwork: 'Acción sistémica · residual largo · compatible con tratamiento de semillas',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif',
        hue: 45,
      },
      {
        slug: 'abamectin-5-ec',
        series: 'insecticide',
        sku: 'AGRO-ABA5',
        name: 'Abamectina 5% EC',
        tagline: 'Acaricida e insecticida',
        desc: 'Potente acaricida e insecticida para ácaros, minadores y polilla de la col en hortalizas, frutales y ornamentales. Concentrado emulsionable con movimiento translaminar para control de plagas ocultas.',
        uses: ['Ácaros', 'Minadores', 'Translaminar'],
        for: ['Marcas de insecticidas', 'Fruticultores'],
        specs: 'Abamectina 5% EC · concentrado emulsionable · ISO 9001 / GMP',
        artwork: 'Actividad translaminar · bajo impacto en cultivo · compatible con MIP',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/abamectin-5-ec.avif',
        hue: 35,
      },
      {
        slug: 'azoxystrobin-250-sc',
        series: 'fungicide',
        sku: 'AGRO-AZO250',
        name: 'Azoxistrobina 250g/L SC',
        tagline: 'Estrobilurina de amplio espectro',
        desc: 'Fungicida estrobilurina premium con control de enfermedades de amplio espectro para cereales, arroz, hortalizas y frutales. Concentrado en suspensión con actividad sistémica y translaminar.',
        uses: ['Amplio espectro', 'Sistémico', 'Preventivo'],
        for: ['Marcas de fungicidas', 'Cerealistas'],
        specs: 'Azoxistrobina 250g/L SC · concentrado en suspensión · ISO 9001 / GMP',
        artwork: 'Sistémico + translaminar · mejora de rendimiento · prevención de enfermedades',
        image: 'https://assets.agrospear.com/site/products/2026/fungicides/azoxystrobin-250-sc.avif',
        hue: 270,
      },
      {
        slug: 'difenoconazole-250-ec',
        series: 'fungicide',
        sku: 'AGRO-DIF250',
        name: 'Difenoconazol 250g/L EC',
        tagline: 'Fungicida triazol estándar',
        desc: 'Fungicida triazol sistémico con actividad preventiva y curativa contra enfermedades foliares y del suelo en cereales, hortalizas y frutales. Formulación de concentrado emulsionable.',
        uses: ['Sistémico', 'Curativo', 'Enfermedades foliares'],
        for: ['Marcas de fungicidas', 'Fruticultores'],
        specs: 'Difenoconazol 250g/L EC · concentrado emulsionable · ISO 9001 / GMP',
        artwork: 'Química triazol · amplio espectro de enfermedades · acción curativa',
        image: 'https://assets.agrospear.com/site/products/2026/fungicides/difenoconazole-250-ec.avif',
        hue: 260,
      },
      {
        slug: '24d-720-sl',
        series: 'herbicide',
        sku: 'AGRO-24D720',
        name: '2,4-D 720g/L SL',
        tagline: 'Herbicida selectivo de hoja ancha',
        desc: 'Herbicida selectivo clásico para control de malezas de hoja ancha en cereales, maíz, caña de azúcar y pastos. Líquido soluble de alta concentración para aplicación económica en grandes superficies.',
        uses: ['Selectivo', 'Hoja ancha', 'Cereales'],
        for: ['Marcas de herbicidas', 'Cerealistas'],
        specs: '2,4-D 720g/L SL · líquido soluble · ISO 9001 / GMP',
        artwork: 'Alta concentración · aplicación económica · post-emergencia',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/24d-720-sl.avif',
        hue: 140,
      },
      {
        slug: 'acetamiprid-20-sp',
        series: 'insecticide',
        sku: 'AGRO-ACE20',
        name: 'Acetamiprid 20% SP',
        tagline: 'Neonicotinoide para plagas chupadoras',
        desc: 'Insecticida neonicotinoide sistémico para pulgones, moscas blancas y trips en hortalizas, fruta y algodón. Formulación de polvo soluble con excelente actividad sistémica y baja toxicidad mamaria.',
        uses: ['Pulgones', 'Moscas blancas', 'Sistémico'],
        for: ['Marcas de insecticidas', 'Horticultores'],
        specs: 'Acetamiprid 20% SP · polvo soluble · ISO 9001 / GMP',
        artwork: 'Baja toxicidad mamaria · acción sistémica · seguro para abejas si se usa correctamente',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/acetamiprid-20-sp.avif',
        hue: 50,
      },
      {
        slug: 'tebuconazole-430-sc',
        series: 'fungicide',
        sku: 'AGRO-TEB430',
        name: 'Tebuconazol 430g/L SC',
        tagline: 'Fungicida triazol versátil',
        desc: 'Fungicida triazol de alta concentración para control de enfermedades en cereales, cacahuetes, hortalizas y frutales. Concentrado en suspensión con actividad sistémica para aplicaciones foliares y tratamiento de semillas.',
        uses: ['Sistémico', 'Tratamiento de semillas', 'Foliar'],
        for: ['Marcas de fungicidas', 'Cerealistas'],
        specs: 'Tebuconazol 430g/L SC · concentrado en suspensión · ISO 9001 / GMP',
        artwork: 'Doble uso: foliar + tratamiento de semillas · alta concentración · amplio espectro',
        image: 'https://assets.agrospear.com/site/products/2026/fungicides/tebuconazole-430-sc.avif',
        hue: 250,
      },
      {
        slug: 'cypermethrin-100-ec',
        series: 'insecticide',
        sku: 'AGRO-CYP100',
        name: 'Cipermetrina 100g/L EC',
        tagline: 'Insecticida piretroide',
        desc: 'Insecticida piretroide sintético con acción de contacto e ingestión contra lepidópteros, coleópteros y hemípteros en algodón, hortalizas y frutales. Derribe rápido con actividad residual.',
        uses: ['Contacto', 'Derribe rápido', 'Lepidópteros'],
        for: ['Marcas de insecticidas', 'Algodoneros'],
        specs: 'Cipermetrina 100g/L EC · concentrado emulsionable · ISO 9001 / GMP',
        artwork: 'Derribe rápido · actividad residual · amplio espectro de insectos',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/cypermethrin-100-ec.avif',
        hue: 40,
      },
      {
        slug: 'nicosulfuron-40-od',
        series: 'herbicide',
        sku: 'AGRO-NIC40',
        name: 'Nicosulfurón 40g/L OD',
        tagline: 'Herbicida selectivo para maíz',
        desc: 'Herbicida sulfonilurea para control post-emergencia de malezas anuales y perennes en maíz. Formulación de dispersión oleosa para adherencia foliar superior y resistencia a la lluvia.',
        uses: ['Selectivo', 'Maíz', 'Post-emergencia'],
        for: ['Marcas de herbicidas', 'Maiceros'],
        specs: 'Nicosulfurón 40g/L OD · dispersión oleosa · ISO 9001 / GMP',
        artwork: 'Específico para maíz · baja dosis · ventana post-emergencia',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/nicosulfuron-40-od.avif',
        hue: 150,
      },
      {
        slug: 'chlorpyrifos-480-ec',
        series: 'insecticide',
        sku: 'AGRO-CHL480',
        name: 'Clorpirifos 480g/L EC',
        tagline: 'Insecticida organofosforado',
        desc: 'Insecticida organofosforado de amplio espectro para plagas del suelo y foliares en una amplia gama de cultivos. Concentrado emulsionable con acción de contacto, ingestión y respiratoria para termitas, gusanos cortadores y barrenadores.',
        uses: ['Plagas del suelo', 'Termitas', 'Amplio espectro'],
        for: ['Marcas de insecticidas', 'Arroceros'],
        specs: 'Clorpirifos 480g/L EC · concentrado emulsionable · ISO 9001 / GMP',
        artwork: 'Actividad suelo + foliar · control de termitas · residual largo',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/chlorpyrifos-480-ec.avif',
        hue: 30,
      },
      {
        slug: 'mancozeb-80-wp',
        series: 'fungicide',
        sku: 'AGRO-MAN80',
        name: 'Mancozeb 80% WP',
        tagline: 'Fungicida de contacto multi-sitio',
        desc: 'Fungicida de contacto multi-sitio para control preventivo de enfermedades en patatas, tomates, viñedos y hortalizas. Formulación de polvo mojable con bajo riesgo de resistencia por modo de acción multi-sitio.',
        uses: ['Contacto', 'Preventivo', 'Multi-sitio'],
        for: ['Marcas de fungicidas', 'Patateros'],
        specs: 'Mancozeb 80% WP · polvo mojable · ISO 9001 / GMP',
        artwork: 'Modo de acción multi-sitio · bajo riesgo de resistencia · compatible con mezclas',
        image: 'https://assets.agrospear.com/site/products/2026/fungicides/mancozeb-80-wp.avif',
        hue: 240,
      },
      {
        slug: 'emamectin-benzoate-5-wdg',
        series: 'insecticide',
        sku: 'AGRO-EMA5',
        name: 'Emamectina Benzoato 5% WDG',
        tagline: 'Control premium de lepidópteros',
        desc: 'Insecticida avermectina semisintético avanzado para complejo de plagas lepidópteras en hortalizas, algodón y frutales. Formulación de gránulos dispersables en agua con actividad translaminar y compatibilidad MIP.',
        uses: ['Lepidópteros', 'Translaminar', 'MIP'],
        for: ['Marcas de insecticidas', 'Algodoneros'],
        specs: 'Emamectina Benzoato 5% WDG · gránulos dispersables · ISO 9001 / GMP',
        artwork: 'Baja dosis · compatible con MIP · actividad translaminar',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/emamectin-benzoate-5-wdg.avif',
        hue: 55,
      },
      {
        slug: 'paraquat-276-sl',
        series: 'herbicide',
        sku: 'AGRO-PAR276',
        name: 'Paraquat 276g/L SL',
        tagline: 'Quema rápida no selectiva',
        desc: 'Herbicida no selectivo de acción rápida para quema de vegetación existente en sistemas de siembra directa, control de malezas interlíneas y desecación pre-cosecha. Nota: restringido o prohibido en algunos mercados — estado de registro confirmado por destino.',
        uses: ['Quema rápida', 'Siembra directa', 'Pre-cosecha'],
        for: ['Marcas de herbicidas', 'Cultivadores de row crop'],
        specs: 'Paraquat 276g/L SL · líquido soluble · ISO 9001 / GMP · restricciones por mercado',
        artwork: 'Quema rápida · resistente a lluvia en minutos · restringido en algunos mercados',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/paraquat-276-sl.avif',
        hue: 160,
      },
    ],
  },
}

/* ─────────────────────────── video showcases ─────────────────────────── */

export interface VideoStep {
  t: string
  d?: string
}

export interface VideoShowcaseContent {
  badge: string
  title: string
  sub: string
  points: VideoStep[]
}

export const videoShowcase: Localized<{
  launch: VideoShowcaseContent
  process: VideoShowcaseContent
}> = {
  en: {
    launch: {
      badge: 'Brand Launch',
      title: 'Dreaming of launching your own agrochemical brand?',
      sub: 'You don\'t need your own factory to launch an agrochemical brand. We are the manufacturing partner behind your product line: formulation, R&D, sampling, QC, packaging and export-ready production — all under one contract with one accountable team.',
      points: [
        { t: 'Full OEM/ODM Concept-to-Production', d: 'Custom formulation, concentration, labeling, packaging and registration support.' },
        { t: 'Tiered MOQ Flexible Launch', d: 'Small-batch support so you can test the market without tying up massive capital.' },
        { t: 'Complete Regulatory & Documentation Packages', d: 'MSDS, CoA, stability data and registration dossiers ready for your target market.' },
        { t: 'Enterprise-Grade Quality & Certification', d: 'Strict QC protocols, HPLC/GC testing and global export compliance per GMP and FAO/WHO.' },
      ],
    },
    process: {
      badge: 'Inside the Factory',
      title: 'How an agrochemical formulation is born',
      sub: 'From raw active ingredient to export-ready product — five steps inside our plant.',
      points: [
        { t: 'Raw Material QC & Dosing' },
        { t: 'Formulation & Mixing' },
        { t: 'Filling & Sealing' },
        { t: 'Labeling & Batch Coding' },
        { t: 'QC Testing & Export Packing' },
      ],
    },
  },
  es: {
    launch: {
      badge: 'Lanzamiento de marca',
      title: '¿Sueñas con lanzar tu propia marca de agroquímicos?',
      sub: 'No necesitas tu propia fábrica para lanzar una marca de agroquímicos. Somos el socio de fabricación detrás de tu línea: formulación, I+D, muestras, control de calidad, packaging y producción lista para exportar — todo bajo un solo contrato y un solo equipo responsable.',
      points: [
        { t: 'OEM/ODM completo del concepto a la producción', d: 'Formulación personalizada, concentración, etiquetado, embalaje y soporte de registro.' },
        { t: 'Lanzamiento flexible con MOQ escalonado', d: 'Producción de pequeños lotes para testear el mercado sin inmovilizar capital.' },
        { t: 'Paquetes regulatorios y documentales completos', d: 'FDS, CdA, datos de estabilidad y dossiers de registro listos para tu mercado.' },
        { t: 'Calidad y certificación de nivel empresarial', d: 'Protocolos estrictos de QC, análisis HPLC/GC y cumplimiento de exportación global según GMP y FAO/WHO.' },
      ],
    },
    process: {
      badge: 'Dentro de la fábrica',
      title: 'Cómo nace una formulación agroquímica',
      sub: 'Del ingrediente activo en bruto al producto listo para exportar — cinco pasos en nuestra planta.',
      points: [
        { t: 'QC de materias primas y dosificación' },
        { t: 'Formulación y mezcla' },
        { t: 'Llenado y sellado' },
        { t: 'Etiquetado y codificación de lote' },
        { t: 'Ensayos de QC y embalaje de exportación' },
      ],
    },
  },
}

/* ─────────────────────────── how it works ─────────────────────────── */

export interface Step {
  title: string
  body: string
}

export interface WorksContent {
  kicker: string
  title: string
  sub: string
  steps: Step[]
  note: string
}

export const works: Localized<WorksContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Product',
    sub: 'Requirement intake through finished goods — every step inside our own plant.',
    steps: [
      {
        title: 'Requirement Intake',
        body: 'We collect your specification, target crop, pest spectrum, regulatory requirements and volume forecast. NDA signed before any file exchange.',
      },
      {
        title: 'Formulation Review',
        body: 'Active ingredient, concentration, formulation type, packaging and labeling are assessed for manufacturability and regulatory compliance. You receive a written report with cost drivers identified.',
      },
      {
        title: 'Label & Artwork Prepress',
        body: 'Your brand files are converted to production-ready label data. GHS pictograms, regulatory text and registration numbers are integrated per target market requirements.',
      },
      {
        title: 'Formulation Sample',
        body: 'A physical sample confirms active ingredient concentration, physical properties and packaging. Ships in 7-14 days.',
      },
      {
        title: 'Sample Approval',
        body: 'You sign off on the physical sample. Nothing enters production until the golden sample is approved and archived as the batch reference.',
      },
      {
        title: 'Batch Production',
        body: 'Manufactured in our own plant under the QC process above, with batch traceability to raw material lot level.',
      },
      {
        title: 'Export-Ready Delivery',
        body: 'UN-rated packaged, documented with MSDS and CoA, and handed over ready for export.',
      },
    ],
    note: 'The approved sample is the contract. Every batch is tested against it.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al producto terminado',
    sub: 'Desde la recepción de requisitos hasta el producto terminado — cada paso dentro de nuestra propia planta.',
    steps: [
      {
        title: 'Recepción de requisitos',
        body: 'Recopilamos tu especificación, cultivo objetivo, espectro de plagas, requisitos regulatorios y previsión de volumen. NDA firmado antes de cualquier intercambio de archivos.',
      },
      {
        title: 'Revisión de formulación',
        body: 'El ingrediente activo, concentración, tipo de formulación, embalaje y etiquetado se evalúan en cuanto a fabricabilidad y cumplimiento regulatorio. Recibes un informe escrito con los factores de coste identificados.',
      },
      {
        title: 'Preimpresión de etiqueta y arte',
        body: 'Tus archivos de marca se convierten en datos de etiqueta listos para producción. Pictogramas GHS, texto regulatorio y números de registro se integran según requisitos del mercado de destino.',
      },
      {
        title: 'Muestra de formulación',
        body: 'Una muestra física confirma la concentración del ingrediente activo, las propiedades físicas y el embalaje. Se envía en 7-14 días.',
      },
      {
        title: 'Aprobación de la muestra',
        body: 'Validas la muestra física. Nada entra en producción hasta que la muestra dorada esté aprobada y archivada como referencia del lote.',
      },
      {
        title: 'Producción en serie',
        body: 'Fabricado en nuestra propia planta bajo el proceso de control de calidad descrito, con trazabilidad por lote hasta el nivel de materia prima.',
      },
      {
        title: 'Entrega lista para exportación',
        body: 'Embalaje clasificado UN, documentado con FDS y CdA, y entregado listo para la exportación.',
      },
    ],
    note: 'La muestra aprobada es el contrato. Cada lote se analiza contra ella.',
  },
}

/* ─────────────────────────── home: product categories ─────────────────────────── */

export interface FormulationCategory {
  id: string
  label: string
  desc: string
  image: string
  href: string
}

export interface FormulationCategoriesContent {
  kicker: string
  title: string
  sub: string
  viewLabel: string
  items: FormulationCategory[]
}

export const formulationCategories: Localized<FormulationCategoriesContent> = {
  en: {
    kicker: 'Our Products',
    title: 'Crop Protection Solutions',
    sub: 'Every product category is a manufacturing platform — choose your starting point and we customize the formulation, concentration, packaging and labeling to your product.',
    viewLabel: 'View',
    items: [
      { id: 'herbicide', label: 'Herbicides', desc: 'Selective and non-selective weed control formulations for all crop types.', image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif', href: '/products/glyphosate-480-sl' },
      { id: 'insecticide', label: 'Insecticides', desc: 'Systemic, contact and translaminar insecticides for chewing and sucking pests.', image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif', href: '/products/imidacloprid-350-sc' },
      { id: 'fungicide', label: 'Fungicides', desc: 'Preventive and curative fungicides for foliar and soil-borne diseases.', image: 'https://assets.agrospear.com/site/products/2026/fungicides/azoxystrobin-250-sc.avif', href: '/products/azoxystrobin-250-sc' },
      { id: 'pgr', label: 'Plant Growth Regulators', desc: 'Growth promoters and inhibitors for yield and quality enhancement.', image: 'https://assets.agrospear.com/site/products/2026/pgr/pgr-01.avif', href: '/products/pgr' },
      { id: 'seed-treatment', label: 'Seed Treatment', desc: 'FS and WS formulations for seed dressing and coating applications.', image: 'https://assets.agrospear.com/site/products/2026/seed-treatment/seed-treatment-01.avif', href: '/products/seed-treatment' },
    ],
  },
  es: {
    kicker: 'Nuestros Productos',
    title: 'Soluciones de Protección de Cultivos',
    sub: 'Cada categoría es una plataforma de fabricación: elige tu punto de partida y adaptamos la formulación, concentración, embalaje y etiquetado a tu producto.',
    viewLabel: 'Ver',
    items: [
      { id: 'herbicide', label: 'Herbicidas', desc: 'Formulaciones selectivas y no selectivas de control de malezas para todos los cultivos.', image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif', href: '/products/glyphosate-480-sl' },
      { id: 'insecticide', label: 'Insecticidas', desc: 'Insecticidas sistémicos, de contacto y translaminares para plagas masticadoras y chupadoras.', image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif', href: '/products/imidacloprid-350-sc' },
      { id: 'fungicide', label: 'Fungicidas', desc: 'Fungicidas preventivos y curativos para enfermedades foliares y del suelo.', image: 'https://assets.agrospear.com/site/products/2026/fungicides/azoxystrobin-250-sc.avif', href: '/products/azoxystrobin-250-sc' },
      { id: 'pgr', label: 'Reguladores de crecimiento', desc: 'Promotores e inhibidores de crecimiento para mejora de rendimiento y calidad.', image: 'https://assets.agrospear.com/site/products/2026/pgr/pgr-01.avif', href: '/products/pgr' },
      { id: 'seed-treatment', label: 'Tratamiento de semillas', desc: 'Formulaciones FS y WS para desinfección y recubrimiento de semillas.', image: 'https://assets.agrospear.com/site/products/2026/seed-treatment/seed-treatment-01.avif', href: '/products/seed-treatment' },
    ],
  },
}

/* ─────────────────────────── home: formulation platforms ─────────────────────────── */

export interface PlatformItem {
  title: string
  body: string
  uses: string[]
  cta: string
  href: string
}

export interface PlatformsContent {
  kicker: string
  title: string
  sub: string
  items: PlatformItem[]
}

export const platforms: Localized<PlatformsContent> = {
  en: {
    kicker: 'Formulation Platforms',
    title: 'Base Formulation Types',
    sub: 'Base formulation platforms, not catalog products. Every concentration, packaging and label is specified per project.',
    items: [
      {
        title: 'SC — Suspension Concentrate',
        body: 'Suspension concentrate platform for insecticides and fungicides requiring fine particle size and long shelf stability.',
        uses: ['Insecticides', 'Fungicides', 'Seed treatment'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'EC — Emulsifiable Concentrate',
        body: 'Emulsifiable concentrate platform for contact and systemic pesticides requiring rapid foliar coverage and rainfastness.',
        uses: ['Insecticides', 'Herbicides', 'Fungicides'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'WP — Wettable Powder',
        body: 'Wettable powder platform for multi-site fungicides and contact insecticides with proven low-resistance profiles.',
        uses: ['Fungicides', 'Insecticides', 'Tank-mix'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'WDG — Water Dispersible Granule',
        body: 'Water dispersible granule platform for dust-free handling, precise dosing and high-concentration active ingredient delivery.',
        uses: ['Herbicides', 'Insecticides', 'Fungicides'],
        cta: 'Request This Platform',
        href: '/contact',
      },
    ],
  },
  es: {
    kicker: 'Plataformas de formulación',
    title: 'Tipos de formulación base',
    sub: 'Plataformas de formulación base, no productos de catálogo. Cada concentración, embalaje y etiqueta se especifica por proyecto.',
    items: [
      {
        title: 'SC — Concentrado en suspensión',
        body: 'Plataforma de concentrado en suspensión para insecticidas y fungicidas que requieren tamaño de partícula fino y larga estabilidad en estantería.',
        uses: ['Insecticidas', 'Fungicidas', 'Tratamiento de semillas'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'EC — Concentrado emulsionable',
        body: 'Plataforma de concentrado emulsionable para pesticidas de contacto y sistémicos que requieren cobertura foliar rápida y resistencia a la lluvia.',
        uses: ['Insecticidas', 'Herbicidas', 'Fungicidas'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'WP — Polvo mojable',
        body: 'Plataforma de polvo mojable para fungicidas multi-sitio e insecticidas de contacto con perfiles de baja resistencia probados.',
        uses: ['Fungicidas', 'Insecticidas', 'Mezcla en tanque'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'WDG — Gránulos dispersables',
        body: 'Plataforma de gránulos dispersables en agua para manejo sin polvo, dosificación precisa y entrega de ingrediente activo de alta concentración.',
        uses: ['Herbicidas', 'Insecticidas', 'Fungicidas'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
    ],
  },
}

/* ─────────────────────────── gallery ─────────────────────────── */

export interface Project {
  tag: string
  title: string
  body: string
  hue: number
  image: string
}

export interface GalleryContent {
  kicker: string
  title: string
  sub: string
  projects: Project[]
}

export const gallery: Localized<GalleryContent> = {
  en: {
    kicker: 'Production Projects',
    title: 'Recent Production',
    sub: 'Manufacturing projects delivered from our plant — with the numbers buyers actually ask about.',
    projects: [
      {
        tag: 'Batch Traceability',
        title: 'Shipment Release & Traceability Handover',
        body: 'Every batch ships with its quality handover — HPLC/GC analysis reports, certificate of analysis and the signed release transfer, filed under 5-year ERP traceability. The photo shows the actual release & traceability handover record at the plant.',
        hue: 120,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Private Label',
        title: 'Private Label Herbicide — Glyphosate 480g/L SL',
        body: 'A Middle Eastern distributor launched a private-label glyphosate 480g/L SL line: formulation locked at the sample stage, custom labeling with Arabic and English regulatory text, and a 22-ton first production run with purity verification before scale-up — brand and registration owned by the distributor.',
        hue: 130,
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
      },
      {
        tag: 'ODM Development',
        title: 'ODM Insecticide Development — Imidacloprid 350g/L SC',
        body: 'An African importer requested a custom imidacloprid SC formulation for cotton and vegetable pests: R&D developed the concentration and adjuvant package, stability data generated per FAO/WHO guidelines, and a 25-ton pilot batch was produced and shipped within 40 days of PO.',
        hue: 45,
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif',
      },
    ],
  },
  es: {
    kicker: 'Proyectos de producción',
    title: 'Producción reciente',
    sub: 'Proyectos de fabricación entregados desde la planta — con las cifras que de verdad pregunta un comprador.',
    projects: [
      {
        tag: 'Trazabilidad de lotes',
        title: 'Liberación de embarque y traspaso de trazabilidad',
        body: 'Cada lote sale con su traspaso de calidad: informes de análisis HPLC/GC, certificado de análisis y el acta de liberación firmada, archivados con trazabilidad ERP de 5 años. La foto muestra el acta real de liberación y trazabilidad en planta.',
        hue: 120,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Marca privada',
        title: 'Herbicida de marca privada — Glifosato 480g/L SL',
        body: 'Un distribuidor de Oriente Medio lanzó una línea de glifosato 480g/L SL con marca propia: formulación fijada en la fase de muestra, etiquetado personalizado con texto regulatorio en árabe e inglés, y una primera tirada de 22 toneladas verificada en pureza antes del escalado — marca y registro en propiedad del distribuidor.',
        hue: 130,
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
      },
      {
        tag: 'Desarrollo ODM',
        title: 'Desarrollo ODM de insecticida — Imidacloprid 350g/L SC',
        body: 'Un importador africano solicitó una formulación SC de imidacloprid para plagas del algodón y hortalizas: I+D desarrolló la concentración y el paquete de coadyuvantes, datos de estabilidad generados según directrices FAO/WHO, y un lote piloto de 25 toneladas producido y enviado en 40 días desde el PO.',
        hue: 45,
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif',
      },
    ],
  },
}

/* ─────────────────────────── buyer's guides (home) ─────────────────────────── */

export interface GuideLink {
  title: string
  body: string
  href: string
}

export interface GuidesContent {
  kicker: string
  title: string
  sub: string
  guides: GuideLink[]
}

export const guides: Localized<GuidesContent> = {
  en: {
    kicker: "Buyer's Guides",
    title: 'Manufacturing Guides',
    sub: 'The questions every agrochemical brand asks before ordering — answered in plain language, with our real terms.',
    guides: [
      {
        title: 'Private Label Agrochemicals: The Complete Step-by-Step Guide',
        body: 'From choosing a manufacturer to production — the full six-step journey for new brands.',
        href: '/news/private-label-agrochemical-guide',
      },
      {
        title: 'Agrochemical OEM MOQ and Pricing',
        body: 'MOQ tiers from sample quantities to 20+ ton volume runs, the key cost drivers, and ways to optimize cost without compromising quality.',
        href: '/news/agrochemical-oem-moq-pricing',
      },
      {
        title: 'Registration & Regulatory Compliance for Agrochemical Products',
        body: 'What registration covers, the documentation to demand, and how to verify compliance for your target market.',
        href: '/news/registration-regulatory-agrochemical',
      },
    ],
  },
  es: {
    kicker: 'Guías del comprador',
    title: 'Guías de fabricación',
    sub: 'Las preguntas que toda marca de agroquímicos hace antes de pedir — respondidas con claridad y con nuestras condiciones reales.',
    guides: [
      {
        title: 'Agroquímicos de marca privada: la guía completa paso a paso',
        body: 'De elegir fabricante a producción — el recorrido completo en seis pasos para nuevas marcas.',
        href: '/news/private-label-agrochemical-guide',
      },
      {
        title: 'MOQ y precios OEM de agroquímicos',
        body: 'Niveles de MOQ desde cantidades de muestra hasta 20+ toneladas de volumen, los factores de coste clave y formas de optimizar costes sin comprometer calidad.',
        href: '/news/agrochemical-oem-moq-pricing',
      },
      {
        title: 'Registro y cumplimiento regulatorio de productos agroquímicos',
        body: 'Qué cubre el registro, la documentación que debes exigir y cómo verificar el cumplimiento para tu mercado de destino.',
        href: '/news/registration-regulatory-agrochemical',
      },
    ],
  },
}

/* ─────────────────────── manufacturing guides (knowledge) ─────────────────────── */

export const manufacturingGuides: Localized<GuidesContent> = {
  en: {
    kicker: 'Manufacturing Guides',
    title: 'From Factory to Finished Product',
    sub: 'The complete sourcing library — every stage of a custom agrochemical project with our real lead times, terms and documentation.',
    guides: [
      {
        title: 'How to Choose an Agrochemical OEM Manufacturer',
        body: 'The audit questions that separate a real factory from a trader: certifications, QC, samples and ownership.',
        href: '/news/how-to-choose-agrochemical-oem-manufacturer',
      },
      {
        title: 'Agrochemical Product Development Timeline',
        body: `Sample in ${FACTS.sampleTime}, production in ${FACTS.leadTime}, registration plus 60-90 days — the full calendar, stage by stage.`,
        href: '/news/custom-agrochemical-development-timeline',
      },
      {
        title: 'Information to Prepare Before Ordering',
        body: 'The five details that let a factory quote accurately on the first pass — and avoid spec rework.',
        href: '/news/info-needed-before-agrochemical-production',
      },
      {
        title: 'Private Label Agrochemicals: The Complete Step-by-Step Guide',
        body: 'From choosing a manufacturer to production — the full six-step journey for new brands.',
        href: '/news/private-label-agrochemical-guide',
      },
      {
        title: 'Agrochemical OEM MOQ and Pricing',
        body: 'MOQ tiers from sample quantities to 20+ ton volume runs, the key cost drivers, and ways to optimize cost without compromising quality.',
        href: '/news/agrochemical-oem-moq-pricing',
      },
      {
        title: 'Registration & Regulatory Compliance for Agrochemical Products',
        body: 'What registration covers, the documentation to demand, and how to verify compliance for your target market.',
        href: '/news/registration-regulatory-agrochemical',
      },
    ],
  },
  es: {
    kicker: 'Guías de fabricación',
    title: 'De la fábrica al producto terminado',
    sub: 'La biblioteca completa de abastecimiento — cada etapa de un proyecto agroquímico a medida con nuestros plazos, condiciones y documentación reales.',
    guides: [
      {
        title: 'Cómo elegir un fabricante OEM de agroquímicos',
        body: 'Las preguntas de auditoría que separan una fábrica real de un intermediario: certificaciones, control de calidad, muestras y propiedad.',
        href: '/news/how-to-choose-agrochemical-oem-manufacturer',
      },
      {
        title: 'Calendario de desarrollo de producto agroquímico',
        body: `Muestra en ${FACTS.sampleTime}, producción en ${FACTS.leadTime}, registro más 60-90 días — el calendario completo, etapa por etapa.`,
        href: '/news/custom-agrochemical-development-timeline',
      },
      {
        title: 'Información para preparar antes de pedir',
        body: 'Los cinco detalles que permiten a una fábrica cotizar con precisión a la primera — y evitar rehacer la especificación.',
        href: '/news/info-needed-before-agrochemical-production',
      },
      {
        title: 'Agroquímicos de marca privada: la guía completa paso a paso',
        body: 'De elegir fabricante a producción — el recorrido completo en seis pasos para nuevas marcas.',
        href: '/news/private-label-agrochemical-guide',
      },
      {
        title: 'MOQ y precios OEM de agroquímicos',
        body: 'Niveles de MOQ desde cantidades de muestra hasta 20+ toneladas de volumen, los factores de coste clave y formas de optimizar costes sin comprometer calidad.',
        href: '/news/agrochemical-oem-moq-pricing',
      },
      {
        title: 'Registro y cumplimiento regulatorio de productos agroquímicos',
        body: 'Qué cubre el registro, la documentación que debes exigir y cómo verificar el cumplimiento para tu mercado de destino.',
        href: '/news/registration-regulatory-agrochemical',
      },
    ],
  },
}

/* ─────────────────────────── FAQ ─────────────────────────── */

export interface FaqItem {
  q: string
  a: string
}

export interface FaqContent {
  kicker: string
  title: string
  sub: string
  items: FaqItem[]
}

export const faq: Localized<FaqContent> = {
  en: {
    kicker: 'FAQ',
    title: 'Manufacturing FAQ',
    sub: 'Questions buyers ask before placing an order — answered with our actual terms.',
    items: [
      {
        q: 'What does Agrospear manufacture?',
        a: `Agrospear is a professional agrochemical manufacturing factory specializing in custom crop protection formulations — herbicides, insecticides, fungicides, plant growth regulators and seed treatment products for global brands and businesses — formulated, sampled and produced in our own ${FACTS.warehouseM2} plant in Qingdao, China.`,
      },
      {
        q: 'What is the difference between OEM and ODM?',
        a: `OEM: we manufacture to your approved specification — your formulation, concentration, packaging and labeling. You own the formulation and intellectual property. ODM: our R&D team develops the formulation from your brief — whether a target crop, pest spectrum or adaptation of a proven formulation — and you approve before production. Private label puts your brand on an existing validated formulation with no formulation changes. Both OEM and ODM routes run through the same plant, QC system and export team; Private Label is the fastest route to a branded product, starting at ${MOQ_SHORT.existingPlatform} with samples in ${FACTS.sampleTime}.`,
      },
      {
        q: 'What is your minimum order quantity?',
        a: `Standard formulations with existing registration start at ${MOQ_SHORT.existingPlatform}; pilot batches with custom packaging from 5 tons. Standard volume production starts at ${MOQ_SHORT.standardRun}. New formulations requiring registration run at the volume tier, with registration adding 60-90 days.`,
      },
      {
        q: 'How long does production take?',
        a: `${FACTS.leadTime} from confirmed PO and deposit. New formulation registration adds 60-90 days. Expedited production is available for seasonal demand.`,
      },
      {
        q: 'How fast can I get a sample?',
        a: `Formulation samples typically ship within ${FACTS.sampleTime} of confirmed specification and packaging requirements.`,
      },
      {
        q: 'What certifications do you hold?',
        a: 'ISO 9001 for quality management, ISO 14001 for environmental management, GMP for agrochemical production, FAO/WHO international pesticide specifications, and REACH compliance for products exported to the EU. Certificate details are available per project on request.',
      },
      {
        q: 'Do you handle export documentation?',
        a: `Yes. Export documentation, MSDS, certificate of analysis and phytosanitary certificates are handled in-house, and we supply brands in ${FACTS.exportCountries} countries across Asia, Africa, LATAM and the EU.`,
      },
      {
        q: 'Will my formulation be shown to other clients?',
        a: 'No. Formulation data, specifications and label files remain your property. We sign an NDA before any file exchange and we never reuse or disclose client formulations or specifications.',
      },
      {
        q: 'Do you sell your own agrochemical brand?',
        a: 'No. We manufacture exclusively under our clients\' brands. We do not sell to end consumers and we do not compete with our clients in any market.',
      },
      {
        q: 'Can you match a product I already sell?',
        a: 'Yes. Send a physical sample or full specification and our R&D team will return a manufacturability report with formulation analysis, concentration, packaging options and cost drivers.',
      },
      {
        q: 'Can you manufacture agrochemicals with our brand label?',
        a: 'Yes. Custom branding — logos, colors, label design and regulatory text — is incorporated into the product labeling and packaging according to the agreed specifications. You own all brand and label files.',
      },
      {
        q: 'Can you develop a completely new agrochemical formulation?',
        a: 'Yes. Custom formulation development starts from your concept, target crop, pest spectrum or market requirements. We work through formulation review, R&D development, stability testing, sample approval and registration support before mass production.',
      },
      {
        q: 'What formulation types do you produce?',
        a: `We manufacture SC (suspension concentrate), EC (emulsifiable concentrate), WP (wettable powder), WDG (water dispersible granule), SL (soluble liquid), ME (micro-emulsion), CS (capsule suspension) and FS (flowable seed treatment) formulations — with ISO 9001, GMP and FAO/WHO compliant quality standards.`,
      },
      {
        q: 'Do you work with new or startup agrochemical brands?',
        a: `Yes. OEM/ODM projects are developed according to your product requirements, target market and volume — pilot runs start at 5 tons and standard volume production at ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'What information should I provide for an agrochemical OEM inquiry?',
        a: 'The most useful information: target crop and pest, desired active ingredient and concentration, formulation type, target market, estimated quantity, packaging requirements and target launch schedule. Our team returns a formulation assessment and quotation within one business day.',
      },
    ],
  },
  es: {
    kicker: 'Preguntas frecuentes',
    title: 'Preguntas sobre fabricación',
    sub: 'Estas son las preguntas que un comprador plantea antes de encargar — respondidas con nuestras condiciones reales.',
    items: [
      {
        q: '¿Qué fabrica Agrospear?',
        a: `Agrospear es una fábrica profesional de agroquímicos especializada en formulaciones personalizadas de protección de cultivos — herbicidas, insecticidas, fungicidas, reguladores de crecimiento y tratamiento de semillas para marcas y empresas globales — formuladas, muestreadas y producidas en nuestra propia planta de ${FACTS.warehouseM2} en Qingdao, China.`,
      },
      {
        q: '¿Cuál es la diferencia entre OEM y ODM?',
        a: `OEM: fabricamos según tu especificación aprobada — tu formulación, concentración, embalaje y etiquetado. Tú eres propietario de la formulación y la propiedad intelectual. ODM: nuestro equipo de I+D desarrolla la formulación a partir de tu brief — ya sea un cultivo objetivo, espectro de plagas o la adaptación de una formulación probada — y tú apruebas antes de la producción. Marca privada pone tu marca en una formulación validada existente sin cambios. Ambas rutas pasan por la misma planta, el mismo sistema de QC y el mismo equipo de exportación; Marca privada es la vía más rápida, desde ${MOQ_SHORT.existingPlatform} y con muestras en ${FACTS.sampleTime}.`,
      },
      {
        q: '¿Cuál es la cantidad mínima de pedido?',
        a: `Las formulaciones estándar con registro existente parten de ${MOQ_SHORT.existingPlatform}; los lotes piloto con embalaje personalizado, de 5 toneladas. La producción de volumen estándar parte de ${MOQ_SHORT.standardRun}. Las nuevas formulaciones que requieren registro se producen en el tramo de volumen, con 60-90 días adicionales de registro.`,
      },
      {
        q: '¿Cuánto tarda la producción?',
        a: `${FACTS.leadTime} desde el PO confirmado y el depósito. El registro de nueva formulación añade 60-90 días. Se dispone de producción acelerada para demanda estacional.`,
      },
      {
        q: '¿Qué rapidez tengo para recibir una muestra?',
        a: `Las muestras de formulación salen en ${FACTS.sampleTime} tras la confirmación de la especificación y los requisitos de embalaje.`,
      },
      {
        q: '¿Qué certificaciones tenéis?',
        a: 'ISO 9001 para gestión de calidad, ISO 14001 para gestión ambiental, GMP para producción de agroquímicos, especificaciones FAO/WHO de pesticidas internacionales y conformidad REACH para productos exportados a la UE. Detalles de certificados disponibles por proyecto a petición.',
      },
      {
        q: '¿Gestionáis la documentación de exportación?',
        a: `Sí. La documentación de exportación, FDS, certificado de análisis y certificados fitosanitarios se gestionan en casa, y suministramos a marcas en ${FACTS.exportCountries} países de Asia, África, LATAM y la UE.`,
      },
      {
        q: '¿Mostraréis mi formulación a otros clientes?',
        a: 'No. Los datos de formulación, especificaciones y archivos de etiqueta siguen siendo de tu propiedad. Firmamos un NDA antes de cualquier intercambio y nunca reutilizamos ni divulgamos formulaciones o especificaciones de clientes.',
      },
      {
        q: '¿Vendéis vuestra propia marca de agroquímicos?',
        a: 'No. Fabricamos exclusivamente bajo las marcas de nuestros clientes. No vendemos a consumidores finales y no competimos con nuestros clientes en ningún mercado.',
      },
      {
        q: '¿Podéis replicar un producto que ya vendo?',
        a: 'Sí. Envíanos una muestra física o una especificación completa y nuestro equipo de I+D te devolverá un informe de fabricabilidad con análisis de formulación, concentración, opciones de embalaje y factores de coste.',
      },
      {
        q: '¿Podéis fabricar agroquímicos con nuestra etiqueta de marca?',
        a: 'Sí. La personalización de marca — logotipos, colores, diseño de etiqueta y texto regulatorio — se incorpora al etiquetado y embalaje según las especificaciones acordadas. Todos los archivos de marca y etiqueta son de tu propiedad.',
      },
      {
        q: '¿Podéis desarrollar una formulación agroquímica completamente nueva?',
        a: 'Sí. El desarrollo de formulaciones personalizadas parte de tu concepto, cultivo objetivo, espectro de plagas o requisitos de mercado. Trabajamos en revisión de formulación, desarrollo de I+D, ensayo de estabilidad, aprobación de muestras y soporte de registro antes de la producción en masa.',
      },
      {
        q: '¿Qué tipos de formulación producís?',
        a: 'Fabricamos formulaciones SC (concentrado en suspensión), EC (concentrado emulsionable), WP (polvo mojable), WDG (gránulos dispersables), SL (líquido soluble), ME (microemulsión), CS (suspensión encapsulada) y FS (tratamiento de semillas fluido) — con estándares de calidad ISO 9001, GMP y FAO/WHO.',
      },
      {
        q: '¿Trabajáis con marcas de agroquímicos nuevas o emergentes?',
        a: `Sí. Los proyectos OEM/ODM se desarrollan según tus requisitos de producto, mercado objetivo y volumen — los pilotos parten de 5 toneladas y la producción de volumen estándar, de ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: '¿Qué información debo dar en una consulta OEM de agroquímicos?',
        a: 'La información más útil: cultivo y plaga objetivo, ingrediente activo y concentración deseados, tipo de formulación, mercado de destino, cantidad estimada, requisitos de embalaje y fecha de lanzamiento prevista. Nuestro equipo responde con una evaluación de formulación y un presupuesto en un día laborable.',
      },
    ],
  },
}

export const homeFaq: Localized<FaqContent> = {
  en: {
    kicker: faq.en.kicker,
    title: faq.en.title,
    sub: faq.en.sub,
    items: [
      faq.en.items[1],
      faq.en.items[2],
      faq.en.items[3],
      faq.en.items[5],
      {
        q: 'Can buyers audit the factory or use third-party inspection?',
        a: 'Yes. We welcome buyer audits and work regularly with SGS, BV, Intertek and CMA. Third-party inspection can be arranged at any production stage — incoming material, in-process or final inspection — and inspection reports are provided on request.',
      },
      {
        q: 'Which countries and regions does Agrospear export to?',
        a: `We supply crop protection products to ${FACTS.exportCountries}+ countries across West and East Africa (Nigeria, Ghana, Guinea, Angola, Kenya, Tanzania), South and Southeast Asia (Pakistan, Bangladesh, Cambodia, Myanmar), the Middle East, Latin America (Brazil, Mexico, Colombia, Argentina) and the EU. Country-specific registration support, multilingual labeling and local documentation packages are available for each market.`,
      },
      {
        q: 'What formulation types and product categories does Agrospear specialize in?',
        a: `We manufacture across eight formulation types — SC (suspension concentrate), EC (emulsifiable concentrate), WP (wettable powder), WDG (water dispersible granule), SL (soluble liquid), ME (micro-emulsion), CS (capsule suspension) and FS (flowable seed treatment) — covering four product categories: herbicides, insecticides, fungicides and plant growth regulators, plus seed treatment formulations. Each formulation type has dedicated production lines and QC protocols in our Qingdao plant.`,
      },
    ],
  },
  es: {
    kicker: faq.es.kicker,
    title: faq.es.title,
    sub: faq.es.sub,
    items: [
      faq.es.items[1],
      faq.es.items[2],
      faq.es.items[3],
      faq.es.items[5],
      {
        q: '¿Pueden los compradores auditar la fábrica o usar inspección de terceros?',
        a: 'Sí. Aceptamos auditorías de compradores y trabajamos regularmente con SGS, BV, Intertek y CMA. La inspección de terceros puede organizarse en cualquier etapa de producción — material entrante, en proceso o inspección final — y los informes de inspección se proporcionan a petición.',
      },
      {
        q: '¿A qué países y regiones exporta Agrospear?',
        a: `Suministramos productos de protección de cultivos a ${FACTS.exportCountries}+ países en África Occidental y Oriental (Nigeria, Ghana, Guinea, Angola, Kenia, Tanzania), Sur y Sudeste Asiático (Pakistán, Bangladés, Camboya, Myanmar), Oriente Medio, América Latina (Brasil, México, Colombia, Argentina) y la UE. Disponemos de soporte de registro específico por país, etiquetado multilingüe y paquetes documentales locales para cada mercado.`,
      },
      {
        q: '¿Qué tipos de formulación y categorías de producto especializa Agrospear?',
        a: 'Fabricamos en ocho tipos de formulación — SC (concentrado en suspensión), EC (concentrado emulsionable), WP (polvo mojable), WDG (gránulos dispersables), SL (líquido soluble), ME (microemulsión), CS (suspensión encapsulada) y FS (tratamiento de semillas fluido) — cubriendo cuatro categorías de producto: herbicidas, insecticidas, fungicidas y reguladores de crecimiento, más formulaciones de tratamiento de semillas. Cada tipo de formulación tiene líneas de producción y protocolos de QC dedicados en nuestra planta de Qingdao.',
      },
    ],
  },
}

/* ─────────────────────────── CTA band ─────────────────────────── */

export interface CtaContent {
  title: string
  body: string
  button: string
  note: string
}

export const cta: Localized<CtaContent> = {
  en: {
    title: 'Ready to Start Your Agrochemical Project?',
    body: `Whether you have a finished specification ready for production or are still exploring formulation options, our team will review your requirements and outline the most practical path forward — from sample development through batch production to export delivery. Share your target crop, pest spectrum, formulation type, volume estimate and destination market, and we'll return a manufacturability assessment and quotation within one business day.`,
    button: 'Start Your Agrochemical Project',
    note: `Reply within ${FACTS.ndaWindow} · NDA on request before file exchange · info@agrospear.com · +86 13395321653`,
  },
  es: {
    title: '¿Listo para iniciar tu proyecto de agroquímicos?',
    body: 'Ya sea que tengas una especificación terminada lista para producir o estés aún explorando opciones de formulación, nuestro equipo revisará tus requisitos y planteará la vía más práctica — desde el desarrollo de muestras hasta la producción en serie y la entrega de exportación. Comparte tu cultivo objetivo, espectro de plagas, tipo de formulación, estimación de volumen y mercado de destino, y te devolveremos una evaluación de fabricabilidad y un presupuesto en un día laborable.',
    button: 'Inicia tu proyecto de agroquímicos',
    note: `Respuesta en ${FACTS.ndaWindow} · NDA disponible antes del intercambio de archivos · info@agrospear.com · +86 13395321653`,
  },
}

/* ─────────────────────────── home: value proposition ─────────────────────────── */

export interface ValuePropCard {
  title: string
  body: string
}

export interface ValuePropContent {
  kicker: string
  title: string
  sub: string
  cards: ValuePropCard[]
}

export const valueProp: Localized<ValuePropContent> = {
  en: {
    kicker: 'Our Role',
    title: 'More Than an Agrochemical Factory',
    sub: 'Many manufacturers can produce a standard formulation. Our role is different. Agrospear is a custom agrochemical formulation development and manufacturing partner, helping businesses move from an initial idea to a production-ready product.',
    cards: [
      {
        title: 'Formulation Development',
        body: 'Turn your concept, target crop, pest spectrum or market requirements into a manufacturable agrochemical formulation.',
      },
      {
        title: 'Custom Manufacturing',
        body: 'Customize formulation concentration, packaging, labeling, regulatory text and batch coding according to your requirements.',
      },
      {
        title: 'Sample Development',
        body: 'Evaluate the formulation before committing to mass production through sample development and analytical testing.',
      },
      {
        title: 'Production Support',
        body: 'Once the formulation is approved, we manage the transition from sample to repeatable batch production.',
      },
      {
        title: 'Quality Control',
        body: 'Quality checks throughout production help ensure that finished products meet the agreed specifications and regulatory standards.',
      },
      {
        title: 'Global Supply',
        body: 'Support with export documentation, MSDS, certificates of analysis and phytosanitary documentation helps simplify the sourcing process.',
      },
    ],
  },
  es: {
    kicker: 'Nuestro papel',
    title: 'Más que una fábrica de agroquímicos',
    sub: 'Muchos fabricantes pueden producir una formulación estándar. Nuestro papel es distinto. Agrospear es un socio de desarrollo de formulaciones y fabricación de agroquímicos personalizados que ayuda a las empresas a pasar de la idea inicial a un producto listo para producir.',
    cards: [
      {
        title: 'Desarrollo de formulación',
        body: 'Convierte tu concepto, cultivo objetivo, espectro de plagas o requisitos de mercado en una formulación agroquímica fabricable.',
      },
      {
        title: 'Fabricación personalizada',
        body: 'Personaliza concentración, embalaje, etiquetado, texto regulatorio y codificación de lote según tus requisitos.',
      },
      {
        title: 'Desarrollo de muestras',
        body: 'Evalúa la formulación antes de comprometerte con la producción en masa mediante muestras y análisis de laboratorio.',
      },
      {
        title: 'Soporte de producción',
        body: 'Una vez aprobada la formulación, gestionamos la transición de la muestra a la producción en serie repetible.',
      },
      {
        title: 'Control de calidad',
        body: 'Los controles de calidad a lo largo de la producción aseguran que el producto final cumpla las especificaciones y estándares regulatorios acordados.',
      },
      {
        title: 'Suministro global',
        body: 'Apoyo con documentación de exportación, FDS, certificados de análisis y documentación fitosanitaria para simplificar el proceso de abastecimiento.',
      },
    ],
  },
}

/* ─────────────────────────── home: role boundary ─────────────────────────── */

export interface BoundaryRow {
  ours: string
  theirs: string
}

export interface BoundaryContent {
  kicker: string
  title: string
  sub: string
  oursTitle: string
  theirsTitle: string
  rows: BoundaryRow[]
  footer: string
}

export const boundary: Localized<BoundaryContent> = {
  en: {
    kicker: 'Who We Are',
    title: 'Built by an Agrochemical Factory, Not a Trading Platform',
    sub: 'We are a manufacturing partner, not a marketplace. Our role is to help customers turn ideas, formulations and product requirements into manufacturable agrochemical products. You own your brand. You control your market. We support production execution.',
    oursTitle: 'We handle',
    theirsTitle: 'You keep',
    rows: [
      { ours: 'Specification review and manufacturability assessment', theirs: 'Brand name, identity and positioning' },
      { ours: 'Formulation development, materials selection, R&D', theirs: 'Pricing, channels and sales' },
      { ours: 'Label artwork prepress and production from your brand files', theirs: 'Ownership of all brand and label files' },
      { ours: 'Sample development, analytical testing and approval documentation', theirs: 'Final approval on every sample' },
      { ours: 'Batch production, in-process QC and final inspection', theirs: 'Your market, your customers, your data' },
      { ours: 'Registration documentation, MSDS and export-grade packing', theirs: 'End-customer relationships and after-sales' },
    ],
    footer:
      'Your formulation data, specifications and label files remain your property and are never reused, resold or shown to another client.',
  },
  es: {
    kicker: 'Quiénes somos',
    title: 'Construido por una fábrica de agroquímicos, no por una plataforma comercial',
    sub: 'Somos un socio de fabricación, no un marketplace. Nuestro papel es ayudar a los clientes a convertir ideas, formulaciones y requisitos de producto en productos agroquímicos fabricables. Tú eres dueño de tu marca. Tú controlas tu mercado. Nosotros ejecutamos la producción.',
    oursTitle: 'Nosotros nos encargamos',
    theirsTitle: 'Tú conservas',
    rows: [
      { ours: 'Revisión de especificaciones y evaluación de fabricabilidad', theirs: 'Nombre, identidad y posicionamiento de marca' },
      { ours: 'Desarrollo de formulación, selección de materiales e I+D', theirs: 'Precios, canales y ventas' },
      { ours: 'Preimpresión de etiqueta e impresión desde tus archivos de marca', theirs: 'Propiedad de todos los archivos de marca y etiqueta' },
      { ours: 'Desarrollo de muestras, análisis de laboratorio y documentación de aprobación', theirs: 'Aprobación final de cada muestra' },
      { ours: 'Producción por lotes, QC en proceso e inspección final', theirs: 'Tu mercado, tus clientes, tus datos' },
      { ours: 'Documentación de registro, FDS y embalaje de exportación', theirs: 'Relaciones con el cliente final y posventa' },
    ],
    footer:
      'Tus datos de formulación, especificaciones y archivos de etiqueta siguen siendo de tu propiedad y nunca se reutilizan, revenden ni muestran a otro cliente.',
  },
}

/* ─────────────────────────── about page ─────────────────────────── */

export interface AboutContent {
  kicker: string
  title: string
  sub: string
  story: string[]
  values: { title: string; body: string }[]
  capabilities: string[]
  stats: { value: string; label: string }[]
  strength: { title: string; body: string }[]
  partnering: { title: string; body: string[] }
}

export const about: Localized<AboutContent> = {
  en: {
    kicker: 'About Us',
    title: 'About Agrospear',
    sub: 'Your Custom Agrochemical Manufacturing Partner',
    story: [
      `We are an agrochemical OEM/ODM factory that has spent years producing crop protection formulations for brands, distributors and sourcing teams around the world. Along the way, we kept meeting the same kind of customer — brands and buyers with a clear product vision but no in-house plant to formulate and produce it.`,
      `So we built Agrospear around them. Tiered minimums from 1-ton standard formulation runs, complete formulation R&D and design support, and a manufacturing team that treats your first order as seriously as your hundredth. You bring the brand; we run the factory.`,
    ],
    values: [
      {
        title: 'Quality First',
        body: 'Every batch passes multi-point QC — raw materials, formulation, filling, labeling, packaging and analytical testing are checked at every stage of production.',
      },
      {
        title: 'Manufacturer, Not Middleman',
        body: 'Formulation R&D, analytical lab, production, filling and testing all happen under one roof — no trading-desk gap between you and the plant.',
      },
      {
        title: 'Flexible by Design',
        body: 'Tiered MOQs, modular formulation options and honest lead times let brands grow from trial orders to volume runs.',
      },
    ],
    capabilities: ['OEM / ODM / private label', 'Formulation R&D', 'Sample service', 'Label & packaging design', 'Multi-point QC', 'Export documentation'],
    stats: [
      { value: MOQ_SHORT.standardRun, label: 'Standard volume MOQ (per approved formulation)' },
      { value: FACTS.sampleTime, label: 'Sample lead time' },
      { value: FACTS.leadTime, label: 'Production lead time' },
      { value: '5 tons', label: 'Pilot order MOQ' },
    ],
    strength: [
      {
        title: 'Formulation Development',
        body: 'From target crop and pest spectrum to production-ready formulation — our R&D team refines active ingredient, concentration, adjuvants and formulation type to hit your target performance and price.',
      },
      {
        title: 'OEM Manufacturing',
        body: `Build your exact specification: formulation, concentration, label design, packaging and regulatory text, in standard volume batches from ${MOQ_SHORT.standardRun} per approved formulation.`,
      },
      {
        title: 'ODM Solutions',
        body: 'Start from our proven in-house formulations — herbicides, insecticides, fungicides, PGRs and seed treatments — and customize branding, labeling and packaging for a fast, low-risk launch.',
      },
      {
        title: 'R&D Support',
        body: 'Formulation development, stability testing and sample iteration under one roof, with analytical data and label approvals at every milestone before mass production.',
      },
      {
        title: 'Quality Management',
        body: 'Multi-point QC across raw materials, formulation, filling, labeling and packaging, plus on-sample and pre-shipment inspections you can book as a third party.',
      },
      {
        title: 'Global Delivery',
        body: `Export documentation, MSDS, certificates of analysis and phytosanitary certificates handled in-house for brands in ${FACTS.exportCountries} markets.`,
      },
    ],
    partnering: {
      title: 'Partnering With Global Businesses',
      body: [
        `Agrospear works with agrochemical brands, distributors, importers and government procurement agencies that need a reliable crop protection factory — from a first trial order to container-scale programs.`,
        'Tell us your market and target price, and we respond with a spec sheet, MOQ and lead times for your specific business model.',
      ],
    },
  },
  es: {
    kicker: 'Sobre nosotros',
    title: 'Sobre Agrospear',
    sub: 'Tu socio de fabricación de agroquímicos a medida',
    story: [
      'Somos una fábrica OEM/ODM de agroquímicos que lleva años produciendo formulaciones de protección de cultivos para marcas, distribuidores y equipos de compra de todo el mundo. En el camino, nos encontrábamos una y otra vez con el mismo tipo de cliente: marcas y compradores con un plan de producto claro pero sin planta productiva propia.',
      'Por eso construimos Agrospear a su alrededor. Pedidos mínimos por tramos desde 1 tonelada en formulaciones estándar, soporte de I+D y diseño de formulación completo, y un equipo de fabricación que trata tu primer pedido con la misma seriedad que el centésimo. Tú traes la marca; nosotros dirigimos la fábrica.',
    ],
    values: [
      {
        title: 'Calidad primero',
        body: 'Cada lote supera un control de calidad multipunto: materias primas, formulación, llenado, etiquetado, embalaje y análisis se revisan en cada etapa de la producción.',
      },
      {
        title: 'Fabricante, no intermediario',
        body: 'I+D de formulación, laboratorio analítico, producción, llenado y ensayos ocurren bajo el mismo techo: sin mesas de negociación entre tú y la planta.',
      },
      {
        title: 'Flexibles por diseño',
        body: 'MOQ por tramos, opciones modulares de formulación y plazos reales permiten crecer del pedido de prueba a la serie por volumen.',
      },
    ],
    capabilities: ['OEM / ODM y marca privada', 'I+D de formulación', 'Servicio de muestras', 'Diseño de etiqueta y embalaje', 'QC multipunto', 'Documentación de exportación'],
    stats: [
      { value: MOQ_SHORT.standardRun, label: 'MOQ de volumen estándar (por formulación aprobada)' },
      { value: FACTS.sampleTime, label: 'Plazo de muestras' },
      { value: FACTS.leadTime, label: 'Plazo de producción' },
      { value: '5 toneladas', label: 'MOQ de pedido piloto' },
    ],
    strength: [
      {
        title: 'Desarrollo de formulación',
        body: 'Del cultivo objetivo y espectro de plagas a la formulación lista para producir — nuestro equipo de I+D ajusta ingrediente activo, concentración, coadyuvantes y tipo de formulación para alcanzar tu rendimiento y precio objetivo.',
      },
      {
        title: 'Fabricación OEM',
        body: `Construimos tu especificación exacta: formulación, concentración, diseño de etiqueta, embalaje y texto regulatorio, en lotes de volumen estándar a partir de ${MOQ_SHORT.standardRun} por formulación aprobada.`,
      },
      {
        title: 'Soluciones ODM',
        body: 'Parte de nuestras formulaciones probadas — herbicidas, insecticidas, fungicidas, PGR y tratamiento de semillas — y personaliza marca, etiquetado y embalaje para un lanzamiento rápido y de bajo riesgo.',
      },
      {
        title: 'Soporte de I+D',
        body: 'Desarrollo de formulación, ensayo de estabilidad e iteración de muestras bajo el mismo techo, con datos analíticos y aprobaciones de etiqueta en cada hito antes de la producción en serie.',
      },
      {
        title: 'Gestión de calidad',
        body: 'QC multipunto en materias primas, formulación, llenado, etiquetado y embalaje, más inspecciones sobre muestra y previas al envío que puedes contratar como tercero.',
      },
      {
        title: 'Entrega global',
        body: `Documentación de exportación, FDS, certificados de análisis y certificados fitosanitarios gestionados en casa para marcas en ${FACTS.exportCountries} mercados.`,
      },
    ],
    partnering: {
      title: 'Colaboramos con empresas de todo el mundo',
      body: [
        'Agrospear trabaja con marcas de agroquímicos, distribuidores, importadores y agencias de compras gubernamentales que necesitan una fábrica de protección de cultivos fiable — desde el primer pedido de prueba hasta programas de producción por volumen.',
        'Cuéntanos tu mercado y tu precio objetivo, y te responderemos con una ficha de especificaciones, MOQ y plazos para tu modelo de negocio.',
      ],
    },
  },
}

/* ─────────────────────────── customizer page ─────────────────────────── */

export interface CustomizerContent {
  kicker: string
  title: string
  sub: string
  status: string
  statusBody: string
  steps: { title: string; body: string }[]
  mockupLabel: string
  mockupBrand: string
  stepLabel: string
  productLabel: string
  cta: string
}

export const customizer: Localized<CustomizerContent> = {
  en: {
    kicker: 'Design Your Formulation',
    title: 'Visualize Your Agrochemical Product Before Production',
    sub: 'Preview how your brand will look on a real product label — choose your formulation, packaging and regulatory details, then send us your brand files for a complete label design.',
    status: 'Interactive Preview',
    statusBody: 'Try the options now, then send us your idea — our team will create a free mockup of your complete label and packaging.',
    steps: [
      { title: 'Choose formulation', body: 'From herbicides to insecticides and fungicides — each with realistic concentration ranges and formulation types.' },
      { title: 'Select packaging', body: 'Pick your container type and size, from 100 mL bottles to 1000 L IBCs.' },
      { title: 'Configure label', body: 'Place your logo and regulatory text on the label — adjust layout and compliance details.' },
      { title: 'Generate mockup', body: 'Export a preview of your custom agrochemical product to share with your team.' },
    ],
    mockupLabel: 'Live label preview',
    mockupBrand: 'Glyphosate 480g/L SL',
    stepLabel: 'Step',
    productLabel: 'YOUR BRAND',
    cta: 'Create Your Design',
  },
  es: {
    kicker: 'Diseña tu formulación',
    title: 'Visualiza tu producto agroquímico antes de la producción',
    sub: 'Previsualiza cómo se verá tu marca en una etiqueta real: elige tu formulación, embalaje y detalles regulatorios, y envíanos tus archivos de marca para un diseño de etiqueta completo.',
    status: 'Vista previa interactiva',
    statusBody: 'Prueba las opciones ahora y luego envíanos tu idea: nuestro equipo creará un mockup gratuito de tu etiqueta y embalaje completos.',
    steps: [
      { title: 'Elige la formulación', body: 'De herbicidas a insecticidas y fungicidas, cada una con rangos de concentración y tipos de formulación realistas.' },
      { title: 'Selecciona el embalaje', body: 'Elige el tipo y tamaño de envase, desde botellas de 100 mL hasta IBC de 1000 L.' },
      { title: 'Configura la etiqueta', body: 'Coloca tu logo y texto regulatorio en la etiqueta: ajusta el diseño y los detalles de cumplimiento.' },
      { title: 'Genera el mockup', body: 'Exporta una vista previa de tu producto agroquímico personalizado para compartirla con tu equipo.' },
    ],
    mockupLabel: 'Vista previa de etiqueta en vivo',
    mockupBrand: 'Glifosato 480g/L SL',
    stepLabel: 'Paso',
    productLabel: 'TU MARCA',
    cta: 'Crea tu diseño',
  },
}

/* ─────────────────────────── products page extras ─────────────────────────── */

export interface ProductsPageContent {
  kicker: string
  title: string
  sub: string
  customTitle: string
  customBody: string
  customPoints: string[]
}

export const productsPage: Localized<ProductsPageContent> = {
  en: {
    kicker: 'Product Formulations',
    title: 'Agrochemical Formulations Available For Customization',
    sub: 'Each formulation below is a manufacturing platform. Choose one as your starting point and we\'ll adapt the concentration, packaging, labeling and specs to your product.',
    customTitle: 'Every Product Can Be Customized',
    customBody: 'Nothing ships off-the-shelf. Each formulation is produced for you with your choices at every layer.',
    customPoints: ['Active ingredient & concentration', 'Formulation type & adjuvants', 'Label design & regulatory text', 'Packaging size & export documentation'],
  },
  es: {
    kicker: 'Formulaciones de producto',
    title: 'Formulaciones agroquímicas disponibles para personalización',
    sub: 'Cada formulación de abajo es una plataforma de fabricación. Elige una como punto de partida y adaptaremos la concentración, el embalaje, el etiquetado y las especificaciones a tu producto.',
    customTitle: 'Cada producto se puede personalizar',
    customBody: 'Nada sale de fábrica en serie. Cada formulación se produce para ti con tus elecciones en cada capa.',
    customPoints: ['Ingrediente activo y concentración', 'Tipo de formulación y coadyuvantes', 'Diseño de etiqueta y texto regulatorio', 'Tamaño de embalaje y documentación de exportación'],
  },
}

/* ─────────────────────────── catalog download (email capture) ─────────────────────────── */

export interface CatalogContent {
  kicker: string
  title: string
  body: string
  emailLabel: string
  emailPlaceholder: string
  submit: string
  secure: string
  successTitle: string
  successBody: string
}

export const catalogDownload: Localized<CatalogContent> = {
  en: {
    kicker: 'Product Catalog',
    title: 'Get the full formulation catalog and MOQ sheet',
    body: 'All formulations with specifications, packaging options, MOQ tiers, sample timing and registration status — sent to your inbox by our sales team within one business day.',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@yourcompany.com',
    submit: 'Request the Catalog',
    secure: 'No spam. Only the catalog and answers to your project.',
    successTitle: 'Request received',
    successBody: 'Our sales team will send the full formulation catalog and MOQ sheet to {email} within one business day.',
  },
  es: {
    kicker: 'Catálogo de productos',
    title: 'Recibe el catálogo completo de formulaciones y la ficha de MOQ',
    body: 'Todas las formulaciones con especificaciones, opciones de embalaje, MOQ escalonados, tiempos de muestreo y estado de registro — enviados a tu correo por nuestro equipo comercial en un día laborable.',
    emailLabel: 'Correo de trabajo',
    emailPlaceholder: 'tu@tuempresa.com',
    submit: 'Solicitar el catálogo',
    secure: 'Sin spam. Solo el catálogo y respuestas sobre tu proyecto.',
    successTitle: 'Solicitud recibida',
    successBody: 'Nuestro equipo comercial enviará el catálogo completo de formulaciones y la ficha de MOQ a {email} en un día laborable.',
  },
}

/* ─────────────────────────── gallery page extras ─────────────────────────── */

export interface GalleryPageContent {
  kicker: string
  title: string
  sub: string
  note: string
}

export const galleryPage: Localized<GalleryPageContent> = {
  en: {
    kicker: 'Customized Agrochemical Projects',
    title: 'Customized Agrochemical Projects',
    sub: 'A look at how agrochemical products come to life — from client requirements to finished formulations.',
    note: 'Want your project featured here? Start a conversation and let\'s design it together.',
  },
  es: {
    kicker: 'Proyectos agroquímicos personalizados',
    title: 'Proyectos agroquímicos personalizados',
    sub: 'Una mirada a cómo los productos agroquímicos cobran vida: de los requisitos del cliente a las formulaciones terminadas.',
    note: '¿Quieres que tu proyecto aparezca aquí? Inicia una conversación y diseñémoslo juntos.',
  },
}

/* ─────────────────────────── who-we-serve page extras ─────────────────────────── */

export interface ServePageContent {
  kicker: string
  title: string
  sub: string
}

export const servePage: Localized<ServePageContent> = {
  en: {
    kicker: 'Customer Needs',
    title: 'Custom Agrochemical Solutions For Your Business',
    sub: 'Whether you need branded formulations for your organization or customized agrochemical products for your business, we help turn requirements into finished products.',
  },
  es: {
    kicker: 'Necesidades del cliente',
    title: 'Soluciones agroquímicas personalizadas para tu negocio',
    sub: 'Ya sea que necesites formulaciones con marca para tu organización o productos agroquímicos personalizados para tu negocio, te ayudamos a convertir los requisitos en productos terminados.',
  },
}

/* ─────────────────────────── how-it-works page extras ─────────────────────────── */

export interface WorksPageContent {
  kicker: string
  title: string
  sub: string
  consultTitle: string
  consultBody: string
}

export const worksPage: Localized<WorksPageContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Product',
    sub: 'Requirement intake, formulation review, sampling, production and export — every step inside our own plant.',
    consultTitle: 'Start With a Specification Review',
    consultBody: 'Send us your spec, target crop or reference product. We return a manufacturability assessment and a quotation — no obligation.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al producto terminado',
    sub: 'Recepción de requisitos, revisión de formulación, muestras, producción en serie y exportación — cada paso dentro de nuestra propia planta.',
    consultTitle: 'Empieza con una revisión de especificación',
    consultBody: 'Envíanos tu especificación, cultivo objetivo o producto de referencia. Te devolvemos una evaluación de fabricabilidad y un presupuesto, sin compromiso.',
  },
}

/* ─────────────────────────── signature series (home) ─────────────────────────── */

export interface SeriesItem {
  title: string
  sku: string
  body: string
  image: string
  href: string
}

export interface SeriesContent {
  kicker: string
  title: string
  sub: string
  items: SeriesItem[]
}

export const series: Localized<SeriesContent> = {
  en: {
    kicker: 'Featured Formulations',
    title: 'Proven Formulation Platforms',
    sub: 'Field-proven formulations ready for your private label — from broad-spectrum herbicides to systemic insecticides with full registration data packages.',
    items: [
      {
        title: 'Glyphosate 480g/L SL — The Non-Selective Standard',
        sku: 'AGRO-GLY480',
        body: 'Our most widely produced herbicide formulation — broad-spectrum non-selective weed control for agricultural and non-crop applications, with registration data available for 40+ markets.',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
        href: '/products/glyphosate-480-sl',
      },
      {
        title: 'Imidacloprid 350g/L SC — Systemic Insecticide',
        sku: 'AGRO-IMI350',
        body: 'Broad-spectrum systemic insecticide for sucking and chewing pests in cotton, rice, vegetables and fruit crops — suspension concentrate with excellent foliar coverage and rainfastness.',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif',
        href: '/products/imidacloprid-350-sc',
      },
    ],
  },
  es: {
    kicker: 'Formulaciones destacadas',
    title: 'Plataformas de formulación probadas',
    sub: 'Formulaciones probadas en campo listas para tu marca propia — desde herbicidas de amplio espectro hasta insecticidas sistémicos con paquetes completos de datos de registro.',
    items: [
      {
        title: 'Glifosato 480g/L SL — El estándar no selectivo',
        sku: 'AGRO-GLY480',
        body: 'Nuestra formulación de herbicida más producida: control de malezas no selectivo de amplio espectro para aplicaciones agrícolas y no agrícolas, con datos de registro disponibles para 40+ mercados.',
        image: 'https://assets.agrospear.com/site/products/2026/herbicides/glyphosate-480-sl.avif',
        href: '/products/glyphosate-480-sl',
      },
      {
        title: 'Imidacloprid 350g/L SC — Insecticida sistémico',
        sku: 'AGRO-IMI350',
        body: 'Insecticida sistémico de amplio espectro para plagas chupadoras y masticadoras en algodón, arroz, hortalizas y frutales — concentrado en suspensión con excelente cobertura foliar y resistencia a la lluvia.',
        image: 'https://assets.agrospear.com/site/products/2026/insecticides/imidacloprid-350-sc.avif',
        href: '/products/imidacloprid-350-sc',
      },
    ],
  },
}
