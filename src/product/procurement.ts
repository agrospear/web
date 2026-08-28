import type { Localized } from './content'
import { FACTS, MOQ_SHORT } from './facts'

/**
 * B2B procurement profiles for the series platform pages (/products/{series}).
 *
 * Backed by the category engineering & sourcing matrix (Agrospear,
 * SPEC-CAT-2026-V1): formulation type, concentration, capacity and buyer fit per
 * platform. MOQ / lead-time figures stay aligned with FACTS (single source of
 * truth); commercial wording follows the site's RFQ triage guidance.
 */

export interface ProcurementRow {
  label: string
  value: string
}

export interface ProcurementProfile {
  bestFor: string
  sizes: string
  formulation: string
  customization: string
  moq: string
  leadTime: string
  specRows: ProcurementRow[]
  keyQuestions: string[]
}

export const procurementProfiles: Localized<Record<string, ProcurementProfile>> = {
  en: {
    herbicide: {
      bestFor: 'Crop protection distributors, agrochemical brands & large-scale farming operations',
      sizes: '1–20 L HDPE / 200 L drum / IBC tote',
      formulation: 'SC, EC, WP, WDG, SL formulation types',
      customization: 'Active ingredient, concentration, adjuvant system, label design & packaging',
      moq: `From ${MOQ_SHORT.standardRun} tons per project — pilot runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Selective & non-selective weed control, broad-acre & row crop applications' },
        { label: 'Formulation types', value: 'SC, EC, WP, WDG, SL' },
        { label: 'Active concentration', value: 'Spec per formulation / ≥95% technical grade' },
        { label: 'Packaging', value: '1–20 L HDPE / 200 L drum / IBC tote options' },
        { label: 'Standard package', value: 'Labeled containers, COA, SDS, and regulatory documentation' },
      ],
      keyQuestions: [
        'Target crop and weed spectrum',
        'Selective or non-selective mode of action',
        'Preferred formulation type and concentration',
      ],
    },
    insecticide: {
      bestFor: 'Insect control brands, IPM program suppliers & vector control agencies',
      sizes: '1–20 L HDPE / 200 L drum / IBC tote',
      formulation: 'SC, EC, WDG, ME formulation types',
      customization: 'Active ingredient, concentration, adjuvant system, label design & packaging',
      moq: `From ${MOQ_SHORT.standardRun} tons per project — pilot runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Chewing & sucking insect control, public health vector programs' },
        { label: 'Formulation types', value: 'SC, EC, WDG, ME' },
        { label: 'Active concentration', value: 'Spec per formulation / ≥95% technical grade' },
        { label: 'Packaging', value: '1–20 L HDPE / 200 L drum / IBC tote options' },
        { label: 'Standard package', value: 'Labeled containers, COA, SDS, and regulatory documentation' },
      ],
      keyQuestions: [
        'Target pest complex and crop',
        'Systemic, contact or translaminar activity',
        'Resistance management and IRAC class',
      ],
    },
    fungicide: {
      bestFor: 'Fungicide brands, greenhouse operations & specialty crop suppliers',
      sizes: '1–20 L HDPE / 200 L drum / IBC tote',
      formulation: 'SC, WP, WDG, FS formulation types',
      customization: 'Active ingredient, concentration, adjuvant system, label design & packaging',
      moq: `From ${MOQ_SHORT.standardRun} tons per project — pilot runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Preventive & curative disease control, foliar & seed treatment applications' },
        { label: 'Formulation types', value: 'SC, WP, WDG, FS' },
        { label: 'Active concentration', value: 'Spec per formulation / ≥95% technical grade' },
        { label: 'Packaging', value: '1–20 L HDPE / 200 L drum / IBC tote options' },
        { label: 'Standard package', value: 'Labeled containers, COA, SDS, and regulatory documentation' },
      ],
      keyQuestions: [
        'Target pathogen and crop',
        'Preventive or curative timing',
        'FRAC resistance management class',
      ],
    },
    pgr: {
      bestFor: 'Plant growth regulator brands, horticulture suppliers & specialty agriculture',
      sizes: '1–20 L HDPE / 200 L drum',
      formulation: 'SL, ME, SC formulation types',
      customization: 'Active ingredient, concentration, adjuvant system, label design & packaging',
      moq: `From ${MOQ_SHORT.standardRun} tons per project — pilot runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Growth regulation, fruit setting, ripening control & stress mitigation' },
        { label: 'Formulation types', value: 'SL, ME, SC' },
        { label: 'Active concentration', value: 'Spec per formulation / ≥95% technical grade' },
        { label: 'Packaging', value: '1–20 L HDPE / 200 L drum options' },
        { label: 'Standard package', value: 'Labeled containers, COA, SDS, and regulatory documentation' },
      ],
      keyQuestions: [
        'Target crop and growth stage',
        'Stimulant or suppressant mode of action',
        'Application timing and dose rate',
      ],
    },
    'seed-treatment': {
      bestFor: 'Seed treatment brands, seed companies & coating service providers',
      sizes: '1–20 L HDPE / 200 L drum / IBC tote',
      formulation: 'FS flowable seed treatment formulation',
      customization: 'Active ingredient, film-former, colourant, label design & packaging',
      moq: `From ${MOQ_SHORT.standardRun} tons per project — pilot runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Seed coating, pelleting & treatment for cereals, vegetables & cash crops' },
        { label: 'Formulation types', value: 'FS (Flowable Seed Treatment)' },
        { label: 'Active concentration', value: 'Spec per formulation / ≥95% technical grade' },
        { label: 'Film-former & colourant', value: 'Custom polymer system and visual identification colour' },
        { label: 'Packaging', value: '1–20 L HDPE / 200 L drum / IBC tote options' },
        { label: 'Standard package', value: 'Labeled containers, COA, SDS, and regulatory documentation' },
      ],
      keyQuestions: [
        'Target seed species and treatment type',
        'Insecticide, fungicide or combination',
        'Film-former and colourant requirements',
      ],
    },
    adjuvant: {
      bestFor: 'Adjuvant brands, tank-mix suppliers & formulation co-formulant distributors',
      sizes: '1–20 L HDPE / 200 L drum / IBC tote',
      formulation: 'Non-ionic surfactant, MSO, drift control & compatibility agents',
      customization: 'Surfactant type, HLB range, concentration, label design & packaging',
      moq: `From ${MOQ_SHORT.standardRun} tons per project — pilot runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Tank-mix adjuvants, built-in co-formulants & spray enhancement agents' },
        { label: 'Product types', value: 'Non-ionic surfactants, MSO adjuvants, drift control agents' },
        { label: 'HLB range', value: '12–15 (standard non-ionic) / custom specified' },
        { label: 'Packaging', value: '1–20 L HDPE / 200 L drum / IBC tote options' },
        { label: 'Standard package', value: 'Labeled containers, COA, SDS, and regulatory documentation' },
      ],
      keyQuestions: [
        'Adjuvant class (surfactant, oil, drift control)',
        'Target tank-mix partner formulations',
        'Application method (aerial, ground, chemigation)',
      ],
    },
    biopesticide: {
      bestFor: 'Biopesticide brands, organic agriculture suppliers & IPM programs',
      sizes: '1–20 L HDPE / 200 L drum',
      formulation: 'Microbial, botanical & semiochemical-based formulations',
      customization: 'Active organism, potency, carrier system, label design & packaging',
      moq: `From ${MOQ_SHORT.standardRun} tons per project — pilot runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Organic crop protection, resistance management & residue-reduced programs' },
        { label: 'Formulation types', value: 'WP, WDG, SC (microbial), botanical extracts' },
        { label: 'Potency / viability', value: 'Spec per organism / CFU count per gram or mL' },
        { label: 'Packaging', value: '1–20 L HDPE / 200 L drum options' },
        { label: 'Standard package', value: 'Labeled containers, COA, SDS, and regulatory documentation' },
      ],
      keyQuestions: [
        'Target pest or pathogen',
        'Microbial strain or botanical active',
        'Organic certification requirements',
      ],
    },
    mixture: {
      bestFor: 'Premix & tank-mix brands, combination product distributors & multi-target programs',
      sizes: '1–20 L HDPE / 200 L drum / IBC tote',
      formulation: 'CS capsule suspension & multi-AI premix formulations',
      customization: 'Dual-active combination, ratio, adjuvant system, label design & packaging',
      moq: `From ${MOQ_SHORT.standardRun} tons per project — pilot runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Resistance management premixes, broad-spectrum tank-mixes & multi-target programs' },
        { label: 'Formulation types', value: 'CS, SC, ZC (CS + SC combination)' },
        { label: 'Active concentration', value: 'Spec per formulation / ≥95% technical grade per AI' },
        { label: 'Packaging', value: '1–20 L HDPE / 200 L drum / IBC tote options' },
        { label: 'Standard package', value: 'Labeled containers, COA, SDS, and regulatory documentation' },
      ],
      keyQuestions: [
        'Target pest/disease complex requiring dual mode of action',
        'Preferred AI combination and ratio',
        'Resistance management and IRAC/FRAC class pairing',
      ],
    },
  },
  es: {
    herbicide: {
      bestFor: 'Distribuidores de protección de cultivos, marcas de agroquímicos y operaciones agrícolas a gran escala',
      sizes: 'HDPE 1–20 L / tambor 200 L / IBC',
      formulation: 'Formulaciones tipo SC, EC, WP, WDG, SL',
      customization: 'Ingrediente activo, concentración, sistema de adyuvantes, diseño de etiqueta y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} t por proyecto — pruebas piloto desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Control selectivo y no selectivo de malezas, aplicaciones en extensivos y hortícolas' },
        { label: 'Tipos de formulación', value: 'SC, EC, WP, WDG, SL' },
        { label: 'Concentración activa', value: 'Espec por formulación / ≥95% grado técnico' },
        { label: 'Embalaje', value: 'HDPE 1–20 L / tambor 200 L / IBC' },
        { label: 'Paquete estándar', value: 'Contenedores etiquetados, COA, SDS y documentación reglamentaria' },
      ],
      keyQuestions: [
        'Cultivo objetivo y espectro de malezas',
        'Modo de acción selectivo o no selectivo',
        'Tipo de formulación y concentración preferidos',
      ],
    },
    insecticide: {
      bestFor: 'Marcas de control de insectos, proveedores de programas MIP y agencias de control vectorial',
      sizes: 'HDPE 1–20 L / tambor 200 L / IBC',
      formulation: 'Formulaciones tipo SC, EC, WDG, ME',
      customization: 'Ingrediente activo, concentración, sistema de adyuvantes, diseño de etiqueta y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} t por proyecto — pruebas piloto desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Control de insectos masticadores y chupadores, programas de salud pública' },
        { label: 'Tipos de formulación', value: 'SC, EC, WDG, ME' },
        { label: 'Concentración activa', value: 'Espec por formulación / ≥95% grado técnico' },
        { label: 'Embalaje', value: 'HDPE 1–20 L / tambor 200 L / IBC' },
        { label: 'Paquete estándar', value: 'Contenedores etiquetados, COA, SDS y documentación reglamentaria' },
      ],
      keyQuestions: [
        'Complejo de plagas y cultivo objetivo',
        'Actividad sistémica, de contacto o translaminar',
        'Manejo de resistencia y clase IRAC',
      ],
    },
    fungicide: {
      bestFor: 'Marcas de fungicidas, operaciones en invernadero y proveedores de cultivos especiales',
      sizes: 'HDPE 1–20 L / tambor 200 L / IBC',
      formulation: 'Formulaciones tipo SC, WP, WDG, FS',
      customization: 'Ingrediente activo, concentración, sistema de adyuvantes, diseño de etiqueta y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} t por proyecto — pruebas piloto desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Control preventivo y curativo de enfermedades, aplicaciones foliares y tratamiento de semillas' },
        { label: 'Tipos de formulación', value: 'SC, WP, WDG, FS' },
        { label: 'Concentración activa', value: 'Espec por formulación / ≥95% grado técnico' },
        { label: 'Embalaje', value: 'HDPE 1–20 L / tambor 200 L / IBC' },
        { label: 'Paquete estándar', value: 'Contenedores etiquetados, COA, SDS y documentación reglamentaria' },
      ],
      keyQuestions: [
        'Patógeno y cultivo objetivo',
        'Momento preventivo o curativo',
        'Clase FRAC de manejo de resistencia',
      ],
    },
    pgr: {
      bestFor: 'Marcas de reguladores de crecimiento, proveedores de horticultura y agricultura especializada',
      sizes: 'HDPE 1–20 L / tambor 200 L',
      formulation: 'Formulaciones tipo SL, ME, SC',
      customization: 'Ingrediente activo, concentración, sistema de adyuvantes, diseño de etiqueta y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} t por proyecto — pruebas piloto desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Regulación del crecimiento, cuajado de fruto, control de maduración y mitigación de estrés' },
        { label: 'Tipos de formulación', value: 'SL, ME, SC' },
        { label: 'Concentración activa', value: 'Espec por formulación / ≥95% grado técnico' },
        { label: 'Embalaje', value: 'HDPE 1–20 L / tambor 200 L' },
        { label: 'Paquete estándar', value: 'Contenedores etiquetados, COA, SDS y documentación reglamentaria' },
      ],
      keyQuestions: [
        'Cultivo objetivo y estado fenológico',
        'Modo de acción estimulante o supresor',
        'Momento de aplicación y dosis',
      ],
    },
    'seed-treatment': {
      bestFor: 'Marcas de tratamiento de semillas, empresas semilleras y proveedores de servicios de recubrimiento',
      sizes: 'HDPE 1–20 L / tambor 200 L / IBC',
      formulation: 'Formulación FS de tratamiento de semillas fluido',
      customization: 'Ingrediente activo, formador de película, colorante, diseño de etiqueta y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} t por proyecto — pruebas piloto desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Recubrimiento, peletizado y tratamiento de semillas para cereales, hortalizas y cultivos industriales' },
        { label: 'Tipos de formulación', value: 'FS (tratamiento de semillas fluido)' },
        { label: 'Concentración activa', value: 'Espec por formulación / ≥95% grado técnico' },
        { label: 'Formador de película y colorante', value: 'Sistema polimérico personalizado y color de identificación visual' },
        { label: 'Embalaje', value: 'HDPE 1–20 L / tambor 200 L / IBC' },
        { label: 'Paquete estándar', value: 'Contenedores etiquetados, COA, SDS y documentación reglamentaria' },
      ],
      keyQuestions: [
        'Especie de semilla y tipo de tratamiento',
        'Insecticida, fungicida o combinación',
        'Requisitos de formador de película y colorante',
      ],
    },
    adjuvant: {
      bestFor: 'Marcas de adyuvantes, proveedores de mezcla en tanque y distribuidores de coformulantes',
      sizes: 'HDPE 1–20 L / tambor 200 L / IBC',
      formulation: 'Surfactante no iónico, MSO, agentes de control de deriva y compatibilidad',
      customization: 'Tipo de surfactante, rango HLB, concentración, diseño de etiqueta y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} t por proyecto — pruebas piloto desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Adyuvantes de mezcla en tanque, coformulantes integrados y agentes de mejora de pulverización' },
        { label: 'Tipos de producto', value: 'Surfactantes no iónicos, adyuvantes MSO, agentes de control de deriva' },
        { label: 'Rango HLB', value: '12–15 (no iónico estándar) / especificado a medida' },
        { label: 'Embalaje', value: 'HDPE 1–20 L / tambor 200 L / IBC' },
        { label: 'Paquete estándar', value: 'Contenedores etiquetados, COA, SDS y documentación reglamentaria' },
      ],
      keyQuestions: [
        'Clase de adyuvante (surfactante, aceite, control de deriva)',
        'Formulaciones compañeras de mezcla en tanque',
        'Método de aplicación (aéreo, terrestre, quimigación)',
      ],
    },
    biopesticide: {
      bestFor: 'Marcas de biopesticidas, proveedores de agricultura ecológica y programas MIP',
      sizes: 'HDPE 1–20 L / tambor 200 L',
      formulation: 'Formulaciones basadas en microorganismos, botánicos y semioquímicos',
      customization: 'Organismo activo, potencia, sistema portador, diseño de etiqueta y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} t por proyecto — pruebas piloto desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Protección de cultivos ecológica, manejo de resistencia y programas con residuos reducidos' },
        { label: 'Tipos de formulación', value: 'WP, WDG, SC (microbiano), extractos botánicos' },
        { label: 'Potencia / viabilidad', value: 'Espec por organismo / conteo UFC por gramo o mL' },
        { label: 'Embalaje', value: 'HDPE 1–20 L / tambor 200 L' },
        { label: 'Paquete estándar', value: 'Contenedores etiquetados, COA, SDS y documentación reglamentaria' },
      ],
      keyQuestions: [
        'Plaga o patógeno objetivo',
        'Cepa microbiana o activo botánico',
        'Requisitos de certificación ecológica',
      ],
    },
    mixture: {
      bestFor: 'Marcas de premezclas y mezclas en tanque, distribuidores de productos combinados y programas multiobjetivo',
      sizes: 'HDPE 1–20 L / tambor 200 L / IBC',
      formulation: 'Suspensión en cápsula CS y formulaciones premezcla multi-IA',
      customization: 'Combinación dual-activo, proporción, sistema de adyuvantes, diseño de etiqueta y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} t por proyecto — pruebas piloto desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Premezclas para manejo de resistencia, mezclas en tanque de amplio espectro y programas multiobjetivo' },
        { label: 'Tipos de formulación', value: 'CS, SC, ZC (combinación CS + SC)' },
        { label: 'Concentración activa', value: 'Espec por formulación / ≥95% grado técnico por IA' },
        { label: 'Embalaje', value: 'HDPE 1–20 L / tambor 200 L / IBC' },
        { label: 'Paquete estándar', value: 'Contenedores etiquetados, COA, SDS y documentación reglamentaria' },
      ],
      keyQuestions: [
        'Complejo plaga/enfermedad que requiere doble modo de acción',
        'Combinación y proporción de IA preferida',
        'Manejo de resistencia y emparejamiento de clases IRAC/FRAC',
      ],
    },
  },
}

/** Common commercial rows (MOQ / samples / pricing) for every category page. */
export const commercialRows: Localized<ProcurementRow[]> = {
  en: [
    { label: 'Sample path', value: 'Sample development available for qualified OEM/ODM projects.' },
    { label: 'Sample MOQ', value: 'Confirmed by formulation type, active ingredient and packaging configuration.' },
    { label: 'Volume MOQ', value: 'MOQ is confirmed per formulation, concentration, packaging configuration and order mix.' },
    { label: 'Pricing logic', value: 'Quotation is based on formulation type, concentration, packaging, label artwork, order quantity and delivery terms.' },
    { label: 'Sample timing', value: `Samples in ${FACTS.sampleTime} after specification, artwork and payment requirements are confirmed.` },
    { label: 'Production timing', value: `Production in ${FACTS.leadTime} after sample approval, final artwork, deposit and production scheduling are confirmed.` },
    { label: 'Packaging MOQ', value: 'Custom retail packaging may carry separate MOQ requirements.' },
    { label: 'Mixed orders', value: 'Mixed formulations or concentrations are reviewed according to material, production and packaging requirements.' },
    { label: 'Inspection', value: 'Third-party inspection and buyer-appointed inspection can be discussed before production release.' },
    { label: 'Commercial terms', value: 'Available terms are discussed during quotation based on project scope and order history.' },
  ],
  es: [
    { label: 'Ruta de muestras', value: 'Desarrollo de muestras disponible para proyectos OEM/ODM calificados.' },
    { label: 'MOQ de muestras', value: 'Confirmado según tipo de formulación, ingrediente activo y configuración de embalaje.' },
    { label: 'MOQ de volumen', value: 'El MOQ se confirma por formulación, concentración, configuración de embalaje y mezcla de pedidos.' },
    { label: 'Lógica de precios', value: 'El presupuesto se basa en tipo de formulación, concentración, embalaje, arte de etiqueta, cantidad de pedido y condiciones comerciales.' },
    { label: 'Tiempo de muestras', value: `Muestras en ${FACTS.sampleTime} tras confirmar especificación, arte y requisitos de pago.` },
    { label: 'Tiempo de producción', value: `Producción en ${FACTS.leadTime} tras aprobación de muestra, arte final, depósito y programación de producción.` },
    { label: 'MOQ de embalaje', value: 'El embalaje minorista personalizado puede tener requisitos de MOQ independientes.' },
    { label: 'Pedidos mixtos', value: 'Formulaciones o concentraciones mixtas se revisan según requisitos de material, producción y embalaje.' },
    { label: 'Inspección', value: 'La inspección de terceros y la inspección designada por el comprador pueden acordarse antes de la liberación de producción.' },
    { label: 'Condiciones comerciales', value: 'Las condiciones disponibles se analizan durante el presupuesto según el alcance del proyecto y el historial de pedidos.' },
  ],
}
