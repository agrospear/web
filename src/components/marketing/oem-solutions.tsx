import { useTranslation } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { pick, oemSolutions } from '@/product/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

export function OemSolutions() {
  const { locale } = useTranslation()
  const fl = useLocalizePath()
  const c = pick(oemSolutions, locale)

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 70}>
              <a
                href={fl(card.href)}
                className="group marine-card flex h-full flex-col p-7"
              >
                <h3 className="font-display text-[17px] font-bold text-primary">{card.title}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-fg-2">{card.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                  {card.cta} <span aria-hidden="true">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
