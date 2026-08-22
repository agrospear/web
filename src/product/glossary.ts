export interface GlossaryEntry {
  term: string
  short: string
  locale: string
}

export const GLOSSARY: GlossaryEntry[] = [
  { term: 'OEM', short: 'Original Equipment Manufacturer — we manufacture to your approved specification; you own the formulation, technical data and intellectual property.', locale: 'en' },
  { term: 'ODM', short: 'Original Design Manufacturer — our engineering team develops the formulation from your brief (target crop, efficacy requirement or market adaptation); you approve before production.', locale: 'en' },
  { term: 'Private label', short: 'Your brand, labeling and packaging on an existing validated formulation — no new development, no specification changes. Fastest route from concept to delivery.', locale: 'en' },
  { term: 'Co-branding', short: 'Small-batch production (1–4 t) applying your branding to an existing formulation with minimal customization.', locale: 'en' },
  { term: 'SC (Suspension Concentrate)', short: 'A liquid formulation where solid particles of active ingredient are suspended in water with dispersants and thickeners, allowing easy dilution and application.', locale: 'en' },
  { term: 'EC (Emulsifiable Concentrate)', short: 'A liquid formulation containing active ingredient dissolved in organic solvent with emulsifiers, forming a stable emulsion when mixed with water.', locale: 'en' },
  { term: 'WP (Wettable Powder)', short: 'A dry powder formulation that disperses in water for spray application, containing active ingredient mixed with carriers and surfactants.', locale: 'en' },
  { term: 'Batch specification test', short: 'Batch specification hold test — maintaining a batch under controlled storage conditions for 24 hours and verifying assay and impurity levels. An out-of-spec result means auto-reject.', locale: 'en' },
  { term: 'Golden sample', short: 'The approved reference sample that sets the standard for mass production. All subsequent batches are compared to this benchmark.', locale: 'en' },
  { term: 'BSCI', short: 'Business Social Compliance Initiative — a social responsibility audit standard by amfori, covering labor rights, safety and ethics at the manufacturing facility.', locale: 'en' },
  { term: 'MOQ', short: 'Minimum Order Quantity — confirmed after specification review. Tiered: 1–4 t sample, 5 t pilot, 20+ t standard volume per approved formulation.', locale: 'en' },
  { term: 'WDG (Water Dispersible Granule)', short: 'A granular formulation that disintegrates and disperses in water, combining the handling convenience of granules with the uniform spray of powders.', locale: 'en' },
  { term: 'EVA seal/label', short: 'Ethylene-vinyl acetate container seal and label backing. Custom-cut to your design with logo, color blocks and regulatory text layout.', locale: 'en' },
  { term: 'SL (Soluble Liquid)', short: 'A liquid formulation where the active ingredient is fully dissolved in water or solvent, providing homogeneous dilution and consistent application.', locale: 'en' },

  { term: 'OEM', short: 'Fabricante de Equipo Original — fabricamos según tu especificación aprobada; tú eres propietario de la formulación, los datos técnicos y la propiedad intelectual.', locale: 'es' },
  { term: 'ODM', short: 'Fabricante de Diseño Original — nuestro equipo de ingeniería desarrolla la formulación a partir de tu brief (cultivo objetivo, requisito de eficacia o adaptación de mercado); tú apruebas antes de la producción.', locale: 'es' },
  { term: 'Marca privada', short: 'Tu marca, etiquetado y embalaje sobre una formulación validada existente — sin nuevo desarrollo, sin cambios de especificación. La vía más rápida del concepto a la entrega.', locale: 'es' },
  { term: 'SC (Concentrado en Suspensión)', short: 'Concentrado en suspensión (SC) — formulación líquida donde partículas sólidas de ingrediente activo están suspendidas en agua con dispersantes y espesantes, permitiendo fácil dilución y aplicación.', locale: 'es' },
  { term: 'EC (Concentrado Emulsionable)', short: 'Concentrado Emulsionable (EC) — formulación líquida que contiene ingrediente activo disuelto en solvente orgánico con emulsionantes, formando una emulsión estable al mezclarse con agua.', locale: 'es' },
  { term: 'WP (Polvo Mojable)', short: 'Polvo Mojable (WP) — formulación en polvo seco que se dispersa en agua para aplicación por aspersión, conteniendo ingrediente activo mezclado con carriers y surfactantes.', locale: 'es' },
  { term: 'Prueba de especificación por lote', short: 'Prueba de retención de especificación por lote — mantener un lote bajo condiciones controladas de almacenamiento por 24 horas y verificar ensayo y niveles de impurezas. Un resultado fuera de especificación significa rechazo automático.', locale: 'es' },
  { term: 'MOQ', short: 'Cantidad Mínima de Pedido — la menor cantidad aceptada por tirada de producción. Escalonado: 1–4 t muestra, 5 t piloto, 20+ t volumen estándar.', locale: 'es' },
]
