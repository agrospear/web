import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Knowledge Center (/knowledge/*). Informational articles answer the
 * question-style queries around agrochemical product development and sourcing —
 * the queries importers and distributors research before ever reaching out.
 */

export interface KnowledgeArticle {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string
  sections: { title: string; body: string[] }[]
}

export const knowledge: Localized<KnowledgeArticle[]> = {
  en: [
    {
      slug: 'how-custom-agrochemical-formulations-are-developed',
      navLabel: 'How Custom Agrochemical Formulations Are Developed',
      metaTitle: 'How Custom Agrochemical Formulations Are Developed | Agrospear',
      metaDescription:
        'How a custom agrochemical formulation moves from concept to commercial product: requirement definition, formulation design, registration, sampling and production — explained step by step.',
      kicker: 'Knowledge',
      h1: 'How Custom Agrochemical Formulations Are Developed',
      intro:
        'Before a custom agrochemical product reaches your market, it travels a structured development path from requirement to registration to production. Understanding each stage helps you brief the manufacturer correctly, set realistic timelines, and avoid costly mistakes that first-time buyers often make.',
      sections: [
        {
          title: 'Step 1: Define the Requirement',
          body: [
            'Every formulation project starts with the use case: which crop, which pest or disease, which region, and which grower segment. A broad-spectrum herbicide for large-scale cereal farms differs from a targeted insecticide for high-value vegetable greenhouses — the active ingredient, concentration, formulation type and cost targets all shift with the answer.',
            'Document the target market, regulatory jurisdiction, competitive landscape, and performance expectations before contacting a manufacturer. Clear requirements produce better first proposals, fewer reformulation cycles, and shorter time to market.',
            'Include any constraints early: restricted active ingredients in your target country, maximum residue limits (MRLs) that affect export crops, resistance-management requirements, and whether the product must fit into existing spray programs or tank-mix schedules.',
          ],
        },
        {
          title: 'Step 2: Formulation Design',
          body: [
            'The formulation converts the active ingredient into a stable, effective, and commercially viable product. This means selecting the formulation type (SC, EC, WP, WDG, SL, ME, CS, FS — see our formulation types guide), choosing co-formulants (solvents, surfactants, stabilizers, dispersants), and optimizing the ratio of each component.',
            'Key design parameters include: active concentration, physical stability (no settling, no crystallization, no phase separation), chemical stability (shelf life at elevated temperatures), suspensibility or emulsifiability in spray tanks, and compatibility with common tank-mix partners.',
            'Formulation design is iterative. The lab produces small-scale batches, tests them, and refines the recipe. A well-briefed manufacturer with a strong R&D team can converge on an optimized formulation in fewer cycles — which directly reduces your development cost and timeline.',
          ],
        },
        {
          title: 'Step 3: Registration and Regulatory Compliance',
          body: [
            'Registration is often the longest gate in the development timeline. Requirements vary by country, but typically include: full product chemistry data, five-batch analysis, acute and chronic toxicity studies, residue trials, efficacy and crop safety trials, and environmental fate data.',
            'A manufacturer experienced in your target registration jurisdiction can provide the data packages, study reports, and dossier formats that regulators require. Ask early whether the factory holds existing GLP study reports for the same or similar formulations — reusing data can save months and significant cost.',
            'Plan for local in-country trials. Many jurisdictions require field efficacy data generated domestically. Coordinate with your registration consultant and the manufacturer to align trial protocols, timelines, and sample shipments so nothing blocks the submission window.',
          ],
        },
        {
          title: 'Step 4: Sampling and Validation',
          body: [
            'The sample is the first production-representative batch. For agrochemicals this means a pilot-scale or small production run that you can test for physical properties, chemical assay, impurity profile, and field performance.',
            'Test the sample as your end user will: dilute it in spray water, check suspensibility or emulsion stability, verify the label claims on target pests, and assess crop safety. One thorough validation round typically catches formulation or packaging issues before full production.',
            'Also validate the packaging: closure integrity, label adhesion, resistance to temperature cycling during transit, and compliance with GHS/CLP labeling requirements in the destination market. Packaging failures at scale are expensive and difficult to recall.',
          ],
        },
        {
          title: 'Step 5: Production and Delivery',
          body: [
            'After sample approval, production runs in batches with in-process and final QC checkpoints. Typical QC checks include: active ingredient assay, impurity limits, physical properties (pH, viscosity, suspensibility, wet sieve, persistent foam), and packaging integrity.',
            'Pre-shipment inspection — by your own team, photos and video, or a third-party inspection agency — protects the batch you receive. Specify the inspection protocol and acceptance criteria in the purchase contract before production starts.',
            'Plan logistics around the product classification. Most agrochemical formulations are classified as hazardous for transport (UN numbers, packing groups). Ensure the manufacturer provides compliant packaging, correct dangerous goods documentation, and MSDS/SDS in the language of the destination country.',
          ],
        },
      ],
    },
    {
      slug: 'agrochemical-formulation-types-explained',
      navLabel: 'Agrochemical Formulation Types Explained',
      metaTitle: 'Agrochemical Formulation Types: SC, EC, WP, WDG, SL, ME, CS, FS | Agrospear',
      metaDescription:
        'A practical guide to agrochemical formulation types — SC, EC, WP, WDG, SL, ME, CS, FS — what each is, when to use it, and pros/cons for importers and distributors.',
      kicker: 'Knowledge',
      h1: 'Agrochemical Formulation Types Explained',
      intro:
        'The formulation type determines how an agrochemical product is handled, mixed, applied, and stored. For importers and distributors, understanding the main formulation types is essential: it affects product performance, user safety, regulatory classification, and shelf-life requirements. This guide covers the eight most common types you will encounter.',
      sections: [
        {
          title: 'SC — Suspension Concentrate',
          body: [
            'A suspension concentrate is a stable suspension of solid active ingredient particles in water, with dispersants and thickeners that prevent settling. The farmer dilutes it directly into the spray tank. SC is currently the most widely used formulation type for new registrations globally.',
            'When to use it: When the active ingredient is a solid with low water solubility and you need a user-friendly, low-odor, non-flammable product. SCs are ideal for systemic and translaminar insecticides, fungicides, and many herbicides.',
            'Pros: No flammable solvents, low odor, easy to measure and pour, good tank-mix compatibility, favorable toxicological profile. Cons: Requires robust physical stability (anti-settling, anti-caking); can thicken or sediment over time if poorly formulated; sensitive to freezing during storage and transport.',
          ],
        },
        {
          title: 'EC — Emulsifiable Concentrate',
          body: [
            'An emulsifiable concentrate is a solution of the active ingredient in an organic solvent, blended with emulsifiers so that it forms a stable emulsion when diluted in water. EC was historically the dominant formulation type and remains common for older active ingredients.',
            'When to use it: When the active ingredient dissolves well in hydrocarbon solvents and you need rapid penetration into plant tissue or insect cuticle. ECs are common for contact insecticides and some herbicides.',
            'Pros: Fast biological action, simple and inexpensive manufacturing, long shelf life when properly formulated. Cons: Contains flammable solvents (shipping and storage hazards), can cause phytotoxicity on sensitive crops, may damage rubber seals and hoses in spray equipment, stronger odor and user exposure concerns.',
          ],
        },
        {
          title: 'WP — Wettable Powder',
          body: [
            'A wettable powder is a finely ground solid mixture of active ingredient, wetting agents, and dispersants. It forms a suspension when added to water. WPs were among the earliest formulation types and are still used for specific actives.',
            'When to use it: When the active ingredient is stable as a solid powder and the cost of EC or SC formulation is not justified. Common for older fungicides and some herbicides sold in price-sensitive markets.',
            'Pros: Simple and low-cost manufacturing, no solvents, stable at high temperatures, long shelf life. Cons: Dust during handling (inhalation risk), slower to disperse in the spray tank, can clog nozzles and filters, requires constant agitation during spraying.',
          ],
        },
        {
          title: 'WDG — Water-Dispersible Granule',
          body: [
            'A water-dispersible granule is a granulated version of a WP: the same solid active with dispersants, but compressed or extruded into granules that disintegrate and disperse in water. WDGs are the modern upgrade to WPs for most new registrations.',
            'When to use it: When you want the low-cost, solvent-free profile of a WP but with better handling, less dust, and easier dosing. WDGs are widely used for herbicides and fungicides in row-crop and broadacre applications.',
            'Pros: Dust-free handling, easy to measure by weight or volume, good shelf stability, no solvents, reduced user exposure. Cons: Higher manufacturing cost than WP, sensitive to moisture during storage (can cake), disintegration speed varies with water hardness and temperature.',
          ],
        },
        {
          title: 'SL — Soluble Liquid',
          body: [
            'A soluble liquid is a true aqueous solution of the active ingredient — no suspension, no emulsion. The farmer pours it into the spray tank and it dissolves completely. SL is used for water-soluble actives, primarily non-selective herbicides like glyphosate, paraquat, and 2,4-D salts.',
            'When to use it: When the active ingredient (typically a salt form) is fully soluble in water and you need the simplest possible product for large-acreage applications.',
            'Pros: Simplest handling and mixing, no sedimentation or separation, lowest manufacturing complexity, no solvents. Cons: Limited to water-soluble actives, can be corrosive to spray equipment, freezing during transport can cause precipitation, narrow range of achievable concentrations.',
          ],
        },
        {
          title: 'ME — Micro-Emulsion',
          body: [
            'A micro-emulsion is a thermodynamically stable, optically transparent or translucent mixture of oil, water, and surfactants with active ingredient dissolved in the oil phase. The droplet size is much smaller than in a conventional EC emulsion — typically below 100 nm.',
            'When to use it: When you need the penetration advantages of an oil-based formulation but with lower solvent content, reduced phytotoxicity, and improved spray coverage. MEs are used for some fungicides and insecticides where uniform deposit on leaf surfaces matters.',
            'Pros: Low solvent content, small droplet size gives better coverage and adhesion, transparent appearance signals quality, reduced phytotoxicity vs. EC. Cons: Limited active loading capacity, sensitive to water hardness and temperature during dilution, higher surfactant cost, shorter shelf life than EC in some systems.',
          ],
        },
        {
          title: 'CS — Capsule Suspension',
          body: [
            'A capsule suspension encloses the active ingredient inside polymer microcapsules suspended in water. The capsules release the active slowly through diffusion or triggered by pH, temperature, or mechanical shear during spraying. CS is the primary controlled-release formulation in crop protection.',
            'When to use it: When you need extended residual activity, reduced application frequency, or lower acute toxicity to non-target organisms. CS is common for highly active or acutely toxic insecticides where exposure reduction matters for applicator safety.',
            'Pros: Controlled release extends residual efficacy, reduces acute toxicity and user exposure, can reduce number of applications per season, lower phytotoxicity risk. Cons: Higher manufacturing cost, capsule wall integrity is critical (premature release defeats the purpose), limited to actives compatible with encapsulation, may require specific spray equipment settings.',
          ],
        },
        {
          title: 'FS — Flowable Concentrate for Seed Treatment',
          body: [
            'An FS formulation is a suspension concentrate specifically designed for seed treatment application: it must adhere to the seed surface, form a uniform film, resist dusting off during handling and planting, and not impair germination. FS products often contain dyes, polymer binders, and anti-dusting agents alongside the active ingredient.',
            'When to use it: When you are targeting soil-borne pests, seedling diseases, or early-season insect pressure and want to deliver the product at or before planting rather than as a foliar spray. FS is the standard formulation for commercial seed treatment.',
            'Pros: Direct delivery to the target zone, reduced total active applied per hectare compared to broadcast sprays, protects germination and early growth, convenient for growers using treated seed. Cons: Requires seed-treatment equipment and calibration, formulation must be compatible with seed coating polymers, shelf life can be shorter than standard SCs, limited to seed-treatment use cases.',
          ],
        },
      ],
    },
    {
      slug: 'how-importers-and-distributors-choose-agrochemical-suppliers',
      navLabel: 'How Importers and Distributors Choose Agrochemical Suppliers',
      metaTitle: 'How Importers and Distributors Choose Agrochemical Suppliers | Agrospear',
      metaDescription:
        'How agrochemical importers and distributors evaluate suppliers: quality verification, registration support, MOQ flexibility, logistics capability and documentation — a practical framework.',
      kicker: 'Knowledge',
      h1: 'How Importers and Distributors Choose Agrochemical Suppliers',
      intro:
        'Choosing an agrochemical supplier is a high-stakes decision: the wrong partner delivers product failures, registration delays, or shipments that clear customs months late. This framework covers the evaluation criteria that experienced importers and distributors use to select manufacturing partners they can rely on season after season.',
      sections: [
        {
          title: 'Quality Verification',
          body: [
            'Quality is non-negotiable in crop protection: an out-of-spec batch can mean crop damage, failed registrations, liability claims, and loss of grower trust. Verify quality at three levels: the factory\'s quality management system, the batch-level testing protocol, and the product\'s track record in the market.',
            'Ask whether the manufacturer operates under a certified QMS (ISO 9001, or at minimum a documented SOP system). Request the standard QC protocol: what parameters are tested, at which points in the process, and against which acceptance criteria. A supplier that tests active assay, impurity profile, physical properties, and packaging integrity on every batch is demonstrably more reliable than one that tests selectively.',
            'Request third-party analysis reports from an independent, GLP-accredited laboratory for recent batches. Cross-check the declared active content and impurity levels against your specification. Consistent analytical results across batches are a stronger signal than a single perfect certificate.',
          ],
        },
        {
          title: 'Registration Support',
          body: [
            'Registration is the gate to market access, and the supplier\'s ability to support it directly determines your time to revenue. Evaluate whether the manufacturer provides complete product chemistry dossiers, GLP study reports (toxicity, ecotoxicity, residue, environmental fate), five-batch analysis, and manufacturing process descriptions in formats accepted by your target regulatory authority.',
            'A supplier with existing registrations for the same or similar formulations in other jurisdictions may already hold data you can reference or cross-reference — saving you months and substantial cost. Ask specifically which countries they are registered in and whether they are willing to share or license existing data packages.',
            'Also assess responsiveness: how quickly does the supplier answer technical queries from your registration consultant? Can they provide stability data, impurity justifications, or additional studies on short notice? Slow data support is a common bottleneck that delays submissions.',
          ],
        },
        {
          title: 'MOQ and Commercial Flexibility',
          body: [
            'Minimum order quantities affect your working capital, inventory risk, and ability to test a new product. Large MOQs may secure a lower unit price but tie up capital in stock that moves slowly — especially risky when launching a new brand or entering a new market.',
            'Evaluate whether the supplier offers tiered MOQs: a smaller pilot order for initial registration and market testing, with a larger commercial MOQ once the product is registered and selling. This structure lets you validate demand before committing to full-volume orders.',
            'Also consider payment terms, exclusivity options, and private-label flexibility. A supplier that offers your own brand, custom packaging, and territorial exclusivity in exchange for volume commitments is often a better long-term partner than one with the lowest per-unit price but no commercial flexibility.',
          ],
        },
        {
          title: 'Logistics and Delivery Reliability',
          body: [
            'Agrochemical demand is seasonal: a shipment arriving two weeks late can miss the entire application window, leaving you with unsold inventory and unhappy growers. Assess the supplier\'s production lead time, on-time delivery record, and ability to ramp up for seasonal peaks.',
            'For international shipments, verify that the manufacturer can handle classified dangerous goods: correct UN packaging, compliant labels, and complete shipping documentation (dangerous goods declaration, packing list, certificate of analysis, MSDS/SDS in the destination language). Incomplete documentation is the single most common cause of customs delays for agrochemical imports.',
            'Ask about warehousing and buffer-stock options. A supplier that holds safety stock or can pre-position material at a local warehouse near your market reduces your lead time and cushions against production disruptions.',
          ],
        },
        {
          title: 'Documentation and Transparency',
          body: [
            'A trustworthy supplier documents everything: product specifications, batch records, certificates of analysis, stability data, SDS in multiple languages, and regulatory correspondence. If you have to chase a supplier for basic documents, that pattern will not improve after the first order.',
            'Evaluate transparency on pricing: does the quote break down active ingredient cost, co-formulant cost, packaging, and logistics — or is it a single lump-sum number? Transparent cost structures help you negotiate intelligently and understand where margins sit when raw material prices shift.',
            'Finally, assess communication quality. Does the supplier respond within one business day? Do they flag potential issues proactively — raw material shortages, regulatory changes, shipping delays — or do you discover them after the fact? Reliable communication is the simplest and strongest predictor of a reliable supply relationship.',
          ],
        },
      ],
    },
  ],
  es: [
    {
      slug: 'how-custom-agrochemical-formulations-are-developed',
      navLabel: 'Cómo se desarrollan las formulaciones agroquímicas personalizadas',
      metaTitle: 'Cómo se desarrollan formulaciones agroquímicas personalizadas | Agrospear',
      metaDescription:
        'Cómo pasa una formulación agroquímica personalizada del concepto al producto comercial: definición de requisitos, diseño de formulación, registro, muestras y producción — paso a paso.',
      kicker: 'Centro de conocimiento',
      h1: 'Cómo se desarrollan las formulaciones agroquímicas personalizadas',
      intro:
        'Antes de que un producto agroquímico personalizado llegue a tu mercado, recorre una ruta estructurada desde el requisito hasta el registro y la producción. Comprender cada fase te permite comunicar bien tus necesidades al fabricante, fijar plazos realistas y evitar los errores costosos que los compradores primerizos suelen cometer.',
      sections: [
        {
          title: 'Paso 1: Define el requisito',
          body: [
            'Todo proyecto de formulación empieza por el caso de uso: qué cultivo, qué plaga o enfermedad, qué región y qué segmento de agricultor. Un herbicida de amplio espectro para cereales a gran escala difiere de un insecticida selectivo para invernaderos de hortalizas de alto valor — el ingrediente activo, la concentración, el tipo de formulación y los objetivos de coste cambian con cada caso.',
            'Documenta el mercado objetivo, la jurisdicción regulatoria, el panorama competitivo y las expectativas de rendimiento antes de contactar con el fabricante. Un requisito claro consigue mejores propuestas iniciales, menos ciclos de reformulación y un tiempo de comercialización más corto.',
            'Incluye restricciones desde el principio: ingredientes activos restringidos en tu país destino, límites máximos de residuos (LMR) que afecten a cultivos de exportación, requisitos de gestión de resistencias y si el producto debe integrarse en programas de aplicación o mezclas en tanque existentes.',
          ],
        },
        {
          title: 'Paso 2: Diseño de la formulación',
          body: [
            'La formulación convierte el ingrediente activo en un producto estable, eficaz y comercialmente viable. Esto significa seleccionar el tipo de formulación (SC, EC, WP, WDG, SL, ME, CS, FS — consulta nuestra guía de tipos de formulación), elegir coformulantes (solventes, tensioactivos, estabilizantes, dispersantes) y optimizar la proporción de cada componente.',
            'Los parámetros clave de diseño incluyen: concentración del activo, estabilidad física (sin sedimentación, sin cristalización, sin separación de fases), estabilidad química (vida útil a temperaturas elevadas), suspensibilidad o emulsifiabilidad en tanques de pulverización y compatibilidad con mezclas en tanque habituales.',
            'El diseño de formulación es iterativo. El laboratorio produce lotes a pequeña escala, los prueba y refina la receta. Un fabricante bien informado con un equipo de I+D fuerte puede converger en una formulación optimizada en menos ciclos — lo que reduce directamente tu coste y plazo de desarrollo.',
          ],
        },
        {
          title: 'Paso 3: Registro y cumplimiento regulatorio',
          body: [
            'El registro es a menudo la etapa más larga del desarrollo. Los requisitos varían según el país, pero típicamente incluyen: datos completos de química del producto, análisis de cinco lotes, estudios de toxicidad aguda y crónica, ensayos de residuos, ensayos de eficacia y seguridad en cultivos, y datos de destino ambiental.',
            'Un fabricante con experiencia en tu jurisdicción regulatoria objetivo puede proporcionar los paquetes de datos, informes de estudios y formatos de expediente que los reguladores requieren. Pregunta pronto si la fábrica posee informes de estudios GLP existentes para formulaciones iguales o similares — reutilizar datos puede ahorrar meses y costes significativos.',
            'Planifica ensayos locales. Muchas jurisdicciones exigen datos de eficacia en campo generados dentro del país. Coordina con tu consultor de registro y el fabricante para alinear protocolos de ensayo, plazos y envíos de muestras de modo que nada bloquee la ventana de presentación.',
          ],
        },
        {
          title: 'Paso 4: Muestreo y validación',
          body: [
            'La muestra es el primer lote representativo de producción. Para agroquímicos esto significa una tirada piloto o producción pequeña que puedes probar en propiedades físicas, ensayo químico, perfil de impurezas y rendimiento en campo.',
            'Prueba la muestra como lo haría el usuario final: dilúyela en agua de pulverización, verifica la suspensibilidad o estabilidad de la emulsión, confirma las indicaciones de la etiqueta sobre plagas objetivo y evalúa la seguridad del cultivo. Una buena ronda de validación suele detectar problemas de formulación o envasado antes de la producción completa.',
            'También valida el envase: integridad del cierre, adherencia de la etiqueta, resistencia a ciclos de temperatura durante el tránsito y cumplimiento de los requisitos de etiquetado GHS/CLP del mercado de destino. Los fallos de envase a gran escala son caros y difíciles de recuperar.',
          ],
        },
        {
          title: 'Paso 5: Producción y entrega',
          body: [
            'Tras la aprobación de la muestra, la producción avanza por lotes con puntos de control de calidad en proceso y final. Los controles típicos incluyen: ensayo del ingrediente activo, límites de impurezas, propiedades físicas (pH, viscosidad, suspensibilidad, tamiz húmedo, espuma persistente) e integridad del envase.',
            'La inspección previa al embarque — por tu propio equipo, mediante fotos y vídeo, o a través de una agencia de inspección independiente — protege el lote que recibes. Especifica el protocolo de inspección y los criterios de aceptación en el contrato de compra antes de que la producción comience.',
            'Planifica la logística según la clasificación del producto. La mayoría de las formulaciones agroquímicas se clasifican como mercancías peligrosas para el transporte (números UN, grupos de embalaje). Asegúrate de que el fabricante proporciona envases conformes, documentación de mercancías peligrosas correcta y fichas MSDS/SDS en el idioma del país de destino.',
          ],
        },
      ],
    },
    {
      slug: 'agrochemical-formulation-types-explained',
      navLabel: 'Tipos de formulación agroquímica, explicados',
      metaTitle: 'Tipos de formulación agroquímica: SC, EC, WP, WDG, SL, ME, CS, FS | Agrospear',
      metaDescription:
        'Guía práctica sobre tipos de formulación agroquímica — SC, EC, WP, WDG, SL, ME, CS, FS — qué es cada uno, cuándo usarlo y pros/contras para importadores y distribuidores.',
      kicker: 'Centro de conocimiento',
      h1: 'Tipos de formulación agroquímica, explicados',
      intro:
        'El tipo de formulación determina cómo se maneja, mezcla, aplica y almacena un producto agroquímico. Para importadores y distribuidores, comprender los principales tipos de formulación es esencial: afecta al rendimiento del producto, la seguridad del usuario, la clasificación regulatoria y los requisitos de vida útil. Esta guía cubre los ocho tipos más comunes.',
      sections: [
        {
          title: 'SC — Concentrado en suspensión',
          body: [
            'Un concentrado en suspensión es una suspensión estable de partículas sólidas de ingrediente activo en agua, con dispersantes y espesantes que evitan la sedimentación. El agricultor lo diluye directamente en el tanque de pulverización. SC es actualmente el tipo de formulación más utilizado para nuevos registros a nivel mundial.',
            'Cuándo usarlo: Cuando el ingrediente activo es un sólido con baja solubilidad en agua y necesitas un producto fácil de usar, con bajo olor y no inflamable. Los SC son ideales para insecticidas y fungicidas sistémicos y translaminares, y muchos herbicidas.',
            'Pros: Sin solventes inflamables, bajo olor, fácil de medir y verter, buena compatibilidad en mezcla de tanque, perfil toxicológico favorable. Contras: Requiere una estabilidad física robusta (anti-sedimentación, anti-apelmazamiento); puede espesarse o sedimentar con el tiempo si está mal formulado; sensible a la congelación durante el almacenamiento y el transporte.',
          ],
        },
        {
          title: 'EC — Concentrado emulsionable',
          body: [
            'Un concentrado emulsionable es una solución del ingrediente activo en un solvente orgánico, mezclada con emulsionantes para que forme una emulsión estable al diluirse en agua. EC fue históricamente el tipo de formulación dominante y sigue siendo común para ingredientes activos más antiguos.',
            'Cuándo usarlo: Cuando el ingrediente activo se disuelve bien en solventes hidrocarbonados y necesitas penetración rápida en el tejido vegetal o la cutícula del insecto. Los EC son habituales en insecticidas de contacto y algunos herbicidas.',
            'Pros: Acción biológica rápida, fabricación sencilla y económica, larga vida útil cuando está bien formulado. Contras: Contiene solventes inflamables (riesgos de envío y almacenamiento), puede causar fitotoxicidad en cultivos sensibles, puede dañar juntas y mangueras de goma en el equipo de pulverización, olor más fuerte y mayores preocupaciones de exposición del usuario.',
          ],
        },
        {
          title: 'WP — Polvo mojable',
          body: [
            'Un polvo mojable es una mezcla sólida finamente molida de ingrediente activo, agentes humectantes y dispersantes. Forma una suspensión al añadirse al agua. Los WP fueron de los primeros tipos de formulación y siguen usándose para activos específicos.',
            'Cuándo usarlo: Cuando el ingrediente activo es estable como polvo sólido y el coste de formular como EC o SC no está justificado. Común en fungicidas antiguos y algunos herbicidas vendidos en mercados sensibles al precio.',
            'Pros: Fabricación sencilla y de bajo coste, sin solventes, estable a altas temperaturas, larga vida útil. Contras: Polvo durante la manipulación (riesgo de inhalación), dispersión más lenta en el tanque, puede obstruir boquillas y filtros, requiere agitación constante durante la pulverización.',
          ],
        },
        {
          title: 'WDG — Gránulo dispersable en agua',
          body: [
            'Un gránulo dispersable en agua es una versión granulada de un WP: el mismo activo sólido con dispersantes, pero comprimido o extruido en gránulos que se desintegran y dispersan en agua. Los WDG son la mejora moderna de los WP para la mayoría de los nuevos registros.',
            'Cuándo usarlo: Cuando quieres el perfil de bajo coste y sin solventes de un WP pero con mejor manejo, menos polvo y dosificación más fácil. Los WDG se usan ampliamente en herbicidas y fungicidas para cultivos en hilera y de gran superficie.',
            'Pros: Manejo sin polvo, fácil de medir por peso o volumen, buena estabilidad en estante, sin solventes, menor exposición del usuario. Contras: Mayor coste de fabricación que WP, sensible a la humedad durante el almacenamiento (puede apelmazarse), la velocidad de desintegración varía con la dureza y temperatura del agua.',
          ],
        },
        {
          title: 'SL — Líquido soluble',
          body: [
            'Un líquido soluble es una solución acuosa verdadera del ingrediente activo — sin suspensión, sin emulsión. El agricultor lo vierte en el tanque y se disuelve completamente. SL se usa para activos solubles en agua, principalmente herbicidas no selectivos como glifosato, paraquat y sales de 2,4-D.',
            'Cuándo usarlo: Cuando el ingrediente activo (típicamente una forma salina) es totalmente soluble en agua y necesitas el producto más sencillo posible para aplicaciones en grandes superficies.',
            'Pros: Manipulación y mezcla más sencillas, sin sedimentación ni separación, menor complejidad de fabricación, sin solventes. Contras: Limitado a activos solubles en agua, puede ser corrosivo para el equipo de pulverización, la congelación durante el transporte puede causar precipitación, rango estrecho de concentraciones alcanzables.',
          ],
        },
        {
          title: 'ME — Microemulsión',
          body: [
            'Una microemulsión es una mezcla termodinámicamente estable, ópticamente transparente o translúcida, de aceite, agua y tensioactivos con el ingrediente activo disuelto en la fase oleosa. El tamaño de gota es mucho menor que en una emulsión EC convencional — típicamente inferior a 100 nm.',
            'Cuándo usarlo: Cuando necesitas las ventajas de penetración de una formulación oleosa pero con menor contenido de solvente, fitotoxicidad reducida y mejor cobertura de pulverización. Las ME se usan en algunos fungicidas e insecticidas donde el depósito uniforme en la superficie foliar es importante.',
            'Pros: Bajo contenido de solvente, tamaño de gota pequeño da mejor cobertura y adherencia, aspecto transparente señala calidad, fitotoxicidad reducida frente a EC. Contras: Capacidad limitada de carga activa, sensible a la dureza del agua y la temperatura durante la dilución, mayor coste de tensioactivos, vida útil más corta que EC en algunos sistemas.',
          ],
        },
        {
          title: 'CS — Suspensión encapsulada',
          body: [
            'Una suspensión encapsulada encierra el ingrediente activo dentro de microcápsulas de polímero suspendidas en agua. Las cápsulas liberan el activo lentamente por difusión o por activación del pH, la temperatura o la cizalladura mecánica durante la pulverización. CS es la principal formulación de liberación controlada en protección de cultivos.',
            'Cuándo usarlo: Cuando necesitas actividad residual prolongada, frecuencia de aplicación reducida o toxicidad aguda menor para organismos no objetivo. CS es común en insecticidas muy activos o de toxicidad aguda elevada donde la reducción de la exposición importa para la seguridad del aplicador.',
            'Pros: Liberación controlada extiende la eficacia residual, reduce la toxicidad aguda y la exposición del usuario, puede disminuir el número de aplicaciones por temporada, menor riesgo de fitotoxicidad. Contras: Mayor coste de fabricación, la integridad de la pared de la cápsula es crítica (una liberación prematura anula el propósito), limitado a activos compatibles con la encapsulación, puede requerir ajustes específicos del equipo de pulverización.',
          ],
        },
        {
          title: 'FS — Concentrado fluido para tratamiento de semillas',
          body: [
            'Una formulación FS es un concentrado en suspensión diseñado específicamente para el tratamiento de semillas: debe adherirse a la superficie de la semilla, formar una película uniforme, resistir el desprendimiento de polvo durante la manipulación y la siembra, y no perjudicar la germinación. Los productos FS suelen contener colorantes, polímeros aglutinantes y agentes anti-polvo junto al ingrediente activo.',
            'Cuándo usarlo: Cuando te diriges a plagas del suelo, enfermedades de las plántulas o presión de insectos en la etapa temprana y quieres entregar el producto en o antes de la siembra en lugar de como pulverización foliar. FS es la formulación estándar para el tratamiento comercial de semillas.',
            'Pros: Entrega directa en la zona objetivo, menor cantidad total de activo aplicado por hectárea comparado con pulverizaciones a voleo, protege la germinación y el crecimiento temprano, cómodo para agricultores que usan semilla tratada. Contras: Requiere equipo de tratamiento de semillas y calibración, la formulación debe ser compatible con polímeros de recubrimiento de semillas, la vida útil puede ser más corta que los SC estándar, limitado a casos de uso de tratamiento de semillas.',
          ],
        },
      ],
    },
    {
      slug: 'how-importers-and-distributors-choose-agrochemical-suppliers',
      navLabel: 'Cómo eligen los importadores y distribuidores sus proveedores agroquímicos',
      metaTitle: 'Cómo importadores y distribuidores eligen proveedores agroquímicos | Agrospear',
      metaDescription:
        'Cómo evalúan los importadores y distribuidores agroquímicos a sus proveedores: verificación de calidad, apoyo al registro, flexibilidad de MOQ, logística y documentación — un marco práctico.',
      kicker: 'Centro de conocimiento',
      h1: 'Cómo eligen los importadores y distribuidores sus proveedores agroquímicos',
      intro:
        'Elegir un proveedor agroquímico es una decisión de alto riesgo: el socio equivocado entrega productos defectuosos, retrasos en el registro o envíos que despachan meses tarde. Este marco cubre los criterios de evaluación que importadores y distribuidores experimentados utilizan para seleccionar socios de fabricación en los que pueden confiar temporada tras temporada.',
      sections: [
        {
          title: 'Verificación de calidad',
          body: [
            'La calidad es innegociable en protección de cultivos: un lote fuera de especificación puede significar daños al cultivo, registros fallidos, reclamaciones de responsabilidad y pérdida de confianza del agricultor. Verifica la calidad en tres niveles: el sistema de gestión de calidad de la fábrica, el protocolo de análisis por lote y el historial del producto en el mercado.',
            'Pregunta si el fabricante opera bajo un sistema de calidad certificado (ISO 9001 o, como mínimo, un sistema documentado de POE). Solicita el protocolo estándar de control de calidad: qué parámetros se analizan, en qué puntos del proceso y con qué criterios de aceptación. Un proveedor que analiza el ensayo del activo, el perfil de impurezas, las propiedades físicas y la integridad del envase en cada lote es demostrablemente más fiable que uno que analiza selectivamente.',
            'Solicita informes de análisis de un laboratorio independiente acreditado GLP para lotes recientes. Verifica el contenido activo declarado y los niveles de impurezas frente a tu especificación. Resultados analíticos consistentes entre lotes son una señal más fuerte que un solo certificado perfecto.',
          ],
        },
        {
          title: 'Apoyo al registro',
          body: [
            'El registro es la puerta de acceso al mercado, y la capacidad del proveedor para apoyarlo determina directamente tu tiempo hasta generar ingresos. Evalúa si el fabricante proporciona expedientes completos de química del producto, informes de estudios GLP (toxicidad, ecotoxicidad, residuos, destino ambiental), análisis de cinco lotes y descripciones del proceso de fabricación en formatos aceptados por tu autoridad reguladora objetivo.',
            'Un proveedor con registros existentes para formulaciones iguales o similares en otras jurisdicciones puede poseer datos que puedes referenciar o cruzar — ahorrándote meses y costes considerables. Pregunta específicamente en qué países están registrados y si están dispuestos a compartir o licenciar paquetes de datos existentes.',
            'También evalúa la capacidad de respuesta: ¿con qué rapidez responde el proveedor a las consultas técnicas de tu consultor de registro? ¿Puede proporcionar datos de estabilidad, justificaciones de impurezas o estudios adicionales con poco preaviso? El soporte de datos lento es un cuello de botella común que retrasa las presentaciones.',
          ],
        },
        {
          title: 'MOQ y flexibilidad comercial',
          body: [
            'Las cantidades mínimas de pedido afectan a tu capital de trabajo, el riesgo de inventario y la capacidad de probar un producto nuevo. MOQ grandes pueden asegurar un precio unitario menor pero inmovilizan capital en existencias de rotación lenta — especialmente arriesgado al lanzar una marca nueva o entrar en un mercado nuevo.',
            'Evalúa si el proveedor ofrece MOQ escalonados: un pedido piloto más pequeño para el registro inicial y la prueba de mercado, con un MOQ comercial mayor una vez que el producto esté registrado y vendiendo. Esta estructura te permite validar la demanda antes de comprometerte con pedidos de volumen completo.',
            'Considera también las condiciones de pago, las opciones de exclusividad y la flexibilidad de marca privada. Un proveedor que ofrece tu propia marca, envase personalizado y exclusividad territorial a cambio de compromisos de volumen suele ser un mejor socio a largo plazo que uno con el precio unitario más bajo pero sin flexibilidad comercial.',
          ],
        },
        {
          title: 'Logística y fiabilidad de entrega',
          body: [
            'La demanda agroquímica es estacional: un envío que llega dos semanas tarde puede perder toda la ventana de aplicación, dejándote con inventario sin vender y agricultores insatisfechos. Evalúa el plazo de producción del proveedor, su historial de entregas a tiempo y su capacidad de incrementar la producción para picos estacionales.',
            'Para envíos internacionales, verifica que el fabricante puede gestionar mercancías peligrosas clasificadas: envases UN correctos, etiquetas conformes y documentación de envío completa (declaración de mercancías peligrosas, lista de embalaje, certificado de análisis, MSDS/SDS en el idioma de destino). La documentación incompleta es la causa más común de retrasos en aduanas para importaciones agroquímicas.',
            'Pregunta por opciones de almacenamiento y stock de seguridad. Un proveedor que mantiene stock de seguridad o puede pre-posicionar material en un almacén local cerca de tu mercado reduce tu plazo de entrega y amortigua las disrupciones de producción.',
          ],
        },
        {
          title: 'Documentación y transparencia',
          body: [
            'Un proveedor de confianza documenta todo: especificaciones del producto, registros de lote, certificados de análisis, datos de estabilidad, SDS en varios idiomas y correspondencia regulatoria. Si tienes que perseguir al proveedor para obtener documentos básicos, ese patrón no mejorará después del primer pedido.',
            'Evalúa la transparencia en precios: ¿el presupuesto desglosa el coste del ingrediente activo, los coformulantes, el envase y la logística — o es un único número global? Las estructuras de costes transparentes te ayudan a negociar de forma inteligente y a entender dónde están los márgenes cuando los precios de materias primas cambian.',
            'Finalmente, evalúa la calidad de la comunicación. ¿Responde el proveedor en un día hábil? ¿Señala proactivamente posibles problemas — escasez de materias primas, cambios regulatorios, retrasos de envío — o los descubres después del hecho? Una comunicación fiable es el predictor más sencillo y fuerte de una relación de suministro fiable.',
          ],
        },
      ],
    },
  ],
}

export function getArticle(locale: Locale, slug: string): KnowledgeArticle | undefined {
  return knowledge[locale].find((a) => a.slug === slug)
}

export interface KnowledgeMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const knowledgeMeta: Localized<KnowledgeMeta> = {
  en: {
    metaTitle: 'Knowledge Center: Agrochemical Formulation & Sourcing Guides | Agrospear',
    metaDescription:
      'Practical guides on custom agrochemical formulation development, formulation types (SC, EC, WP, WDG, SL, ME, CS, FS), and choosing agrochemical suppliers for importers and distributors.',
    h1: 'Knowledge Center — Agrochemical Formulation & Sourcing, Explained',
  },
  es: {
    metaTitle: 'Centro de conocimiento — guías de formulación y suministro agroquímico | Agrospear',
    metaDescription:
      'Guías prácticas sobre desarrollo de formulaciones agroquímicas personalizadas, tipos de formulación y selección de proveedores agroquímicos.',
    h1: 'Centro de conocimiento — formulación y suministro agroquímico, explicado',
  },
}
