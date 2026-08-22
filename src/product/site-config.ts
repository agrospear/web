/**
 * Site configuration – centralized business constants.
 *
 * 此文件仅作抽象层，不删减原有 `facts.ts` 与 `content.ts` 的任何导出。
 * 所有原有通过 `FACTS` / `hero` 导入的方式均可继续使用，本模块提供
 * 相同数据的只读视图，便于框架化与多站点派生。
 */
import { FACTS, MOQ_SHORT, CERTIFICATION_NAMES, COLLABORATION_MODES } from './facts'

/** 从 facts.ts 导出的全部字段（逐一映射，防止任何遗漏） */
export const SITE_FACTS = {
  warehouseM2: FACTS.warehouseM2,
  workers: FACTS.workers,
  annualCapacity: FACTS.annualCapacity,
  moq: {
    trialStandard: MOQ_SHORT.trialStandard,
    standardRun: MOQ_SHORT.standardRun,
    customMould: MOQ_SHORT.customMould,
    existingPlatform: MOQ_SHORT.existingPlatform,
  },
  moqNote: FACTS.moqNote,
  moqExplanation: FACTS.moqExplanation,
  materialRollNote: FACTS.materialRollNote,
  collaborationModes: COLLABORATION_MODES,
  leadTime: FACTS.leadTime,
  leadTimeDetail: FACTS.leadTimeDetail,
  sampleTime: FACTS.sampleTime,
  cncAccuracy: FACTS.cncAccuracy,
  rfPower: FACTS.rfPower,
  dropStitchPsi: FACTS.dropStitchPsi,
  evaHardness: FACTS.evaHardness,
  assemblyChecklist: FACTS.assemblyChecklist,
  pressureTest: FACTS.pressureTest,
  pressureReject: FACTS.pressureReject,
  traceabilityRet: FACTS.traceabilityRet,
  certifications: CERTIFICATION_NAMES,
  exportCountries: FACTS.exportCountries,
  workshops: FACTS.workshops,
  productionLines: FACTS.productionLines,
  monthlyCapacity: FACTS.monthlyCapacity,
  ndaWindow: FACTS.ndaWindow,
  qualityGates: FACTS.qualityGates,
  thirdPartyInspectors: FACTS.thirdPartyInspectors,
  samplingStandard: FACTS.samplingStandard,
  peakSeason: FACTS.peakSeason,
  social: FACTS.social,
  contact: FACTS.contact,
  boilerplate: FACTS.boilerplate,
  tagline: FACTS.tagline,
  taglineEs: FACTS.taglineEs,
  notRob: FACTS.notRob,
}

/** 从 content.ts hero 区块导出的全部字段 */
export const HERO_CONTENT = {
  en: {
    kicker: 'Qingdao, China Factory · OEM / ODM / Private Label · Samples to Batch Production',
    titlePre: 'Custom Agrochemical Manufacturing for',
    titleAccent: 'Brands, Distributors & Importers',
    titlePost: '',
    sub: 'OEM, ODM and private-label agrochemical formulations — from specification review and sample development to quality-controlled batch production in Qingdao, China.',
    ctaPrimary: 'Start Your Agrochemical Project',
    ctaSecondary: 'View Factory, MOQ & Quality Evidence',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Reply within 1 business day · NDA available before file exchange · MOQ confirmed after specification review',
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
    kicker: 'Fábrica en Qingdao, China · OEM / ODM / Marca privada · Muestras a producción en serie',
    titlePre: 'Fabricación de agroquímicos a medida para',
    titleAccent: 'marcas, distribuidores e importadores',
    titlePost: '',
    sub: 'Formulaciones agroquímicas OEM, ODM y marca privada — desde la revisión de especificaciones y desarrollo de muestras hasta la producción en serie con control de calidad en Qingdao, China.',
    ctaPrimary: 'Inicia tu proyecto de agroquímicos',
    ctaSecondary: 'Ver fábrica, MOQ y evidencia de calidad',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Respuesta en 1 día laborable · NDA disponible antes del intercambio de archivos · MOQ confirmado tras revisar la especificación',
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

/** 供 Seo 模块使用的简化映射（仅读，不修改 PUBLIC_PATHS/HREFLANG/OG_*） */
export const siteConfig = {
  facts: SITE_FACTS,
  hero: HERO_CONTENT,
}

/**
 * 保持全局兼容：确保原有 import 仍然有效。
 * 此处仅作演示；实际使用时 seo.ts 可根据需要引入 siteConfig.facts / siteConfig.hero
 * 而非直接依赖 facts.ts / content.ts 的原始导出，以实现未来的框架化改动。
 */
export type { Locale } from '@/features/i18n/locale'