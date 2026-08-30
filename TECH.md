# Agrospear Website — Technical Documentation

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | React 19 + TanStack Router |
| Runtime | Cloudflare Workers (Edge) |
| Database | Cloudflare D1 (SQLite) |
| Cache | Cloudflare KV |
| Storage | Cloudflare R2 (S3-compatible) |
| Auth | Better Auth |
| CMS | Fumadocs MDX + YAML content |
| Styling | Tailwind CSS |
| Build | Vite |
| Package Manager | pnpm |
| CI/CD | GitHub Actions |
| AI | Cloudflare AI (optional) |

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── marketing/       # Marketing page components
│   │   └── ui/              # UI primitives (shadcn/ui)
│   ├── config/              # Site configuration
│   │   ├── branding.ts      # Brand constants
│   │   ├── features.ts      # Feature flags
│   │   ├── locales.ts       # Language configuration
│   │   └── navigation.ts    # Navigation tree & redirects
│   ├── content/             # Content files
│   │   ├── docs/            # Documentation (MDX)
│   │   └── site/            # Site pages (YAML)
│   │       ├── pages/       # Page content
│   │       └── site/        # Site-wide config (pages.yaml)
│   ├── features/            # Feature modules
│   │   ├── admin/           # Admin dashboard
│   │   ├── analytics/       # Analytics tracking
│   │   ├── auth/            # Authentication
│   │   ├── content/         # Content rendering
│   │   ├── i18n/            # Internationalization
│   │   ├── seo/             # SEO (sitemap, structured data)
│   │   ├── site/            # Site utilities
│   │   └── waitlist/        # Waitlist feature
│   ├── product/             # Product-specific code
│   │   ├── ai-content.ts    # AI content generation
│   │   ├── asset-map.ts     # Image asset mapping
│   │   ├── branding.ts      # Brand constants
│   │   ├── content.ts       # Page content
│   │   ├── edge-redirects.ts# Edge redirects
│   │   ├── facts.ts         # Company facts
│   │   ├── geo/             # GEO (entity.json)
│   │   ├── llms-content.ts  # LLMs.txt content
│   │   ├── projects.ts      # Case studies
│   │   ├── route-registry.ts# Route configuration
│   │   └── site-config.ts   # Site config reader
│   ├── routes/              # TanStack Router file routes
│   └── styles/              # Global styles
├── public/                  # Static assets
│   ├── downloads/           # PDF downloads
│   ├── images/              # Images
│   └── manifest.json        # PWA manifest
├── scripts/                 # Build/deploy scripts
├── templates/               # Scaffold templates
├── .github/workflows/       # CI/CD workflows
├── site.config.yaml         # Site configuration
├── deploy.mjs               # Deployment script
└── scaffold.mjs             # Site scaffolding script
```

## Key Configuration Files

### site.config.yaml
Single source of truth for all brand/product/deployment parameters.
Edit this file and run `node scaffold.mjs` to regenerate.

### src/product/geo/entity.json
JSON-LD structured data for Organization schema.
Used by search engines and AI for entity recognition.

### src/content/site/site/pages.yaml
Page registry mapping slugs to content files and sections.

## Content System

### YAML Pages
Pages are defined in `src/content/site/pages/<slug>.yaml` with corresponding `<slug>.es.yaml` for Spanish.

Page structure:
```yaml
meta:
  title: 'Page Title | {SITE}'
  description: 'Page description'
  dateModified: '2026-08'
  keywords: ['keyword1', 'keyword2']

hero:
  tagline: 'Section Tagline'
  title: 'Hero Title'
  subtitle: 'Hero subtitle'
  actions:
    - text: 'CTA Button'
      href: /target-page

answer:
  label: 'Direct Answer'
  text: 'Straight answer content'
  verified: '2026-08'

# Additional sections...
```

### MDX Documentation
Documentation pages use MDX format in `src/content/docs/`.

## SEO Implementation

### Structured Data (JSON-LD)
- Organization schema in `entity.json`
- TechArticle schema for knowledge pages
- BreadcrumbList for navigation

### Sitemaps
Auto-generated XML sitemaps:
- `/sitemap.xml` — main pages
- `/sitemap-pages.xml` — all pages
- `/sitemap-products.xml` — product pages
- `/sitemap-news.xml` — news articles
- `/sitemap-es.xml` — Spanish pages

### Meta Tags
All pages include:
- Title tag with brand suffix
- Meta description
- OpenGraph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Canonical URL
- hreflang tags for multilingual

## LLMs.txt Implementation

### /llms.txt
Machine-readable company facts card per llmstxt.org spec.
Includes:
- Company overview
- Key facts (MOQ, lead time, capacity)
- Service links
- Product categories
- Knowledge base links

### /llms-full.txt
Full site content as plain Markdown for LLM ingestion.
Generated from all page content.

## Deployment

### GitHub Actions Workflows
- `ci.yml` — Lint, typecheck, test
- `deploy.yml` — Build and deploy to Cloudflare
- `compress-and-upload-pdfs.yml` — PDF compression and R2 upload
- `upload-site-assets.yml` — Image upload to R2
- `process-responsive-images.yml` — Responsive image generation
- `ai-index.yml` — AI search index generation
- `website-performance.yml` — Performance monitoring
- `cf-inspect.yml` — Cloudflare inspection

### Environment Variables
Required in `.dev.vars` or GitHub Secrets:
- `BETTER_AUTH_SECRET` — Auth secret
- `BETTER_AUTH_URL` — Site URL
- `RESEND_API_KEY` — Email service
- `EMAIL_FROM` — Sender email
- `CF_ACCOUNT_ID` — Cloudflare account
- `CF_API_TOKEN` — Cloudflare API token

## Performance

### Edge Caching
- Static assets: 1 year cache
- HTML pages: 1 hour cache, stale-while-revalidate
- API responses: Varies by endpoint

### Image Optimization
- WebP format for all images
- Responsive images via srcset
- Lazy loading for below-fold images

## Security

### Headers
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

### Authentication
- Better Auth with session management
- Rate limiting on auth endpoints
- CSRF protection

## Testing

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm exec vitest run src/path/to/test.ts

# Run with coverage
pnpm exec vitest run --coverage
```

## Development

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Type check
pnpm typecheck

# Lint
pnpm lint

# Database migrations
pnpm db:migrate:local
pnpm db:seed:framework:local
```
