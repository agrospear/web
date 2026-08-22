import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

export interface SeriesPageData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  faqs: { q: string; a: string }[]
}

export const seriesPages: Localized<SeriesPageData[]> = {
  en: [
    {
      slug: 'herbicide',
      navLabel: 'Herbicide Formulations',
      metaTitle: 'Custom Herbicide Formulations — OEM/ODM Crop Protection Manufacturer | Agrospear',
      metaDescription:
        'Custom herbicide formulations manufactured under your brand — selective & non-selective, SC/EC/WP/WDG types, OEM/ODM from 5-ton pilot, samples in 7–15 days. Factory direct from Qingdao, China.',
      kicker: 'Series · Herbicide',
      h1: 'Custom Herbicide Formulations — The Core Product Category For Crop Protection Brands',
      intro: [
        'Herbicides are the workhorse of crop protection: the largest segment by volume, the default starting category for new brands and the backbone of most distributor catalogs. Whether selective post-emergence for cereals or non-selective glyphosate for broad-acre, herbicide demand is consistent and volume-driven.',
        'We manufacture herbicide formulations under your brand from 20+ tons (standard volume), with pilot runs from 5 tons. Active ingredient, formulation type (SC, EC, WP, WDG, SL), adjuvant system, label design and packaging are specified per project.',
      ],
      faqs: [
        {
          q: 'Can I customize a herbicide formulation for my brand?',
          a: 'Yes. Every herbicide project starts with your target crop, weed spectrum and market registration status. You specify the active ingredient, concentration, formulation type (SC, EC, WP, WDG, SL, ME), adjuvant package, label design and packaging. Custom formulations start at 5-ton pilot batches; standard volume production from 20+ tons per SKU.',
        },
        {
          q: 'What is the MOQ for herbicide formulations?',
          a: 'Pilot batches start at 5 tons per formulation; standard volume production from 20+ tons per SKU. Sample batches (1–4 tons) are available for registration and field trial purposes. Samples ship in 7–15 days and bulk production runs 25–35 days after confirmed PO and deposit.',
        },
        {
          q: 'What formulation types are available for herbicides?',
          a: 'Suspension concentrate (SC), emulsifiable concentrate (EC), wettable powder (WP), water-dispersible granule (WDG), soluble liquid (SL), micro-emulsion (ME) and capsule suspension (CS). The optimal type depends on the active ingredient, target application method and your market preference.',
        },
        {
          q: 'Do you provide herbicide registration documentation?',
          a: 'Yes. We supply complete registration support packages: ICAMA certificates, FAO/WHO specification compliance, five-batch analysis, stability data, toxicology summaries and local registration dossiers. Documentation is tailored to your target market requirements.',
        },
      ],
    },
    {
      slug: 'insecticide',
      navLabel: 'Insecticide Formulations',
      metaTitle: 'Custom Insecticide Formulations — OEM Crop Protection Manufacturer | Agrospear',
      metaDescription:
        'Custom insecticide formulations for crop protection brands — systemic & contact modes of action, SC/EC/CS/ME types, OEM volume from 5-ton pilot, factory direct from Qingdao.',
      kicker: 'Series · Insecticide',
      h1: 'Custom Insecticide Formulations — Crop Protection Solutions For Your Brand',
      intro: [
        'Insecticides are the second-largest crop protection segment and the fastest-growing in many tropical and subtropical markets. Systemic neonicotinoids, contact pyrethroids and novel modes of action each demand precise formulation expertise to deliver field performance and shelf stability.',
        'We produce insecticide formulations under your brand with optimized adjuvant systems, proven stability profiles and registration-ready documentation — tested under accelerated and long-term storage conditions.',
      ],
      faqs: [
        {
          q: 'What insecticide formulation types do you manufacture?',
          a: 'Suspension concentrate (SC), emulsifiable concentrate (EC), capsule suspension (CS), micro-emulsion (ME), water-dispersible granule (WDG) and seed treatment (FS). Formulation type is selected based on the active ingredient properties, application method and target crop requirements.',
        },
        {
          q: 'Do insecticide formulations require special stability testing?',
          a: 'Yes — insecticides with complex adjuvant systems (especially CS and ME) undergo 54°C/14-day accelerated stability and 2-year long-term storage testing at 25°C and 30°C. Stability data is included in registration documentation.',
        },
        {
          q: 'Can I order insecticide formulations for specific pest complexes?',
          a: 'Yes. Formulations are tailored to target pest spectrums — aphids, whitefly, bollworm, thrips, leafhopper, etc. — with the appropriate active ingredient, concentration and adjuvant package. Pre-mixtures and combination products are available.',
        },
      ],
    },
    {
      slug: 'fungicide',
      navLabel: 'Fungicide Formulations',
      metaTitle: 'Custom Fungicide Formulations — OEM Crop Protection Manufacturer | Agrospear',
      metaDescription:
        'Custom fungicide formulations for brands and distributors — protective & curative modes of action, SC/WP/WDG types, OEM from 5-ton pilot, factory direct from Qingdao, China.',
      kicker: 'Series · Fungicide',
      h1: 'Custom Fungicide Formulations — Protective & Curative Solutions For Your Brand',
      intro: [
        'Fungicides are essential for high-value crops — fruits, vegetables, grapes and cereals — where disease pressure determines yield and quality. Both protective (pre-infection) and curative (post-infection) modes of action require precise formulation to deliver reliable field performance.',
        'We manufacture fungicide formulations under your brand with optimized particle size distribution, proven suspension rates and registration-ready documentation for your target markets.',
      ],
      faqs: [
        {
          q: 'What fungicide formulation types are available?',
          a: 'Suspension concentrate (SC), wettable powder (WP), water-dispersible granule (WDG), emulsifiable concentrate (EC) and micro-emulsion (ME). SC and WDG are the most common for modern fungicides due to ease of handling and reduced dust exposure.',
        },
        {
          q: 'What makes a good fungicide SC formulation?',
          a: 'Fine particle size (D90 < 5 μm), high suspension rate (>90% after 30 min), no sedimentation after thermal cycling, and consistent viscosity for accurate dosing. Our SC fungicides are tested to these standards with batch-level QC data.',
        },
        {
          q: 'Can I get fungicide formulations for specific crop-disease combinations?',
          a: 'Yes. We formulate for target crop-disease pairs: powdery mildew on cereals, downy mildew on grapes, blight on potatoes, rust on soybeans, etc. Active ingredient selection and adjuvant system are optimized per disease and application timing.',
        },
      ],
    },
    {
      slug: 'pgr',
      navLabel: 'Plant Growth Regulators',
      metaTitle: 'Custom Plant Growth Regulator Formulations — OEM Manufacturer | Agrospear',
      metaDescription:
        'Custom PGR formulations for crop protection brands — gibberellins, auxins, ethylene regulators, OEM from 5-ton pilot, factory direct from Qingdao, China.',
      kicker: 'Series · PGR',
      h1: 'Custom Plant Growth Regulator Formulations — Growth Management For Your Brand',
      intro: [
        'Plant growth regulators (PGRs) are high-value, low-volume products that manage plant architecture, fruit set, ripening and stress tolerance. They command premium pricing and are a strategic category for brands targeting fruit, vegetable and row-crop markets.',
        'We manufacture PGR formulations under your brand with precise concentration control, stability-validated adjuvant systems and formulation types matched to application requirements.',
      ],
      faqs: [
        {
          q: 'What PGR active ingredients do you formulate?',
          a: 'Gibberellic acid (GA3), gibberellin A4+A7, paclobutrazol, uniconazole, ethephon, chlormequat, mepiquat chloride, forchlorfenuron (CPPU), brassinolide, triacontanol and auxin-based products. Custom combinations are available.',
        },
        {
          q: 'What is the MOQ for PGR formulations?',
          a: 'Due to lower application rates, PGR pilot batches start at 1–5 tons depending on the active ingredient and concentration. Standard volume from 5+ tons per SKU. Sample batches for registration from 500 kg.',
        },
        {
          q: 'Do PGR formulations require special handling?',
          a: 'Yes — many PGRs are effective at very low concentrations (ppm levels), so formulation precision and homogeneity are critical. We test active content uniformity per batch and provide certificate of analysis with every shipment.',
        },
      ],
    },
    {
      slug: 'seed-treatment',
      navLabel: 'Seed Treatment Formulations',
      metaTitle: 'Custom Seed Treatment Formulations — FS Flowable Concentrate OEM | Agrospear',
      metaDescription:
        'Custom seed treatment (FS) formulations for brands and seed companies — flowable concentrates for coating, OEM from 5-ton pilot, factory direct from Qingdao, China.',
      kicker: 'Series · Seed Treatment',
      h1: 'Custom Seed Treatment Formulations — Flowable Concentrates For Seed Coating',
      intro: [
        'Seed treatment is the fastest-growing application method in crop protection: precise dosing, reduced environmental exposure and early-season protection make it the preferred technology for cereals, corn, soybeans and cotton. The FS (flowable concentrate for seed treatment) formulation type is the global standard.',
        'We manufacture FS formulations under your brand with optimized viscosity for seed-coating equipment, proven film uniformity and registration-ready documentation for seed-company and brand customers.',
      ],
      faqs: [
        {
          q: 'What seed treatment formulation types do you produce?',
          a: 'Flowable concentrate for seed treatment (FS) is the primary type — optimized for slurry treaters and film-coating equipment. We also produce seed treatment dusts (DS) and water-dispersible powders (WS) for specific crop and equipment requirements.',
        },
        {
          q: 'What active ingredients are used in seed treatments?',
          a: 'Insecticide seed treatments: imidacloprid, thiamethoxam, clothianidin, fipronil. Fungicide seed treatments: metalaxyl-M, fludioxonil, sedaxane, trifloxystrobin, tebuconazole. Combination seed treatments (insecticide + fungicide) are our most requested category.',
        },
        {
          q: 'Do you support seed companies with coating trials?',
          a: 'Yes. We provide sample batches for coating trials on your seed lots and equipment, with viscosity, drying time and film uniformity data. Technical support for coating equipment calibration is available.',
        },
      ],
    },
    {
      slug: 'adjuvant',
      navLabel: 'Adjuvants & Surfactants',
      metaTitle: 'Custom Adjuvant & Surfactant Formulations — OEM Manufacturer | Agrospear',
      metaDescription:
        'Custom adjuvant and surfactant formulations for crop protection brands — tank-mix partners, spreader-stickers, OEM from 5-ton pilot, factory direct from Qingdao, China.',
      kicker: 'Series · Adjuvants',
      h1: 'Custom Adjuvant & Surfactant Formulations — Performance Enhancement For Your Brand',
      intro: [
        'Adjuvants and surfactants enhance the performance of crop protection products: better coverage, improved rain-fastness, reduced drift and optimized tank-mix compatibility. They are a growing category for brands that want to offer complete spray programs.',
        'We manufacture adjuvant formulations under your brand — non-ionic surfactants, organosilicone spreaders, crop oil concentrates, drift control agents and fertilizer-compatible tank-mix partners.',
      ],
      faqs: [
        {
          q: 'What adjuvant types do you formulate?',
          a: 'Non-ionic surfactants (NIS), organosilicone super-spreaders, crop oil concentrates (COC), methylated seed oils (MSO), drift control agents, deposition aids, rain-fastness agents and pH buffers. Custom blends for specific crop-spray combinations.',
        },
        {
          q: 'Can adjuvants be co-branded with my pesticide line?',
          a: 'Yes. Many brands package adjuvants as tank-mix partners alongside their pesticide formulations. We can match label design and packaging across your product line for a unified brand presentation.',
        },
        {
          q: 'What is the MOQ for adjuvant formulations?',
          a: 'Pilot batches from 5 tons; standard volume from 20+ tons per SKU. Adjuvant formulations typically have simpler registration requirements, enabling faster market entry.',
        },
      ],
    },
    {
      slug: 'biopesticide',
      navLabel: 'Biopesticide Formulations',
      metaTitle: 'Custom Biopesticide Formulations — OEM Manufacturer | Agrospear',
      metaDescription:
        'Custom biopesticide formulations for brands — microbial and biochemical actives, stable SC/WP/OD types, OEM from 5-ton pilot, factory direct from Qingdao, China.',
      kicker: 'Series · Biopesticide',
      h1: 'Custom Biopesticide Formulations — Biological Solutions For Your Brand',
      intro: [
        'Biopesticides are the fastest-growing segment in crop protection: driven by residue limits, export market requirements and integrated pest management programs. Both microbial (bacteria, fungi) and biochemical (plant extracts, semiochemicals) actives require specialized formulation expertise.',
        'We manufacture biopesticide formulations under your brand with viability-preserving adjuvant systems, cold-chain-compatible production and registration support for organic and reduced-risk claims.',
      ],
      faqs: [
        {
          q: 'What biopesticide formulation types do you produce?',
          a: 'Suspension concentrate (SC) for microbial actives, wettable powder (WP) for spore-based products, oil dispersion (OD) for botanical extracts, and soluble liquid (SL) for biochemical actives. Formulation type is selected to preserve biological viability.',
        },
        {
          q: 'How do you ensure microbial viability in biopesticide formulations?',
          a: 'Cold-process production for temperature-sensitive strains, validated shelf-life testing under storage conditions, and batch-level CFU counts at manufacture and throughout the stability period. Cold-chain shipping options are available.',
        },
        {
          q: 'Do biopesticides require different registration support?',
          a: 'Yes. Biopesticides often qualify for reduced-risk or fast-track registration pathways in many markets. We provide the specific data packages required: strain identification, pathogenicity/toxicity data, non-target organism studies and efficacy trials.',
        },
      ],
    },
    {
      slug: 'mixture',
      navLabel: 'Pre-Mixtures & Combinations',
      metaTitle: 'Custom Pesticide Pre-Mixture Formulations — OEM Manufacturer | Agrospear',
      metaDescription:
        'Custom pesticide pre-mixture and combination formulations — dual & triple AI products, SC/EC/WDG types, OEM from 5-ton pilot, factory direct from Qingdao, China.',
      kicker: 'Series · Pre-Mixtures',
      h1: 'Custom Pre-Mixture Formulations — Multi-Mode-Of-Action Products For Your Brand',
      intro: [
        'Pre-mixtures (combination products with two or more active ingredients) are the highest-value segment in crop protection: they offer multi-mode-of-action convenience, resistance management and simplified spray programs. Most branded pesticide portfolios are built around combination products.',
        'We manufacture pre-mixture formulations under your brand with validated compatibility, proven physical and chemical stability, and registration-ready documentation for combination products.',
      ],
      faqs: [
        {
          q: 'What pre-mixture combinations do you formulate?',
          a: 'Insecticide + fungicide, dual-mode insecticide, dual-mode fungicide, and herbicide + safener combinations. Common examples: thiamethoxam + lambda-cyhalothrin SC, azoxystrobin + propiconazole SC, nicosulfuron + atrazine WDG. Custom AI pairs specified per project.',
        },
        {
          q: 'Are pre-mixture formulations more complex to develop?',
          a: 'Yes. Compatibility between actives, adjuvant system design, and thermal stability of each component must be validated. Our R&D team performs compatibility screening before pilot production and provides stability data for the combined formulation.',
        },
        {
          q: 'Do pre-mixtures require separate registration?',
          a: 'In most markets, yes — a pre-mixture is a separate product requiring its own registration dossier. We provide the complete data package: five-batch analysis, accelerated and long-term stability, toxicity data and field efficacy for the combination product.',
        },
      ],
    },
  ],
  es: [
    {
      slug: 'herbicide',
      navLabel: 'Formulaciones de herbicida',
      metaTitle: 'Formulaciones de herbicida personalizadas — Fabricante OEM/ODM de fitosanitarios | Agrospear',
      metaDescription:
        'Formulaciones de herbicida personalizadas bajo tu marca — selectivos y no selectivos, tipos SC/EC/WP/WDG, OEM/ODM desde piloto de 5 toneladas, muestras en 7–15 días. Directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Herbicida',
      h1: 'Formulaciones de herbicida personalizadas — la categoría base para marcas de fitosanitarios',
      intro: [
        'Los herbicidas son la categoría principal de la protección de cultivos: el mayor segmento por volumen, la categoría de partida por defecto para nuevas marcas y la base de la mayoría de los catálogos de distribuidores. Tanto si son selectivos de post-emergencia para cereales como no selectivos a base de glifosato para grandes superficies, la demanda de herbicidas es constante y por volumen.',
        'Fabricamos formulaciones de herbicida bajo tu marca desde 20+ toneladas (volumen estándar), con pedidos piloto desde 5 toneladas. Ingrediente activo, tipo de formulación (SC, EC, WP, WDG, SL), sistema de coadyuvantes, diseño de etiqueta y embalaje se especifican por proyecto.',
      ],
      faqs: [
        {
          q: '¿Puedo personalizar una formulación de herbicida para mi marca?',
          a: 'Sí. Cada proyecto de herbicida empieza con tu cultivo objetivo, espectro de malas hierbas y estado de registro en el mercado. Especificas el ingrediente activo, la concentración, el tipo de formulación (SC, EC, WP, WDG, SL, ME), el paquete de coadyuvantes, el diseño de etiqueta y el embalaje. Las formulaciones personalizadas parten de lotes piloto de 5 toneladas; la producción en volumen estándar, desde 20+ toneladas por SKU.',
        },
        {
          q: '¿Cuál es el pedido mínimo para formulaciones de herbicida?',
          a: 'Los lotes piloto parten de 5 toneladas por formulación; la producción en volumen estándar, desde 20+ toneladas por SKU. Los lotes de muestra (1–4 toneladas) están disponibles para registro y ensayos de campo. Las muestras salen en 7–15 días y la producción en 25–35 días tras PO y depósito confirmados.',
        },
        {
          q: '¿Qué tipos de formulación de herbicida están disponibles?',
          a: 'Concentrado en suspensión (SC), concentrado emulsionable (EC), polvo mojable (WP), gránulo dispersable en agua (WDG), líquido soluble (SL), microemulsión (ME) y suspensión encapsulada (CS). El tipo óptimo depende del ingrediente activo, el método de aplicación y la preferencia del mercado.',
        },
        {
          q: '¿Proporcionáis documentación de registro de herbicidas?',
          a: 'Sí. Suministramos paquetes completos de apoyo al registro: certificados ICAMA, cumplimiento de especificaciones FAO/OMS, análisis de cinco lotes, datos de estabilidad, resúmenes toxicológicos y expedientes de registro local. La documentación se adapta a los requisitos de tu mercado objetivo.',
        },
      ],
    },
    {
      slug: 'insecticide',
      navLabel: 'Formulaciones de insecticida',
      metaTitle: 'Formulaciones de insecticida personalizadas — Fabricante OEM de fitosanitarios | Agrospear',
      metaDescription:
        'Formulaciones de insecticida personalizadas para marcas de fitosanitarios — modos de acción sistémicos y de contacto, tipos SC/EC/CS/ME, OEM desde piloto de 5 toneladas, directo de fábrica en Qingdao.',
      kicker: 'Serie · Insecticida',
      h1: 'Formulaciones de insecticida personalizadas — soluciones fitosanitarias para tu marca',
      intro: [
        'Los insecticidas son el segundo segmento más grande de la protección de cultivos y el de mayor crecimiento en muchos mercados tropicales y subtropicales. Las neonicotinoides sistémicas, los piretroides de contacto y los nuevos modos de acción exigen una experiencia precisa de formulación para asegurar el rendimiento en campo y la estabilidad en estante.',
        'Producimos formulaciones de insecticida bajo tu marca con sistemas de coadyuvantes optimizados, perfiles de estabilidad probados y documentación lista para el registro — testados en condiciones aceleradas y de almacenamiento a largo plazo.',
      ],
      faqs: [
        {
          q: '¿Qué tipos de formulación de insecticida fabricáis?',
          a: 'Concentrado en suspensión (SC), concentrado emulsionable (EC), suspensión encapsulada (CS), microemulsión (ME), gránulo dispersable en agua (WDG) y tratamiento de semillas (FS). El tipo de formulación se selecciona según las propiedades del ingrediente activo, el método de aplicación y los requisitos del cultivo.',
        },
        {
          q: '¿Las formulaciones de insecticida requieren pruebas de estabilidad especiales?',
          a: 'Sí — los insecticidas con sistemas de coadyuvantes complejos (especialmente CS y ME) se someten a pruebas de estabilidad acelerada de 54 °C/14 días y almacenamiento a largo plazo de 2 años a 25 °C y 30 °C. Los datos de estabilidad se incluyen en la documentación de registro.',
        },
        {
          q: '¿Puedo pedir formulaciones de insecticida para complejos de plagas específicos?',
          a: 'Sí. Las formulaciones se adaptan a los espectros de plagas objetivo — pulgones, mosca blanca, heliothis, trips, saltamontes, etc. — con el ingrediente activo, la concentración y el paquete de coadyuvantes adecuados. Pre-mezclas y productos combinados disponibles.',
        },
      ],
    },
    {
      slug: 'fungicide',
      navLabel: 'Formulaciones de fungicida',
      metaTitle: 'Formulaciones de fungicida personalizadas — Fabricante OEM de fitosanitarios | Agrospear',
      metaDescription:
        'Formulaciones de fungicida personalizadas para marcas y distribuidores — modos de acción protectores y curativos, tipos SC/WP/WDG, OEM desde piloto de 5 toneladas, directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Fungicida',
      h1: 'Formulaciones de fungicida personalizadas — soluciones protectoras y curativas para tu marca',
      intro: [
        'Los fungicidas son esenciales para cultivos de alto valor — frutas, hortalizas, viñedos y cereales — donde la presión de enfermedades determina el rendimiento y la calidad. Tanto los modos de acción protectores (pre-infección) como curativos (post-infección) requieren una formulación precisa para un rendimiento fiable en campo.',
        'Fabricamos formulaciones de fungicida bajo tu marca con distribución de tamaño de partícula optimizada, tasas de suspensión probadas y documentación lista para el registro en tus mercados objetivo.',
      ],
      faqs: [
        {
          q: '¿Qué tipos de formulación de fungicida están disponibles?',
          a: 'Concentrado en suspensión (SC), polvo mojable (WP), gránulo dispersable en agua (WDG), concentrado emulsionable (EC) y microemulsión (ME). SC y WDG son los más habituales para fungicidas modernos por su facilidad de manejo y menor exposición al polvo.',
        },
        {
          q: '¿Qué hace buena a una formulación SC de fungicida?',
          a: 'Tamaño de partícula fino (D90 < 5 μm), tasa de suspensión alta (>90% tras 30 min), sin sedimentación tras ciclos térmicos y viscosidad consistente para una dosificación precisa. Nuestras formulaciones SC de fungicida se prueban según estos estándares con datos de QC por lote.',
        },
        {
          q: '¿Puedo obtener formulaciones de fungicida para combinaciones cultivo-enfermedad específicas?',
          a: 'Sí. Formulamos para pares cultivo-enfermedad: oidio en cereales, mildiu en viñedos, tizón en patata, roya en soja, etc. La selección del ingrediente activo y el sistema de coadyuvantes se optimizan por enfermedad y momento de aplicación.',
        },
      ],
    },
    {
      slug: 'pgr',
      navLabel: 'Reguladores de crecimiento',
      metaTitle: 'Formulaciones de reguladores de crecimiento personalizados — Fabricante OEM | Agrospear',
      metaDescription:
        'Formulaciones de reguladores de crecimiento (PGR) personalizadas — giberelinas, auxinas, reguladores de etileno, OEM desde piloto de 5 toneladas, directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Reguladores de crecimiento',
      h1: 'Formulaciones de reguladores de crecimiento personalizadas — gestión del crecimiento para tu marca',
      intro: [
        'Los reguladores de crecimiento vegetal (PGR) son productos de alto valor y bajo volumen que gestionan la arquitectura de la planta, el cuajado del fruto, la maduración y la tolerancia al estrés. Tienen precios premium y son una categoría estratégica para marcas orientadas a frutales, hortalizas y cultivos extensivos.',
        'Fabricamos formulaciones de PGR bajo tu marca con control preciso de concentración, sistemas de coadyuvantes validados en estabilidad y tipos de formulación adaptados a los requisitos de aplicación.',
      ],
      faqs: [
        {
          q: '¿Qué ingredientes activos de PGR formuláis?',
          a: 'Ácido giberélico (GA3), giberelina A4+A7, paclobutrazol, uniconazol, etefón, clormecuat, cloruro de mepiquat, forclorfenurón (CPPU), brasinólido, triacontanol y productos a base de auxinas. Combinaciones personalizadas disponibles.',
        },
        {
          q: '¿Cuál es el MOQ para formulaciones de PGR?',
          a: 'Por las dosis de aplicación más bajas, los lotes piloto de PGR parten de 1–5 toneladas según el ingrediente activo y la concentración. Volumen estándar desde 5+ toneladas por SKU. Lotes de muestra para registro desde 500 kg.',
        },
        {
          q: '¿Las formulaciones de PGR requieren un manejo especial?',
          a: 'Sí — muchos PGR son eficaces a concentraciones muy bajas (nivel de ppm), por lo que la precisión y homogeneidad de la formulación son críticas. Probamos la uniformidad del contenido activo por lote y proporcionamos certificado de análisis con cada envío.',
        },
      ],
    },
    {
      slug: 'seed-treatment',
      navLabel: 'Tratamiento de semillas',
      metaTitle: 'Formulaciones de tratamiento de semillas personalizadas — FS concentrado fluido OEM | Agrospear',
      metaDescription:
        'Formulaciones de tratamiento de semillas (FS) personalizadas para marcas y empresas de semillas — concentrados fluidos para recubrimiento, OEM desde piloto de 5 toneladas, directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Tratamiento de semillas',
      h1: 'Formulaciones de tratamiento de semillas personalizadas — concentrados fluidos para recubrimiento',
      intro: [
        'El tratamiento de semillas es el método de aplicación de mayor crecimiento en la protección de cultivos: dosificación precisa, menor exposición ambiental y protección temprana lo convierten en la tecnología preferida para cereales, maíz, soja y algodón. La formulación tipo FS (concentrado fluido para tratamiento de semillas) es el estándar global.',
        'Fabricamos formulaciones FS bajo tu marca con viscosidad optimizada para equipos de recubrimiento, uniformidad de película probada y documentación lista para el registro para clientes de semillas y marcas.',
      ],
      faqs: [
        {
          q: '¿Qué tipos de formulación de tratamiento de semillas producís?',
          a: 'El concentrado fluido para tratamiento de semillas (FS) es el tipo principal — optimizado para máquinas de slurizado y equipos de recubrimiento en película. También producimos polvos para tratamiento de semillas (DS) y polvos dispersables en agua (WS) para requisitos específicos de cultivo y equipo.',
        },
        {
          q: '¿Qué ingredientes activos se usan en tratamientos de semillas?',
          a: 'Tratamientos insecticidas: imidacloprid, tiametoxam, clotianidina, fipronil. Tratamientos fungicidas: metalaxil-M, fludioxonil, sedaxano, trifloxistrobina, tebuconazol. Los tratamientos combinados (insecticida + fungicida) son nuestra categoría más solicitada.',
        },
        {
          q: '¿Apoyáis a empresas de semillas con ensayos de recubrimiento?',
          a: 'Sí. Proporcionamos lotes de muestra para ensayos de recubrimiento en sus lotes de semillas y equipos, con datos de viscosidad, tiempo de secado y uniformidad de película. Disponible soporte técnico para calibración de equipos de recubrimiento.',
        },
      ],
    },
    {
      slug: 'adjuvant',
      navLabel: 'Coadyuvantes y tensioactivos',
      metaTitle: 'Formulaciones de coadyuvantes y tensioactivos personalizados — Fabricante OEM | Agrospear',
      metaDescription:
        'Formulaciones de coadyuvantes y tensioactivos personalizadas — compañeros de mezcla en tanque, adherentes, OEM desde piloto de 5 toneladas, directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Coadyuvantes',
      h1: 'Formulaciones de coadyuvantes y tensioactivos personalizados — mejora del rendimiento para tu marca',
      intro: [
        'Los coadyuvantes y tensioactivos mejoran el rendimiento de los productos fitosanitarios: mejor cobertura, resistencia al lavado por lluvia, reducción de deriva y compatibilidad optimizada de la mezcla en tanque. Son una categoría en crecimiento para marcas que quieren ofrecer programas completos de pulverización.',
        'Fabricamos formulaciones de coadyuvantes bajo tu marca — tensioactivos no iónicos, expansores organosiliconados, concentrados de aceite vegetal, agentes de control de deriva y compañeros de mezcla en tanque compatibles con fertilizantes.',
      ],
      faqs: [
        {
          q: '¿Qué tipos de coadyuvantes formuláis?',
          a: 'Tensioactivos no iónicos (NIS), expansores organosiliconados, concentrados de aceite vegetal (COC), aceites de semilla metilados (MSO), agentes de control de deriva, ayudas de depósito, agentes de resistencia a la lluvia y tampones de pH. Mezclas personalizadas para combinaciones cultivo-pulverización específicas.',
        },
        {
          q: '¿Los coadyuvantes pueden co-marcar con mi línea de fitosanitarios?',
          a: 'Sí. Muchas marcas empaquetan coadyuvantes como compañeros de mezcla en tanque junto a sus formulaciones de pesticidas. Podemos coordinar el diseño de etiqueta y embalaje en toda tu línea de productos para una presentación de marca unificada.',
        },
        {
          q: '¿Cuál es el MOQ para formulaciones de coadyuvantes?',
          a: 'Lotes piloto desde 5 toneladas; volumen estándar desde 20+ toneladas por SKU. Las formulaciones de coadyuvantes suelen tener requisitos de registro más simples, lo que permite una entrada más rápida al mercado.',
        },
      ],
    },
    {
      slug: 'biopesticide',
      navLabel: 'Formulaciones de biopesticidas',
      metaTitle: 'Formulaciones de biopesticidas personalizadas — Fabricante OEM | Agrospear',
      metaDescription:
        'Formulaciones de biopesticidas personalizadas para marcas — activos microbianos y bioquímicos, tipos estables SC/WP/OD, OEM desde piloto de 5 toneladas, directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Biopesticidas',
      h1: 'Formulaciones de biopesticidas personalizadas — soluciones biológicas para tu marca',
      intro: [
        'Los biopesticidas son el segmento de mayor crecimiento en la protección de cultivos: impulsados por los límites de residuos, los requisitos de los mercados de exportación y los programas de manejo integrado de plagas. Tanto los activos microbianos (bacterias, hongos) como bioquímicos (extractos vegetales, semioquímicos) requieren experiencia especializada en formulación.',
        'Fabricamos formulaciones de biopesticidas bajo tu marca con sistemas de coadyuvantes que preservan la viabilidad, producción compatible con cadena de frío y apoyo al registro para declaraciones de producto orgánico y riesgo reducido.',
      ],
      faqs: [
        {
          q: '¿Qué tipos de formulación de biopesticidas producís?',
          a: 'Concentrado en suspensión (SC) para activos microbianos, polvo mojable (WP) para productos a base de esporas, dispersión oleosa (OD) para extractos botánicos y líquido soluble (SL) para activos bioquímicos. El tipo de formulación se selecciona para preservar la viabilidad biológica.',
        },
        {
          q: '¿Cómo aseguráis la viabilidad microbiana en formulaciones de biopesticidas?',
          a: 'Producción en proceso en frío para cepas sensibles a la temperatura, pruebas de vida útil validadas en condiciones de almacenamiento y recuentos de UFC por lote en el momento de fabricación y durante todo el periodo de estabilidad. Opciones de envío con cadena de frío disponibles.',
        },
        {
          q: '¿Los biopesticidas requieren un apoyo diferente al registro?',
          a: 'Sí. Los biopesticidas suelen acogerse a vías de registro de riesgo reducido o evaluación acelerada en muchos mercados. Proporcionamos los paquetes de datos específicos: identificación de cepa, datos de patogenicidad/toxicidad, estudios de organismos no objetivo y ensayos de eficacia.',
        },
      ],
    },
    {
      slug: 'mixture',
      navLabel: 'Pre-mezclas y combinaciones',
      metaTitle: 'Formulaciones de pre-mezclas de pesticidas personalizadas — Fabricante OEM | Agrospear',
      metaDescription:
        'Formulaciones de pre-mezclas y combinaciones de pesticidas personalizadas — productos con 2-3 ingredientes activos, tipos SC/EC/WDG, OEM desde piloto de 5 toneladas, directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Pre-mezclas',
      h1: 'Formulaciones de pre-mezclas personalizadas — productos multimodo para tu marca',
      intro: [
        'Las pre-mezclas (productos combinados con dos o más ingredientes activos) son el segmento de mayor valor en la protección de cultivos: ofrecen la comodidad de multimodo de acción, gestión de resistencias y programas de pulverización simplificados. La mayoría de los portfolios de pesticidas de marca se construyen en torno a productos combinados.',
        'Fabricamos formulaciones de pre-mezcla bajo tu marca con compatibilidad validada, estabilidad física y química probada y documentación lista para el registro de productos combinados.',
      ],
      faqs: [
        {
          q: '¿Qué combinaciones de pre-mezcla formuláis?',
          a: 'Insecticida + fungicida, insecticida de doble modo, fungicida de doble modo y combinaciones de herbicida + safener. Ejemplos habituales: tiametoxam + lambda-cialotrina SC, azoxistrobina + propiconazol SC, nicosulfuron + atrazina WDG. Pares de IA personalizados especificados por proyecto.',
        },
        {
          q: '¿Las formulaciones de pre-mezcla son más complejas de desarrollar?',
          a: 'Sí. La compatibilidad entre activos, el diseño del sistema de coadyuvantes y la estabilidad térmica de cada componente deben validarse. Nuestro equipo de I+D realiza cribados de compatibilidad antes de la producción piloto y proporciona datos de estabilidad para la formulación combinada.',
        },
        {
          q: '¿Las pre-mezclas requieren un registro separado?',
          a: 'En la mayoría de los mercados, sí — una pre-mezcla es un producto independiente que requiere su propio expediente de registro. Proporcionamos el paquete de datos completo: análisis de cinco lotes, estabilidad acelerada y a largo plazo, datos de toxicidad y eficacia de campo para el producto combinado.',
        },
      ],
    },
  ],
}

export function getSeriesPage(locale: Locale, slug: string): SeriesPageData | undefined {
  return seriesPages[locale].find((s) => s.slug === slug)
}
