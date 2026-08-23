import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from '@/features/i18n/provider'
import { BRAND_ASSETS_CDN } from '@/config/branding'

interface Slide {
  image: string
  tagline: string
  title: string
}

const SLIDES_EN: Slide[] = [
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/hero/production-dept.webp`,
    tagline: 'Production Workshop',
    title: 'Eight automated formulation lines running two daily shifts',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-factory-aerial-1.webp`,
    tagline: '20,000 m\u00b2 Campus',
    title: 'From raw active ingredient to export-ready product — all under one roof',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-formulation-lab.webp`,
    tagline: 'Formulation Lab',
    title: 'R&D and pilot-scale validation before every production commitment',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-quality-lab.webp`,
    tagline: 'Quality & Inspection Lab',
    title: 'HPLC/GC analysis, stability chambers, particle sizing — every batch tested',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-pressure-testing.webp`,
    tagline: 'Pressure & Stability Testing',
    title: 'Accelerated and long-term stability per FAO/WHO specifications',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-production-department-2.webp`,
    tagline: 'Filling & Packaging',
    title: 'Automated rotary lines from 100 mL bottles to 1000 L IBCs',
  },
]

const SLIDES_ES: Slide[] = [
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/hero/production-dept.webp`,
    tagline: 'Taller de producci\u00f3n',
    title: 'Ocho l\u00edneas de formulaci\u00f3n automatizadas en dos turnos diarios',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-factory-aerial-1.webp`,
    tagline: 'Campus de 20.000 m\u00b2',
    title: 'Del ingrediente activo al producto listo para exportar — todo bajo un mismo techo',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-formulation-lab.webp`,
    tagline: 'Laboratorio de formulaci\u00f3n',
    title: 'I+D y validaci\u00f3n a escala piloto antes de cada compromiso de producci\u00f3n',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-quality-lab.webp`,
    tagline: 'Laboratorio de calidad e inspecci\u00f3n',
    title: 'An\u00e1lisis HPLC/GC, c\u00e1maras de estabilidad, granulometr\u00eda — cada lote analizado',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-pressure-testing.webp`,
    tagline: 'Ensayos de presi\u00f3n y estabilidad',
    title: 'Estabilidad acelerada y a largo plazo seg\u00fan especificaciones FAO/WHO',
  },
  {
    image: `${BRAND_ASSETS_CDN}/images/agrospear/factory/agrospear-production-department-2.webp`,
    tagline: 'Llenado y embalaje',
    title: 'L\u00edneas rotativas automatizadas desde botellas de 100 mL hasta IBC de 1000 L',
  },
]

const AUTOPLAY_MS = 5000

export function FactoryCarousel() {
  const { locale } = useTranslation()
  const slides = locale === 'es' ? SLIDES_ES : SLIDES_EN
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive((i) => (i + 1) % slides.length), [slides.length])
  const prev = useCallback(() => setActive((i) => (i - 1 + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative w-full overflow-hidden bg-gray-950" style={{ height: 'clamp(340px, 55vh, 640px)' }}>
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 10 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-gray-950/20" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-20 md:px-12 md:pb-14">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#7fd6f0]">{s.tagline}</p>
            <h2 className="mt-2 max-w-2xl text-[1.25rem] font-bold leading-snug text-white md:text-[1.6rem]">{s.title}</h2>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition hover:bg-white/20"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition hover:bg-white/20"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
