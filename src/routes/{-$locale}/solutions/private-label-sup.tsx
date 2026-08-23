import { createFileRoute, redirect } from '@tanstack/react-router'
import { localizePath, type Locale } from '@/features/i18n/locale'

export const Route = createFileRoute('/{-$locale}/solutions/private-label-sup')({
  loader: ({ params }) => {
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    throw redirect({ href: localizePath(locale, '/solutions/distributors'), statusCode: 301 })
  },
  component: () => null,
})
