import { createFileRoute, redirect } from '@tanstack/react-router'
import { localizePath, type Locale } from '@/features/i18n/locale'

export const Route = createFileRoute('/{-$locale}/solutions/club-sup')({
  loader: ({ params }) => {
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    throw redirect({ href: localizePath(locale, '/solutions/distributor-partners'), statusCode: 301 })
  },
  component: () => null,
})
