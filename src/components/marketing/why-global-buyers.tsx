import { ShieldCheck, PackageSearch, FileCheck2, Lock, FlaskConical, CalendarClock } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { pick, type Localized } from '@/product/content'
import { JsonLd, whyGlobalBuyersLd } from '@/features/seo/jsonld'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

const ICONS = [PackageSearch, FlaskConical, FileCheck2, Lock, ShieldCheck, CalendarClock]

interface BuyerReason {
  title: string
  body: string
  evidence: string
}

interface WhyGlobalBuyersContent {
  kicker: string
  title: string
  sub: string
  reasons: BuyerReason[]
}

/**
 * Home: "Why Global Buyers Choose Agrospear" — real B2B purchasing factors with
 * evidence. Content lives in this lazy-loaded module (not the statically
 * imported content.ts) so the bilingual copy ships in its own chunk instead of
 * inflating the main `index-*.js` first-load bundle.
 */
const whyGlobalBuyers: Localized<WhyGlobalBuyersContent> = {
  en: {
    kicker: 'Why Global Buyers Choose Agrospear',
    title: 'Reasons Agrochemical Brands, Distributors & Importers Source From Us',
    sub: 'Real purchasing factors international buyers weigh when selecting an OEM/ODM manufacturing partner — with the evidence behind each one.',
    reasons: [
      {
        title: 'One supplier for the full product lifecycle',
        body: 'From raw active ingredient sourcing and custom formulation development to filling, packaging, labeling, QC and export documentation — all in-house. Fewer handoffs mean faster timelines and a single point of accountability for overseas buyers.',
        evidence: `In-house plant, 50,000+ tons annual capacity`,
      },
      {
        title: 'Low-risk market entry with small batch starts',
        body: 'Ship a physical formulation sample to your lab within 7–14 days, run a pilot batch from 5 tons, and scale to container loads once the product is validated. You confirm every specification before committing to volume.',
        evidence: `Samples in 7–14 days · pilot runs from 5 tons`,
      },
      {
        title: 'Registration & compliance support per market',
        body: 'Country-specific documentation, MSDS, certificate of analysis, phytosanitary certificates, GHS labeling and ICAMA compliance — prepared in-house to match the regulatory requirements of your destination market.',
        evidence: `ISO 9001 · ISO 14001 · GMP · FAO/WHO · REACH`,
      },
      {
        title: 'Protected brand & formulation data',
        body: 'Your formulation data, specifications and label files remain your property. An NDA is available before any file exchange, and your product data is never reused, resold or shown to another client.',
        evidence: `NDA available · reply within 1 business day`,
      },
      {
        title: 'Consistent quality across every reorder',
        body: 'HPLC purity and GC residue testing on every batch, accelerated stability testing per FAO/WHO, 100-point final inspection and ERP-linked batch traceability — so repeat orders match your approved reference sample.',
        evidence: `100% purity & residue testing per batch`,
      },
      {
        title: 'Reliable seasonal production scheduling',
        body: 'As a dedicated agrochemical manufacturer, we prioritize production for seasonal demand windows, so your containers are ready when the planting season starts — not after it.',
        evidence: `Two daily shifts · seasonal priority scheduling`,
      },
    ],
  },
  es: {
    kicker: 'Por qué los compradores globales eligen Agrospear',
    title: 'Razones por las que marcas, distribuidores e importadores se abastecen de nosotros',
    sub: 'Factores reales de compra que los compradores internacionales sopesan al elegir un socio OEM/ODM — con la evidencia detrás de cada uno.',
    reasons: [
      {
        title: 'Un solo proveedor para todo el ciclo de vida del producto',
        body: 'Desde el abastecimiento de ingrediente activo y el desarrollo de formulación personalizada hasta el llenado, embalaje, etiquetado, QC y documentación de exportación — todo en casa. Menos intermediarios significan plazos más cortos y un único punto de responsabilidad.',
        evidence: `Planta propia, 50.000+ toneladas de capacidad anual`,
      },
      {
        title: 'Entrada al mercado de bajo riesgo con lotes pequeños',
        body: 'Envía una muestra física de formulación a tu laboratorio en 7-14 días, ejecuta un lote piloto desde 5 toneladas y escala a contenedores completos una vez validado el producto. Confirmas cada especificación antes de comprometerte con el volumen.',
        evidence: `Muestras en 7-14 días · pilotos desde 5 toneladas`,
      },
      {
        title: 'Soporte de registro y cumplimiento por mercado',
        body: 'Documentación específica por país, FDS, certificado de análisis, certificados fitosanitarios, etiquetado GHS y cumplimiento ICAMA — preparados en casa según los requisitos de tu mercado de destino.',
        evidence: `ISO 9001 · ISO 14001 · GMP · FAO/WHO · REACH`,
      },
      {
        title: 'Protección de marca y datos de formulación',
        body: 'Tus datos de formulación, especificaciones y archivos de etiqueta siguen siendo de tu propiedad. Hay NDA disponible antes de cualquier intercambio de archivos, y tus datos nunca se reutilizan, revenden ni muestran a otro cliente.',
        evidence: `NDA disponible · respuesta en un día laborable`,
      },
      {
        title: 'Calidad homogénea en cada reposición',
        body: 'Análisis de pureza por HPLC y residuos por GC en cada lote, ensayos de estabilidad acelerada según FAO/WHO, inspección final de 100 puntos y trazabilidad por lote vinculada a ERP — para que los pedidos repetidos coincidan con tu muestra de referencia aprobada.',
        evidence: `100% de pruebas de pureza y residuos por lote`,
      },
      {
        title: 'Programación de producción estacional fiable',
        body: 'Como fabricante dedicado de agroquímicos, priorizamos la producción para ventanas de demanda estacional, de modo que tus contenedores estén listos cuando comienza la temporada de siembra — no después.',
        evidence: `Dos turnos diarios · programación prioritaria estacional`,
      },
    ],
  },
}

/** Home: "Why Global Buyers Choose Agrospear" — real B2B purchasing factors with evidence. */
export function WhyGlobalBuyers() {
  const { locale } = useTranslation()
  const c = pick(whyGlobalBuyers, locale)

  return (
    <>
      <JsonLd data={whyGlobalBuyersLd(c.title, c.reasons, locale)} />
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-10 md:py-24">
        <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.reasons.map((r, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={r.title} delay={(i % 3) * 80}>
                <div className="agro-card flex h-full flex-col p-7">
                  <span className="icon-tile bg-aqua/10! text-primary!">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-bold">{r.title}</h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-fg-2">{r.body}</p>
                  <p className="mt-5 border-t border-border pt-4 text-[13px] font-semibold text-primary">{r.evidence}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}
