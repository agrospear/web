import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/agrochemical-oem-north-america')({
  ...contentSingleRoute('/agrochemical-oem-north-america'),
})
