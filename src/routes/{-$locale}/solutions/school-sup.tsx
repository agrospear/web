import { createFileRoute, redirect } from '@tanstack/react-router'
import { localizePath, type Locale } from '@/features/i18n/locale'

export const Route = createFileRoute('/{-$locale}/solutions/school-sup')({
  loader: ({ params }) => {
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    throw redirect({ href: localizePath(locale, '/oem-manufacturing'), statusCode: 301 })
  },
  component: () => null,
})
