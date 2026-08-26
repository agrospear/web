import { test, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import * as React from 'react'
import { getContentPage, getContentPages, getLocalePaths } from '@/features/content/loader'
import { ContentSections } from '@/features/content/render/sections'
import { I18nProvider } from '@/features/i18n/provider'

const html = (path: string, locale: 'en' | 'es' = 'en'): string => {
  const page = getContentPage(path, locale)
  expect(page, `${path} not found in registry`).toBeTruthy()
  return renderToString(
    React.createElement(
      I18nProvider,
      { locale, children: React.createElement(ContentSections, { page: page! }) },
    ),
  )
}

test('every registry page renders its sections without error (en)', () => {
  for (const p of getContentPages()) {
    expect(() => html(p.path), `${p.path} throws during render`).not.toThrow()
  }
})

test('every Spanish twin renders without error (es)', () => {
  // /faq is served by the catchall route from site/faqs.yaml, not the registry.
  for (const p of getLocalePaths('es').filter((x) => x !== '/faq')) {
    expect(() => html(p, 'es'), `${p} (es) throws during render`).not.toThrow()
  }
})

test('factory intelligence cards render (bare array shape)', () => {
  const out = html('/manufacturing/factory')
  for (const t of ['Production Capacity', 'Quality Lab &amp; Testing', 'OEM/ODM Capability']) {
    expect(out, `factory card "${t}" not rendered`).toContain(t)
  }
})

test('/manufacturing/quality-control renders all quality control content', () => {
  const out = html('/manufacturing/quality-control')
  expect(out, 'QC page rendered').toContain('Quality Control')
  expect(out, '7-stage framework rendered').toContain('7-stage')
  expect(out, 'Batch analysis rendered').toContain('batch analysis')
  expect(out, 'Stability testing rendered').toContain('stability')
  expect(out, 'Third-party inspection rendered').toContain('Third-party')
})

test('/manufacturing/quality-control es twin renders in Spanish', () => {
  const out = html('/manufacturing/quality-control', 'es')
  expect(out, 'ES QC page rendered').toContain('Control de Calidad')
  expect(out, 'ES framework rendered').toContain('7 etapas')
  expect(out, 'ES batch rendered').toContain('lote')
})
