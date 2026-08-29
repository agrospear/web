import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Project case studies (/projects/*). Real-project stories are the strongest
 * B2B manufacturing SEO content — each project carries industry → challenge →
 * solution → product → process → result, which search engines and AI answer
 * engines cite well.
 */

export interface ProjectData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  /** Project snapshot fields — standardized across all cases so buyers can compare. */
  customerType: string
  region: string
  productCategory: string
  projectStage: string
  manufacturingScope: string
  keyRequirements: string
  qualityFocus: string
  industry: string
  requirement: string
  challenge: string
  solution: string
  product: string
  process: { title: string; body: string }[]
  result: string
  outcome: string
  /** 5–8 concrete customization items — buyer-verifiable scope of what changed. */
  customizations: string[]
  /** Project-specific inspection focus — 4–6 checks matched to the project type. */
  inspectionFocus: string[]
  /** Anonymized testimonial / confidentiality statement for the quote block. */
  confidentiality: string
  tags: string[]
  /** Headline numbers rendered as a metrics strip — flagship cases only. */
  metrics?: { value: string; label: string }[]
  /** Key takeaways rendered before the final CTA — flagship cases only. */
  takeaways?: string[]
}

export const projects: Localized<ProjectData[]> = {
  en: [
    {
      slug: 'latam-glyphosate-private-label',
      customerType: 'Distributors & Importers',
      region: 'Latin America',
      productCategory: 'Glyphosate 480g/L SL (Private Label)',
      projectStage: 'Formulation verification → Sample approval → 90-day volume delivery',
      manufacturingScope: 'Private-label branding, formulation replication, bulk production, regulatory documentation',
      keyRequirements: '1,000 tons Glyphosate 480g/L SL under the distributor\'s brand, COA per batch, delivery within 90 days',
      qualityFocus: 'Active-ingredient assay, impurity profile, packaging integrity, COA accuracy',
      navLabel: 'Latin American Glyphosate Launch',
      metaTitle: 'Glyphosate 480g/L Private Label | 1,000 Tons in 90 Days — Agrospear',
      metaDescription:
        'How a Latin American distributor launched a 1,000-ton private-label Glyphosate 480g/L SL program in 90 days — verified formulation, per-batch COA and a Q2 repeat order on the same locked specification.',
      kicker: 'Private Label Project',
      h1: 'How a Latin American Distributor Launched a 1,000-Ton Private-Label Glyphosate Program in 90 Days',
      intro: [
        'A Latin American crop-protection distributor needed its own branded Glyphosate 480g/L SL on the shelf for the spraying season — 1,000 tons, verified formulation, complete regulatory documentation and no glyphosate factory relationships of its own.',
      ],
      industry: 'Distributors & Importers',
      requirement: '1,000 tons of Glyphosate 480g/L SL under the distributor\'s brand, with COA per batch, local-language labeling and delivery within 90 days.',
      challenge:
        'The spraying-season window is fixed, so all 1,000 tons had to land before field applications began. Private-label labeling — hazard pictograms, batch coding, regulatory statements — had to match national requirements, and the distributor had no glyphosate manufacturing experience to draw on.',
      solution:
        'A verified 480g/L SL formulation produced under the distributor\'s brand, full private-label labeling and regulatory documentation handled in one program, and production scheduled so every batch shipped together inside the 90-day window — with the specification locked for a clean repeat order.',
      product: 'Private-label Glyphosate 480g/L SL — 1,000 tons in bulk drums and IBCs, with branded labels, batch-coded COAs and regulatory documentation.',
      process: [
        { title: 'Formulation verification', body: 'Glyphosate 480g/L SL formulation verified against the target specification and impurity limits.' },
        { title: 'Sample approval', body: 'Labeling, packaging and COA format confirmed on physical samples.' },
        { title: '90-day production', body: 'Volume scheduled so all batches ship together for the spraying-season window.' },
        { title: 'Q2 reorder', body: 'Repeat order placed on the same locked specification.' },
      ],
      result:
        'All 1,000 tons with complete labeling and COAs shipped within 90 days, in time for the spraying season. The line sold through and the distributor returned in Q2 with a repeat order on the same locked specification.',
      outcome: '1,000 tons · 90 days · private label · Q2 repeat order.',
      metrics: [
        { value: '1,000', label: 'tons Glyphosate 480g/L SL' },
        { value: '90', label: 'days to full delivery' },
        { value: '100%', label: 'batches with COA and batch coding' },
        { value: 'Q2', label: 'repeat order on the same spec' },
      ],
      takeaways: [
        'A verified formulation removes assay surprises at the destination lab.',
        'One program covering product, labeling and documentation removes a common launch failure point.',
        'A fixed spraying-season date forces the schedule — production planning must treat it as non-negotiable.',
        'Locking the specification at launch makes repeat orders clean and consistent.',
      ],
      customizations: [
        'Glyphosate 480g/L SL formulation matched to the target specification',
        'Private-label drum and IBC labeling with hazard pictograms',
        'Batch-coded COAs and regulatory documentation per shipment',
        'Local-language label text verified against national requirements',
        'BOM and formulation locked for repeat-order consistency',
        'Bulk delivery aligned to the spraying-season window',
      ],
      inspectionFocus: [
        'Active-ingredient assay against the 480g/L target',
        'Impurity profile within contract limits',
        'Labeling accuracy against approved private-label files',
        'Batch coding and COA consistency per shipment',
        'Drum and IBC integrity before loading',
      ],
      confidentiality:
        'By agreement, the distributor\'s name and market details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Private label', 'Glyphosate 480g/L SL', 'Season-window delivery'],
    },
    {
      slug: 'africa-malaria-vector-insecticide',
      customerType: 'Government Procurement Agencies',
      region: 'Sub-Saharan Africa',
      productCategory: 'Insecticide for Malaria Vector Control',
      projectStage: 'Tender specification → Sample approval → Multi-year phased delivery',
      manufacturingScope: 'WHO-PQ formulation, government-spec labeling, phased production, tender documentation',
      keyRequirements: '500 tons insecticide meeting WHO-PQ specification, multi-year tender delivery, government labeling',
      qualityFocus: 'Active-ingredient assay, WHO-PQ compliance, packaging integrity, COA per batch',
      navLabel: 'African Government Insecticide',
      metaTitle: 'Malaria Vector Control Insecticide | 500 Tons Multi-Year — Agrospear',
      metaDescription:
        'How an African government procured 500 tons of insecticide for malaria vector control under a multi-year tender — WHO-PQ formulation, phased delivery and per-batch COA documentation.',
      kicker: 'Government Procurement Project',
      h1: 'Supplying 500 Tons of Insecticide for Malaria Vector Control Under a Multi-Year Government Tender',
      intro: [
        'A sub-Saharan African government agency needed a reliable supply of vector-control insecticide under a multi-year procurement tender — 500 tons, WHO-PQ specification, phased delivery and complete tender documentation.',
      ],
      industry: 'Government Procurement Agencies',
      requirement: '500 tons of insecticide meeting WHO-PQ specification, delivered in phased annual volumes over a multi-year tender, with government-standard labeling and per-batch COAs.',
      challenge:
        'Government tenders require strict WHO-PQ compliance with full documentation trails. Phased annual deliveries must align with spray-cycle calendars, and labeling must carry government-standard hazard pictograms and batch coding for traceability.',
      solution:
        'A WHO-PQ-compliant insecticide formulation produced under the government\'s specification, full tender documentation and government labeling handled in one program, and phased production scheduled so each annual volume lands ahead of the spray cycle — with per-batch COAs and retention samples.',
      product: 'WHO-PQ insecticide for vector control — 500 tons in phased annual volumes, with government labeling, per-batch COAs and retention samples.',
      process: [
        { title: 'Tender specification', body: 'WHO-PQ specification, impurity limits and labeling requirements mapped to the tender document.' },
        { title: 'Sample approval', body: 'Formulation and labeling confirmed on physical samples against the tender spec.' },
        { title: 'Phased production', body: 'Annual volumes scheduled against each spray-cycle calendar.' },
        { title: 'Delivery & documentation', body: 'Each phase shipped with per-batch COAs, retention samples and tender documentation.' },
      ],
      result:
        'All phased deliveries landed ahead of each spray cycle, with complete documentation trails. The WHO-PQ-compliant formulation passed destination-lab verification, and the tender was renewed for a second term.',
      outcome: '500 tons · multi-year tender · on-time spray-cycle delivery · tender renewed.',
      metrics: [
        { value: '500', label: 'tons over the tender term' },
        { value: '100%', label: 'batches passing destination-lab verification' },
        { value: '0', label: 'spray-cycle delays due to late delivery' },
        { value: '2nd', label: 'tender term renewed' },
      ],
      takeaways: [
        'WHO-PQ compliance is non-negotiable — the formulation and documentation must be built for it from day one.',
        'Phased delivery aligned to spray cycles prevents both stock-outs and warehousing surpluses.',
        'Per-batch COAs and retention samples protect the government agency and the manufacturer.',
        'A clean first-term track record is the strongest case for tender renewal.',
      ],
      customizations: [
        'WHO-PQ-compliant formulation matched to the tender specification',
        'Government-standard labeling with hazard pictograms and batch coding',
        'Per-batch COAs and retention samples for full traceability',
        'Phased annual volumes aligned to spray-cycle calendars',
        'Tender documentation package prepared per procurement requirements',
        'Packaging configuration for tropical storage and inland logistics',
      ],
      inspectionFocus: [
        'Active-ingredient assay against WHO-PQ limits',
        'Impurity profile within specification',
        'Labeling accuracy against government-standard templates',
        'Batch coding and COA consistency per phase',
        'Drum and packaging integrity for tropical logistics',
      ],
      confidentiality:
        'By agreement, the government agency\'s name and tender details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Government tender', 'WHO-PQ compliance', 'Malaria vector control'],
    },
    {
      slug: 'seasia-herbicide-odm',
      customerType: 'Regional Crop-Protection Brands',
      region: 'Southeast Asia',
      productCategory: 'Herbicide Formulation (ODM)',
      projectStage: 'Concept → Formulation development → Sample approval → 200-ton production',
      manufacturingScope: 'ODM formulation development, registration support, production, packaging',
      keyRequirements: 'ODM herbicide formulation developed to the brand\'s spec, 200 tons, registration documentation',
      qualityFocus: 'Formulation stability, active-ingredient assay, packaging accuracy, COA consistency',
      navLabel: 'SE Asian Herbicide ODM',
      metaTitle: 'Herbicide ODM Development | 200 Tons — Agrospear',
      metaDescription:
        'How a Southeast Asian crop-protection brand developed an ODM herbicide formulation with Agrospear — from concept to 200 tons, with registration documentation and formulation ownership.',
      kicker: 'ODM Development Project',
      h1: 'From Concept to 200 Tons: ODM Herbicide Development for a Southeast Asian Brand',
      intro: [
        'A Southeast Asian crop-protection brand wanted its own herbicide formulation — developed to its performance targets, with registration documentation and formulation ownership — without building a formulation lab of its own.',
      ],
      industry: 'Regional Crop-Protection Brands',
      requirement: 'An ODM herbicide formulation developed to the brand\'s performance and cost targets, 200 tons for the first season, with registration documentation and formulation ownership transferred to the brand.',
      challenge:
        'No in-house formulation lab, no manufacturing experience, and a first order that must pass local registration requirements before it can be sold. The brand needed formulation ownership — not a toll-blending arrangement.',
      solution:
        'ODM formulation development from the brand\'s performance targets, lab-scale optimization followed by pilot-batch verification, 200 tons produced with the verified formulation, and full registration documentation and formulation ownership transferred to the brand.',
      product: 'ODM herbicide formulation — developed to brand targets, 200 tons produced, with registration documentation and formulation ownership.',
      process: [
        { title: 'Concept & targets', body: 'Crop, weed spectrum, application method and cost targets set the formulation direction.' },
        { title: 'Formulation development', body: 'Lab-scale optimization followed by pilot-batch verification.' },
        { title: 'Sample approval', body: 'Physical sample confirmed performance, stability and packaging.' },
        { title: '200-ton production', body: 'Volume produced with the verified formulation, COAs per batch, registration docs prepared.' },
      ],
      result:
        'The 200-ton first season sold through; registration was granted on the submitted documentation, and the brand owns the formulation for future production anywhere.',
      outcome: '200 tons · registration granted · formulation owned by the brand.',
      customizations: [
        'Herbicide formulation developed from the brand\'s performance and cost targets',
        'Lab-scale optimization and pilot-batch verification',
        'Registration documentation package for the target market',
        'Formulation ownership transferred to the brand',
        'Branded packaging and labeling per market requirements',
        'COA format and stability data aligned to registration needs',
      ],
      inspectionFocus: [
        'Active-ingredient assay against the ODM target',
        'Formulation stability data verification',
        'Labeling accuracy against registration-submitted artwork',
        'COA consistency per batch',
        'Packaging integrity for tropical logistics',
      ],
      confidentiality:
        'By agreement, the brand name and formulation details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['ODM development', 'Herbicide formulation', 'Registration support'],
    },
    {
      slug: 'europe-fungicide-reach',
      customerType: 'European Importers & Distributors',
      region: 'Europe',
      productCategory: 'Fungicide Range (3 SKUs)',
      projectStage: 'Range planning → CE/REACH registration support → Sample approval → Volume delivery',
      manufacturingScope: '3-SKU fungicide range, REACH registration documentation, EU labeling, volume production',
      keyRequirements: '3 fungicide SKUs with CE/REACH registration support, EU-compliant labeling, retail packaging',
      qualityFocus: 'Active-ingredient assay, impurity profile, REACH documentation, EU label compliance',
      navLabel: 'European Fungicide Range',
      metaTitle: 'Fungicide Range for EU Market | 3 SKUs, REACH Support — Agrospear',
      metaDescription:
        'How a European importer launched a 3-SKU fungicide range with CE/REACH registration support — EU-compliant labeling, per-SKU documentation and volume delivery in one program.',
      kicker: 'EU Registration Project',
      h1: 'Launching a 3-SKU Fungicide Range for the European Market with CE/REACH Registration Support',
      intro: [
        'A European crop-protection importer wanted its own fungicide range on the EU market — three SKUs, CE/REACH registration documentation, EU-compliant labeling and no separate registration consultant to coordinate.',
      ],
      industry: 'European Importers & Distributors',
      requirement: 'Three fungicide SKUs with CE/REACH registration support, EU-compliant hazard labeling, per-SKU technical documentation and volume delivery in one program.',
      challenge:
        'EU registration requires detailed technical dossiers — impurity profiles, toxicology summaries, analytical methods — and labeling must carry CLP hazard pictograms, UFI codes and REACH registration numbers. The importer had no registration team and needed one program covering product, documentation and labeling.',
      solution:
        'Three fungicide formulations selected for the range, full CE/REACH registration documentation prepared per SKU, EU-compliant CLP labeling with UFI codes, and production scheduled so all three SKUs ship together — with the documentation locked for consistent renewal submissions.',
      product: 'Three-SKU fungicide range — CE/REACH registration documentation, EU CLP labeling with UFI codes, per-SKU technical dossiers.',
      process: [
        { title: 'Range planning', body: 'Three fungicide SKUs selected for EU crop-protection coverage.' },
        { title: 'Registration support', body: 'CE/REACH documentation, impurity profiles and analytical methods prepared per SKU.' },
        { title: 'Sample approval', body: 'Labeling, packaging and COA format confirmed on physical samples.' },
        { title: 'Volume delivery', body: 'All three SKUs produced and shipped together with complete documentation.' },
      ],
      result:
        'The three-SKU range shipped with full registration documentation and EU-compliant labeling. The importer submitted the dossiers and the first SKU received registration approval within the expected timeline.',
      outcome: '3 SKUs · CE/REACH documentation · EU CLP labeling · first registration granted.',
      metrics: [
        { value: '3', label: 'fungicide SKUs in one program' },
        { value: '100%', label: 'dossiers with impurity profiles and analytical methods' },
        { value: '1', label: 'program covering product, docs and labeling' },
        { value: '1st', label: 'SKU registration granted' },
      ],
      takeaways: [
        'Preparing registration documentation alongside product development avoids the common gap between product readiness and dossier submission.',
        'One program covering product, documentation and labeling eliminates the coordination problem between manufacturer and registration consultant.',
        'CLP labeling with UFI codes must be built into the packaging spec from the start — retroactive changes are expensive.',
        'Locked documentation makes renewal submissions consistent and lower-risk.',
      ],
      customizations: [
        'Three fungicide formulations selected for EU crop-protection coverage',
        'CE/REACH registration documentation per SKU — impurity profiles, toxicology summaries, analytical methods',
        'EU CLP labeling with hazard pictograms and UFI codes per SKU',
        'Per-SKU technical dossiers aligned to registration requirements',
        'BOM and formulation locked for consistent renewal submissions',
        'Retail packaging configuration for EU distribution',
      ],
      inspectionFocus: [
        'Active-ingredient assay per SKU against specification',
        'Impurity profile within REACH limits',
        'CLP labeling accuracy — pictograms, UFI codes, hazard statements',
        'COA consistency per batch and per SKU',
        'Retail packaging and labeling verification',
      ],
      confidentiality:
        'By agreement, the importer\'s name and registration details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['CE/REACH registration', '3-SKU fungicide range', 'EU CLP labeling'],
    },
    {
      slug: 'middle-east-insecticide-bulk',
      customerType: 'Distributors & Wholesalers',
      region: 'Middle East',
      productCategory: 'Custom-Label Insecticide (Bulk Supply)',
      projectStage: 'Specification alignment → Sample approval → 500-ton volume delivery',
      manufacturingScope: 'Custom-label branding, bulk formulation, volume production, reorder support',
      keyRequirements: '500 tons insecticide under custom label, bulk packaging, season-date alignment',
      qualityFocus: 'Active-ingredient assay, packaging integrity, label accuracy, COA per batch',
      navLabel: 'Middle East Insecticide Program',
      metaTitle: 'Custom-Label Insecticide | 500 Tons Bulk Supply — Agrospear',
      metaDescription:
        'How a Middle East distributor launched a 500-ton custom-label insecticide program — bulk supply, per-batch COA and season-aligned delivery in one manufacturing program.',
      kicker: 'Bulk Supply Project',
      h1: 'How a Middle East Distributor Launched a 500-Ton Custom-Label Insecticide Program',
      intro: [
        'A Middle East crop-protection distributor needed a bulk insecticide supply under its own label — 500 tons, verified formulation and season-aligned delivery without managing multiple supply points.',
      ],
      industry: 'Distributors & Wholesalers',
      requirement: '500 tons of insecticide under a custom label, in bulk packaging, with per-batch COAs and delivery aligned to the spraying season.',
      challenge:
        'The spraying season in the region is short and fixed — all 500 tons must be in-country before applications begin. The distributor needed custom labeling in Arabic and English, bulk packaging suited to hot-climate logistics, and a single manufacturing partner instead of coordinating across multiple suppliers.',
      solution:
        'A verified insecticide formulation produced under the distributor\'s custom label, bilingual Arabic/English labeling, bulk packaging configured for hot-climate storage and transport, and production scheduled so all volumes ship ahead of the season window.',
      product: 'Custom-label insecticide — 500 tons in bulk drums and IBCs, with bilingual labeling, per-batch COAs and hot-climate packaging.',
      process: [
        { title: 'Specification alignment', body: 'Target formulation, impurity limits and packaging requirements mapped to the distributor\'s needs.' },
        { title: 'Sample approval', body: 'Bilingual labeling and packaging confirmed on physical samples.' },
        { title: 'Volume production', body: '500 tons scheduled so all volumes land before the spraying-season window.' },
        { title: 'Delivery & reorder', body: 'Shipment with per-batch COAs; reorder specification locked for the next season.' },
      ],
      result:
        'All 500 tons with bilingual labeling and per-batch COAs shipped ahead of the season window. The formulation passed destination-lab verification and the distributor placed a reorder for the next season on the same locked specification.',
      outcome: '500 tons · season-aligned delivery · destination-lab pass · reorder on the same spec.',
      metrics: [
        { value: '500', label: 'tons in one program' },
        { value: '100%', label: 'batches with COA and bilingual labeling' },
        { value: '0', label: 'season-delay days' },
        { value: '2nd', label: 'season reorder on the same spec' },
      ],
      takeaways: [
        'Bulk supply with a single manufacturing partner removes the coordination problem of multiple supply points.',
        'Bilingual labeling must be verified on physical samples — text errors in Arabic are not caught by automated tools.',
        'Hot-climate packaging configuration prevents formulation degradation during storage and inland transport.',
        'A locked specification makes reorder seasons predictable and lower-risk.',
      ],
      customizations: [
        'Insecticide formulation matched to the distributor\'s target specification',
        'Custom-label branding in Arabic and English',
        'Bulk drum and IBC packaging configured for hot-climate logistics',
        'Per-batch COAs and retention samples',
        'BOM and specification locked for reorder consistency',
        'Season-aligned delivery scheduling',
      ],
      inspectionFocus: [
        'Active-ingredient assay against specification',
        'Bilingual labeling accuracy — Arabic and English text verification',
        'Packaging integrity for hot-climate storage and transport',
        'COA consistency per batch',
        'Batch coding and traceability verification',
      ],
      confidentiality:
        'By agreement, the distributor\'s name and market details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Custom label', 'Bulk insecticide supply', 'Season-aligned delivery'],
    },
    {
      slug: 'central-america-sugarcane-herbicide',
      customerType: 'Agribusiness & Plantations',
      region: 'Central America',
      productCategory: 'Selective Herbicide for Sugarcane',
      projectStage: 'Crop requirement analysis → Formulation selection → Sample approval → Niche production',
      manufacturingScope: 'Niche herbicide formulation, crop-specific labeling, production, application guidance',
      keyRequirements: 'Selective herbicide safe for sugarcane, effective against target weeds, niche formulation',
      qualityFocus: 'Crop-selectivity verification, active-ingredient assay, application-rate accuracy, COA per batch',
      navLabel: 'Sugarcane Selective Herbicide',
      metaTitle: 'Selective Herbicide for Sugarcane | Niche Formulation — Agrospear',
      metaDescription:
        'How a Central American agribusiness sourced a selective herbicide for sugarcane — crop-safe niche formulation, application guidance and per-batch COA documentation.',
      kicker: 'Niche Formulation Project',
      h1: 'Developing a Selective Herbicide for Sugarcane for a Central American Agribusiness',
      intro: [
        'A Central American sugarcane plantation group needed a selective herbicide that controls broadleaf and grassy weeds without crop damage — a niche formulation with proven crop selectivity and application guidance for field teams.',
      ],
      industry: 'Agribusiness & Plantations',
      requirement: 'A selective herbicide formulation that is effective against target weeds and safe for sugarcane, with crop-selectivity data and application guidance for field teams.',
      challenge:
        'Sugarcane herbicide selectivity is narrow — the wrong formulation or application rate causes crop injury. The agribusiness needed a niche product with verified crop safety, not a generic broad-spectrum herbicide, and field teams needed clear application guidance.',
      solution:
        'A niche selective herbicide formulation with verified crop-selectivity data for sugarcane, application-rate guidance calibrated to local conditions, and per-batch COAs with selectivity parameters included.',
      product: 'Selective herbicide for sugarcane — niche formulation with crop-selectivity data, application guidance and per-batch COAs.',
      process: [
        { title: 'Crop requirement analysis', body: 'Weed spectrum, crop growth stage and soil conditions defined the formulation direction.' },
        { title: 'Formulation selection', body: 'Selective herbicide chosen for sugarcane safety and target-weed efficacy.' },
        { title: 'Sample approval', body: 'Selectivity and efficacy confirmed on physical samples and field-trial data.' },
        { title: 'Niche production', body: 'Volume produced with per-batch COAs, selectivity parameters and application guidance.' },
      ],
      result:
        'The niche formulation controlled target weeds without sugarcane injury in field applications. Application guidance from the COA package was adopted across the plantation group, and the agribusiness expanded the program to cover additional sugarcane varieties.',
      outcome: 'Crop-safe weed control · field-team adoption · expanded to additional varieties.',
      customizations: [
        'Selective herbicide formulation chosen for sugarcane crop safety',
        'Crop-selectivity data package for the target weed spectrum',
        'Application-rate guidance calibrated to local conditions',
        'Per-batch COAs with selectivity parameters included',
        'Labeling with crop-specific application instructions',
        'Packaging configuration for plantation-scale logistics',
      ],
      inspectionFocus: [
        'Active-ingredient assay against specification',
        'Selectivity parameters within verified range',
        'Labeling accuracy — crop-specific application instructions',
        'COA consistency per batch',
        'Packaging integrity for plantation logistics',
      ],
      confidentiality:
        'By agreement, the agribusiness name and plantation details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Selective herbicide', 'Sugarcane crop safety', 'Niche formulation'],
    },
    {
      slug: 'south-asia-rice-fungicide',
      customerType: 'Agricultural Cooperatives',
      region: 'South Asia',
      productCategory: 'Rice Paddy Fungicide Program',
      projectStage: 'Season planning → Formulation approval → Seasonal supply → Repeat season',
      manufacturingScope: 'Seasonal fungicide supply, cooperative labeling, production, reorder support',
      keyRequirements: 'Seasonal fungicide supply timed to rice paddy disease pressure, cooperative-branded labeling',
      qualityFocus: 'Active-ingredient assay, seasonal timing, label accuracy, COA per batch',
      navLabel: 'Rice Paddy Fungicide Program',
      metaTitle: 'Rice Paddy Fungicide | Seasonal Supply Program — Agrospear',
      metaDescription:
        'How a South Asian agricultural cooperative secured a seasonal rice paddy fungicide supply — timed to disease pressure, cooperative-branded labeling and per-batch COA documentation.',
      kicker: 'Seasonal Supply Project',
      h1: 'Supplying a Seasonal Rice Paddy Fungicide Program for a South Asian Cooperative',
      intro: [
        'A South Asian agricultural cooperative needed a reliable seasonal fungicide supply for rice paddy disease pressure — timed to monsoon-driven disease windows, cooperative-branded labeling and consistent quality across seasons.',
      ],
      industry: 'Agricultural Cooperatives',
      requirement: 'A seasonal fungicide supply timed to rice paddy disease-pressure windows, with cooperative-branded labeling and per-batch COAs, repeatable across seasons.',
      challenge:
        'Rice paddy disease pressure peaks during monsoon windows — fungicide must be in members\' hands before the window opens. The cooperative needed consistent quality across seasons, cooperative-branded labeling for member trust, and a supply partner who understands seasonal timing.',
      solution:
        'A fungicide formulation effective against major rice paddy pathogens, seasonal supply scheduled against monsoon-driven disease-pressure calendars, cooperative-branded labeling, and per-batch COAs with the specification locked for consistent repeat seasons.',
      product: 'Rice paddy fungicide — seasonal supply timed to disease-pressure windows, cooperative-branded labeling and per-batch COAs.',
      process: [
        { title: 'Season planning', body: 'Disease-pressure calendars and member coverage defined the seasonal volume and timing.' },
        { title: 'Formulation approval', body: 'Fungicide formulation and labeling confirmed against the cooperative\'s requirements.' },
        { title: 'Seasonal supply', body: 'Volume produced and delivered ahead of the disease-pressure window.' },
        { title: 'Repeat season', body: 'Same specification, same timing — reorder on the locked formulation.' },
      ],
      result:
        'Fungicide reached cooperative members before the disease-pressure window opened. Field performance was consistent with the approved formulation, and the cooperative repeated the program in the following season on the same locked specification.',
      outcome: 'Seasonal delivery on time · consistent field performance · repeat season on the same spec.',
      customizations: [
        'Fungicide formulation effective against major rice paddy pathogens',
        'Seasonal supply scheduled against monsoon-driven disease-pressure calendars',
        'Cooperative-branded labeling for member trust',
        'Per-batch COAs with the specification locked for repeat seasons',
        'Application guidance calibrated to local rice varieties and conditions',
        'Packaging configuration for cooperative distribution to members',
      ],
      inspectionFocus: [
        'Active-ingredient assay against specification',
        'Seasonal delivery timing verification',
        'Cooperative-labeling accuracy',
        'COA consistency per batch',
        'Packaging integrity for monsoon-season logistics',
      ],
      confidentiality:
        'By agreement, the cooperative\'s name and member details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Seasonal fungicide supply', 'Rice paddy disease', 'Cooperative branding'],
    },
    {
      slug: 'east-africa-smallholder-kit',
      customerType: 'NGOs & Development Organizations',
      region: 'East Africa',
      productCategory: 'Crop Protection Kit for Smallholder Farmers',
      projectStage: 'Program design → Bundle specification → Sample approval → Multi-product delivery',
      manufacturingScope: 'Multi-product bundle, simplified labeling, program packaging, seasonal supply',
      keyRequirements: 'Multi-product crop protection bundle for smallholders, pictographic labeling, manageable pack sizes',
      qualityFocus: 'Active-ingredient assay per product, label clarity, pack-size accuracy, kit completeness',
      navLabel: 'Smallholder Crop Protection Kit',
      metaTitle: 'Crop Protection Kit for Smallholders | Multi-Product Bundle — Agrospear',
      metaDescription:
        'How an East African NGO deployed a multi-product crop protection kit for smallholder farmers — herbicide, insecticide and fungicide in manageable pack sizes with pictographic labeling.',
      kicker: 'NGO Program Project',
      h1: 'Deploying a Multi-Product Crop Protection Kit for Smallholder Farmers in East Africa',
      intro: [
        'An East African NGO running a smallholder support program needed a crop protection kit — herbicide, insecticide and fungicide in smallholder-manageable pack sizes, with pictographic labeling that low-literacy farmers can follow safely.',
      ],
      industry: 'NGOs & Development Organizations',
      requirement: 'A multi-product crop protection bundle — herbicide, insecticide and fungicide — in small pack sizes with pictographic labeling, for distribution to smallholder farmers.',
      challenge:
        'Smallholder farmers need small pack sizes that standard commercial packaging does not offer. Labeling must be pictographic for low-literacy users, each product must have clear application guidance, and the bundle must arrive complete — no missing products in the kit.',
      solution:
        'Three crop-protection products in smallholder-manageable pack sizes, pictographic labeling with application-timing icons, and a bundled kit with complete product coverage — produced and inspected as a single program.',
      product: 'Crop protection kit — herbicide, insecticide and fungicide in small pack sizes, with pictographic labeling and application-timing icons.',
      process: [
        { title: 'Program design', body: 'Crop calendar, pest spectrum and farmer capacity defined the three-product bundle.' },
        { title: 'Bundle specification', body: 'Pack sizes, pictographic labeling and kit structure set for smallholder use.' },
        { title: 'Sample approval', body: 'Labeling clarity and pack-size usability confirmed on physical samples.' },
        { title: 'Multi-product delivery', body: 'Bundled kits produced and shipped as a complete program with per-product COAs.' },
      ],
      result:
        'Kits reached smallholder farmers with complete product coverage and pictographic labeling. Field teams reported that farmers followed the pictographic application guidance without additional training, and the NGO expanded the program to additional regions.',
      outcome: 'Complete kits delivered · pictographic labels followed without extra training · program expanded.',
      metrics: [
        { value: '3', label: 'products in the bundle' },
        { value: '100%', label: 'kits complete at delivery' },
        { value: '0', label: 'additional training sessions needed for label comprehension' },
        { value: '2x', label: 'program regions after expansion' },
      ],
      takeaways: [
        'Smallholder pack sizes require dedicated packaging — commercial sizes do not serve this segment.',
        'Pictographic labeling with application-timing icons removes the literacy barrier without sacrificing safety information.',
        'A bundled kit with complete coverage prevents farmers from skipping one product for cost reasons.',
        'Kit completeness must be inspected as a unit, not per product — a missing product invalidates the whole kit.',
      ],
      customizations: [
        'Herbicide, insecticide and fungicide selected for the target crop calendar',
        'Smallholder-manageable pack sizes for each product',
        'Pictographic labeling with application-timing icons',
        'Bundled kit structure with complete product coverage',
        'Per-product COAs included in the kit documentation',
        'Program packaging for NGO distribution logistics',
      ],
      inspectionFocus: [
        'Active-ingredient assay per product against specification',
        'Pictographic labeling clarity and accuracy',
        'Pack-size weight and volume accuracy per product',
        'Kit completeness — all three products present per kit',
        'Program packaging integrity for rural distribution',
      ],
      confidentiality:
        'By agreement, the NGO\'s name and program regions are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Smallholder crop protection', 'Pictographic labeling', 'Multi-product bundle'],
    },
    {
      slug: 'cis-generic-registration',
      customerType: 'Importers & Registration Holders',
      region: 'CIS Region',
      productCategory: 'Generic Pesticide Registration & Supply',
      projectStage: 'Registration documentation → Sample approval → Registration support → Volume supply',
      manufacturingScope: 'Generic pesticide formulation, registration documentation, production, ongoing supply',
      keyRequirements: 'Generic pesticide with registration documentation for CIS market, ongoing supply after registration',
      qualityFocus: 'Active-ingredient assay, impurity profile, registration documentation accuracy, COA per batch',
      navLabel: 'CIS Generic Registration & Supply',
      metaTitle: 'Generic Pesticide Registration | CIS Market — Agrospear',
      metaDescription:
        'How a CIS-region importer registered and sourced a generic pesticide — registration documentation, formulation verification and ongoing supply with per-batch COAs.',
      kicker: 'Registration Support Project',
      h1: 'Registering and Supplying a Generic Pesticide for the CIS Market',
      intro: [
        'A CIS-region crop-protection importer needed to register a generic pesticide and secure an ongoing supply — registration documentation, formulation verification and per-batch COAs for a market with strict import testing.',
      ],
      industry: 'Importers & Registration Holders',
      requirement: 'A generic pesticide with registration documentation for the CIS market, formulation verification and ongoing supply with per-batch COAs.',
      challenge:
        'CIS registration requires detailed technical dossiers including impurity profiles, toxicology summaries and analytical methods. Import testing at the destination lab is routine — every batch must pass assay verification. The importer needed both registration support and a reliable ongoing supply partner.',
      solution:
        'A generic pesticide formulation with full registration documentation — impurity profiles, toxicology summaries, analytical methods — produced to a consistent specification, and ongoing supply with per-batch COAs designed to pass destination-lab import testing.',
      product: 'Generic pesticide — registration documentation package, consistent formulation and ongoing supply with per-batch COAs for import testing.',
      process: [
        { title: 'Registration documentation', body: 'Technical dossier prepared — impurity profiles, toxicology summaries, analytical methods.' },
        { title: 'Sample approval', body: 'Formulation and documentation confirmed against registration requirements.' },
        { title: 'Registration support', body: 'Dossier submitted; queries addressed through the registration process.' },
        { title: 'Ongoing supply', body: 'Consistent production with per-batch COAs for import testing at destination labs.' },
      ],
      result:
        'Registration was granted on the submitted dossier. Ongoing supply passes destination-lab import testing consistently, and the importer expanded the registration to additional CIS markets on the same documentation base.',
      outcome: 'Registration granted · import testing passed consistently · expanded to additional CIS markets.',
      customizations: [
        'Generic pesticide formulation with consistent specification for import testing',
        'Registration documentation package — impurity profiles, toxicology summaries, analytical methods',
        'Per-batch COAs designed for CIS destination-lab import testing',
        'Labeling and packaging configured for CIS market requirements',
        'Query-response support through the registration process',
        'Documentation base reusable for additional CIS market registrations',
      ],
      inspectionFocus: [
        'Active-ingredient assay against specification',
        'Impurity profile within registration-submitted limits',
        'COA accuracy and consistency per batch',
        'Labeling compliance with CIS market requirements',
        'Documentation alignment between dossier and actual production',
      ],
      confidentiality:
        'By agreement, the importer\'s name and registration details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Generic pesticide', 'CIS registration', 'Import testing support'],
    },
    {
      slug: 'south-america-brand-launch-low-moq',
      customerType: 'Emerging Crop-Protection Brands',
      region: 'South America',
      productCategory: 'Crop Protection Brand Launch (Low MOQ)',
      projectStage: 'Concept → Pilot 5 tons → Launch 50 tons → Scale path',
      manufacturingScope: 'ODM formulation, branded packaging, low-MOQ pilot, production scaling',
      keyRequirements: 'Low-MOQ pilot run (5 tons), then 50 tons for launch, branded packaging, tooling retained',
      qualityFocus: 'Active-ingredient assay, label accuracy, packaging verification, COA per batch',
      navLabel: 'Emerging Brand Low-MOQ Launch',
      metaTitle: 'Crop Protection Brand Launch | Low MOQ Pilot — Agrospear',
      metaDescription:
        'How a South American emerging brand launched a crop protection brand — 5-ton pilot run, then 50 tons branded launch, with formulation ownership retained and a scale path in place.',
      kicker: 'Emerging Brand Project',
      h1: 'From 5-Ton Pilot to 50-Ton Launch: A Crop Protection Startup Brand Story',
      intro: [
        'A South American crop-protection startup with market access but no factory wanted to launch its own brand — a low-MOQ pilot run to validate, then a branded launch order that would not sink the budget.',
      ],
      industry: 'Emerging Crop-Protection Brands',
      requirement: 'ODM development at low MOQ: a 5-ton pilot run to validate, then 50 tons branded for launch, with formulation ownership retained.',
      challenge:
        'No formulation lab, no import experience and a first order too small for most manufacturers — plus a launch date tied to the regional spraying season.',
      solution:
        'ODM formulation development from the brand\'s concept on a proven base, a 5-ton pilot run covering samples and supply verification, then a 50-ton branded launch order with formulation ownership retained for the brand.',
      product: 'Branded crop protection product — custom formulation, branded packaging and formulation ownership for the startup.',
      process: [
        { title: 'Concept call', body: 'Target crop, pest spectrum and launch date set the formulation direction.' },
        { title: 'Pilot run', body: '5 tons proved the formulation, packaging and supply chain end to end.' },
        { title: 'Launch order', body: '50 tons produced with the verified formulation and branded packaging.' },
        { title: 'Scale path', body: 'Formulation ownership retained for the brand; reorders at improved pricing.' },
      ],
      result:
        'The 5-ton pilot sold through within weeks of the season opening; feedback from the pilot run corrected a label issue before the 50-ton order went into production. The brand owns the formulation for future production.',
      outcome: 'Pilot sold out · label fixed pre-scale · formulation owned by the brand.',
      customizations: [
        'ODM formulation developed from the brand concept on a proven base',
        'Branded packaging and labeling for the launch order',
        'Retail-ready packaging configuration for the target market',
        '5-ton pilot run for market validation before scaling',
        'Formulation ownership retained for the brand',
        'Launch-date-aligned production scheduling',
      ],
      inspectionFocus: [
        'Active-ingredient assay against the ODM target',
        'Label accuracy against approved artwork',
        'Packaging verification — including the pilot-run label fix',
        'COA consistency per batch',
        'Formulation stability in the pilot and launch batches',
      ],
      confidentiality:
        'By agreement, the brand name and launch details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['ODM development', 'Low-MOQ pilot', 'Startup brand launch'],
    },
  ],
  es: [
    {
      slug: 'latam-glyphosate-private-label',
      customerType: 'Distribuidores e importadores',
      region: 'América Latina',
      productCategory: 'Glifosato 480g/L SL (marca privada)',
      projectStage: 'Verificación de formulación → Aprobación de muestra → Entrega en 90 días',
      manufacturingScope: 'Marca privada, replicación de formulación, producción en volumen, documentación reglamentaria',
      keyRequirements: '1.000 toneladas de Glifosato 480g/L SL bajo la marca del distribuidor, COA por lote, entrega en 90 días',
      qualityFocus: 'Ensayo de ingrediente activo, perfil de impurezas, integridad del envase, precisión del COA',
      navLabel: 'Lanzamiento de Glifosato en LATAM',
      metaTitle: 'Glifosato 480g/L marca privada | 1.000 toneladas en 90 días — Agrospear',
      metaDescription:
        'Cómo un distribuidor latinoamericano lanzó un programa de Glifosato 480g/L SL de marca privada de 1.000 toneladas en 90 días — formulación verificada, COA por lote y un reorder en el Q2 con la misma especificación bloqueada.',
      kicker: 'Proyecto de marca privada',
      h1: 'Cómo un distribuidor latinoamericano lanzó un programa de Glifosato de marca privada de 1.000 toneladas en 90 días',
      intro: [
        'Un distribuidor de protección de cultivos en América Latina necesitaba su propio Glifosato 480g/L SL de marca en el mercado para la temporada de aplicación — 1.000 toneladas, formulación verificada, documentación reglamentaria completa y sin relaciones directas con fábricas de glifosato.',
      ],
      industry: 'Distribuidores e importadores',
      requirement: '1.000 toneladas de Glifosato 480g/L SL bajo la marca del distribuidor, con COA por lote, etiquetado en el idioma local y entrega en 90 días.',
      challenge:
        'La ventana de aplicación es fija: las 1.000 toneladas debían llegar antes del inicio de las aplicaciones en campo. El etiquetado de marca privada — pictogramas de peligro, codificación de lotes, declaraciones reglamentarias — debía cumplir los requisitos nacionales, y el distribuidor no tenía experiencia en fabricación de glifosato.',
      solution:
        'Una formulación verificada de 480g/L SL producida bajo la marca del distribuidor, etiquetado de marca privada y documentación reglamentaria completa gestionados en un solo programa, y producción programada para que todos los lotes se embarcaran dentro de los 90 días — con la especificación bloqueada para un reorder limpio.',
      product: 'Glifosato 480g/L SL de marca privada — 1.000 toneladas en bidones e IBC, con etiquetas de marca, COAs codificados por lote y documentación reglamentaria.',
      process: [
        { title: 'Verificación de formulación', body: 'Formulación de Glifosato 480g/L SL verificada frente a la especificación objetivo y los límites de impurezas.' },
        { title: 'Aprobación de muestra', body: 'Etiquetado, envase y formato de COA confirmados en muestras físicas.' },
        { title: 'Producción en 90 días', body: 'Volumen programado para que todos los lotes se embarquen juntos en la ventana de temporada.' },
        { title: 'Reorder Q2', body: 'Pedido repetido sobre la misma especificación bloqueada.' },
      ],
      result:
        'Las 1.000 toneladas con etiquetado completo y COAs se embarcaron dentro de 90 días, a tiempo para la temporada de aplicación. La línea se vendió y el distribuidor volvió en el Q2 con un reorder sobre la misma especificación bloqueada.',
      outcome: '1.000 toneladas · 90 días · marca privada · reorder en Q2.',
      metrics: [
        { value: '1.000', label: 'toneladas de Glifosato 480g/L SL' },
        { value: '90', label: 'días hasta la entrega completa' },
        { value: '100%', label: 'lotes con COA y codificación' },
        { value: 'Q2', label: 'reorder con la misma especificación' },
      ],
      takeaways: [
        'Una formulación verificada elimina sorpresas de ensayo en el laboratorio de destino.',
        'Un programa que cubre producto, etiquetado y documentación elimina un punto habitual de fallo en lanzamientos.',
        'Una fecha fija de temporada de aplicación condiciona el calendario — la planificación debe tratarla como innegociable.',
        'Bloquear la especificación en el lanzamiento hace que los reorders sean limpios y coherentes.',
      ],
      customizations: [
        'Formulación de Glifosato 480g/L SL ajustada a la especificación objetivo',
        'Etiquetado de marca privada en bidones e IBC con pictogramas de peligro',
        'COAs codificados por lote y documentación reglamentaria por envío',
        'Texto de etiqueta en idioma local verificado frente a los requisitos nacionales',
        'BOM y formulación bloqueados para la coherencia del reorder',
        'Entrega al por mayor alineada a la ventana de temporada de aplicación',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo frente al objetivo de 480g/L',
        'Perfil de impurezas dentro de los límites del contrato',
        'Precisión del etiquetado frente a los archivos de marca privada aprobados',
        'Codificación de lotes y coherencia del COA por envío',
        'Integridad de bidones e IBC antes de la carga',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del distribuidor ni los detalles de mercado. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Marca privada', 'Glifosato 480g/L SL', 'Entrega en ventana de temporada'],
    },
    {
      slug: 'africa-malaria-vector-insecticide',
      customerType: 'Agencias de compra gubernamentales',
      region: 'África Subsahariana',
      productCategory: 'Insecticida para control de vectores de malaria',
      projectStage: 'Especificación de licitación → Aprobación de muestra → Entrega por fases plurianual',
      manufacturingScope: 'Formulación OMS-PQ, etiquetado gubernamental, producción por fases, documentación de licitación',
      keyRequirements: '500 toneladas de insecticida conforme a la especificación OMS-PQ, entrega plurianual, etiquetado gubernamental',
      qualityFocus: 'Ensayo de ingrediente activo, cumplimiento OMS-PQ, integridad del envase, COA por lote',
      navLabel: 'Insecticida gubernamental africano',
      metaTitle: 'Insecticida para control de malaria | 500 toneladas plurianual — Agrospear',
      metaDescription:
        'Cómo un gobierno africano adquirió 500 toneladas de insecticida para el control de vectores de malaria bajo una licitación plurianual — formulación OMS-PQ, entrega por fases y COA por lote.',
      kicker: 'Proyecto de compra gubernamental',
      h1: 'Suministro de 500 toneladas de insecticida para el control de vectores de malaria bajo una licitación gubernamental plurianual',
      intro: [
        'Una agencia gubernamental de África subsahariana necesitaba un suministro fiable de insecticida de control de vectores bajo una licitación plurianual — 500 toneladas, especificación OMS-PQ, entrega por fases y documentación completa de licitación.',
      ],
      industry: 'Agencias de compra gubernamentales',
      requirement: '500 toneladas de insecticida conforme a la especificación OMS-PQ, entregadas en volúmenes anuales por fases a lo largo de una licitación plurianual, con etiquetado gubernamental y COAs por lote.',
      challenge:
        'Las licitaciones gubernamentales exigen un cumplimiento estricto de la OMS-PQ con documentación completa. Las entregas anuales por fases deben alinearse con los calendarios de rociamiento, y el etiquetado debe llevar pictogramas de peligro y codificación de lotes para la trazabilidad.',
      solution:
        'Una formulación de insecticida conforme a la OMS-PQ producida bajo la especificación del gobierno, documentación completa de licitación y etiquetado gubernamental gestionados en un solo programa, y producción por fases programada para que cada volumen anual llegue antes del ciclo de rociamiento — con COAs por lote y muestras de retención.',
      product: 'Insecticida OMS-PQ para control de vectores — 500 toneladas en volúmenes anuales por fases, con etiquetado gubernamental, COAs por lote y muestras de retención.',
      process: [
        { title: 'Especificación de licitación', body: 'Especificación OMS-PQ, límites de impurezas y requisitos de etiquetado mapeados al documento de licitación.' },
        { title: 'Aprobación de muestra', body: 'Formulación y etiquetado confirmados en muestras físicas frente a la especificación de licitación.' },
        { title: 'Producción por fases', body: 'Volúmenes anuales programados contra cada calendario de ciclos de rociamiento.' },
        { title: 'Entrega y documentación', body: 'Cada fase enviada con COAs por lote, muestras de retención y documentación de licitación.' },
      ],
      result:
        'Todas las entregas por fases llegaron antes de cada ciclo de rociamiento, con documentación completa. La formulación conforme a la OMS-PQ superó la verificación del laboratorio de destino, y la licitación se renovó por un segundo periodo.',
      outcome: '500 toneladas · licitación plurianual · entrega a tiempo en cada ciclo · licitación renovada.',
      metrics: [
        { value: '500', label: 'toneladas durante el periodo de licitación' },
        { value: '100%', label: 'lotes que superaron la verificación en laboratorio de destino' },
        { value: '0', label: 'retrasos en ciclos de rociamiento por entregas tardías' },
        { value: '2.º', label: 'periodo de licitación renovado' },
      ],
      takeaways: [
        'El cumplimiento OMS-PQ es innegociable — la formulación y la documentación deben estar preparadas desde el primer día.',
        'La entrega por fases alineada a los ciclos de rociamiento evita tanto roturas de stock como excedentes de almacenamiento.',
        'Los COAs por lote y las muestras de retención protegen a la agencia gubernamental y al fabricante.',
        'Un historial limpio en el primer periodo es el argumento más sólido para la renovación de la licitación.',
      ],
      customizations: [
        'Formulación conforme a la OMS-PQ ajustada a la especificación de la licitación',
        'Etiquetado gubernamental con pictogramas de peligro y codificación de lotes',
        'COAs por lote y muestras de retención para trazabilidad completa',
        'Volúmenes anuales por fases alineados a los calendarios de rociamiento',
        'Paquete de documentación de licitación preparado según los requisitos de compra',
        'Configuración de envase para almacenamiento tropical y logística interior',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo frente a los límites OMS-PQ',
        'Perfil de impurezas dentro de la especificación',
        'Precisión del etiquetado frente a las plantillas gubernamentales',
        'Codificación de lotes y coherencia del COA por fase',
        'Integridad de bidones y envases para logística tropical',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la agencia gubernamental ni los detalles de la licitación. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Licitación gubernamental', 'Cumplimiento OMS-PQ', 'Control de vectores de malaria'],
    },
    {
      slug: 'seasia-herbicide-odm',
      customerType: 'Marcas regionales de protección de cultivos',
      region: 'Sudeste Asiático',
      productCategory: 'Formulación de herbicida (ODM)',
      projectStage: 'Concepto → Desarrollo de formulación → Aprobación de muestra → Producción de 200 toneladas',
      manufacturingScope: 'Desarrollo ODM de formulación, soporte de registro, producción, envase',
      keyRequirements: 'Formulación de herbicida ODM desarrollada según las especificaciones de la marca, 200 toneladas, documentación de registro',
      qualityFocus: 'Estabilidad de formulación, ensayo de ingrediente activo, precisión del envase, coherencia del COA',
      navLabel: 'Herbicida ODM para el Sudeste Asiático',
      metaTitle: 'Desarrollo ODM de herbicida | 200 toneladas — Agrospear',
      metaDescription:
        'Cómo una marca de protección de cultivos del Sudeste Asiático desarrolló una formulación de herbicida ODM con Agrospear — del concepto a 200 toneladas, con documentación de registro y propiedad de la formulación.',
      kicker: 'Proyecto de desarrollo ODM',
      h1: 'Del concepto a 200 toneladas: desarrollo ODM de herbicida para una marca del Sudeste Asiático',
      intro: [
        'Una marca de protección de cultivos del Sudeste Asiático quería su propia formulación de herbicida — desarrollada según sus objetivos de rendimiento, con documentación de registro y propiedad de la formulación — sin construir un laboratorio propio.',
      ],
      industry: 'Marcas regionales de protección de cultivos',
      requirement: 'Una formulación de herbicida ODM desarrollada según los objetivos de rendimiento y coste de la marca, 200 toneladas para la primera temporada, con documentación de registro y propiedad de la formulación transferida a la marca.',
      challenge:
        'Sin laboratorio de formulación propio, sin experiencia de fabricación y un primer pedido que debía superar los requisitos de registro local antes de poder venderse. La marca necesitaba propiedad de la formulación — no un acuerdo de maquila.',
      solution:
        'Desarrollo ODM de la formulación a partir de los objetivos de rendimiento de la marca, optimización a escala de laboratorio seguida de verificación en lote piloto, 200 toneladas producidas con la formulación verificada y documentación de registro completa y propiedad de la formulación transferida a la marca.',
      product: 'Formulación de herbicida ODM — desarrollada según los objetivos de la marca, 200 toneladas producidas, con documentación de registro y propiedad de la formulación.',
      process: [
        { title: 'Concepto y objetivos', body: 'Cultivo, espectro de malas hierbas, método de aplicación y objetivos de coste fijaron la dirección de la formulación.' },
        { title: 'Desarrollo de formulación', body: 'Optimización a escala de laboratorio seguida de verificación en lote piloto.' },
        { title: 'Aprobación de muestra', body: 'La muestra física confirmó rendimiento, estabilidad y envase.' },
        { title: 'Producción de 200 toneladas', body: 'Volumen producido con la formulación verificada, COAs por lote y documentación de registro preparada.' },
      ],
      result:
        'Las 200 toneladas de la primera temporada se vendieron; el registro fue concedido sobre la documentación presentada y la marca es propietaria de la formulación para futuras producciones en cualquier lugar.',
      outcome: '200 toneladas · registro concedido · formulación en propiedad de la marca.',
      customizations: [
        'Formulación de herbicida desarrollada a partir de los objetivos de rendimiento y coste de la marca',
        'Optimización a escala de laboratorio y verificación en lote piloto',
        'Paquete de documentación de registro para el mercado objetivo',
        'Propiedad de la formulación transferida a la marca',
        'Envase y etiquetado de marca según los requisitos del mercado',
        'Formato de COA y datos de estabilidad alineados a las necesidades de registro',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo frente al objetivo ODM',
        'Verificación de datos de estabilidad de la formulación',
        'Precisión del etiquetado frente al arte enviado para el registro',
        'Coherencia del COA por lote',
        'Integridad del envase para logística tropical',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la marca ni los detalles de la formulación. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Desarrollo ODM', 'Formulación de herbicida', 'Soporte de registro'],
    },
    {
      slug: 'europe-fungicide-reach',
      customerType: 'Importadores y distribuidores europeos',
      region: 'Europa',
      productCategory: 'Gama de fungicidas (3 SKU)',
      projectStage: 'Planificación de gama → Soporte de registro CE/REACH → Aprobación de muestra → Entrega en volumen',
      manufacturingScope: 'Gama de fungicidas de 3 SKU, documentación de registro REACH, etiquetado UE, producción en volumen',
      keyRequirements: '3 SKU de fungicidas con soporte de registro CE/REACH, etiquetado conforme a la UE, envase retail',
      qualityFocus: 'Ensayo de ingrediente activo, perfil de impurezas, documentación REACH, cumplimiento del etiquetado UE',
      navLabel: 'Gama de fungicidas para Europa',
      metaTitle: 'Gama de fungicidas para la UE | 3 SKU, soporte REACH — Agrospear',
      metaDescription:
        'Cómo un importador europeo lanzó una gama de fungicidas de 3 SKU con soporte de registro CE/REACH — etiquetado conforme a la UE, documentación por SKU y entrega en volumen en un solo programa.',
      kicker: 'Proyecto de registro en la UE',
      h1: 'Lanzamiento de una gama de fungicidas de 3 SKU para el mercado europeo con soporte de registro CE/REACH',
      intro: [
        'Un importador europeo de protección de cultivos quería su propia gama de fungicidas en el mercado de la UE — tres SKU, documentación de registro CE/REACH, etiquetado conforme a la UE y sin necesidad de coordinar con un consultor de registro independiente.',
      ],
      industry: 'Importadores y distribuidores europeos',
      requirement: 'Tres SKU de fungicidas con soporte de registro CE/REACH, etiquetado CLP conforme a la UE, documentación técnica por SKU y entrega en volumen en un solo programa.',
      challenge:
        'El registro en la UE requiere expedientes técnicos detallados — perfiles de impurezas, resúmenes toxicológicos, métodos analíticos — y el etiquetado debe llevar pictogramas CLP de peligro, códigos UFI y números de registro REACH. El importador no tenía equipo de registro y necesitaba un programa que cubriera producto, documentación y etiquetado.',
      solution:
        'Tres formulaciones de fungicidas seleccionadas para la gama, documentación de registro CE/REACH completa preparada por SKU, etiquetado CLP de la UE con códigos UFI y producción programada para que las tres SKU se embarquen juntas — con la documentación bloqueada para renovaciones coherentes.',
      product: 'Gama de fungicidas de 3 SKU — documentación de registro CE/REACH, etiquetado CLP de la UE con códigos UFI, expedientes técnicos por SKU.',
      process: [
        { title: 'Planificación de gama', body: 'Tres SKU de fungicidas seleccionadas para cobertura de protección de cultivos en la UE.' },
        { title: 'Soporte de registro', body: 'Documentación CE/REACH, perfiles de impurezas y métodos analíticos preparados por SKU.' },
        { title: 'Aprobación de muestra', body: 'Etiquetado, envase y formato de COA confirmados en muestras físicas.' },
        { title: 'Entrega en volumen', body: 'Las tres SKU producidas y enviadas juntas con documentación completa.' },
      ],
      result:
        'La gama de 3 SKU se embarcó con documentación de registro completa y etiquetado conforme a la UE. El importador presentó los expedientes y la primera SKU obtuvo la aprobación de registro dentro del plazo previsto.',
      outcome: '3 SKU · documentación CE/REACH · etiquetado CLP UE · primer registro concedido.',
      metrics: [
        { value: '3', label: 'SKU de fungicidas en un programa' },
        { value: '100%', label: 'expedientes con perfiles de impurezas y métodos analíticos' },
        { value: '1', label: 'programa que cubre producto, docs y etiquetado' },
        { value: '1.ª', label: 'SKU con registro concedido' },
      ],
      takeaways: [
        'Preparar la documentación de registro junto con el desarrollo del producto evita la brecha habitual entre la preparación del producto y la presentación del expediente.',
        'Un programa que cubre producto, documentación y etiquetado elimina el problema de coordinación entre fabricante y consultor de registro.',
        'El etiquetado CLP con códigos UFI debe incorporarse a la especificación de envase desde el inicio — los cambios retroactivos son caros.',
        'La documentación bloqueada hace que las renovaciones sean coherentes y de menor riesgo.',
      ],
      customizations: [
        'Tres formulaciones de fungicidas seleccionadas para cobertura de protección de cultivos en la UE',
        'Documentación de registro CE/REACH por SKU — perfiles de impurezas, resúmenes toxicológicos, métodos analíticos',
        'Etiquetado CLP de la UE con pictogramas de peligro y códigos UFI por SKU',
        'Expedientes técnicos por SKU alineados a los requisitos de registro',
        'BOM y formulación bloqueados para renovaciones coherentes',
        'Configuración de envase retail para distribución en la UE',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo por SKU frente a la especificación',
        'Perfil de impurezas dentro de los límites REACH',
        'Precisión del etiquetado CLP — pictogramas, códigos UFI, indicaciones de peligro',
        'Coherencia del COA por lote y por SKU',
        'Verificación del envase retail y el etiquetado',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del importador ni los detalles de registro. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Registro CE/REACH', 'Gama de fungicidas de 3 SKU', 'Etiquetado CLP UE'],
    },
    {
      slug: 'middle-east-insecticide-bulk',
      customerType: 'Distribuidores y mayoristas',
      region: 'Oriente Medio',
      productCategory: 'Insecticida de marca propia (suministro al por mayor)',
      projectStage: 'Alineación de especificación → Aprobación de muestra → Entrega de 500 toneladas',
      manufacturingScope: 'Marca propia, formulación al por mayor, producción en volumen, soporte de reorders',
      keyRequirements: '500 toneladas de insecticida bajo marca propia, envase al por mayor, alineación con la temporada',
      qualityFocus: 'Ensayo de ingrediente activo, integridad del envase, precisión del etiquetado, COA por lote',
      navLabel: 'Programa de insecticida para Oriente Medio',
      metaTitle: 'Insecticida de marca propia | 500 toneladas al por mayor — Agrospear',
      metaDescription:
        'Cómo un distribuidor de Oriente Medio lanzó un programa de insecticida de marca propia de 500 toneladas — suministro al por mayor, COA por lote y entrega alineada a la temporada en un programa de fabricación.',
      kicker: 'Proyecto de suministro al por mayor',
      h1: 'Cómo un distribuidor de Oriente Medio lanzó un programa de insecticida de marca propia de 500 toneladas',
      intro: [
        'Un distribuidor de protección de cultivos de Oriente Medio necesitaba un suministro al por mayor de insecticida bajo su propia marca — 500 toneladas, formulación verificada y entrega alineada a la temporada sin gestionar múltiples puntos de suministro.',
      ],
      industry: 'Distribuidores y mayoristas',
      requirement: '500 toneladas de insecticida bajo marca propia, en envase al por mayor, con COAs por lote y entrega alineada a la temporada de aplicación.',
      challenge:
        'La temporada de aplicación en la región es corta y fija — las 500 toneladas deben estar en el país antes del inicio de las aplicaciones. El distribuidor necesitaba etiquetado personalizado en árabe e inglés, envase al por mayor adecuado para la logística en clima cálido y un único socio de fabricación en lugar de coordinar entre varios proveedores.',
      solution:
        'Una formulación de insecticida verificada producida bajo la marca propia del distribuidor, etiquetado bilingüe árabe/inglés, envase al por mayor configurado para almacenamiento y transporte en clima cálido, y producción programada para que todos los volúmenes se envíen antes de la ventana de temporada.',
      product: 'Insecticida de marca propia — 500 toneladas en bidones e IBC al por mayor, con etiquetado bilingüe, COAs por lote y envase para clima cálido.',
      process: [
        { title: 'Alineación de especificación', body: 'Formulación objetivo, límites de impurezas y requisitos de envase mapeados a las necesidades del distribuidor.' },
        { title: 'Aprobación de muestra', body: 'Etiquetado bilingüe y envase confirmados en muestras físicas.' },
        { title: 'Producción en volumen', body: '500 toneladas programadas para que todos los volúmenes lleguen antes de la ventana de temporada.' },
        { title: 'Entrega y reorder', body: 'Envío con COAs por lote; especificación de reorder bloqueada para la próxima temporada.' },
      ],
      result:
        'Las 500 toneladas con etiquetado bilingüe y COAs por lote se enviaron antes de la ventana de temporada. La formulación superó la verificación del laboratorio de destino y el distribuidor realizó un reorder para la siguiente temporada con la misma especificación bloqueada.',
      outcome: '500 toneladas · entrega alineada a la temporada · verificación en laboratorio de destino superada · reorder con la misma especificación.',
      metrics: [
        { value: '500', label: 'toneladas en un programa' },
        { value: '100%', label: 'lotes con COA y etiquetado bilingüe' },
        { value: '0', label: 'días de retraso en la temporada' },
        { value: '2.ª', label: 'temporada con reorder sobre la misma especificación' },
      ],
      takeaways: [
        'El suministro al por mayor con un único socio de fabricación elimina el problema de coordinación de múltiples puntos de suministro.',
        'El etiquetado bilingüe debe verificarse en muestras físicas — los errores de texto en árabe no se detectan con herramientas automáticas.',
        'La configuración de envase para clima cálido evita la degradación de la formulación durante el almacenamiento y el transporte interior.',
        'Una especificación bloqueada hace que las temporadas de reorder sean predecibles y de menor riesgo.',
      ],
      customizations: [
        'Formulación de insecticida ajustada a la especificación objetivo del distribuidor',
        'Marca propia en árabe e inglés',
        'Envase en bidones e IBC al por mayor configurado para logística en clima cálido',
        'COAs por lote y muestras de retención',
        'BOM y especificación bloqueados para la coherencia del reorder',
        'Planificación de entrega alineada a la temporada',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo frente a la especificación',
        'Precisión del etiquetado bilingüe — verificación de texto en árabe e inglés',
        'Integridad del envase para almacenamiento y transporte en clima cálido',
        'Coherencia del COA por lote',
        'Verificación de codificación de lotes y trazabilidad',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del distribuidor ni los detalles de mercado. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Marca propia', 'Suministro al por mayor de insecticida', 'Entrega alineada a la temporada'],
    },
    {
      slug: 'central-america-sugarcane-herbicide',
      customerType: 'Agroempresas y plantaciones',
      region: 'Centroamérica',
      productCategory: 'Herbicida selectivo para caña de azúcar',
      projectStage: 'Análisis de requisitos del cultivo → Selección de formulación → Aprobación de muestra → Producción de nicho',
      manufacturingScope: 'Formulación de herbicida de nicho, etiquetado específico por cultivo, producción, orientación de aplicación',
      keyRequirements: 'Herbicida selectivo seguro para caña de azúcar, eficaz contra malas hierbas objetivo, formulación de nicho',
      qualityFocus: 'Verificación de selectividad del cultivo, ensayo de ingrediente activo, precisión de la dosis de aplicación, COA por lote',
      navLabel: 'Herbicida selectivo para caña',
      metaTitle: 'Herbicida selectivo para caña de azúcar | Formulación de nicho — Agrospear',
      metaDescription:
        'Cómo una agroempresa centroamericana adquirió un herbicida selectivo para caña de azúcar — formulación de nicho segura para el cultivo, orientación de aplicación y COA por lote.',
      kicker: 'Proyecto de formulación de nicho',
      h1: 'Desarrollo de un herbicida selectivo para caña de azúcar para una agroempresa centroamericana',
      intro: [
        'Un grupo de plantaciones de caña de azúcar en Centroamérica necesitaba un herbicida selectivo que controlara malas hierbas de hoja ancha y gramíneas sin dañar el cultivo — una formulación de nicho con selectividad probada y orientación de aplicación para los equipos de campo.',
      ],
      industry: 'Agroempresas y plantaciones',
      requirement: 'Una formulación de herbicida selectivo eficaz contra las malas hierbas objetivo y segura para la caña de azúcar, con datos de selectividad del cultivo y orientación de aplicación para los equipos de campo.',
      challenge:
        'La selectividad del herbicida para caña de azúcar es estrecha — la formulación o dosis equivocada causa daño al cultivo. La agroempresa necesitaba un producto de nicho con seguridad de cultivo verificada, no un herbicida genérico de amplio espectro, y los equipos de campo necesitaban orientación de aplicación clara.',
      solution:
        'Una formulación de herbicida selectivo de nicho con datos de selectividad del cultivo verificados para caña de azúcar, orientación de dosis calibrada a las condiciones locales y COAs por lote con parámetros de selectividad incluidos.',
      product: 'Herbicida selectivo para caña de azúcar — formulación de nicho con datos de selectividad del cultivo, orientación de aplicación y COAs por lote.',
      process: [
        { title: 'Análisis de requisitos del cultivo', body: 'Espectro de malas hierbas, estado de crecimiento del cultivo y condiciones del suelo definieron la dirección de la formulación.' },
        { title: 'Selección de formulación', body: 'Herbicida selectivo elegido por la seguridad para la caña de azúcar y la eficacia contra las malas hierbas objetivo.' },
        { title: 'Aprobación de muestra', body: 'Selectividad y eficacia confirmadas en muestras físicas y datos de ensayo de campo.' },
        { title: 'Producción de nicho', body: 'Volumen producido con COAs por lote, parámetros de selectividad y orientación de aplicación.' },
      ],
      result:
        'La formulación de nicho controló las malas hierbas objetivo sin dañar la caña de azúcar en las aplicaciones de campo. La orientación de aplicación del paquete de COA fue adoptada por todo el grupo de plantaciones y la agroempresa amplió el programa para cubrir variedades adicionales de caña de azúcar.',
      outcome: 'Control de malas hierbas seguro para el cultivo · adopción por los equipos de campo · ampliación a variedades adicionales.',
      customizations: [
        'Formulación de herbicida selectivo elegida por la seguridad del cultivo de caña de azúcar',
        'Paquete de datos de selectividad del cultivo para el espectro de malas hierbas objetivo',
        'Orientación de dosis de aplicación calibrada a las condiciones locales',
        'COAs por lote con parámetros de selectividad incluidos',
        'Etiquetado con instrucciones de aplicación específicas por cultivo',
        'Configuración de envase para logística a escala de plantación',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo frente a la especificación',
        'Parámetros de selectividad dentro del rango verificado',
        'Precisión del etiquetado — instrucciones de aplicación específicas por cultivo',
        'Coherencia del COA por lote',
        'Integridad del envase para logística de plantación',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la agroempresa ni los detalles de la plantación. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Herbicida selectivo', 'Seguridad del cultivo de caña de azúcar', 'Formulación de nicho'],
    },
    {
      slug: 'south-asia-rice-fungicide',
      customerType: 'Cooperativas agrícolas',
      region: 'Sur de Asia',
      productCategory: 'Programa de fungicida para arrozales',
      projectStage: 'Planificación de temporada → Aprobación de formulación → Suministro estacional → Repetición de temporada',
      manufacturingScope: 'Suministro estacional de fungicida, etiquetado cooperativo, producción, soporte de reorder',
      keyRequirements: 'Suministro estacional de fungicida sincronizado con la presión de enfermedad del arrozal, etiquetado de marca cooperativa',
      qualityFocus: 'Ensayo de ingrediente activo, sincronización estacional, precisión del etiquetado, COA por lote',
      navLabel: 'Programa de fungicida para arrozales',
      metaTitle: 'Fungicida para arrozales | Programa de suministro estacional — Agrospear',
      metaDescription:
        'Cómo una cooperativa agrícola del Sur de Asia aseguró un suministro estacional de fungicida para arrozales — sincronizado con la presión de enfermedad, etiquetado cooperativo y COA por lote.',
      kicker: 'Proyecto de suministro estacional',
      h1: 'Suministro de un programa estacional de fungicida para arrozales para una cooperativa del Sur de Asia',
      intro: [
        'Una cooperativa agrícola del Sur de Asia necesitaba un suministro estacional fiable de fungicida para la presión de enfermedad en los arrozales — sincronizado con las ventanas de enfermedad impulsadas por el monzón, etiquetado de marca cooperativa y calidad constante entre temporadas.',
      ],
      industry: 'Cooperativas agrícolas',
      requirement: 'Un suministro estacional de fungicida sincronizado con las ventanas de presión de enfermedad del arrozal, con etiquetado de marca cooperativa y COAs por lote, repetible entre temporadas.',
      challenge:
        'La presión de enfermedad en los arrozales alcanza su punto máximo durante las ventanas del monzón — el fungicida debe estar en manos de los miembros antes de que se abra la ventana. La cooperativa necesitaba calidad constante entre temporadas, etiquetado de marca cooperativa para la confianza de los miembros y un socio de suministro que comprendiera la sincronización estacional.',
      solution:
        'Una formulación de fungicida eficaz contra los principales patógenos del arrozal, suministro estacional programado contra los calendarios de presión de enfermedad impulsados por el monzón, etiquetado de marca cooperativa y COAs por lote con la especificación bloqueada para temporadas de repetición coherentes.',
      product: 'Fungicida para arrozales — suministro estacional sincronizado con las ventanas de presión de enfermedad, etiquetado cooperativo y COAs por lote.',
      process: [
        { title: 'Planificación de temporada', body: 'Calendarios de presión de enfermedad y cobertura de miembros definieron el volumen y la sincronización estacional.' },
        { title: 'Aprobación de formulación', body: 'Formulación de fungicida y etiquetado confirmados frente a los requisitos de la cooperativa.' },
        { title: 'Suministro estacional', body: 'Volumen producido y entregado antes de la ventana de presión de enfermedad.' },
        { title: 'Repetición de temporada', body: 'Misma especificación, misma sincronización — reorder sobre la formulación bloqueada.' },
      ],
      result:
        'El fungicida llegó a los miembros de la cooperativa antes de que se abriera la ventana de presión de enfermedad. El rendimiento en campo fue coherente con la formulación aprobada y la cooperativa repitió el programa en la temporada siguiente con la misma especificación bloqueada.',
      outcome: 'Entrega estacional a tiempo · rendimiento en campo coherente · repetición de temporada con la misma especificación.',
      customizations: [
        'Formulación de fungicida eficaz contra los principales patógenos del arrozal',
        'Suministro estacional programado contra calendarios de presión de enfermedad del monzón',
        'Etiquetado de marca cooperativa para la confianza de los miembros',
        'COAs por lote con la especificación bloqueada para temporadas de repetición',
        'Orientación de aplicación calibrada a las variedades y condiciones locales de arroz',
        'Configuración de envase para la distribución cooperativa a los miembros',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo frente a la especificación',
        'Verificación de la sincronización de la entrega estacional',
        'Precisión del etiquetado cooperativo',
        'Coherencia del COA por lote',
        'Integridad del envase para logística de temporada de monzón',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la cooperativa ni los detalles de los miembros. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Suministro estacional de fungicida', 'Enfermedad del arrozal', 'Marca cooperativa'],
    },
    {
      slug: 'east-africa-smallholder-kit',
      customerType: 'ONG y organizaciones de desarrollo',
      region: 'África Oriental',
      productCategory: 'Kit de protección de cultivos para agricultores de pequeña escala',
      projectStage: 'Diseño del programa → Especificación del lote → Aprobación de muestra → Entrega multiproducto',
      manufacturingScope: 'Lote multiproducto, etiquetado simplificado, envase de programa, suministro estacional',
      keyRequirements: 'Lote multiproducto de protección de cultivos para pequeños agricultores, etiquetado pictográfico, tamaños de envase manejables',
      qualityFocus: 'Ensayo de ingrediente activo por producto, claridad del etiquetado, precisión del tamaño de envase, integridad del kit',
      navLabel: 'Kit de protección de cultivos para pequeños agricultores',
      metaTitle: 'Kit de protección de cultivos para pequeños agricultores | Lote multiproducto — Agrospear',
      metaDescription:
        'Cómo una ONG de África Oriental desplegó un kit multiproducto de protección de cultivos para agricultores de pequeña escala — herbicida, insecticida y fungicida en tamaños manejables con etiquetado pictográfico.',
      kicker: 'Proyecto de programa de ONG',
      h1: 'Despliegue de un kit multiproducto de protección de cultivos para agricultores de pequeña escala en África Oriental',
      intro: [
        'Una ONG de África Oriental que gestiona un programa de apoyo a pequeños agricultores necesitaba un kit de protección de cultivos — herbicida, insecticida y fungicida en tamaños de envase manejables para pequeños agricultores, con etiquetado pictográfico que los agricultores con baja alfabetización puedan seguir con seguridad.',
      ],
      industry: 'ONG y organizaciones de desarrollo',
      requirement: 'Un lote multiproducto de protección de cultivos — herbicida, insecticida y fungicida — en envases pequeños con etiquetado pictográfico, para distribución a agricultores de pequeña escala.',
      challenge:
        'Los pequeños agricultores necesitan tamaños de envase pequeños que el envase comercial estándar no ofrece. El etiquetado debe ser pictográfico para usuarios con baja alfabetización, cada producto debe tener orientación de aplicación clara y el lote debe llegar completo — sin productos que falten en el kit.',
      solution:
        'Tres productos de protección de cultivos en tamaños de envase manejables para pequeños agricultores, etiquetado pictográfico con iconos de momento de aplicación y un lote combinado con cobertura completa de productos — producido e inspeccionado como un solo programa.',
      product: 'Kit de protección de cultivos — herbicida, insecticida y fungicida en envases pequeños, con etiquetado pictográfico e iconos de momento de aplicación.',
      process: [
        { title: 'Diseño del programa', body: 'Calendario de cultivos, espectro de plagas y capacidad de los agricultores definieron el lote de tres productos.' },
        { title: 'Especificación del lote', body: 'Tamaños de envase, etiquetado pictográfico y estructura del kit definidos para el uso de pequeños agricultores.' },
        { title: 'Aprobación de muestra', body: 'Claridad del etiquetado y usabilidad del tamaño de envase confirmadas en muestras físicas.' },
        { title: 'Entrega multiproducto', body: 'Kits combinados producidos y enviados como un programa completo con COAs por producto.' },
      ],
      result:
        'Los kits llegaron a los pequeños agricultores con cobertura completa de productos y etiquetado pictográfico. Los equipos de campo informaron que los agricultores siguieron la orientación pictográfica de aplicación sin formación adicional, y la ONG amplió el programa a regiones adicionales.',
      outcome: 'Kits completos entregados · etiquetas pictográficas seguidas sin formación adicional · programa ampliado.',
      metrics: [
        { value: '3', label: 'productos en el lote' },
        { value: '100%', label: 'kits completos en la entrega' },
        { value: '0', label: 'sesiones de formación adicionales necesarias para la comprensión del etiquetado' },
        { value: '2x', label: 'regiones del programa tras la ampliación' },
      ],
      takeaways: [
        'Los tamaños de envase para pequeños agricultores requieren un envase dedicado — los tamaños comerciales no sirven para este segmento.',
        'El etiquetado pictográfico con iconos de momento de aplicación elimina la barrera de alfabetización sin sacrificar la información de seguridad.',
        'Un kit combinado con cobertura completa evita que los agricultores prescindan de un producto por razones de coste.',
        'La integridad del kit debe inspeccionarse como una unidad, no por producto — un producto que falta invalida todo el kit.',
      ],
      customizations: [
        'Herbicida, insecticida y fungicida seleccionados para el calendario de cultivos objetivo',
        'Tamaños de envase manejables para pequeños agricultores por producto',
        'Etiquetado pictográfico con iconos de momento de aplicación',
        'Estructura de kit combinado con cobertura completa de productos',
        'COAs por producto incluidos en la documentación del kit',
        'Envase de programa para la logística de distribución de la ONG',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo por producto frente a la especificación',
        'Claridad y precisión del etiquetado pictográfico',
        'Precisión de peso y volumen del envase por producto',
        'Integridad del kit — los tres productos presentes por kit',
        'Integridad del envase de programa para distribución rural',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la ONG ni las regiones del programa. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Protección de cultivos para pequeños agricultores', 'Etiquetado pictográfico', 'Lote multiproducto'],
    },
    {
      slug: 'cis-generic-registration',
      customerType: 'Importadores y titulares de registro',
      region: 'Región CEI',
      productCategory: 'Registro y suministro de pesticida genérico',
      projectStage: 'Documentación de registro → Aprobación de muestra → Soporte de registro → Suministro en volumen',
      manufacturingScope: 'Formulación de pesticida genérico, documentación de registro, producción, suministro continuo',
      keyRequirements: 'Pesticida genérico con documentación de registro para el mercado CEI, suministro continuo tras el registro',
      qualityFocus: 'Ensayo de ingrediente activo, perfil de impurezas, precisión de la documentación de registro, COA por lote',
      navLabel: 'Registro y suministro de genérico CEI',
      metaTitle: 'Registro de pesticida genérico | Mercado CEI — Agrospear',
      metaDescription:
        'Cómo un importador de la región CEI registró y adquirió un pesticida genérico — documentación de registro, verificación de formulación y suministro continuo con COAs por lote.',
      kicker: 'Proyecto de soporte de registro',
      h1: 'Registro y suministro de un pesticida genérico para el mercado CEI',
      intro: [
        'Un importador de protección de cultivos de la región CEI necesitaba registrar un pesticida genérico y asegurar un suministro continuo — documentación de registro, verificación de formulación y COAs por lote para un mercado con pruebas de importación estrictas.',
      ],
      industry: 'Importadores y titulares de registro',
      requirement: 'Un pesticida genérico con documentación de registro para el mercado CEI, verificación de formulación y suministro continuo con COAs por lote.',
      challenge:
        'El registro en la CEI requiere expedientes técnicos detallados que incluyen perfiles de impurezas, resúmenes toxicológicos y métodos analíticos. Las pruebas de importación en el laboratorio de destino son rutinarias — cada lote debe superar la verificación de ensayo. El importador necesitaba tanto soporte de registro como un socio de suministro continuo fiable.',
      solution:
        'Una formulación de pesticida genérico con documentación de registro completa — perfiles de impurezas, resúmenes toxicológicos, métodos analíticos — producida con una especificación coherente y suministro continuo con COAs por lote diseñados para superar las pruebas de importación del laboratorio de destino.',
      product: 'Pesticida genérico — paquete de documentación de registro, formulación coherente y suministro continuo con COAs por lote para pruebas de importación.',
      process: [
        { title: 'Documentación de registro', body: 'Expediente técnico preparado — perfiles de impurezas, resúmenes toxicológicos, métodos analíticos.' },
        { title: 'Aprobación de muestra', body: 'Formulación y documentación confirmadas frente a los requisitos de registro.' },
        { title: 'Soporte de registro', body: 'Expediente presentado; consultas atendidas durante el proceso de registro.' },
        { title: 'Suministro continuo', body: 'Producción coherente con COAs por lote para pruebas de importación en laboratorios de destino.' },
      ],
      result:
        'El registro fue concedido sobre el expediente presentado. El suministro continuo supera las pruebas de importación del laboratorio de destino de forma coherente y el importador amplió el registro a mercados adicionales de la CEI sobre la misma base documental.',
      outcome: 'Registro concedido · pruebas de importación superadas de forma coherente · ampliación a mercados adicionales de la CEI.',
      customizations: [
        'Formulación de pesticida genérico con especificación coherente para pruebas de importación',
        'Paquete de documentación de registro — perfiles de impurezas, resúmenes toxicológicos, métodos analíticos',
        'COAs por lote diseñados para pruebas de importación en laboratorios de destino CEI',
        'Etiquetado y envase configurados para los requisitos del mercado CEI',
        'Soporte de respuesta a consultas durante el proceso de registro',
        'Base documental reutilizable para registros adicionales en mercados CEI',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo frente a la especificación',
        'Perfil de impurezas dentro de los límites presentados en el registro',
        'Precisión y coherencia del COA por lote',
        'Cumplimiento del etiquetado con los requisitos del mercado CEI',
        'Alineación de la documentación entre el expediente y la producción real',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del importador ni los detalles de registro. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Pesticida genérico', 'Registro CEI', 'Soporte de pruebas de importación'],
    },
    {
      slug: 'south-america-brand-launch-low-moq',
      customerType: 'Marcas emergentes de protección de cultivos',
      region: 'Sudamérica',
      productCategory: 'Lanzamiento de marca de protección de cultivos (MOQ bajo)',
      projectStage: 'Concepto → Piloto de 5 toneladas → Lanzamiento de 50 toneladas → Camino de escalado',
      manufacturingScope: 'Formulación ODM, envase de marca, piloto de MOQ bajo, escalado de producción',
      keyRequirements: 'Piloto de MOQ bajo (5 toneladas), luego 50 toneladas para el lanzamiento, envase de marca, formulación retenida',
      qualityFocus: 'Ensayo de ingrediente activo, precisión del etiquetado, verificación del envase, COA por lote',
      navLabel: 'Lanzamiento de marca startup con MOQ bajo',
      metaTitle: 'Lanzamiento de marca de protección de cultivos | Piloto MOQ bajo — Agrospear',
      metaDescription:
        'Cómo una startup sudamericana lanzó una marca de protección de cultivos — piloto de 5 toneladas, luego lanzamiento de 50 toneladas de marca, con propiedad de la formulación retenida y un camino de escalado.',
      kicker: 'Proyecto de lanzamiento startup',
      h1: 'De un piloto de 5 toneladas a un lanzamiento de 50 toneladas: la historia de una marca emergente de protección de cultivos',
      intro: [
        'Una startup sudamericana de protección de cultivos con acceso al mercado pero sin fábrica quería lanzar su propia marca — un piloto de MOQ bajo para validar y luego un pedido de lanzamiento de marca que no hundiera el presupuesto.',
      ],
      industry: 'Marcas emergentes de protección de cultivos',
      requirement: 'Desarrollo ODM con MOQ bajo: un piloto de 5 toneladas para validar y luego 50 toneladas de marca para el lanzamiento, con propiedad de la formulación retenida.',
      challenge:
        'Sin laboratorio de formulación, sin experiencia de importación y un primer pedido demasiado pequeño para la mayoría de los fabricantes — además de una fecha de lanzamiento ligada a la temporada regional de aplicación.',
      solution:
        'Desarrollo ODM de la formulación a partir del concepto de la startup sobre una base probada, un piloto de 5 toneladas que cubrió muestras y verificación de suministro, y luego un pedido de lanzamiento de 50 toneladas de marca con propiedad de la formulación retenida para la marca.',
      product: 'Producto de protección de cultivos de marca — formulación personalizada, envase de marca y propiedad de la formulación para la startup.',
      process: [
        { title: 'Llamada de concepto', body: 'Cultivo objetivo, espectro de plagas y fecha de lanzamiento fijaron la dirección de la formulación.' },
        { title: 'Piloto', body: '5 toneladas probaron la formulación, el envase y la cadena de suministro de punta a punta.' },
        { title: 'Pedido de lanzamiento', body: '50 toneladas producidas con la formulación verificada y el envase de marca.' },
        { title: 'Camino de escalado', body: 'Propiedad de la formulación retenida para la marca; reorders con mejor precio.' },
      ],
      result:
        'El piloto de 5 toneladas se agotó en las primeras semanas de la temporada; los comentarios del piloto corrigieron un problema de etiquetado antes de que el pedido de 50 toneladas entrara en producción. La marca es propietaria de la formulación para producciones futuras.',
      outcome: 'Piloto agotado · etiquetado corregido antes del escalado · formulación en propiedad de la marca.',
      customizations: [
        'Formulación ODM desarrollada a partir del concepto de la marca sobre una base probada',
        'Envase y etiquetado de marca para el pedido de lanzamiento',
        'Configuración de envase lista para retail para el mercado objetivo',
        'Piloto de 5 toneladas para validación de mercado antes del escalado',
        'Propiedad de la formulación retenida para la marca',
        'Planificación de producción alineada con la fecha de lanzamiento',
      ],
      inspectionFocus: [
        'Ensayo de ingrediente activo frente al objetivo ODM',
        'Precisión del etiquetado frente al arte aprobado',
        'Verificación del envase — incluida la corrección del etiquetado del piloto',
        'Coherencia del COA por lote',
        'Estabilidad de la formulación en los lotes piloto y de lanzamiento',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la marca ni los detalles de lanzamiento. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Desarrollo ODM', 'Piloto de MOQ bajo', 'Lanzamiento de marca emergente'],
    },
  ],
}

export function getProject(locale: Locale, slug: string): ProjectData | undefined {
  return projects[locale].find((p) => p.slug === slug)
}

export interface ProjectsMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const projectsMeta: Localized<ProjectsMeta> = {
  en: {
    metaTitle: 'Agrochemical Manufacturing Projects & Case Studies | Agrospear',
    metaDescription:
      'Real agrochemical manufacturing projects: how distributors, governments, cooperatives and brands turned crop protection requirements into finished products with Agrospear.',
    h1: 'Projects — How We Manufacture Crop Protection Products With Clients',
  },
  es: {
    metaTitle: 'Proyectos y casos de fabricación agroquímica | Agrospear',
    metaDescription:
      'Proyectos reales de fabricación agroquímica: cómo distribuidores, gobiernos, cooperativas y marcas convirtieron requisitos de protección de cultivos en productos terminados con Agrospear.',
    h1: 'Proyectos — cómo fabricamos productos de protección de cultivos con los clientes',
  },
}
