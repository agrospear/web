import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/agrochemical-oem-moq-lead-time')({
  ...contentSingleRoute('/agrochemical-oem-moq-lead-time'),
})