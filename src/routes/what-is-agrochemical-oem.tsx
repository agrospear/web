import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/what-is-agrochemical-oem')({
  ...contentSingleRoute('/what-is-agrochemical-oem'),
})
