import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/formulation-type-comparison')({
  ...contentSingleRoute('/formulation-type-comparison'),
})
