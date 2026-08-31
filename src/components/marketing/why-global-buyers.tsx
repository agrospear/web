import { ShieldCheck, PackageSearch, FileCheck2, Lock, FlaskConical, CalendarClock } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { pick, whyGlobalBuyers } from '@/product/content'
import { JsonLd, whyGlobalBuyersLd } from '@/features/seo/jsonld'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

const ICONS = [PackageSearch, FlaskConical, FileCheck2, Lock, ShieldCheck, CalendarClock]

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
