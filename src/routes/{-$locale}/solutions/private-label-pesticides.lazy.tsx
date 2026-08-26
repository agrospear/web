import { createLazyFileRoute } from '@tanstack/react-router'
import { ContentCatchAll } from '@/features/content/catchall'

export const Route = createLazyFileRoute('/{-$locale}/solutions/private-label-pesticides')({ component: Page })

function Page() {
  const data = Route.useLoaderData()
  if (!data) return null
  return <ContentCatchAll data={data} />
}
