/**
 * Agrochemical buyer guides (/guides/{slug}).
 *
 * The agrospear source renders these as dedicated Astro pages with embedded copy
 * (no YAML), so we ship a small structured dataset here instead. The slugs are
 * the ones referenced by agrospear's learning-center.yaml cards.
 */

export interface GuideSection {
  title: string
  body: string
}

export interface Guide {
  slug: string
  title: string
  intro: string[]
  sections: GuideSection[]
  faqs: { q: string; a: string }[]
  related?: { label: string; href: string }[]
}

export const GUIDES: Guide[] = [
  {
    slug: 'choosing-agrochemical-formulation',
    title: 'Choosing Your Agrochemical Formulation Type',
    intro: [
      'Choosing the right formulation type for your agrochemical brand comes down to the active ingredient, target application, market preference and regulatory requirements. Here is what matters, in plain language.',
    ],
    sections: [
      {
        title: 'SC — Suspension Concentrate',
        body: 'SC formulations suspend fine solid particles of active ingredient in water. They offer excellent stability, low dust and easy tank-mixing. SC is the preferred choice for systemic actives like azoxystrobin, tebuconazole and imidacloprid where uniform particle size drives bioefficacy. Registration authorities in most markets accept SC data packages readily.',
      },
      {
        title: 'EC — Emulsifiable Concentrate',
        body: 'EC formulations dissolve the active in an organic solvent with emulsifiers so it mixes into a stable milky emulsion on dilution. EC delivers fast knockdown and good foliar penetration, making it the standard for contact insecticides like lambda-cyhalothrin and chlorpyrifos. The downside: higher solvent content can increase phytotoxicity risk and restrict use in solvent-sensitive markets.',
      },
      {
        title: 'WP — Wettable Powder',
        body: 'WP is the simplest and lowest-cost formulation: active blended with inert carriers and dispersants. It is easy to produce and register, but dusty to handle and requires good agitation in the spray tank. WP remains common for older off-patent actives like mancozeb and carbendazim in price-sensitive markets.',
      },
      {
        title: 'WDG — Water-Dispersible Granule',
        body: 'WDG compresses WP technology into dust-free granules that disperse quickly in water. WDG combines the low cost of WP with better user safety and convenience — no dust, easy pouring, long shelf life. It is the fastest-growing formulation class for fungicides and herbicides where regulatory pressure on dust exposure is increasing.',
      },
      {
        title: 'SL — Soluble Liquid',
        body: 'SL is a true solution of active in water or water-miscible solvent — no suspension, no sediment, no agitation required. SL is ideal for water-soluble actives like glyphosate (as salt), paraquat and 2,4-D amine. Simple to manufacture, easy to register and virtually foolproof in the field, but limited to actives with sufficient water solubility.',
      },
      {
        title: 'ME, CS and FS — Specialty Formulations',
        body: 'Micro-emulsion (ME) offers ultra-fine droplet size and low solvent load for high-value crop uses. Capsule suspension (CS) encapsulates the active for controlled release — extended residual activity with reduced application frequency. Flowable concentrate for seed treatment (FS) coats seeds uniformly with adhesive polymers. Each serves a niche where standard formulations fall short.',
      },
    ],
    faqs: [
      { q: 'Which formulation type is best for a new agrochemical brand?', a: 'SC and WDG are the safest starting points: broad active compatibility, strong market acceptance, lower regulatory friction and good margins. Choose EC only when the active requires it; choose WP only for price-sensitive markets.' },
      { q: 'Can I register the same active in two formulations?', a: 'Yes — many brands register both SC and WDG (or EC and SC) for the same active to serve different crops or application preferences. Each formulation requires its own registration data package.' },
      { q: 'How does formulation choice affect manufacturing cost?', a: 'WP and SL are the cheapest to produce. SC and WDG carry moderate processing cost. EC cost depends on solvent pricing. ME and CS carry the highest processing investment but command premium pricing.' },
    ],
    related: [
      { label: 'Browse our formulation capabilities', href: '/products' },
      { label: 'OEM manufacturing process', href: '/oem-manufacturing' },
      { label: 'Registration support', href: '/registration' },
    ],
  },
  {
    slug: 'agrochemical-buyer-basics',
    title: 'Agrochemical OEM Buyer Basics',
    intro: [
      'Everything you need for your first agrochemical OEM order: formulation selection, the sample process, quality verification, and how to plan your launch timeline.',
    ],
    sections: [
      {
        title: 'Minimum Order Quantities',
        body: 'Agrochemical OEM operates on tiered minimums: 1 ton for sample evaluation, 5 tons for a pilot batch, and 20+ tons for standard production runs. A factory that only quotes a single high MOQ is likely a trading desk, not a manufacturer. Real plants offer these tiers so you can validate quality before committing to volume.',
      },
      {
        title: 'Sample Process',
        body: 'Expect lab samples in 7–14 days after confirming the formulation spec and active concentration. You receive a COA (Certificate of Analysis) with every sample — active content, impurity profile, pH, viscosity and stability data. Approve the sample and it becomes the reference standard for mass production. Most manufacturers credit sample fees against your first production order.',
      },
      {
        title: 'Lead Times',
        body: 'Sample preparation: 7–14 days. Production: 25–35 days after confirmed PO and deposit. Registration dossiers and stability data add separate timelines. A factory quoting dramatically shorter lead times than the industry norm is quoting from a brochure, not a schedule.',
      },
      {
        title: 'Registration Documentation',
        body: 'Your OEM partner must supply: full specification sheet, five-batch analysis, acute toxicity data, physical-chemical property reports, stability data (typically two-year accelerated and ambient), and process flow diagrams. Without complete documentation, your registration filing stalls. Confirm the factory can deliver all required dossiers before you commit.',
      },
      {
        title: 'Quality Verification',
        body: 'Every production batch should come with a COA confirming active content within ±5% of label claim, impurity limits within specification, and physical properties matching your approved sample. Request third-party pre-shipment inspection for your first orders — reputable manufacturers welcome it. Agrospear runs a 7-gate QC process from raw material intake through finished-product release.',
      },
      {
        title: 'Planning Your Launch Timeline',
        body: 'A realistic first-launch timeline: 2–4 weeks for sample evaluation, 4–6 weeks for pilot production and COA approval, 8–24 months for registration depending on the target market, and 4–5 weeks for full production and shipment. Registration is the gating step — start it early and in parallel with sample evaluation whenever possible.',
      },
    ],
    faqs: [
      { q: 'What is the minimum order for an agrochemical OEM batch?', a: 'Standard tiers: 1 ton for samples, 5 tons for a pilot batch, and 20+ tons for standard production. Some formulations and packaging options may shift these slightly.' },
      { q: 'How long do samples take?', a: '7–14 days from confirmed formulation spec and active concentration, including COA with full analytical data.' },
      { q: 'What documents do I need for registration?', a: 'Full specification sheet, five-batch analysis, acute toxicity data, phys-chem properties, stability data (two-year accelerated and ambient), and process flow diagrams. Your OEM factory supplies all of these.' },
      { q: 'Can I use sample data for my registration filing?', a: 'Sample COA data supports initial filings, but most regulators require five-batch production data and long-term stability studies. Plan to generate these from your pilot or first production run.' },
    ],
    related: [
      { label: 'Our OEM / ODM manufacturing', href: '/oem-manufacturing' },
      { label: 'Product development process', href: '/product-development' },
      { label: 'Factory capacity and plant', href: '/factory' },
      { label: 'Start an OEM project', href: '/contact' },
    ],
  },
  {
    slug: 'oem-vs-private-label',
    title: 'OEM vs Private Label Agrochemicals',
    intro: [
      'The two manufacturing models each win in different scenarios. Here is the honest comparison for brands, distributors and importers.',
    ],
    sections: [
      {
        title: 'OEM — Custom Formulation Development',
        body: 'OEM means the factory develops a formulation to your specification: specific active, specific concentration, specific formulation type, tailored additives. You own the formulation and the registration data. OEM is the right choice when you need a differentiated product, a novel combination, or registration exclusivity in your market. It requires more upfront investment in development and stability studies, and longer time to market.',
      },
      {
        title: 'Private Label — Proven Formulations, Your Brand',
        body: 'Private label puts your brand on a formulation the factory already produces and has registered or pre-qualified. The formulation is proven, stable and often already registered in reference markets — which dramatically shortens your time to launch. You do not own the formulation, but you own the brand and the customer relationship. Private label is ideal for distributors and importers who need to build a portfolio quickly.',
      },
      {
        title: 'Speed to Market',
        body: 'Private label wins on speed: you can go from first sample to shipment in 8–12 weeks because the formulation is already validated and the stability data exists. OEM requires formulation development (4–8 weeks), followed by stability studies (8–26 weeks) before you can file for registration. If speed matters, start with private label and develop OEM formulations in parallel.',
      },
      {
        title: 'Registration and Exclusivity',
        body: 'OEM gives you full control over registration: you file under your brand with your data, and no competitor can reference your dossier. Private label formulations may be registered by multiple brands in the same market — your factory partner should disclose this. Negotiate market exclusivity for key products during contract negotiation.',
      },
      {
        title: 'Cost Comparison',
        body: 'Private label carries lower development cost because the R&D and stability investment is already done. You pay for sample evaluation, packaging customization and production. OEM adds formulation development fees, dedicated stability studies and higher pilot-batch costs. Per-unit production cost is similar once both reach standard volume (20+ tons).',
      },
      {
        title: 'Which Model for Which Buyer',
        body: 'Distributors entering a new market: start private label to build revenue fast, then develop OEM formulations for your top sellers. Importers with existing registrations: OEM gives you the strongest competitive moat. New brands with no registration history: private label gets you to market while you prepare OEM dossiers for the next season.',
      },
    ],
    faqs: [
      { q: 'Is OEM or private label better for a new agrochemical brand?', a: 'Most new brands start with private label for speed and lower risk, then develop OEM formulations for differentiation. The two models work in sequence, not just in opposition.' },
      { q: 'Can I get exclusivity on a private label formulation?', a: 'Yes — negotiate a market exclusivity clause. Most reputable factories grant territorial exclusivity for private label products when you meet minimum volume commitments.' },
      { q: 'How much more does OEM cost than private label?', a: 'OEM adds formulation development and stability study costs upfront (often several thousand USD per product). At production volumes above 20 tons, per-unit costs converge. The real difference is time: OEM takes 3–6 months longer to reach market.' },
      { q: 'Can I switch from private label to OEM later?', a: 'Yes — many brands launch private label, validate market demand, then commission an OEM version for registration exclusivity and margin improvement. Your factory should support both paths.' },
    ],
    related: [
      { label: 'OEM manufacturing', href: '/oem-manufacturing' },
      { label: 'Private label solutions', href: '/solutions/private-label' },
      { label: 'Registration support', href: '/registration' },
      { label: 'Start a project', href: '/contact' },
    ],
  },
  {
    slug: 'registration-timeline',
    title: 'Pesticide Registration Timeline & Documentation',
    intro: [
      'Registration is the gating step for market entry. Understanding timelines and documentation requirements before you start saves months and avoids costly surprises.',
    ],
    sections: [
      {
        title: 'Documentation Checklist',
        body: 'Every registration requires: full product specification, five-batch analysis report, acute toxicity data (oral, dermal, inhalation, eye and skin irritation, sensitization), physical-chemical property data (pH, density, viscosity, flash point, stability), efficacy data from field trials, environmental fate and ecotoxicology summaries, and process flow diagrams with impurity profiles. Your OEM factory must supply the manufacturing documentation; you compile the regulatory dossier.',
      },
      {
        title: 'China — ICAMA Registration',
        body: 'ICAMA (Institute for the Control of Agrochemicals, Ministry of Agriculture) registration typically takes 12–18 months for a new formulation and 6–12 months for a same-formulation new brand. Requirements include domestic field trials (usually two seasons, two locations). Factories with existing ICAMA registrations on the same formulation can support your filing with reference data, accelerating the process.',
      },
      {
        title: 'FAO/WHO Specification Compliance',
        body: 'FAO/WHO specifications are the international benchmark accepted by many developing-market regulators. If your product meets a published FAO/WHO specification, registration in Africa, Southeast Asia and Latin America is faster and less expensive. Ask your factory whether the formulation and its analytical methods align with existing FAO/WHO specs.',
      },
      {
        title: 'Latin America — Typical Timelines',
        body: 'Brazil (ANVISA/IBAMA): 24–36 months for a new active, 12–18 months for a new formulation of an existing active. Argentina (SENASA): 12–24 months. Colombia (ICA): 6–12 months for me-too products. Most LATAM markets require local field trials. Start trial applications early — they often take longer than the administrative review.',
      },
      {
        title: 'Africa and Middle East',
        body: 'Many African regulators accept FAO/WHO specifications and reference registrations from ICAMA, EU or US EPA. Timelines range from 3–6 months for a straightforward me-too filing to 12–18 months where local trials are required. West Africa (CILSS/SAAG) and East Africa (PCPB, TARI) each have their own protocols — confirm requirements per target country.',
      },
      {
        title: 'Stability Data — The Long Lead Item',
        body: 'Two-year ambient and six-month accelerated stability data is the standard requirement. You can file with accelerated data in many markets and supplement with ambient data as it matures, but some regulators require the full two-year package before approval. Start stability studies the moment your pilot batch is ready — this is the single biggest timeline driver.',
      },
    ],
    faqs: [
      { q: 'How long does pesticide registration take?', a: 'It ranges from 3–6 months for a me-too product in an accepting market, to 24–36 months for a new formulation in Brazil or China. The average is 12–18 months for a new brand on an existing formulation.' },
      { q: 'What is the most common reason for registration delays?', a: 'Incomplete documentation — especially missing five-batch analysis, gaps in stability data, or field trial protocols that do not meet local requirements. Start documentation planning before your first sample.' },
      { q: 'Can I use one registration in multiple countries?', a: 'Not directly — each country has its own registration. However, a dossier built to FAO/WHO standards can be adapted for many markets, and reference registrations (ICAMA, EU, EPA) accelerate filings in Africa, ASEAN and LATAM.' },
      { q: 'Does Agrospear help with registration?', a: 'Yes — we provide full manufacturing documentation, five-batch analysis, stability data, process flow diagrams and impurity profiles. We also connect you with registration consultants in your target markets.' },
    ],
    related: [
      { label: 'Registration support services', href: '/registration' },
      { label: 'Our certifications', href: '/factory' },
      { label: 'OEM manufacturing', href: '/oem-manufacturing' },
      { label: 'Talk to a registration specialist', href: '/contact' },
    ],
  },
  {
    slug: 'choosing-agrochemical-oem',
    title: 'How to Choose a Custom Agrochemical OEM Factory',
    intro: [
      'Sourcing agrochemical products under your own brand comes down to one decision: which factory you trust with your first batch. Here is how to evaluate a custom agrochemical manufacturer before you send a PO.',
    ],
    sections: [
      {
        title: 'Start With a Sample Order, Not a MOQ Discussion',
        body: 'A factory that only talks minimums is a sign of a trading company, not a plant. Real agrochemical manufacturers offer tiered minimums — 1 ton for sample evaluation, 5 tons for a pilot batch, and 20+ tons for standard production. Order a sample first: it tests communication, spec discipline and analytical capability without betting your whole launch.',
      },
      {
        title: 'Check What Is Actually In-House',
        body: 'Agrochemical production has core stages: raw material synthesis or sourcing, formulation processing (milling, mixing, homogenization), filling and packaging, and QC laboratory testing. A true factory does all of them under one roof and lets you audit the floor. Agrospear operates a 20,000 m² plant with 200+ workers and 50,000+ tons/year capacity. If the salesperson cannot show you a production line, you are likely buying through a middleman with no control over quality or lead time.',
      },
      {
        title: 'QC Capability — Not Just a COA Printer',
        body: 'Every factory can print a COA. The question is whether they have the HPLC, GC and particle-size analysis equipment to generate the data themselves — or whether they outsource testing and lose control of turnaround and accuracy. Ask for instrument lists, calibration records and a walk-through of the QC lab. Agrospear runs a 7-gate quality process from raw material intake through finished-product release, all tested in-house.',
      },
      {
        title: 'Stability Data and Shelf-Life Claims',
        body: 'Your registration depends on stability data. Ask the factory: do you run accelerated and ambient stability studies in-house? Can you provide two-year ambient data for existing formulations? Do you have a stability chamber program? A factory with existing stability data on proven formulations gives you a head start on registration — a factory without one leaves you waiting 12–24 months for your own data.',
      },
      {
        title: 'Registration Support Capability',
        body: 'Registration dossiers require manufacturing documentation that only the factory can provide: process flow diagrams, impurity profiles, five-batch analysis, material safety data. Confirm the factory has experience supplying dossiers for your target markets and can meet the specific format and language requirements of ICAMA, FAO/WHO, ANVISA or local regulators.',
      },
      {
        title: 'Certifications and Compliance',
        body: 'Minimum baseline: ISO 9001 (quality management) and ISO 14001 (environmental management). GMP compliance is essential for regulated markets. FAO/WHO specification alignment signals international credibility. REACH registration matters for EU-destined products. Agrospear holds ISO 9001, ISO 14001, GMP and FAO/WHO compliance certifications. Verify certifications independently — ask for certificate numbers and issuing bodies.',
      },
    ],
    faqs: [
      { q: 'What is the minimum order for custom agrochemical manufacturing?', a: 'Standard tiers: 1 ton for samples, 5 tons for a pilot batch, and 20+ tons for standard production. Custom formulation development may require a minimum pilot batch.' },
      { q: 'Can I see a sample before mass production?', a: 'Yes — lab samples are ready in 7–14 days with full COA. Most manufacturers credit sample fees toward your first production order once it is confirmed.' },
      { q: 'How do I verify an agrochemical factory is real?', a: 'Ask for a live video walkthrough of the production floor and QC lab, check for certifications with issuing bodies, request five-batch analysis reports from prior productions, and place a trial sample order. Trial orders are the ultimate proof.' },
      { q: 'What certifications should an agrochemical OEM factory have?', a: 'Minimum: ISO 9001 and ISO 14001. Strongly preferred: GMP compliance and FAO/WHO specification alignment. For EU markets: REACH registration. Ask for certificate numbers and verify independently.' },
    ],
    related: [
      { label: 'Our OEM / ODM manufacturing', href: '/oem-manufacturing' },
      { label: 'Factory capacity and plant', href: '/factory' },
      { label: 'How we control quality — 7 inspection gates', href: '/quality' },
      { label: 'Registration support', href: '/registration' },
      { label: 'Verify us: trust & factory assurance', href: '/oem-trust-assurance' },
      { label: 'Start a custom agrochemical project', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-agrochemical-guide',
    title: 'Private Label Agrochemicals: What You Actually Get From a Factory',
    intro: [
      'Private label is the fastest way to launch an agrochemical brand: your label on a proven formulation, without the cost and risk of developing a new product. Here is what working with a custom agrochemical manufacturer actually includes.',
    ],
    sections: [
      {
        title: 'Proven Formulations, Your Brand',
        body: 'You start from formulations the factory already produces and has validated — herbicides, insecticides, fungicides across SC, EC, WP, WDG, SL and specialty types. The factory customizes branding, label design and packaging, keeping costs low and lead times short. Minimums are tiered: 1 ton for sample evaluation, 5 tons for a pilot batch, and 20+ tons for standard private-label volume.',
      },
      {
        title: 'Branding Goes Beyond the Label',
        body: 'Private label covers your brand name and logo on the product label, custom bottle or container design, color-coded packaging by product line, branded master cartons and shipping marks, and customized COAs and technical data sheets. Send your brand guidelines and the factory produces a visual proof before production.',
      },
      {
        title: 'What the Factory Handles for You',
        body: 'A full-service agrochemical factory manages formulation selection, sample production with COA, packaging design and procurement, filling and labeling, batch-level QC testing, stability data for registration support, and export documentation (commercial invoice, packing list, certificate of origin, MSDS). You approve the sample — the factory runs everything else.',
      },
      {
        title: 'What You Own: Brand, Market, Customer',
        body: 'In a private-label arrangement the factory manufactures the product and you own the brand. Reputable manufacturers do not sell competing products under their own brand in your contracted market or supply your formulation to competitors. Ask about territorial exclusivity in your agreement — most factories grant it with minimum volume commitments.',
      },
      {
        title: 'Costs: Sample, Packaging Setup, Production',
        body: 'Expect three types of charges: sample fees (1 ton minimum, 7–14 days to produce with COA), packaging and labeling setup costs for custom containers and print runs, and unit production cost at your volume tier. Most factories credit sample fees toward your first production order. At standard volumes (20+ tons), per-unit pricing becomes very competitive.',
      },
      {
        title: 'From PO to Finished Shipment',
        body: 'A typical private-label run: 30% deposit starts production, batch production completes in 25–35 days after confirmed PO and deposit, QC release with COA per batch, and balance settled against approved shipping documents. Budget the full production cycle in your first order and plan registration in parallel.',
      },
    ],
    faqs: [
      { q: 'What is the minimum order for private label agrochemicals?', a: '1 ton for sample evaluation, 5 tons for a pilot batch, and 20+ tons for standard production. Formulation-specific minimums may vary slightly.' },
      { q: 'Can I send my own brand design and packaging?', a: 'Yes — send your brand guidelines, logo files and packaging specifications; the factory produces a visual proof before production so you approve colors, placement and finishing.' },
      { q: 'Is my private label product exclusive to my brand?', a: 'Yes with standard private-label terms. Negotiate a territorial exclusivity clause; factories like ours do not supply competing brands in your contracted market when you meet volume commitments.' },
      { q: 'How long does a private label agrochemical order take?', a: 'Samples ship in 7–14 days; batch production completes in 25–35 days after confirmed PO and deposit. Budget 10–14 weeks for the first full run including sample approval.' },
    ],
    related: [
      { label: 'Private label agrochemical solutions', href: '/solutions/private-label' },
      { label: 'Browse proven formulations', href: '/products' },
      { label: 'OEM / ODM manufacturing', href: '/oem-manufacturing' },
      { label: 'Start a private label project', href: '/contact' },
    ],
  },
  {
    slug: 'bulk-supply-guide',
    title: 'Bulk Supply for Distributors & Importers',
    intro: [
      'Distributors and importers need different answers than end users: batch consistency across shipments, registration documentation, export logistics and a supplier that delivers season after season.',
    ],
    sections: [
      {
        title: 'Batch Consistency Across Shipments',
        body: 'When you supply the same product season after season, batch-to-batch consistency is non-negotiable. Your OEM partner must control raw material sourcing, formulation parameters and QC tolerances tightly enough that every shipment matches the reference sample. Ask for COA trend data from prior production runs — a factory that tracks active content and impurity trends across batches is a factory that controls its process. Agrospear maintains batch records and analytical trend data for every product line.',
      },
      {
        title: 'Volume Ordering and Pricing Tiers',
        body: 'Bulk supply operates on volume tiers: 20–50 tons for standard production, 50–100 tons for preferred pricing, and 100+ tons for contract pricing with priority scheduling. Seasonal pre-booking (confirming orders 3–4 months ahead) secures capacity and often locks in better raw material pricing. Distributors who order against the season, not during it, get better lead times and pricing.',
      },
      {
        title: 'Registration Documentation at Scale',
        body: 'Every new market and every new product registration requires manufacturing documentation from the factory: specification sheets, five-batch analysis, stability data, process flow diagrams and impurity profiles. At bulk volumes, you are likely registering in multiple markets simultaneously. Confirm your factory can produce documentation in the formats required by each regulator (ICAMA, ANVISA, FAO/WHO, local authorities) and in the necessary languages.',
      },
      {
        title: 'Export Logistics and Compliance',
        body: 'Agrochemical exports require: dangerous goods classification and packaging per IMDG/IATA codes, proper shipping names and UN numbers, MSDS in the destination language, phytosanitary or import permits for the target country, and certificate of origin for tariff purposes. An experienced factory handles all of this routinely. Agrospear exports to 50+ countries and manages documentation in-house.',
      },
      {
        title: 'Seasonal Planning and Inventory',
        body: 'Agricultural demand is seasonal — your supply chain must be too. Plan orders 3–4 months before the application season in each target market. Production takes 25–35 days after confirmed PO; add shipping time (2–4 weeks by sea) and customs clearance. Factories with 50,000+ tons/year capacity like Agrospear can accommodate seasonal surges, but capacity fills fast during peak periods.',
      },
      {
        title: 'Long-Term Supply Agreements',
        body: 'For distributors with recurring demand, a long-term supply agreement secures pricing, prioritizes your production slots and simplifies reordering. Typical terms: annual volume commitment, quarterly ordering windows, fixed or formula-based pricing, and quality specifications locked to an approved reference sample. A good supply agreement protects both parties and makes seasonal planning predictable.',
      },
    ],
    faqs: [
      { q: 'What volume do I need to order for bulk pricing?', a: 'Standard production starts at 20 tons. Preferred pricing kicks in at 50–100 tons, and contract pricing with priority scheduling at 100+ tons. Seasonal pre-booking improves both price and availability.' },
      { q: 'How do I ensure consistency across multiple shipments?', a: 'Choose a factory with in-house QC (HPLC, GC, particle-size analysis), batch record tracking and COA trend data. Lock your product to an approved reference sample and require COA compliance on every shipment.' },
      { q: 'Can the factory handle documentation for multiple country registrations?', a: 'Yes — Agrospear supplies documentation in ICAMA, FAO/WHO, ANVISA and local formats. Confirm your target market requirements early so the factory can prepare dossiers in parallel with production.' },
      { q: 'How far in advance should I place bulk orders?', a: '3–4 months before your target market season. Production is 25–35 days, sea shipping adds 2–4 weeks, plus customs clearance. During peak season, factory capacity fills early.' },
    ],
    related: [
      { label: 'Bulk supply solutions', href: '/solutions/distributors' },
      { label: 'Factory capacity and plant', href: '/factory' },
      { label: 'Export markets and logistics', href: '/export' },
      { label: 'Talk to a supply specialist', href: '/contact' },
    ],
  },
]

/** Spanish variants of the seven agrochemical buyer guides (same slugs, translated copy). */
export const GUIDES_ES: Guide[] = [
  {
    slug: 'choosing-agrochemical-formulation',
    title: 'Cómo elegir el tipo de formulación fitosanitaria',
    intro: [
      'Elegir el tipo de formulación adecuado para tu marca de fitosanitarios depende del ingrediente activo, la aplicación objetivo, las preferencias del mercado y los requisitos reglamentarios. Aquí está lo que importa, en lenguaje claro.',
    ],
    sections: [
      {
        title: 'SC — Concentrado en suspensión',
        body: 'Las formulaciones SC suspenden partículas finas de ingrediente activo en agua. Ofrecen excelente estabilidad, poco polvo y fácil mezcla en el tanque. SC es la opción preferida para activos sistémicos como azoxistrobina, tebuconazol e imidacloprid, donde el tamaño uniforme de partícula determina la bioeficacia. Las autoridades de registro en la mayoría de mercados aceptan fácilmente los paquetes de datos SC.',
      },
      {
        title: 'EC — Concentrado emulsionable',
        body: 'Las formulaciones EC disuelven el activo en un disolvente orgánico con emulsionantes para que forme una emulsión lechosa estable al diluirse. EC ofrece un efecto rápido y buena penetración foliar, siendo el estándar para insecticidas de contacto como lambda-cihalotrina y clorpirifos. El inconveniente: el mayor contenido en disolvente puede aumentar el riesgo de fitotoxicidad y restringir su uso en mercados sensibles a disolventes.',
      },
      {
        title: 'WP — Polvo mojable',
        body: 'WP es la formulación más sencilla y económica: activo mezclado con portadores inertes y dispersantes. Es fácil de producir y registrar, pero polvoriento de manipular y requiere buena agitación en el tanque. WP sigue siendo habitual para activos antiguos fuera de patente como mancozeb y carbendazima en mercados sensibles al precio.',
      },
      {
        title: 'WDG — Gránulo dispersable en agua',
        body: 'WDG comprime la tecnología WP en gránulos sin polvo que se dispersan rápidamente en agua. WDG combina el bajo coste de WP con mayor seguridad del usuario y comodidad — sin polvo, fácil vertido, larga vida útil. Es la clase de formulación de mayor crecimiento para fungicidas y herbicidas donde aumenta la presión reglamentaria sobre la exposición al polvo.',
      },
      {
        title: 'SL — Líquido soluble',
        body: 'SL es una solución verdadera de activo en agua o disolvente miscible — sin suspensión, sin sedimento, sin agitación necesaria. SL es ideal para activos solubles en agua como glifosato (como sal), paraquat y 2,4-D amina. Sencillo de fabricar, fácil de registrar y prácticamente infalible en el campo, pero limitado a activos con suficiente solubilidad en agua.',
      },
      {
        title: 'ME, CS y FS — Formulaciones especiales',
        body: 'La microemulsión (ME) ofrece tamaño de gota ultrafino y baja carga de disolvente para cultivos de alto valor. La suspensión encapsulada (CS) encapsula el activo para liberación controlada — actividad residual prolongada con menor frecuencia de aplicación. El concentrado fluido para tratamiento de semillas (FS) recubre semillas uniformemente con polímeros adhesivos. Cada una sirve en un nicho donde las formulaciones estándar son insuficientes.',
      },
    ],
    faqs: [
      { q: '¿Qué tipo de formulación es mejor para una nueva marca de fitosanitarios?', a: 'SC y WDG son los puntos de partida más seguros: amplia compatibilidad de activos, fuerte aceptación en el mercado, menor fricción reglamentaria y buenos márgenes. Elige EC solo cuando el activo lo requiera; elige WP solo para mercados sensibles al precio.' },
      { q: '¿Puedo registrar el mismo activo en dos formulaciones?', a: 'Sí — muchas marcas registran SC y WDG (o EC y SC) para el mismo activo para servir distintos cultivos o preferencias de aplicación. Cada formulación requiere su propio paquete de datos de registro.' },
      { q: '¿Cómo afecta la elección de formulación al coste de fabricación?', a: 'WP y SL son los más baratos de producir. SC y WDG tienen un coste de procesado moderado. El coste de EC depende del precio del disolvente. ME y CS requieren la mayor inversión de procesado pero obtienen precios premium.' },
    ],
    related: [
      { label: 'Nuestras capacidades de formulación', href: '/products' },
      { label: 'Proceso de fabricación OEM', href: '/oem-manufacturing' },
      { label: 'Apoyo al registro', href: '/registration' },
    ],
  },
  {
    slug: 'agrochemical-buyer-basics',
    title: 'Conceptos básicos para compradores OEM de fitosanitarios',
    intro: [
      'Todo lo que necesitas para tu primer pedido OEM de fitosanitarios: selección de formulación, proceso de muestras, verificación de calidad y cómo planificar tu cronograma de lanzamiento.',
    ],
    sections: [
      {
        title: 'Cantidades mínimas de pedido',
        body: 'El OEM de fitosanitarios opera con mínimos por tramos: 1 tonelada para evaluación de muestras, 5 toneladas para un lote piloto y 20+ toneladas para producciones estándar. Una fábrica que solo cotiza un MOQ alto probablemente sea una comercializadora, no un fabricante. Las plantas reales ofrecen estos tramos para que puedas validar la calidad antes de comprometerte con volumen.',
      },
      {
        title: 'Proceso de muestras',
        body: 'Espera muestras de laboratorio en 7–14 días tras confirmar la especificación de formulación y la concentración de activo. Recibirás un COA (Certificado de Análisis) con cada muestra — contenido de activo, perfil de impurezas, pH, viscosidad y datos de estabilidad. Aprueba la muestra y se convierte en el estándar de referencia para la producción en serie. La mayoría de fabricantes descuentan las tarifas de muestra del primer pedido de producción.',
      },
      {
        title: 'Plazos de entrega',
        body: 'Preparación de muestras: 7–14 días. Producción: 25–35 días tras PO confirmado y depósito. Los expedientes de registro y los datos de estabilidad añaden cronogramas separados. Una fábrica que cotiza plazos mucho más cortos que la norma del sector está cotizando desde un folleto, no desde un calendario.',
      },
      {
        title: 'Documentación para el registro',
        body: 'Tu socio OEM debe suministrar: ficha de especificación completa, análisis de cinco lotes, datos de toxicidad aguda, informes de propiedades fisicoquímicas, datos de estabilidad (normalmente dos años acelerado y ambiente) y diagramas de flujo de proceso. Sin documentación completa, tu expediente de registro se paraliza. Confirma que la fábrica puede entregar todos los expedientes requeridos antes de comprometerte.',
      },
      {
        title: 'Verificación de calidad',
        body: 'Cada lote de producción debe venir con un COA que confirme el contenido de activo dentro de ±5% de la declaración de etiqueta, límites de impurezas dentro de la especificación y propiedades físicas que coincidan con tu muestra aprobada. Solicita inspección de terceros previa al embarque para tus primeros pedidos — los fabricantes de reputación la aceptan. Agrospear ejecuta un proceso de QC de 7 etapas desde la recepción de materias primas hasta la liberación del producto terminado.',
      },
      {
        title: 'Planificación del cronograma de lanzamiento',
        body: 'Un cronograma realista para el primer lanzamiento: 2–4 semanas para evaluación de muestras, 4–6 semanas para producción piloto y aprobación de COA, 8–24 meses para el registro según el mercado objetivo, y 4–5 semanas para producción completa y embarque. El registro es el paso determinante — empieza temprano y en paralelo con la evaluación de muestras siempre que sea posible.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el pedido mínimo para un lote OEM de fitosanitarios?', a: 'Tramos estándar: 1 tonelada para muestras, 5 toneladas para un lote piloto y 20+ toneladas para producción estándar. Algunas formulaciones y opciones de envasado pueden variar ligeramente.' },
      { q: '¿Cuánto tardan las muestras?', a: '7–14 días desde la especificación de formulación y concentración de activo confirmadas, incluyendo COA con datos analíticos completos.' },
      { q: '¿Qué documentos necesito para el registro?', a: 'Ficha de especificación completa, análisis de cinco lotes, datos de toxicidad aguda, propiedades fisicoquímicas, datos de estabilidad (dos años acelerado y ambiente) y diagramas de flujo de proceso. Tu fábrica OEM suministra todos estos.' },
      { q: '¿Puedo usar datos de muestras para mi expediente de registro?', a: 'Los datos de COA de muestras respaldan expedientes iniciales, pero la mayoría de reguladores requieren datos de producción de cinco lotes y estudios de estabilidad a largo plazo. Planifica generarlos desde tu lote piloto o primera producción.' },
    ],
    related: [
      { label: 'Nuestra fabricación OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Proceso de desarrollo de producto', href: '/product-development' },
      { label: 'Capacidad de fábrica y planta', href: '/factory' },
      { label: 'Inicia un proyecto OEM', href: '/contact' },
    ],
  },
  {
    slug: 'oem-vs-private-label',
    title: 'OEM vs marca privada de fitosanitarios',
    intro: [
      'Los dos modelos de fabricación ganan en escenarios distintos. Aquí tienes la comparación honesta para marcas, distribuidores e importadores.',
    ],
    sections: [
      {
        title: 'OEM — Desarrollo de formulación a medida',
        body: 'OEM significa que la fábrica desarrolla una formulación según tu especificación: activo específico, concentración específica, tipo de formulación específico, aditivos adaptados. Tú posees la formulación y los datos de registro. OEM es la opción correcta cuando necesitas un producto diferenciado, una combinación novedosa o exclusividad de registro en tu mercado. Requiere mayor inversión inicial en desarrollo y estudios de estabilidad, y más tiempo hasta llegar al mercado.',
      },
      {
        title: 'Marca privada — Formulaciones probadas, tu marca',
        body: 'La marca privada pone tu marca en una formulación que la fábrica ya produce y ha registrado o precalificado. La formulación está probada, es estable y a menudo ya registrada en mercados de referencia — lo que acorta drásticamente el tiempo de lanzamiento. No posees la formulación, pero sí la marca y la relación con el cliente. La marca privada es ideal para distribuidores e importadores que necesitan construir un portafolio rápidamente.',
      },
      {
        title: 'Velocidad de llegada al mercado',
        body: 'La marca privada gana en velocidad: puedes ir de la primera muestra al embarque en 8–12 semanas porque la formulación ya está validada y los datos de estabilidad existen. OEM requiere desarrollo de formulación (4–8 semanas), seguido de estudios de estabilidad (8–26 semanas) antes de poder presentar el registro. Si la velocidad importa, empieza con marca privada y desarrolla formulaciones OEM en paralelo.',
      },
      {
        title: 'Registro y exclusividad',
        body: 'OEM te da control total sobre el registro: presentas bajo tu marca con tus datos, y ningún competidor puede referenciar tu expediente. Las formulaciones de marca privada pueden estar registradas por múltiples marcas en el mismo mercado — tu socio de fábrica debería informarte de esto. Negocia exclusividad de mercado para productos clave durante la negociación del contrato.',
      },
      {
        title: 'Comparación de costes',
        body: 'La marca privada tiene menor coste de desarrollo porque la inversión en I+D y estabilidad ya está hecha. Pagas evaluación de muestras, personalización de envase y producción. OEM añade tarifas de desarrollo de formulación, estudios de estabilidad dedicados y mayores costes de lote piloto. El coste de producción por unidad es similar cuando ambos alcanzan volumen estándar (20+ toneladas).',
      },
      {
        title: 'Qué modelo para qué comprador',
        body: 'Distribuidores que entran en un nuevo mercado: empiecen con marca privada para generar ingresos rápido, luego desarrollen formulaciones OEM para los productos más vendidos. Importadores con registros existentes: OEM les da la barrera competitiva más fuerte. Nuevas marcas sin historial de registro: la marca privada les llega al mercado mientras preparan expedientes OEM para la siguiente temporada.',
      },
    ],
    faqs: [
      { q: '¿Es mejor OEM o marca privada para una nueva marca de fitosanitarios?', a: 'La mayoría de nuevas marcas empiezan con marca privada por velocidad y menor riesgo, luego desarrollan formulaciones OEM para diferenciación. Los dos modelos funcionan en secuencia, no solo en oposición.' },
      { q: '¿Puedo obtener exclusividad en una formulación de marca privada?', a: 'Sí — negocia una cláusula de exclusividad territorial. La mayoría de fábricas de reputación conceden exclusividad territorial para productos de marca privada cuando se cumplen los compromisos de volumen mínimo.' },
      { q: '¿Cuánto más cuesta OEM que marca privada?', a: 'OEM añade costes de desarrollo de formulación y estudios de estabilidad por adelantado (a menudo varios miles de USD por producto). A volúmenes de producción superiores a 20 toneladas, los costes por unidad convergen. La diferencia real es el tiempo: OEM tarda 3–6 meses más en llegar al mercado.' },
      { q: '¿Puedo pasar de marca privada a OEM después?', a: 'Sí — muchas marcas lanzan marca privada, validan la demanda del mercado y luego encargan una versión OEM para exclusividad de registro y mejora de márgenes. Tu fábrica debería respaldar ambos caminos.' },
    ],
    related: [
      { label: 'Fabricación OEM', href: '/oem-manufacturing' },
      { label: 'Soluciones de marca privada', href: '/solutions/private-label' },
      { label: 'Apoyo al registro', href: '/registration' },
      { label: 'Inicia un proyecto', href: '/contact' },
    ],
  },
  {
    slug: 'registration-timeline',
    title: 'Plazos y documentación para el registro de pesticidas',
    intro: [
      'El registro es el paso determinante para entrar al mercado. Comprender los plazos y requisitos de documentación antes de empezar ahorra meses y evita sorpresas costosas.',
    ],
    sections: [
      {
        title: 'Lista de documentación',
        body: 'Todo registro requiere: especificación completa del producto, informe de análisis de cinco lotes, datos de toxicidad aguda (oral, dérmica, inhalatoria, irritación ocular y cutánea, sensibilización), datos de propiedades fisicoquímicas (pH, densidad, viscosidad, punto de inflamación, estabilidad), datos de eficacia de ensayos de campo, resúmenes de destino ambiental y ecotoxicología, y diagramas de flujo de proceso con perfiles de impurezas. Tu fábrica OEM debe suministrar la documentación de fabricación; tú compilas el expediente reglamentario.',
      },
      {
        title: 'China — Registro ICAMA',
        body: 'El registro ante ICAMA (Instituto para el Control de Agroquímicos, Ministerio de Agricultura) suele tardar 12–18 meses para una nueva formulación y 6–12 meses para una nueva marca sobre la misma formulación. Los requisitos incluyen ensayos de campo nacionales (normalmente dos temporadas, dos ubicaciones). Las fábricas con registros ICAMA existentes sobre la misma formulación pueden respaldar tu expediente con datos de referencia, acelerando el proceso.',
      },
      {
        title: 'Conformidad con especificaciones FAO/OMS',
        body: 'Las especificaciones FAO/OMS son la referencia internacional aceptada por muchos reguladores de mercados en desarrollo. Si tu producto cumple una especificación FAO/OMS publicada, el registro en África, Sudeste Asiático y América Latina es más rápido y económico. Pregunta a tu fábrica si la formulación y sus métodos analíticos se alinean con especificaciones FAO/OMS existentes.',
      },
      {
        title: 'América Latina — Plazos típicos',
        body: 'Brasil (ANVISA/IBAMA): 24–36 meses para un activo nuevo, 12–18 meses para una nueva formulación de un activo existente. Argentina (SENASA): 12–24 meses. Colombia (ICA): 6–12 meses para productos me-too. La mayoría de mercados latinoamericanos requieren ensayos de campo locales. Inicia las solicitudes de ensayos temprano — suelen tardar más que la revisión administrativa.',
      },
      {
        title: 'África y Oriente Medio',
        body: 'Muchos reguladores africanos aceptan especificaciones FAO/OMS y registros de referencia de ICAMA, UE o US EPA. Los plazos van de 3–6 meses para un expediente me-too sencillo a 12–18 meses donde se requieren ensayos locales. África Occidental (CILSS/SAAG) y África Oriental (PCPB, TARI) tienen cada una sus propios protocolos — confirma los requisitos por país objetivo.',
      },
      {
        title: 'Datos de estabilidad — El plazo más largo',
        body: 'Los datos de estabilidad de dos años en ambiente y seis meses acelerados son el requisito estándar. Puedes presentar con datos acelerados en muchos mercados y complementar con datos en ambiente a medida que maduran, pero algunos reguladores exigen el paquete completo de dos años antes de la aprobación. Inicia los estudios de estabilidad en cuanto tu lote piloto esté listo — este es el factor individual que más influye en el cronograma.',
      },
    ],
    faqs: [
      { q: '¿Cuánto tarda el registro de un pesticida?', a: 'Varía de 3–6 meses para un producto me-too en un mercado receptor, a 24–36 meses para una nueva formulación en Brasil o China. El promedio es 12–18 meses para una nueva marca sobre una formulación existente.' },
      { q: '¿Cuál es la causa más común de retrasos en el registro?', a: 'Documentación incompleta — especialmente análisis de cinco lotes faltante, lagunas en datos de estabilidad o protocolos de ensayos de campo que no cumplen los requisitos locales. Inicia la planificación documental antes de tu primera muestra.' },
      { q: '¿Puedo usar un registro en varios países?', a: 'No directamente — cada país tiene su propio registro. Sin embargo, un expediente elaborado según estándares FAO/OMS puede adaptarse a muchos mercados, y los registros de referencia (ICAMA, UE, EPA) aceleran las presentaciones en África, ASEAN y LATAM.' },
      { q: '¿Agrospear ayuda con el registro?', a: 'Sí — proporcionamos documentación completa de fabricación, análisis de cinco lotes, datos de estabilidad, diagramas de flujo de proceso y perfiles de impurezas. También te conectamos con consultores de registro en tus mercados objetivo.' },
    ],
    related: [
      { label: 'Servicios de apoyo al registro', href: '/registration' },
      { label: 'Nuestras certificaciones', href: '/factory' },
      { label: 'Fabricación OEM', href: '/oem-manufacturing' },
      { label: 'Habla con un especialista en registro', href: '/contact' },
    ],
  },
  {
    slug: 'choosing-agrochemical-oem',
    title: 'Cómo elegir una fábrica OEM de fitosanitarios a medida',
    intro: [
      'Abastecer productos fitosanitarios bajo tu propia marca se resume a una decisión: en qué fábrica confías tu primer lote. Así se evalúa a un fabricante de fitosanitarios a medida antes de enviar tu PO.',
    ],
    sections: [
      {
        title: 'Empieza con un pedido de muestra, no con una conversación de MOQ',
        body: 'Una fábrica que solo habla de mínimos es señal de comercializadora, no de planta. Los fabricantes reales de fitosanitarios ofrecen mínimos por tramos — 1 tonelada para evaluación de muestras, 5 toneladas para un lote piloto y 20+ toneladas para producción estándar. Pide primero una muestra: prueba la comunicación, la disciplina de especificación y la capacidad analítica sin arriesgar todo tu lanzamiento.',
      },
      {
        title: 'Comprueba qué hay realmente en casa',
        body: 'La producción fitosanitaria tiene etapas centrales: síntesis o aprovisionamiento de materias primas, procesado de formulación (molienda, mezcla, homogeneización), envasado y llenado, y análisis de QC en laboratorio. Una fábrica real hace todo bajo el mismo techo y te deja auditar la planta. Agrospear opera una planta de 20.000 m² con 200+ trabajadores y 50.000+ toneladas/año de capacidad. Si el vendedor no puede mostrarte una línea de producción, probablemente estás comprando a través de un intermediario sin control sobre la calidad ni los plazos.',
      },
      {
        title: 'Capacidad de QC — No solo un impresor de COA',
        body: 'Cualquier fábrica puede imprimir un COA. La pregunta es si tienen equipos de HPLC, GC y análisis de tamaño de partícula para generar los datos ellos mismos — o si subcontratan el análisis y pierden control del plazo y la precisión. Pide listas de instrumentos, registros de calibración y un recorrido por el laboratorio de QC. Agrospear ejecuta un proceso de calidad de 7 etapas desde la recepción de materias primas hasta la liberación del producto terminado, todo analizado internamente.',
      },
      {
        title: 'Datos de estabilidad y declaraciones de vida útil',
        body: 'Tu registro depende de los datos de estabilidad. Pregunta a la fábrica: ¿ejecutan estudios de estabilidad acelerada y ambiental internamente? ¿Pueden proporcionar datos ambientales de dos años para formulaciones existentes? ¿Tienen un programa de cámara de estabilidad? Una fábrica con datos de estabilidad existentes sobre formulaciones probadas te da ventaja en el registro — una fábrica sin ellos te deja esperando 12–24 meses para tus propios datos.',
      },
      {
        title: 'Capacidad de apoyo al registro',
        body: 'Los expedientes de registro requieren documentación de fabricación que solo la fábrica puede suministrar: diagramas de flujo de proceso, perfiles de impurezas, análisis de cinco lotes, fichas de datos de seguridad de materiales. Confirma que la fábrica tiene experiencia suministrando expedientes para tus mercados objetivo y puede cumplir los requisitos específicos de formato e idioma de ICAMA, FAO/OMS, ANVISA o reguladores locales.',
      },
      {
        title: 'Certificaciones y cumplimiento',
        body: 'Línea base mínima: ISO 9001 (gestión de calidad) e ISO 14001 (gestión ambiental). El cumplimiento GMP es esencial para mercados regulados. La alineación con especificaciones FAO/OMS señala credibilidad internacional. El registro REACH importa para productos con destino a la UE. Agrospear posee certificaciones ISO 9001, ISO 14001, GMP y cumplimiento FAO/OMS. Verifica las certificaciones de forma independiente — pide números de certificado y organismos emisores.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el pedido mínimo para fabricación de fitosanitarios a medida?', a: 'Tramos estándar: 1 tonelada para muestras, 5 toneladas para un lote piloto y 20+ toneladas para producción estándar. El desarrollo de formulación a medida puede requerir un lote piloto mínimo.' },
      { q: '¿Puedo ver una muestra antes de la producción en serie?', a: 'Sí — las muestras de laboratorio están listas en 7–14 días con COA completo. La mayoría de fabricantes descuentan las tarifas de muestra del primer pedido de producción una vez confirmado.' },
      { q: '¿Cómo verifico que una fábrica de fitosanitarios es real?', a: 'Pide una visita por vídeo en directo a la planta y al laboratorio de QC, comprueba las certificaciones con los organismos emisores, solicita informes de análisis de cinco lotes de producciones anteriores y haz un pedido de muestra de prueba. Los pedidos de prueba son la prueba definitiva.' },
      { q: '¿Qué certificaciones debe tener una fábrica OEM de fitosanitarios?', a: 'Mínimo: ISO 9001 e ISO 14001. Muy preferible: cumplimiento GMP y alineación con especificaciones FAO/OMS. Para mercados europeos: registro REACH. Pide los números de certificado y verifica independientemente.' },
    ],
    related: [
      { label: 'Nuestra fabricación OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Capacidad de fábrica y planta', href: '/factory' },
      { label: 'Cómo controlamos la calidad — 7 puertas de inspección', href: '/quality' },
      { label: 'Apoyo al registro', href: '/registration' },
      { label: 'Verifícanos: confianza y garantía de fábrica', href: '/oem-trust-assurance' },
      { label: 'Inicia tu proyecto fitosanitario a medida', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-agrochemical-guide',
    title: 'Fitosanitarios de marca privada: qué incluye de verdad una fábrica',
    intro: [
      'La marca privada es la vía más rápida para lanzar una marca de fitosanitarios: tu etiqueta sobre una formulación probada, sin el coste ni el riesgo de desarrollar un producto nuevo. Esto es lo que incluye trabajar con un fabricante de fitosanitarios a medida.',
    ],
    sections: [
      {
        title: 'Formulaciones probadas, tu marca',
        body: 'Partes de formulaciones que la fábrica ya produce y ha validado — herbicidas, insecticidas, fungicidas en tipos SC, EC, WP, WDG, SL y especiales. La fábrica personaliza la marca, el diseño de etiqueta y el envase, manteniendo costes bajos y plazos cortos. Los mínimos son por tramos: 1 tonelada para evaluación de muestras, 5 toneladas para un lote piloto y 20+ toneladas para el volumen estándar de marca privada.',
      },
      {
        title: 'La marca va más allá de la etiqueta',
        body: 'La marca privada incluye tu nombre de marca y logotipo en la etiqueta del producto, diseño personalizado de botella o contenedor, envases codificados por color según la línea de producto, cajas master con marca y marcas de envío personalizadas, y COAs y fichas técnicas personalizados. Envía tus directrices de marca y la fábrica produce una prueba visual antes de la producción.',
      },
      {
        title: 'Qué gestiona la fábrica por ti',
        body: 'Una fábrica fitosanitaria de servicio completo gestiona la selección de formulación, la producción de muestras con COA, el diseño y adquisición de envases, el llenado y etiquetado, las pruebas de QC por lote, los datos de estabilidad para apoyo al registro y la documentación de exportación (factura comercial, packing list, certificado de origen, MSDS). Tú apruebas la muestra — la fábrica se encarga del resto.',
      },
      {
        title: 'Lo que tú posees: marca, mercado y cliente',
        body: 'En un acuerdo de marca privada, la fábrica fabrica el producto y tú posees la marca. Los fabricantes de reputación no venden productos competidores bajo su propia marca en tu mercado contratado ni suministran tu formulación a competidores. Pregunta por la exclusividad territorial en tu acuerdo — la mayoría de fábricas la conceden con compromisos de volumen mínimo.',
      },
      {
        title: 'Costes: muestra, preparación de envase, producción',
        body: 'Espera tres tipos de cargos: tarifas de muestra (mínimo 1 tonelada, 7–14 días para producir con COA), costes de preparación de envase y etiquetado para contenedores y tiradas de impresión personalizados, y coste de producción unitario en tu tramo de volumen. La mayoría de fábricas descuentan las tarifas de muestra del primer pedido de producción. A volúmenes estándar (20+ toneladas), el precio por unidad se vuelve muy competitivo.',
      },
      {
        title: 'Del PO al embarque terminado',
        body: 'Una tirada típica de marca privada: el 30% de depósito inicia la producción, la producción en serie se completa en 25–35 días tras PO confirmado y depósito, liberación de QC con COA por lote, y el saldo se liquida contra documentos de embarque aprobados. Calcula el ciclo completo de producción en tu primer pedido y planifica el registro en paralelo.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el pedido mínimo para fitosanitarios de marca privada?', a: '1 tonelada para evaluación de muestras, 5 toneladas para un lote piloto y 20+ toneladas para producción estándar. Los mínimos específicos por formulación pueden variar ligeramente.' },
      { q: '¿Puedo enviar mi propio diseño de marca y envase?', a: 'Sí — envía tus directrices de marca, archivos de logotipo y especificaciones de envase; la fábrica produce una prueba visual antes de la producción para que apruebes colores, colocación y acabado.' },
      { q: '¿Mi producto de marca privada es exclusivo de mi marca?', a: 'Sí, con condiciones estándar de marca privada. Negocia una cláusula de exclusividad territorial; fábricas como la nuestra no suministran marcas competidoras en tu mercado contratado cuando se cumplen los compromisos de volumen.' },
      { q: '¿Cuánto tarda un pedido de fitosanitarios de marca privada?', a: 'Las muestras se envían en 7–14 días; la producción en serie se completa en 25–35 días tras PO confirmado y depósito. Calcula de 10 a 14 semanas para la primera tirada completa incluyendo aprobación de muestras.' },
    ],
    related: [
      { label: 'Soluciones de marca privada de fitosanitarios', href: '/solutions/private-label' },
      { label: 'Formulaciones probadas', href: '/products' },
      { label: 'Fabricación OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Inicia un proyecto de marca privada', href: '/contact' },
    ],
  },
  {
    slug: 'bulk-supply-guide',
    title: 'Suministro a granel para distribuidores e importadores',
    intro: [
      'Los distribuidores e importadores necesitan respuestas distintas a las de los usuarios finales: consistencia de lote entre embarques, documentación de registro, logística de exportación y un proveedor que entregue temporada tras temporada.',
    ],
    sections: [
      {
        title: 'Consistencia de lote entre embarques',
        body: 'Cuando suministras el mismo producto temporada tras temporada, la consistencia lote a lote es innegociable. Tu socio OEM debe controlar el aprovisionamiento de materias primas, los parámetros de formulación y las tolerancias de QC con la suficiente rigidez para que cada embarque coincida con la muestra de referencia. Pide datos de tendencia de COA de producciones anteriores — una fábrica que rastrea el contenido de activo y las tendencias de impurezas entre lotes es una fábrica que controla su proceso. Agrospear mantiene registros de lote y datos analíticos de tendencia para cada línea de producto.',
      },
      {
        title: 'Pedidos por volumen y tramos de precio',
        body: 'El suministro a granel opera por tramos de volumen: 20–50 toneladas para producción estándar, 50–100 toneladas para precios preferentes y 100+ toneladas para precios de contrato con programación prioritaria. La reserva anticipada estacional (confirmando pedidos 3–4 meses antes) asegura capacidad y a menudo fija mejores precios de materias primas. Los distribuidores que piden contra la temporada, no durante ella, obtienen mejores plazos y precios.',
      },
      {
        title: 'Documentación de registro a escala',
        body: 'Cada nuevo mercado y cada nuevo registro de producto requiere documentación de fabricación de la fábrica: fichas de especificación, análisis de cinco lotes, datos de estabilidad, diagramas de flujo de proceso y perfiles de impurezas. A volúmenes a granel, es probable que registres en múltiples mercados simultáneamente. Confirma que tu fábrica puede producir documentación en los formatos requeridos por cada regulador (ICAMA, ANVISA, FAO/OMS, autoridades locales) y en los idiomas necesarios.',
      },
      {
        title: 'Logística de exportación y cumplimiento',
        body: 'Las exportaciones fitosanitarias requieren: clasificación de mercancías peligrosas y embalaje según códigos IMDG/IATA, nombres de envío adecuados y números UN, MSDS en el idioma de destino, permisos fitosanitarios o de importación para el país destino y certificado de origen para efectos arancelarios. Una fábrica con experiencia gestiona todo esto de rutina. Agrospear exporta a más de 60 países y gestiona la documentación internamente.',
      },
      {
        title: 'Planificación estacional e inventario',
        body: 'La demanda agrícola es estacional — tu cadena de suministro también debe serlo. Planifica pedidos 3–4 meses antes de la temporada de aplicación en cada mercado objetivo. La producción tarda 25–35 días tras PO confirmado; añade tiempo de transporte marítimo (2–4 semanas) y despacho de aduanas. Las fábricas con capacidad de 50.000+ toneladas/año como Agrospear pueden absorber picos estacionales, pero la capacidad se llena rápido en períodos pico.',
      },
      {
        title: 'Acuerdos de suministro a largo plazo',
        body: 'Para distribuidores con demanda recurrente, un acuerdo de suministro a largo plazo asegura precios, prioriza tus turnos de producción y simplifica la reposición. Términos típicos: compromiso de volumen anual, ventanas de pedido trimestrales, precios fijos o basados en fórmula, y especificaciones de calidad fijadas a una muestra de referencia aprobada. Un buen acuerdo de suministro protege a ambas partes y hace la planificación estacional predecible.',
      },
    ],
    faqs: [
      { q: '¿Qué volumen necesito pedir para precios a granel?', a: 'La producción estándar empieza en 20 toneladas. Los precios preferentes se activan a 50–100 toneladas, y los precios de contrato con programación prioritaria a 100+ toneladas. La reserva anticipada estacional mejora tanto el precio como la disponibilidad.' },
      { q: '¿Cómo aseguro la consistencia entre múltiples embarques?', a: 'Elige una fábrica con QC interno (HPLC, GC, análisis de tamaño de partícula), seguimiento de registros de lote y datos de tendencia de COA. Fija tu producto a una muestra de referencia aprobada y exige cumplimiento de COA en cada embarque.' },
      { q: '¿Puede la fábrica gestionar la documentación para registros en múltiples países?', a: 'Sí — Agrospear suministra documentación en formatos ICAMA, FAO/OMS, ANVISA y locales. Confirma los requisitos de tus mercados objetivo pronto para que la fábrica pueda preparar expedientes en paralelo con la producción.' },
      { q: '¿Con cuánta antelación debo hacer pedidos a granel?', a: '3–4 meses antes de la temporada de tu mercado objetivo. La producción es 25–35 días, el transporte marítimo añade 2–4 semanas, más el despacho de aduanas. En temporada pico, la capacidad de fábrica se llena pronto.' },
    ],
    related: [
      { label: 'Soluciones de suministro a granel', href: '/solutions/distributors' },
      { label: 'Capacidad de fábrica y planta', href: '/factory' },
      { label: 'Mercados de exportación y logística', href: '/export' },
      { label: 'Habla con un especialista de suministro', href: '/contact' },
    ],
  },
]

const GUIDES_BY_LOCALE: Record<string, Guide[]> = { en: GUIDES, es: GUIDES_ES }

export function localizedGuides(locale: string): Guide[] {
  return GUIDES_BY_LOCALE[locale] ?? GUIDES
}

export function getGuide(path: string, locale?: string): Guide | undefined {
  const slug = path.split('/').filter(Boolean).pop()
  return localizedGuides(locale ?? 'en').find((g) => g.slug === slug) ?? GUIDES.find((g) => g.slug === slug)
}

export function getGuideBySlug(slug: string, locale?: string): Guide | undefined {
  return localizedGuides(locale ?? 'en').find((g) => g.slug === slug) ?? GUIDES.find((g) => g.slug === slug)
}

/** Localized card copy for the /knowledge hub (guide pages stay English). */
export interface GuideCard {
  slug: string
  title: string
  intro: string
}

export const GUIDE_CARDS: Record<string, GuideCard[]> = {
  en: GUIDES.map((g) => ({ slug: g.slug, title: g.title, intro: g.intro[0] })),
  es: [
    {
      slug: 'choosing-agrochemical-formulation',
      title: 'Cómo elegir el tipo de formulación fitosanitaria',
      intro:
        'Elegir el tipo de formulación adecuado para tu marca de fitosanitarios depende del ingrediente activo, la aplicación objetivo, las preferencias del mercado y los requisitos reglamentarios. Aquí está lo que importa, en lenguaje claro.',
    },
    {
      slug: 'agrochemical-buyer-basics',
      title: 'Conceptos básicos para compradores OEM de fitosanitarios',
      intro:
        'Todo lo que necesitas para tu primer pedido OEM de fitosanitarios: selección de formulación, proceso de muestras, verificación de calidad y cómo planificar tu cronograma de lanzamiento.',
    },
    {
      slug: 'oem-vs-private-label',
      title: 'OEM vs marca privada de fitosanitarios',
      intro:
        'Los dos modelos de fabricación ganan en escenarios distintos. Aquí tienes la comparación honesta para marcas, distribuidores e importadores.',
    },
    {
      slug: 'registration-timeline',
      title: 'Plazos y documentación para el registro de pesticidas',
      intro:
        'El registro es el paso determinante para entrar al mercado. Comprender los plazos y requisitos de documentación antes de empezar ahorra meses y evita sorpresas costosas.',
    },
    {
      slug: 'choosing-agrochemical-oem',
      title: 'Cómo elegir una fábrica OEM de fitosanitarios a medida',
      intro:
        'Cómo evaluar a un fabricante de fitosanitarios a medida antes de enviar tu PO: muestras, planta propia, QC, estabilidad, registro y certificaciones.',
    },
    {
      slug: 'private-label-agrochemical-guide',
      title: 'Fitosanitarios de marca privada',
      intro:
        'Qué incluye de verdad un acuerdo de marca privada: formulaciones probadas, branding completo, costes, exclusividad y plazos.',
    },
    {
      slug: 'bulk-supply-guide',
      title: 'Suministro a granel para distribuidores',
      intro:
        'Planificación de suministro a granel: consistencia de lote, tramos de volumen, documentación de registro, logística de exportación y acuerdos a largo plazo.',
    },
  ],
}

export function guideCard(locale: 'en' | 'es', slug: string): GuideCard | undefined {
  return GUIDE_CARDS[locale].find((c) => c.slug === slug)
}
