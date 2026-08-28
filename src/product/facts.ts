import { BRAND_SOCIAL, BRAND_CONTACT, BRAND_BOILERPLATE, BRAND_BUILD_LINE, BRAND_NOT_ROB } from '@/config/branding'

export const FACTS_VERIFIED = '2026-08-22' as const

export type VerifiedSource = 'factory-record' | 'qc-procedure' | 'certificate' | 'project-record' | 'audit-report'

export const FACTS = {
  warehouseM2: '20,000 m²',
  workers: '200+',
  annualCapacity: '50,000+ tons',
  moq: {
    existingPlatform: '1 ton (standard formulations, existing registration)',
    pilotBatch: '5 tons (custom formulation or new packaging)',
    standardRun: '20+ tons per approved formulation, subject to raw material and packaging requirements',
    customMould: '20+ tons (new formulation requires dedicated registration; registration adds 60–90 days)',
    multiSku: 'Each formulation (active/concentration combo) on a separate production batch has its own MOQ',
  },
  moqNote: 'MOQ is confirmed after specification review, because formulation, concentration, packaging type and registration status affect production planning.',
  moqNoteEs: 'El MOQ se confirma tras la revisión de especificaciones, ya que la formulación, concentración, tipo de embalaje y estado de registro afectan la planificación de producción.',
  moqExplanation: {
    sample: 'Sample quantities for formulation approval',
    coBrand: 'from 1 ton on standard formulations with existing registration',
    pilot: '5 tons on existing formulations with custom packaging',
    standard: '20+ tons per approved formulation, subject to raw material and packaging requirements',
    customMould: '20+ tons; new formulation requires registration (+60–90 days)',
  },
  batchYieldNote: 'A standard production batch yields different quantities depending on formulation concentration, packaging size and regulatory requirements. The 20+ ton MOQ represents the minimum batch per formulation, not a fixed volume.',
  moqDecisionTree: [
    { scenario: 'Standard formulation, existing registration', min: '1 ton', unit: 'per product', condition: 'Same formulation, same concentration, same packaging' },
    { scenario: 'Custom packaging / private label on existing formulation', min: '5 tons', unit: 'pilot batch', condition: 'Same formulation; new label requires artwork approval' },
    { scenario: 'Standard volume production (any formulation)', min: '20+ tons', unit: 'per approved formulation', condition: 'Per production batch; multiple SKUs = separate batches' },
    { scenario: 'New formulation / custom registration', min: '20+ tons', unit: 'production run', condition: 'Registration 60–90 extra days; one-time registration fee applies' },
  ] as const,
  leadTime: '25–35 days',
  leadTimeDetail: '25–35 days from confirmed PO and deposit; new formulation registration adds 60–90 days.',
  sampleTime: '7–14 days',
  reactorAccuracy: '±0.1% dosing precision',
  productionCapacity: '50,000+ tons/year',
  formulationTypes: 'SC, EC, WP, WDG, SL, ME, CS, FS',
  reactorLines: '2 × 5,000 L reactor lines',
  reactorPressure: 'Atmospheric / vacuum / pressure rated per formulation',
  packagingGrade: 'Industrial-grade EVA containers and label backing',
  qualityTest: 'HPLC purity · GC residue · stability test',
  qualityReject: 'Out-of-spec purity or residue (auto-reject)',
  qcChecklistPoints: '100-point',
  traceabilityRet: '5 years',
  certifications: [
    { name: 'ISO 9001', scope: 'Quality management system', authority: 'Certifying body (available on request)', appliesTo: 'Manufacturing facility', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'ISO 14001', scope: 'Environmental management system', authority: 'Certifying body (available on request)', appliesTo: 'Manufacturing facility', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'GMP', scope: 'Good Manufacturing Practice for agrochemicals', authority: 'ICAMA / national authority', appliesTo: 'Production facility', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'FAO/WHO', scope: 'International pesticide specifications', authority: 'FAO/WHO', appliesTo: 'Registered formulations', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'REACH', scope: 'EU chemical safety', authority: 'ECHA', appliesTo: 'Products exported to EU', verifiedSource: 'certificate' as VerifiedSource },
  ] as const,
  certificationNote: 'Certificate numbers, validity periods and issuing authorities are available per project on request. Registration status varies by target market and product; scope is confirmed per project.',
  exportCountries: '50+',
  workshops: '6 specialized production workshops',
  productionLines: '8 automated formulation lines',
  monthlyCapacity: '4,000+ tons/month',
  ndaWindow: '4 business hours',
  qualityGates: '7-stage (Node 01–07)',
  thirdPartyInspectors: ['SGS', 'BV', 'Intertek', 'CMA'],
  samplingStandard: 'FAO/WHO guidelines',
  peakSeason: 'March–August',
  social: BRAND_SOCIAL,
  contact: BRAND_CONTACT,
  boilerplate: BRAND_BOILERPLATE,
  buildLine: BRAND_BUILD_LINE,
  notRob: BRAND_NOT_ROB,
  tagline:
    'Formulation, registration support, packaging and production for agrochemical brands, distributors and sourcing teams. You own the brand — we formulate and manufacture.',
  taglineEs:
    'Formulación, soporte de registro, embalaje y producción para marcas de agroquímicos, distribuidores y equipos de compra. Tú eres dueño de la marca — nosotros formulamos y fabricamos.',
} as const

export type FactLiteral = (typeof FACTS)[keyof typeof FACTS]

export const CERTIFICATION_NAMES = FACTS.certifications.map((c) => c.name) as readonly string[]

export const MOQ_SHORT = {
  trialStandard: FACTS.moq.pilotBatch,
  standardRun: FACTS.moq.standardRun,
  customMould: FACTS.moq.customMould,
  existingPlatform: FACTS.moq.existingPlatform,
} as const

export const COLLABORATION_MODES = {
  oem: {
    short: 'Manufacture to your approved specification',
    full: 'OEM (Original Equipment Manufacturing): We manufacture to your approved specification — your formulation, concentration, packaging and labeling. You own the formulation, registration and intellectual property.',
    bestFor: 'Buyers with existing formulations, reference products or detailed specifications',
  },
  odm: {
    short: 'Develop the formulation with our R&D team',
    full: 'ODM (Original Design Manufacturing): Our R&D team develops the formulation, concentration, packaging and labeling from your brief — whether that is a target crop, pest spectrum or adaptation of a proven formulation. Factory proposes the formulation; buyer approves before production.',
    bestFor: 'Buyers with product ideas, target crops or pest control needs but no detailed formulation',
  },
  privateLabel: {
    short: 'Brand a proven agrochemical formulation with your label',
    full: 'Private Label: Your brand, labeling and packaging on an existing validated formulation — no R&D development, no formulation changes. Fastest route from concept to delivery.',
    bestFor: 'Buyers who need branded products quickly without formulation development',
  },
  commercial: {
    short: 'Configure bulk supply packages',
    full: 'Commercial Supply Program: High-volume agrochemical packages for distributors, importers and procurement agencies — with quality specs, regulatory documentation, batch consistency and export support.',
    bestFor: 'Distributors, importers and government procurement agencies',
  },
} as const
