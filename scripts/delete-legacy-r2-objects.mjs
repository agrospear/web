/**
 * Delete legacy objects from R2 that no longer match the current site structure.
 *
 * Deliberately allow-listed: this script only deletes the prefixes below.
 * Use --dry-run first, then --confirm for the irreversible operation.
 * It uses Cloudflare's R2 HTTP API and does not read the local optimization
 * directory.
 *
 * Protected prefixes (never deleted):
 *   site/downloads/qcqa/  - current QC/QA documents
 *   site/quality/         - current quality inspection images
 *   site/factory/         - current factory images (referenced by content)
 *   images/agrochemical/  - current canonical image namespace
 *
 * Required: CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID
 * Optional: R2_BUCKET (defaults to agrospear-files-prod)
 */

const args = process.argv.slice(2)
const dryRun = !args.includes('--confirm')
const account = process.env.CLOUDFLARE_ACCOUNT_ID ?? ''
const token = process.env.CLOUDFLARE_API_TOKEN ?? ''
const bucket = process.env.R2_BUCKET ?? 'agrospear-files-prod'

// Old water-sports and unused product prefixes
const prefixes = [
  'site/products/',
  'site/videos/',
]

if (!account || !token) {
  console.error('Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.')
  process.exit(1)
}

const api = `https://api.cloudflare.com/client/v4/accounts/${account}/r2/buckets/${bucket}/objects`
const headers = { authorization: `Bearer ${token}`, 'content-type': 'application/json' }

async function list(prefix, cursor = '') {
  const url = new URL(api)
  url.searchParams.set('prefix', prefix)
  url.searchParams.set('per_page', '1000')
  if (cursor) url.searchParams.set('cursor', cursor)
  const res = await fetch(url, { headers })
  const data = await res.json()
  if (!res.ok || !data.success) throw new Error(`List ${prefix} failed: ${JSON.stringify(data.errors)}`)
  return data.result
}

async function remove(keys) {
  const res = await fetch(api, {
    method: 'DELETE',
    headers,
    body: JSON.stringify({ objects: keys }),
  })
  const data = await res.json()
  if (!res.ok || !data.success) throw new Error(`Delete failed: ${JSON.stringify(data.errors)}`)
}

async function main() {
  const keys = []
  for (const prefix of prefixes) {
    let cursor = ''
    do {
      const page = await list(prefix, cursor)
      for (const object of page.objects ?? []) keys.push(object.key)
      cursor = page.truncated ? page.cursor : ''
    } while (cursor)
  }

  const unique = [...new Set(keys)].filter((key) => prefixes.some((prefix) => key.startsWith(prefix)))

  // Group by prefix for summary
  const groups = {}
  for (const key of unique) {
    const prefix = prefixes.find((p) => key.startsWith(p)) ?? 'other'
    groups[prefix] = (groups[prefix] ?? 0) + 1
  }

  console.log(`\n${dryRun ? '[dry-run] ' : ''}${unique.length} legacy objects in ${bucket}:\n`)
  for (const [prefix, count] of Object.entries(groups)) {
    console.log(`  ${prefix} — ${count} objects`)
  }
  console.log('')

  for (const key of unique) console.log(`  ${key}`)

  if (dryRun || unique.length === 0) {
    if (dryRun) console.log('\nNo objects deleted. Re-run with --confirm to permanently delete.')
    return
  }

  for (let i = 0; i < unique.length; i += 1000) await remove(unique.slice(i, i + 1000))
  console.log(`\nDeleted ${unique.length} legacy objects.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
