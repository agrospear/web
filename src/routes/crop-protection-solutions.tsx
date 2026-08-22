import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/crop-protection-solutions')({
  ...contentSingleRoute('/crop-protection-solutions'),
})
