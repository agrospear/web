import { test, expect } from 'vitest'
import { readdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { getContentPages } from '@/features/content/loader'
import { gatePath } from '@/features/seo/edge-gate'

const routesRoot = resolve(process.cwd(), 'src/routes')

const routeName = (f: string): string | null => {
  if (!f.endsWith('.tsx')) return null
  if (f.endsWith('.lazy.tsx')) return null
  const name = f.slice(0, -4)
  if (name.includes('.') || name.includes('$')) return null
  if (name === 'index') return null
  return name
}

const localeRoutesRoot = join(routesRoot, '{-$locale}')

const rootRoutes = readdirSync(routesRoot)
  .map(routeName)
  .filter((n): n is string => n != null)
  .map((n) => `/${n}`)

const directoryRoutes = readdirSync(routesRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(routesRoot, d.name, 'index.tsx')))
  .map((d) => `/${d.name}`)

const localeDirectoryRoutes = existsSync(localeRoutesRoot)
  ? readdirSync(localeRoutesRoot, { withFileTypes: true })
      .filter((d) => d.isDirectory() && existsSync(join(localeRoutesRoot, d.name, 'index.tsx')))
      .map((d) => `/${d.name}`)
  : []

const allServingRoutes = new Set([...rootRoutes, ...directoryRoutes, ...localeDirectoryRoutes])

const singleSegmentPages = getContentPages()
  .map((p) => p.path)
  .filter((p) => p !== '/' && !p.slice(1).includes('/'))

test('every single-segment agrospear page has a serving route (P0 regression guard)', () => {
  expect(singleSegmentPages.length).toBeGreaterThan(0)
  for (const p of singleSegmentPages) {
    const covered = allServingRoutes.has(p) || gatePath(p).action !== 'ok'
    expect(covered, `${p} would 404 — add a dedicated route via contentSingleRoute`).toBe(true)
  }
})

test('oem-moq-guide regression: bare EN path served by a dedicated route', () => {
  expect(rootRoutes).toContain('/oem-moq-guide')
  expect(singleSegmentPages).toContain('/oem-moq-guide')
})