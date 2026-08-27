import { useTranslation } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { pick, manufacturingFlow } from '@/product/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

export function ManufacturingFlow() {
  const { locale } = useTranslation()
  const fl = useLocalizePath()
  const c = pick(manufacturingFlow, locale)

  return (
    <section className="bg-bg-alt py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {c.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 60}>
              <a
                href={fl(step.href)}
                className="group marine-card flex h-full flex-col p-6"
              >
                <span className="font-display text-[28px] font-extrabold text-primary/30">{step.step}</span>
                <h3 className="mt-2 font-display text-[16px] font-bold text-primary">{step.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-fg-2">{step.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {locale === 'es' ? 'Ver más' : 'Learn more'} <span aria-hidden="true">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
