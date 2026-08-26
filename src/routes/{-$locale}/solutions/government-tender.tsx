import { createFileRoute } from '@tanstack/react-router'
import { contentSingleRoute } from '@/features/content/content-single-route'

export const Route = createFileRoute('/{-$locale}/solutions/government-tender')({
  ...contentSingleRoute('/solutions/government-tender'),
})
