import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/{-$locale}/solutions/agrochemical-oem')({
  ...contentSingleRoute('/solutions/agrochemical-oem'),
})
