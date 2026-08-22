import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'
import { pick } from './content'

/**
 * Solutions system (/solutions/custom-formulation, /solutions/private-label,
 * /solutions/bulk-supply, /solutions/registration-support,
 * /solutions/government-procurement).
 *
 * Every page follows the same business logic: scenario → problems →
 * solution → process → case study → FAQ → CTA. Each page carries a CTA
 * temperature instead of a hard "Request Quote" pitch:
 *   cold → Learn More · warm → Discuss Your Project · hot → Request Manufacturing Proposal
 */

export type CtaLevel = 'cold' | 'warm' | 'hot'

export interface SolutionPageData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  /** schema.org Service type (GEO entity). */
  serviceType: string
  /** 40–70 word direct answer to the page's core buying question (AEO). */
  answer: string
  intro: string[]
  scenario: { title: string; body: string }
  pairs: { problem: string; solution: string }[]
  steps: { title: string; body: string }[]
  caseStudy: { title: string; body: string; tags: string[] }
  faqs: { q: string; a: string }[]
  ctaLevel: CtaLevel
  /** Per-page CTA label override (falls back to the temperature label). */
  ctaLabel?: string
}

/**
 * Canonical public path per solution slug. The flagship custom-formulation
 * topic is served by the product-development content pillar page (pipeline,
 * FAQs and schema in one place); `/solutions/custom-formulation` and the
 * legacy pages are 301 stubs onto it. Everything else keeps its
 * `/solutions/{slug}` path.
 */
export const SOLUTION_PATHS: Record<string, string> = {
  'custom-formulation': '/product-development',
}

export function solutionPath(slug: string): string {
  return SOLUTION_PATHS[slug] ?? `/solutions/${slug}`
}

export const solutionPages: Localized<SolutionPageData[]> = {
  en: [
    {
      slug: 'custom-formulation',
      navLabel: 'Custom Formulation Development',
      metaTitle: 'Custom Agrochemical Formulation Development | OEM/ODM Crop Protection',
      metaDescription:
        'Develop custom agrochemical formulations with Agrospear. We support OEM/ODM crop protection product development, from formulation design and prototyping to registration and manufacturing.',
      kicker: 'Custom Agrochemical Formulation',
      serviceType: 'Custom Agrochemical Formulation Development',
      answer:
        'We develop custom agrochemical formulations from your requirements — active ingredient selection, dosage form, adjuvants and packaging — through lab screening, pilot batches and full-scale production. Pilot runs start from 5 tons; standard production from 20+ tons. Lead time: 25–35 days for existing formulations, 60–90 days for new registration submissions.',
      h1: 'Custom Agrochemical Formulation Development For Your Brand',
      intro: [
        'You need crop protection products built to your specification — active ingredients, formulation type, efficacy targets, packaging — without running a chemical plant yourself. We are the manufacturing partner that takes your requirement and returns a registered, deliverable product.',
        'Every project is handled by a dedicated formulation specialist who manages R&D, stability testing, pilot runs, registration documentation and production, so you always know where your project stands.',
      ],
      scenario: {
        title: 'You need formulations built to your specification',
        body: 'A product requirement — not a catalog pick. Your active ingredient combination, your dosage form, your label claims, your packaging. We develop, test and produce it on proven platforms, with flexibility from the first pilot batch.',
      },
      pairs: [
        {
          problem: 'Generic formulations do not match your market needs or pest spectrum.',
          solution: 'We develop custom formulations with your target active ingredients, adjuvant systems and dosage forms — from first lab sample to full production runs.',
        },
        {
          problem: 'Big minimums lock you into inventory before the market is validated.',
          solution: 'Pilot batches start from 5 tons, standard production from 20+ tons — so first runs stay manageable while unit pricing stays competitive at scale.',
        },
        {
          problem: 'You have no formulation lab or regulatory team on your side.',
          solution: 'Our in-house R&D and regulatory team turns a product concept, target pest list or reference formulation into a production-ready, registration-ready solution.',
        },
        {
          problem: 'Uncertain product quality and slow communication with suppliers.',
          solution: 'A project specialist owns lab screening, pilot approval, QC milestones and delivery timelines from start to finish — one point of contact, clear updates.',
        },
      ],
      steps: [
        { title: 'Submit your project', body: 'Tell us your target crops, pests, formulation type and market requirements.' },
        { title: 'Formulation & sample', body: 'We develop the formulation in our lab and ship a pilot batch sample for your evaluation.' },
        { title: 'Approve & produce', body: 'After your approval, production runs 25–35 days for existing formulations, 60–90 days for new registrations — with multi-point QC.' },
        { title: 'Deliver & reorder', body: 'Worldwide export with professional packaging, plus reorder support at consistent quality and specification.' },
      ],
      caseStudy: {
        title: 'Agri-brand product line extension',
        body: 'An agricultural inputs brand expanded into foliar fungicides with a custom combination formulation. We developed the suspension concentrate from the target active list, achieved pilot approval in 30 days, completed registration documentation and produced the first commercial batch within 90 days.',
        tags: ['Formulation development', 'Registration dossier', 'First commercial batch'],
      },
      faqs: [
        {
          q: 'Can you develop an agrochemical formulation from my idea?',
          a: 'Yes. We help evaluate your requirements and develop a production-ready formulation — from active ingredient selection and lab screening to a stable, registrable product.',
        },
        {
          q: 'What dosage forms can you develop?',
          a: 'We develop suspension concentrates (SC), emulsifiable concentrates (EC), water-dispersible granules (WG), soluble liquids (SL), micro-emulsions (ME) and other common crop protection dosage forms.',
        },
        {
          q: 'What is the minimum order for custom formulation development?',
          a: 'Pilot batches start from 5 tons, standard production from 20+ tons. Larger volumes unlock better unit pricing, and reorders maintain your formulation and specifications.',
        },
        {
          q: 'How long does custom formulation development take?',
          a: 'Existing formulations: 25–35 days from confirmed PO to delivery. New formulations requiring registration: 60–90 days for development, stability testing and dossier preparation.',
        },
        {
          q: 'Do you provide stability testing and registration documentation?',
          a: 'Yes. Full stability data, FAO/WHO specification compliance and registration dossiers are prepared in-house as part of the development project.',
        },
        {
          q: 'Can you handle my brand assets and label requirements only?',
          a: 'Yes. Our design team develops production-ready labels, leaflets and packaging artwork from your logo, brand colors or a rough concept.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Discuss Your Custom Formulation Project',
    },
    {
      slug: 'private-label',
      navLabel: 'Private Label Manufacturing',
      metaTitle: 'Private Label Agrochemical Manufacturing | Crop Protection',
      metaDescription:
        'Agrospear provides private label agrochemical manufacturing for brands wanting their label on proven crop protection formulations, from specification to production.',
      kicker: 'Private Label Agrochemical Manufacturing',
      serviceType: 'Private Label Agrochemical Manufacturing',
      answer:
        'Private label puts your brand on proven, already-developed agrochemical formulations without new R&D. Pick a registered product, apply your brand name, label, packaging and colors, and order from pilot quantities up. It is the fastest, lowest-risk route to market — no formulation work needed, just branding and packaging.',
      h1: 'Private Label Agrochemical Manufacturing For Your Brand',
      intro: [
        'Private label production lets you launch a crop protection product line under your own brand without investing in R&D or a formulation lab. Your brand name, label and packaging go on quality-verified, proven formulations, with quantities that grow with demand.',
        'We handle the product side so you can focus on the brand side: label design, packaging and reorder management are all handled by us.',
      ],
      scenario: {
        title: 'You have a brand — and need a product under it',
        body: 'A brand identity without a product line. You want a sellable agrochemical portfolio carrying your name, at a quantity that matches your stage — from a first validation batch to full distribution volumes.',
      },
      pairs: [
        {
          problem: 'Your brand is on a generic product — the label still looks like everyone else\'s.',
          solution: 'Full brand integration: custom label design, branded packaging, your brand name on every container — a product that is unmistakably yours.',
        },
        {
          problem: 'Launching a new product line means months of R&D and registration work.',
          solution: 'Skip R&D entirely. Private label uses proven, already-registered formulations — your fastest route from brand concept to sellable product.',
        },
        {
          problem: 'Label and packaging development feels out of reach.',
          solution: 'Your brand assets are turned into production-ready labels, leaflets and packaging artwork by our design team.',
        },
        {
          problem: 'Reorders drift in quality or specification.',
          solution: 'Formulations are locked and reorders run on the same verified processes at consistent quality and specification.',
        },
      ],
      steps: [
        { title: 'Share your brand', body: 'Send your logo, colors, brand guidelines and target product categories.' },
        { title: 'Select formulations', body: 'Choose from our catalog of proven, registered crop protection formulations.' },
        { title: 'Develop label & packaging', body: 'We design labels, leaflets and packaging around your brand identity.' },
        { title: 'Produce & deliver', body: 'Production runs to your quantity, with QC and export handled end to end.' },
      ],
      caseStudy: {
        title: 'New brand, first product line launch',
        body: 'An agricultural distributor launched its own crop protection brand from just a logo and target crop list. We selected three proven formulations, developed full label and packaging artwork, produced a first batch for market testing, then scaled to full distribution volume within one season.',
        tags: ['Brand launch', 'Label design', 'Scaled production'],
      },
      faqs: [
        {
          q: 'What is private label agrochemical manufacturing?',
          a: 'Private label agrochemical manufacturing allows businesses to sell proven crop protection products under their own brand — with custom labels, packaging and branding, without developing new formulations.',
        },
        {
          q: 'How is private label different from custom formulation?',
          a: 'Private label uses existing, proven formulations — no R&D needed. Custom formulation develops a new product from scratch. Private label is the fastest route to market.',
        },
        {
          q: 'What is included in a private label agrochemical program?',
          a: 'Your brand on the product — custom label, branded packaging, your company name — plus optional branded leaflets and outer cartons: a complete sellable product under your name.',
        },
        {
          q: 'Can the packaging change between orders?',
          a: 'Yes. Once brand assets are production-ready, reorders can refresh labels, colors or packaging at any time.',
        },
        {
          q: 'We only have a logo. Can you still help?',
          a: 'Yes. Our design team develops the full label, leaflet and packaging artwork from your logo and brand colors.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Discuss Your Private Label Project',
    },
    {
      slug: 'bulk-supply',
      navLabel: 'Bulk Supply',
      metaTitle: 'Bulk Agrochemical Supply for Distributors & Importers | Agrospear',
      metaDescription:
        'Volume agrochemical supply for distributors and importers with consistent quality, registration documentation, export support and full batch traceability from Agrospear.',
      kicker: 'Bulk Supply for Distributors',
      serviceType: 'Bulk Agrochemical Supply',
      answer:
        'We supply bulk agrochemical products to distributors and importers worldwide: consistent quality across batches, full registration documentation, export compliance and complete batch traceability. Standard orders from 20+ tons with volume pricing tiers; lead times 25–35 days for catalog products.',
      h1: 'Bulk Agrochemical Supply For Distributors And Importers',
      intro: [
        'Distributors need volume supply that is consistent batch to batch, fully documented for registration and supported for export logistics. We deliver bulk agrochemical products at scale with the paperwork and traceability your market requires.',
        'Every shipment carries full batch records, certificates of analysis and registration documentation — so you can clear customs, satisfy auditors and reassure your customers.',
      ],
      scenario: {
        title: 'You distribute agrochemicals at volume',
        body: 'Your customers depend on consistent product quality, and your regulators require documentation. You need a supplier that delivers the same specification every batch, with the paperwork to prove it — and the export support to get it there on time.',
      },
      pairs: [
        {
          problem: 'Batch-to-batch inconsistency erodes customer trust.',
          solution: 'Locked formulations and rigorous QC ensure every batch meets the same specification — same active content, same physical properties, same efficacy.',
        },
        {
          problem: 'Registration documentation is incomplete or unavailable from suppliers.',
          solution: 'Full registration documentation package: certificates of analysis, FAO/WHO spec compliance, stability data and country-specific dossiers on request.',
        },
        {
          problem: 'Export logistics are complex and slow.',
          solution: 'DG-compliant packaging, documentation for customs clearance and coordinated shipping to your destination port or warehouse.',
        },
        {
          problem: 'Traceability is insufficient for audits and quality investigations.',
          solution: 'Complete batch traceability from raw materials through production to shipment — every lot tracked and documented.',
        },
      ],
      steps: [
        { title: 'Specify your requirements', body: 'Products, volumes, target markets and delivery schedules.' },
        { title: 'Confirm specification', body: 'We provide product specs, certificates of analysis and registration documentation for your review.' },
        { title: 'Produce & inspect', body: 'Production with in-process QC, pre-shipment inspection and certificate of analysis per batch.' },
        { title: 'Ship & support', body: 'DG-compliant export, customs documentation and reorder planning for consistent supply.' },
      ],
      caseStudy: {
        title: 'Regional distributor volume supply program',
        body: 'A regional agrochemical distributor needed reliable volume supply of five herbicide formulations across three countries. We established a supply program with quarterly production runs, pre-shipment inspections and registration documentation for each market — reducing their quality complaints by 90% in the first year.',
        tags: ['Volume supply', 'Multi-market registration', 'Consistent quality'],
      },
      faqs: [
        {
          q: 'What is the minimum order for bulk supply?',
          a: 'Standard bulk orders start from 20+ tons per formulation. Volume pricing tiers apply for larger quantities and multi-product orders.',
        },
        {
          q: 'Do you provide registration documentation for imports?',
          a: 'Yes. Full registration documentation packages are provided: certificates of analysis, FAO/WHO specification compliance, stability data and country-specific dossiers.',
        },
        {
          q: 'How do you ensure batch-to-batch consistency?',
          a: 'Locked formulations, standardized production processes and multi-point QC — including active content assay and physical property testing — ensure every batch meets the same specification.',
        },
        {
          q: 'Can you handle dangerous goods export?',
          a: 'Yes. All products are packaged to DG-compliant standards with the required documentation for sea and land transport.',
        },
        {
          q: 'Is batch traceability available?',
          a: 'Yes. Complete batch traceability from raw materials through production to shipment. Every lot is tracked and documented for audits and quality investigations.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Discuss Your Bulk Supply Requirements',
    },
    {
      slug: 'registration-support',
      navLabel: 'Registration Support',
      metaTitle: 'Pesticide Registration Support | ICAMA, FAO/WHO Dossiers | Agrospear',
      metaDescription:
        'Agrospear provides pesticide registration support including ICAMA dossiers, FAO/WHO specifications, local registration documentation and regulatory guidance for importers.',
      kicker: 'Pesticide Registration Support',
      serviceType: 'Pesticide Registration Support',
      answer:
        'We prepare and compile pesticide registration dossiers for your target markets: ICAMA export registration, FAO/WHO specification compliance, stability data, toxicity summaries and local market dossiers. Our regulatory team handles documentation so you can submit with confidence — typical dossier preparation takes 30–60 days depending on market requirements.',
      h1: 'Pesticide Registration Support For Your Target Markets',
      intro: [
        'Getting a crop protection product registered is the gateway to market access — and the paperwork is substantial. We prepare the dossiers, compile the data and structure the submissions so your registration applications are complete and compliant.',
        'Our regulatory team works across ICAMA, FAO/WHO and country-specific requirements, so you do not need to navigate each market\'s process alone.',
      ],
      scenario: {
        title: 'You need to register products in target markets',
        body: 'Registration is mandatory before you can sell, and each market has its own requirements: data packages, stability studies, toxicity summaries, field trial results. Preparing dossiers from scratch is time-consuming and error-prone without specialist support.',
      },
      pairs: [
        {
          problem: 'Each market has different registration requirements and you cannot track them all.',
          solution: 'Our regulatory team maintains up-to-date knowledge of ICAMA, FAO/WHO and local market requirements — we compile the right dossier for each target country.',
        },
        {
          problem: 'Stability and toxicity data are incomplete or missing.',
          solution: 'We conduct or coordinate the required stability studies and compile toxicity summaries as part of the dossier preparation.',
        },
        {
          problem: 'Dossier preparation is slow and delays market entry.',
          solution: 'Structured templates, in-house data and experienced regulatory staff deliver complete dossiers in 30–60 days — far faster than starting from zero.',
        },
        {
          problem: 'Submissions get rejected for incomplete or non-compliant documentation.',
          solution: 'Every dossier is compiled to the specific requirements of the target authority, with quality review before submission to minimize rejection risk.',
        },
      ],
      steps: [
        { title: 'Define target markets', body: 'Tell us which countries and which products you need to register.' },
        { title: 'Gap analysis', body: 'We review existing data and identify what additional studies or documentation are needed.' },
        { title: 'Dossier preparation', body: 'We compile the complete registration dossier per market requirements — data, summaries, formatting.' },
        { title: 'Submit & follow up', body: 'Dossier delivered for your submission, with regulatory guidance for any authority queries.' },
      ],
      caseStudy: {
        title: 'Multi-country registration program',
        body: 'An importer needed to register four formulations across five African and Latin American markets. We prepared country-specific dossiers for each product-market combination, coordinated the required stability studies and delivered all submissions within 75 days — the importer achieved first registrations within six months.',
        tags: ['Multi-market dossiers', 'Stability studies', 'Regulatory compliance'],
      },
      faqs: [
        {
          q: 'What registration support do you provide?',
          a: 'We prepare complete registration dossiers: ICAMA export registration, FAO/WHO specification compliance, stability data, toxicity summaries and country-specific documentation packages.',
        },
        {
          q: 'Which markets can you support?',
          a: 'We support ICAMA (China export), FAO/WHO specifications, and local registration dossiers for African, Latin American, Asian and Middle Eastern markets.',
        },
        {
          q: 'How long does dossier preparation take?',
          a: 'Typical dossier preparation takes 30–60 days depending on the market and data availability. If new stability studies are required, timelines extend accordingly.',
        },
        {
          q: 'Do you conduct stability studies?',
          a: 'Yes. We conduct or coordinate accelerated and long-term stability studies as required by the target registration authority.',
        },
        {
          q: 'Can you help with authority queries after submission?',
          a: 'Yes. Our regulatory team provides guidance and supplementary documentation for any queries from registration authorities after submission.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Discuss Your Registration Needs',
    },
    {
      slug: 'government-procurement',
      navLabel: 'Government Procurement',
      metaTitle: 'Government & Institutional Agrochemical Procurement | Agrospear',
      metaDescription:
        'Agrospear supplies agrochemical products for government agencies, NGOs and institutional procurement programs including vector control, food security and tender compliance.',
      kicker: 'Government & Institutional Procurement',
      serviceType: 'Government Agrochemical Procurement',
      answer:
        'We supply agrochemical products to government agencies, NGOs and procurement programs: vector control insecticides, food security crop protection inputs, and tender-compliant formulations with full documentation. Procurement-grade packaging, batch traceability and export documentation support institutional buying requirements.',
      h1: 'Government And Institutional Agrochemical Procurement',
      intro: [
        'Government agencies and NGOs procure agrochemicals differently: tender specifications, strict documentation requirements, large volumes and public accountability. Our procurement program delivers compliant products with the paperwork and traceability that institutional buying demands.',
        'From vector control campaigns to national food security programs, we supply the products and the documentation that procurement processes require.',
      ],
      scenario: {
        title: 'You procure agrochemicals for public programs',
        body: 'Tenders specify exact formulations, packaging standards and documentation requirements. You need a supplier that meets the specification, delivers on time, provides full traceability and can handle the volume a public program demands.',
      },
      pairs: [
        {
          problem: 'Tender specifications are strict and many suppliers cannot comply.',
          solution: 'We produce to tender specification — exact formulations, packaging standards and documentation requirements — with pre-qualification support for your procurement process.',
        },
        {
          problem: 'Vector control and food security programs need specialized products.',
          solution: 'Targeted product lines for vector control (indoor residual spraying, space spraying, larvicides) and food security (staple crop protection, post-harvest treatments).',
        },
        {
          problem: 'Public procurement demands full documentation and traceability.',
          solution: 'Complete batch documentation, certificates of analysis, WHO specification compliance and traceability from raw material to shipment.',
        },
        {
          problem: 'Delivery timelines are fixed by program schedules.',
          solution: 'Production and logistics planned around program schedules, with buffer stock options for critical campaigns.',
        },
      ],
      steps: [
        { title: 'Share tender requirements', body: 'Product specifications, volumes, packaging standards and delivery schedules.' },
        { title: 'Confirm compliance', body: 'We verify that our products and documentation meet every tender requirement.' },
        { title: 'Produce & document', body: 'Production to specification with full QC, documentation and traceability per batch.' },
        { title: 'Deliver & support', body: 'On-time delivery with DG-compliant logistics and post-delivery documentation support.' },
      ],
      caseStudy: {
        title: 'National vector control program supply',
        body: 'A Ministry of Health required 200 tons of WHO-PQ approved insecticide for a national malaria vector control campaign. We supplied the product to exact tender specification, with WHO specification certificates, full batch traceability and delivery to three regional warehouses within the program timeline.',
        tags: ['Vector control', 'WHO specification', 'Tender compliance'],
      },
      faqs: [
        {
          q: 'What products do you supply for government procurement?',
          a: 'Vector control insecticides (IRS, space spraying, larvicides), food security crop protection products, post-harvest treatments and tender-specified formulations for institutional programs.',
        },
        {
          q: 'Can you meet tender specification requirements?',
          a: 'Yes. We produce to exact tender specifications — formulations, packaging, labeling and documentation — and support pre-qualification for procurement processes.',
        },
        {
          q: 'Do you provide WHO specification compliance?',
          a: 'Yes. WHO-PQ and WHO specification compliance documentation is provided for vector control products where applicable.',
        },
        {
          q: 'What documentation is included for institutional procurement?',
          a: 'Complete batch documentation, certificates of analysis, specification compliance certificates, traceability records and export documentation per institutional requirements.',
        },
        {
          q: 'Can you handle large-volume delivery to multiple locations?',
          a: 'Yes. We plan production and logistics around program schedules, with delivery to single or multiple warehouses and buffer stock options for critical campaigns.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Discuss Your Procurement Requirements',
    },
  ],
  es: [
    {
      slug: 'custom-formulation',
      navLabel: 'Desarrollo de formulaciones a medida',
      metaTitle: 'Desarrollo de formulaciones agroquímicas a medida | OEM/ODM',
      metaDescription:
        'Desarrolla formulaciones agroquímicas personalizadas con Agrospear. Apoyamos el desarrollo OEM/ODM de productos de protección de cultivos, desde el diseño de formulación y prototipos hasta el registro y la fabricación.',
      kicker: 'Formulación agroquímica a medida',
      serviceType: 'Desarrollo de formulaciones agroquímicas a medida',
      answer:
        'Desarrollamos formulaciones agroquímicas personalizadas a partir de tus requisitos — selección de ingredientes activos, forma dosage, coadyuvantes y embalaje — con análisis de laboratorio, lotes piloto y producción a escala. Los lotes piloto parten de 5 toneladas; la producción estándar desde 20+ toneladas. Plazo: 25–35 días para formulaciones existentes, 60–90 días para nuevos registros.',
      h1: 'Desarrollo de formulaciones agroquímicas a medida para tu marca',
      intro: [
        'Necesitas productos de protección de cultivos fabricados según tu especificación — ingredientes activos, tipo de formulación, objetivos de eficacia, embalaje — sin gestionar tú una planta química. Somos el socio de fabricación que recibe tus requisitos y entrega un producto registrado y listo para vender.',
        'Cada proyecto cuenta con un especialista en formulación dedicado que gestiona la I+D, las pruebas de estabilidad, los lotes piloto, la documentación de registro y la producción, para que siempre sepas cómo avanza tu proyecto.',
      ],
      scenario: {
        title: 'Necesitas formulaciones según tu especificación',
        body: 'Esto es un requisito de producto, no una elección de catálogo. Tu combinación de ingredientes activos, tu forma dosage, tus claims de etiqueta, tu embalaje. Desarrollamos, probamos y producimos sobre plataformas probadas, manteniendo flexibilidad desde el primer lote piloto.',
      },
      pairs: [
        {
          problem: 'Las formulaciones genéricas no cubren las necesidades de tu mercado o espectro de plagas.',
          solution: 'Desarrollamos formulaciones personalizadas con tus ingredientes activos, sistemas coadyuvantes y formas dosage — de la primera muestra de laboratorio a la producción completa.',
        },
        {
          problem: 'Los pedidos mínimos grandes te encierran en inventario antes de validar el mercado.',
          solution: 'Los lotes piloto parten de 5 toneladas, la producción estándar desde 20+ toneladas — los primeros pedidos son manejables y el precio unitario mejora con el volumen.',
        },
        {
          problem: 'No tienes laboratorio de formulación ni equipo regulatorio.',
          solution: 'Nuestro equipo de I+D y regulatorio convierte tu concepto de producto, lista de plagas objetivo o formulación de referencia en una solución lista para producir y registrar.',
        },
        {
          problem: 'Calidad de producto incierta y comunicación lenta con proveedores.',
          solution: 'Un especialista de proyecto dedicado gestiona análisis de laboratorio, aprobación de piloto, puntos de control de calidad y plazos de entrega de principio a fin: un solo interlocutor y progreso transparente.',
        },
      ],
      steps: [
        { title: 'Envía tu proyecto', body: 'Cuéntanos tus cultivos objetivo, plagas, tipo de formulación y requisitos de mercado.' },
        { title: 'Formulación y muestra', body: 'Desarrollamos la formulación en nuestro laboratorio y enviamos un lote piloto para tu evaluación.' },
        { title: 'Confirma y produce', body: 'Tras tu aprobación, la producción se realiza en 25–35 días para formulaciones existentes, 60–90 días para nuevos registros — con control de calidad multipunto.' },
        { title: 'Entrega y reordena', body: 'Exportación mundial con embalaje profesional y soporte de reorden para mantener la calidad y especificación.' },
      ],
      caseStudy: {
        title: 'Extensión de línea de una marca agrícola',
        body: 'Una marca de insumos agrícolas se expandió a fungicidas foliares con una formulación combinada a medida. Desarrollamos el concentrado suspendible desde la lista de activos objetivo, logramos la aprobación del piloto en 30 días, completamos la documentación de registro y producimos el primer lote comercial en 90 días.',
        tags: ['Desarrollo de formulación', 'Dossier de registro', 'Primer lote comercial'],
      },
      faqs: [
        {
          q: '¿Podéis desarrollar una formulación agroquímica a partir de mi idea?',
          a: 'Sí. Te ayudamos a evaluar tus requisitos y a desarrollar una formulación producible — desde la selección de ingredientes activos y el análisis de laboratorio hasta un producto estable y registrable.',
        },
        {
          q: '¿Qué formas dosage podéis desarrollar?',
          a: 'Desarrollamos concentrados suspendibles (SC), concentrados emulsionables (EC), gránulos dispersables (WG), líquidos solubles (SL), microemulsiones (ME) y otras formas dosage comunes de protección de cultivos.',
        },
        {
          q: '¿Cuál es el pedido mínimo para desarrollo de formulación a medida?',
          a: 'Los lotes piloto parten de 5 toneladas, la producción estándar desde 20+ toneladas. Mayores volúmenes mejoran el precio unitario, y los reordenes mantienen tu formulación y especificaciones.',
        },
        {
          q: '¿Cuánto tarda el desarrollo de una formulación a medida?',
          a: 'Formulaciones existentes: 25–35 días desde el PO confirmado hasta la entrega. Nuevas formulaciones que requieren registro: 60–90 días para desarrollo, pruebas de estabilidad y preparación del dossier.',
        },
        {
          q: '¿Proporcionáis pruebas de estabilidad y documentación de registro?',
          a: 'Sí. Datos completos de estabilidad, cumplimiento de especificaciones FAO/OMS y dossiers de registro se preparan internamente como parte del proyecto de desarrollo.',
        },
        {
          q: '¿Podéis encargaros solo de los activos de marca y los requisitos de etiqueta?',
          a: 'Sí. Nuestro equipo de diseño desarrolla etiquetas, folletos y embalaje listos para producción a partir de tu logo, colores de marca o concepto aproximado.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Comenta tu proyecto de formulación a medida',
    },
    {
      slug: 'private-label',
      navLabel: 'Fabricación de marca privada',
      metaTitle: 'Fabricación agroquímica de marca privada | Protección de cultivos',
      metaDescription:
        'Agrospear ofrece fabricación agroquímica de marca privada para marcas que quieren su etiqueta en formulaciones probadas de protección de cultivos.',
      kicker: 'Fabricación agroquímica de marca privada',
      serviceType: 'Fabricación agroquímica de marca privada',
      answer:
        'La marca privada pone tu nombre en formulaciones agroquímicas probadas y ya desarrolladas, sin I+D nueva. Elige un producto registrado, aplica tu nombre de marca, etiqueta, embalaje y colores, y pide desde cantidades piloto. Es la vía más rápida y de menor riesgo al mercado: no hace falta desarrollo, solo marca y embalaje.',
      h1: 'Fabricación agroquímica de marca privada para tu marca',
      intro: [
        'La marca privada te permite lanzar una línea de protección de cultivos bajo tu propia marca sin invertir en I+D ni en un laboratorio de formulación. Tu nombre de marca, etiqueta y embalaje se aplican sobre formulaciones probadas y verificadas por calidad, y las cantidades crecen según la demanda.',
        'Nosotros nos ocupamos del lado del producto para que tú te centres en el lado de la marca: diseño de etiqueta, embalaje y gestión de reordenes corren de nuestra cuenta.',
      ],
      scenario: {
        title: 'Tienes una marca — necesitas los productos que la lleven',
        body: 'Una identidad de marca sin línea de productos. Quieres un portafolio agroquímico vendible con tu nombre, en cantidades que encajen con tu etapa: de la validación del primer lote a los volúmenes de distribución completa.',
      },
      pairs: [
        {
          problem: 'Tu marca está en un producto genérico — la etiqueta sigue pareciendo la de todos.',
          solution: 'Integración de marca completa: diseño de etiqueta personalizado, embalaje de marca, tu nombre en cada envase — un producto inconfundiblemente tuyo.',
        },
        {
          problem: 'Lanzar una nueva línea de productos significa meses de I+D y trabajo de registro.',
          solution: 'Omite la I+D completamente. La marca privada usa formulaciones probadas y ya registradas: tu ruta más rápida del concepto de marca al producto vendible.',
        },
        {
          problem: 'El desarrollo de etiqueta y embalaje parece inalcanzable.',
          solution: 'Nuestro equipo de diseño convierte tu material de marca en etiquetas, folletos y embalaje listos para producción.',
        },
        {
          problem: 'Los reordenes varían en calidad o especificación.',
          solution: 'Las formulaciones están bloqueadas y los reordenes se producen en los mismos procesos verificados con calidad y especificación constantes.',
        },
      ],
      steps: [
        { title: 'Comparte tu marca', body: 'Envía tu logo, colores, guía de marca y categorías de producto objetivo.' },
        { title: 'Selecciona formulaciones', body: 'Elige de nuestro catálogo de formulaciones de protección de cultivos probadas y registradas.' },
        { title: 'Desarrolla etiqueta y embalaje', body: 'Diseñamos etiquetas, folletos y embalaje alrededor de tu identidad de marca.' },
        { title: 'Produce y entrega', body: 'Producción según tus cantidades, con control de calidad y exportación de principio a fin.' },
      ],
      caseStudy: {
        title: 'Marca nueva, primer lanzamiento de línea',
        body: 'Un distribuidor agrícola lanzó su propia marca de protección de cultivos con solo un logo y una lista de cultivos objetivo. Seleccionamos tres formulaciones probadas, completamos el diseño de etiqueta y embalaje, producimos el primer lote para prueba de mercado y escalamos al volumen de distribución completo en una temporada.',
        tags: ['Lanzamiento de marca', 'Diseño de etiqueta', 'Producción escalada'],
      },
      faqs: [
        {
          q: '¿Qué es la fabricación agroquímica de marca privada?',
          a: 'La fabricación agroquímica de marca privada permite a las empresas vender productos de protección de cultivos probados bajo su propia marca — con etiquetas, embalaje y marca personalizados, sin desarrollar nuevas formulaciones.',
        },
        {
          q: '¿En qué se diferencia la marca privada de la formulación a medida?',
          a: 'La marca privada usa formulaciones existentes y probadas — no se necesita I+D. La formulación a medida desarrolla un producto nuevo desde cero. La marca privada es la ruta más rápida al mercado.',
        },
        {
          q: '¿Qué incluye un programa agroquímico de marca privada?',
          a: 'Tu marca en el producto — etiqueta personalizada, embalaje de marca, el nombre de tu empresa — además de folletos y cajas exteriores opcionales: un producto vendible completo con tu nombre.',
        },
        {
          q: '¿Se puede modificar el embalaje entre pedidos?',
          a: 'Sí. Una vez que tu material de marca está listo para producción, puedes actualizar etiquetas, colores o embalaje en cualquier reorden.',
        },
        {
          q: 'Solo tenemos un logo, ¿podéis ayudarnos?',
          a: 'Sí. Nuestro equipo de diseño completa todas las etiquetas, folletos y embalaje con solo tu logo y tus colores de marca.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Comenta tu proyecto de marca privada',
    },
    {
      slug: 'bulk-supply',
      navLabel: 'Suministro a granel',
      metaTitle: 'Suministro agroquímico a granel para distribuidores | Agrospear',
      metaDescription:
        'Suministro de agroquímicos a granel para distribuidores e importadores con calidad consistente, documentación de registro, soporte de exportación y trazabilidad completa de lotes.',
      kicker: 'Suministro a granel para distribuidores',
      serviceType: 'Suministro agroquímico a granel',
      answer:
        'Suministramos productos agroquímicos a granel a distribuidores e importadores en todo el mundo: calidad consistente entre lotes, documentación de registro completa, cumplimiento de exportación y trazabilidad total. Pedidos estándar desde 20+ toneladas con tramos de precio por volumen; plazos de 25–35 días para productos de catálogo.',
      h1: 'Suministro agroquímico a granel para distribuidores e importadores',
      intro: [
        'Los distribuidores necesitan suministro en volumen que sea consistente lote a lote, completamente documentado para el registro y con soporte logístico de exportación. Entregamos productos agroquímicos a granel a escala con la documentación y trazabilidad que tu mercado exige.',
        'Cada envío incluye registros completos de lote, certificados de análisis y documentación de registro — para que despaches aduana, satisfagas auditorías y des tranquilidad a tus clientes.',
      ],
      scenario: {
        title: 'Distribuyes agroquímicos en volumen',
        body: 'Tus clientes dependen de calidad consistente del producto y tus reguladores exigen documentación. Necesitas un proveedor que entregue la misma especificación en cada lote, con la documentación que lo demuestre — y el soporte de exportación para que llegue a tiempo.',
      },
      pairs: [
        {
          problem: 'La inconsistencia entre lotes erosiona la confianza del cliente.',
          solution: 'Formulaciones bloqueadas y QC riguroso aseguran que cada lote cumple la misma especificación — mismo contenido activo, mismas propiedades físicas, misma eficacia.',
        },
        {
          problem: 'La documentación de registro está incompleta o no disponible del proveedor.',
          solution: 'Paquete completo de documentación: certificados de análisis, cumplimiento de especificaciones FAO/OMS, datos de estabilidad y dossiers específicos por país bajo solicitud.',
        },
        {
          problem: 'La logística de exportación es compleja y lenta.',
          solution: 'Embalaje conforme a mercancías peligrosas, documentación para despacho de aduanas y envío coordinado a tu puerto o almacén de destino.',
        },
        {
          problem: 'La trazabilidad es insuficiente para auditorías e investigaciones de calidad.',
          solution: 'Trazabilidad completa de lote desde materias primas hasta el envío — cada lote rastreado y documentado.',
        },
      ],
      steps: [
        { title: 'Especifica tus requisitos', body: 'Productos, volúmenes, mercados objetivo y cronogramas de entrega.' },
        { title: 'Confirma la especificación', body: 'Proporcionamos especificaciones de producto, certificados de análisis y documentación de registro para tu revisión.' },
        { title: 'Produce e inspecciona', body: 'Producción con QC en proceso, inspección pre-embarque y certificado de análisis por lote.' },
        { title: 'Envía y soporta', body: 'Exportación conforme a mercancías peligrosas, documentación aduanera y planificación de reordenes para suministro constante.' },
      ],
      caseStudy: {
        title: 'Programa de suministro en volumen para distribuidor regional',
        body: 'Un distribuidor regional necesitaba suministro fiable en volumen de cinco formulaciones de herbicida en tres países. Establecimos un programa de suministro con producciones trimestrales, inspecciones pre-embarque y documentación de registro para cada mercado — reduciendo sus quejas de calidad un 90% en el primer año.',
        tags: ['Suministro en volumen', 'Registro multi-mercado', 'Calidad consistente'],
      },
      faqs: [
        {
          q: '¿Cuál es el pedido mínimo para suministro a granel?',
          a: 'Los pedidos a granel estándar parten de 20+ toneladas por formulación. Se aplican tramos de precio por volumen para cantidades mayores y pedidos multiproducto.',
        },
        {
          q: '¿Proporcionáis documentación de registro para importaciones?',
          a: 'Sí. Se proporcionan paquetes completos de documentación de registro: certificados de análisis, cumplimiento de especificaciones FAO/OMS, datos de estabilidad y dossiers específicos por país.',
        },
        {
          q: '¿Cómo aseguráis la consistencia entre lotes?',
          a: 'Formulaciones bloqueadas, procesos de producción estandarizados y QC multipunto — incluyendo ensayo de contenido activo y pruebas de propiedades físicas — aseguran que cada lote cumple la misma especificación.',
        },
        {
          q: '¿Podéis gestionar la exportación de mercancías peligrosas?',
          a: 'Sí. Todos los productos se embalan según estándares de mercancías peligrosas con la documentación requerida para transporte marítimo y terrestre.',
        },
        {
          q: '¿Hay trazabilidad de lote disponible?',
          a: 'Sí. Trazabilidad completa desde materias primas hasta el envío. Cada lote está rastreado y documentado para auditorías e investigaciones de calidad.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Comenta tus requisitos de suministro a granel',
    },
    {
      slug: 'registration-support',
      navLabel: 'Soporte de registro',
      metaTitle: 'Soporte de registro de plaguicidas | ICAMA, FAO/OMS | Agrospear',
      metaDescription:
        'Agrospear proporciona soporte de registro de plaguicidas incluyendo dossiers ICAMA, especificaciones FAO/OMS, documentación local y orientación regulatoria para importadores.',
      kicker: 'Soporte de registro de plaguicidas',
      serviceType: 'Soporte de registro de plaguicidas',
      answer:
        'Preparamos y compilamos dossiers de registro de plaguicidas para tus mercados objetivo: registro de exportación ICAMA, cumplimiento de especificaciones FAO/OMS, datos de estabilidad, resúmenes de toxicidad y dossiers locales. Nuestro equipo regulatorio gestiona la documentación para que presentes con confianza — la preparación típica de dossier tarda 30–60 días según los requisitos del mercado.',
      h1: 'Soporte de registro de plaguicidas para tus mercados objetivo',
      intro: [
        'Registrar un producto de protección de cultivos es la puerta de entrada al mercado — y la documentación es considerable. Preparamos los dossiers, compilamos los datos y estructuramos las presentaciones para que tus solicitudes de registro estén completas y conformes.',
        'Nuestro equipo regulatorio trabaja con requisitos ICAMA, FAO/OMS y específicos por país, para que no tengas que navegar solo el proceso de cada mercado.',
      ],
      scenario: {
        title: 'Necesitas registrar productos en mercados objetivo',
        body: 'El registro es obligatorio antes de vender, y cada mercado tiene sus propios requisitos: paquetes de datos, estudios de estabilidad, resúmenes de toxicidad, resultados de ensayos de campo. Preparar dossiers desde cero es lento y propenso a errores sin soporte especializado.',
      },
      pairs: [
        {
          problem: 'Cada mercado tiene requisitos de registro diferentes y no puedes seguirlos todos.',
          solution: 'Nuestro equipo regulatorio mantiene conocimiento actualizado de requisitos ICAMA, FAO/OMS y mercados locales — compilamos el dossier adecuado para cada país objetivo.',
        },
        {
          problem: 'Los datos de estabilidad y toxicidad están incompletos o ausentes.',
          solution: 'Realizamos o coordinamos los estudios de estabilidad requeridos y compilamos resúmenes de toxicidad como parte de la preparación del dossier.',
        },
        {
          problem: 'La preparación del dossier es lenta y retrasa la entrada al mercado.',
          solution: 'Plantillas estructuradas, datos internos y personal regulatorio experimentado entregan dossiers completos en 30–60 días — mucho más rápido que empezar de cero.',
        },
        {
          problem: 'Las presentaciones se rechazan por documentación incompleta o no conforme.',
          solution: 'Cada dossier se compila según los requisitos específicos de la autoridad objetivo, con revisión de calidad antes de la presentación para minimizar el riesgo de rechazo.',
        },
      ],
      steps: [
        { title: 'Define los mercados objetivo', body: 'Indícanos qué países y qué productos necesitas registrar.' },
        { title: 'Análisis de brechas', body: 'Revisamos los datos existentes e identificamos qué estudios o documentación adicional se necesita.' },
        { title: 'Preparación del dossier', body: 'Compilamos el dossier de registro completo según los requisitos de cada mercado — datos, resúmenes, formato.' },
        { title: 'Presenta y sigue', body: 'Dossier entregado para tu presentación, con orientación regulatoria para consultas de la autoridad.' },
      ],
      caseStudy: {
        title: 'Programa de registro en múltiples países',
        body: 'Un importador necesitaba registrar cuatro formulaciones en cinco mercados africanos y latinoamericanos. Preparamos dossiers específicos por país para cada combinación producto-mercado, coordinamos los estudios de estabilidad requeridos y entregamos todas las presentaciones en 75 días — el importador logró los primeros registros en seis meses.',
        tags: ['Dossiers multi-mercado', 'Estudios de estabilidad', 'Cumplimiento regulatorio'],
      },
      faqs: [
        {
          q: '¿Qué soporte de registro proporcionáis?',
          a: 'Preparamos dossiers de registro completos: registro de exportación ICAMA, cumplimiento de especificaciones FAO/OMS, datos de estabilidad, resúmenes de toxicidad y paquetes de documentación específicos por país.',
        },
        {
          q: '¿Qué mercados podéis apoyar?',
          a: 'Apoyamos ICAMA (exportación China), especificaciones FAO/OMS y dossiers de registro local para mercados africanos, latinoamericanos, asiáticos y de Oriente Medio.',
        },
        {
          q: '¿Cuánto tarda la preparación del dossier?',
          a: 'La preparación típica del dossier tarda 30–60 días según el mercado y la disponibilidad de datos. Si se requieren nuevos estudios de estabilidad, los plazos se extienden consecuentemente.',
        },
        {
          q: '¿Realizáis estudios de estabilidad?',
          a: 'Sí. Realizamos o coordinamos estudios de estabilidad acelerada y a largo plazo según los requisitos de la autoridad de registro objetivo.',
        },
        {
          q: '¿Podéis ayudar con consultas de la autoridad después de la presentación?',
          a: 'Sí. Nuestro equipo regulatorio proporciona orientación y documentación complementaria para cualquier consulta de las autoridades de registro tras la presentación.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Comenta tus necesidades de registro',
    },
    {
      slug: 'government-procurement',
      navLabel: 'Adquisición gubernamental',
      metaTitle: 'Adquisición agroquímica gubernamental e institucional | Agrospear',
      metaDescription:
        'Agrospear suministra productos agroquímicos para agencias gubernamentales, ONG y programas de adquisición institucional incluyendo control de vectores, seguridad alimentaria y cumplimiento de licitaciones.',
      kicker: 'Adquisición gubernamental e institucional',
      serviceType: 'Adquisición agroquímica gubernamental',
      answer:
        'Suministramos productos agroquímicos a agencias gubernamentales, ONG y programas de adquisición: insecticidas para control de vectores, insumos de protección de cultivos para seguridad alimentaria y formulaciones conformes con licitaciones con documentación completa. Embalaje de grado institucional, trazabilidad de lotes y documentación de exportación respaldan los requisitos de compra institucional.',
      h1: 'Adquisición agroquímica gubernamental e institucional',
      intro: [
        'Las agencias gubernamentales y las ONG adquieren agroquímicos de forma diferente: especificaciones de licitación, requisitos estrictos de documentación, grandes volúmenes y responsabilidad pública. Nuestro programa de adquisición entrega productos conformes con la documentación y trazabilidad que las compras institucionales exigen.',
        'Desde campañas de control de vectores hasta programas nacionales de seguridad alimentaria, suministramos los productos y la documentación que los procesos de adquisición requieren.',
      ],
      scenario: {
        title: 'Adquieres agroquímicos para programas públicos',
        body: 'Las licitaciones especifican formulaciones exactas, estándares de embalaje y requisitos de documentación. Necesitas un proveedor que cumpla la especificación, entregue a tiempo, proporcione trazabilidad completa y pueda manejar el volumen que un programa público exige.',
      },
      pairs: [
        {
          problem: 'Las especificaciones de licitación son estrictas y muchos proveedores no pueden cumplirlas.',
          solution: 'Producimos según la especificación de licitación — formulaciones exactas, estándares de embalaje y requisitos de documentación — con soporte de precalificación para tu proceso de adquisición.',
        },
        {
          problem: 'Los programas de control de vectores y seguridad alimentaria necesitan productos especializados.',
          solution: 'Líneas de productos específicas para control de vectores (rociado residual interior, rociado espacial, larvicidas) y seguridad alimentaria (protección de cultivos básicos, tratamientos poscosecha).',
        },
        {
          problem: 'La adquisición pública exige documentación completa y trazabilidad.',
          solution: 'Documentación completa de lote, certificados de análisis, cumplimiento de especificaciones OMS y trazabilidad desde materia prima hasta el envío.',
        },
        {
          problem: 'Los plazos de entrega están fijados por los cronogramas del programa.',
          solution: 'Producción y logística planificadas según los cronogramas del programa, con opciones de stock de reserva para campañas críticas.',
        },
      ],
      steps: [
        { title: 'Comparte los requisitos de licitación', body: 'Especificaciones de producto, volúmenes, estándares de embalaje y cronogramas de entrega.' },
        { title: 'Confirma el cumplimiento', body: 'Verificamos que nuestros productos y documentación cumplen cada requisito de la licitación.' },
        { title: 'Produce y documenta', body: 'Producción según especificación con QC completo, documentación y trazabilidad por lote.' },
        { title: 'Entrega y soporta', body: 'Entrega puntual con logística conforme a mercancías peligrosas y soporte documental post-entrega.' },
      ],
      caseStudy: {
        title: 'Suministro para programa nacional de control de vectores',
        body: 'Un Ministerio de Salud requería 200 toneladas de insecticida aprobado por WHO-PQ para una campaña nacional de control de vectores de malaria. Suministramos el producto según especificación exacta de licitación, con certificados de especificación OMS, trazabilidad completa de lote y entrega a tres almacenes regionales dentro del cronograma del programa.',
        tags: ['Control de vectores', 'Especificación OMS', 'Cumplimiento de licitación'],
      },
      faqs: [
        {
          q: '¿Qué productos suministráis para adquisición gubernamental?',
          a: 'Insecticidas para control de vectores (IRS, rociado espacial, larvicidas), productos de protección de cultivos para seguridad alimentaria, tratamientos poscosecha y formulaciones según licitación para programas institucionales.',
        },
        {
          q: '¿Podéis cumplir los requisitos de especificación de licitación?',
          a: 'Sí. Producimos según las especificaciones exactas de licitación — formulaciones, embalaje, etiquetado y documentación — y apoyamos la precalificación para procesos de adquisición.',
        },
        {
          q: '¿Proporcionáis cumplimiento de especificaciones OMS?',
          a: 'Sí. Se proporciona documentación de cumplimiento WHO-PQ y especificaciones OMS para productos de control de vectores cuando aplica.',
        },
        {
          q: '¿Qué documentación se incluye para adquisición institucional?',
          a: 'Documentación completa de lote, certificados de análisis, certificados de cumplimiento de especificaciones, registros de trazabilidad y documentación de exportación según requisitos institucionales.',
        },
        {
          q: '¿Podéis gestionar entregas de gran volumen a múltiples ubicaciones?',
          a: 'Sí. Planificamos producción y logística según los cronogramas del programa, con entrega a uno o varios almacenes y opciones de stock de reserva para campañas críticas.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Comenta tus requisitos de adquisición',
    },
  ],
}

export function getSolutionPage(locale: Locale, slug: string): SolutionPageData | undefined {
  return pick(solutionPages, locale).find((p) => p.slug === slug)
}
