# Agrospear

> Formulation, registration support, packaging and production for agrochemical brands, distributors and sourcing teams.

## Quick Start

```bash
pnpm install
cp .dev.vars.example .dev.vars
pnpm db:migrate:local
pnpm db:seed:framework:local
pnpm dev
```

## Deploy to Cloudflare

1. Create Cloudflare resources:
   ```bash
   wrangler d1 create agrospear-db
   wrangler kv namespace create CACHE
   wrangler r2 bucket create agrospear-files-prod
   ```

2. Configure GitHub Actions secrets and variables, then push to `main`.
   Production deployment builds with `CLOUDFLARE_ENV=production` and deploys the generated `dist/server/wrangler.json`.

3. Static photos, videos and PDFs are not committed to GitHub. The approved R2 workflow uploads local asset sources to the `agrospear-files-prod` bucket. Images use `images/agrochemical/`; PDFs and documents use `site/downloads/`.

4. Or use: `node deploy.mjs`

## Architecture

5-layer decoupling - swap `src/product/` and `src/config/` to launch a new site.

| Layer | Location | Purpose |
|-------|----------|--------|
| Product | `src/product/` | Brand data, content, AI prompts |
| Config | `src/config/` | SITE_ID, domain, locales, feature flags |
| Foundation | `src/features/` | Auth, search, AI, SEO, inquiry, admin |
| Platform | Cloudflare D1+KV+R2+Workers | Edge runtime + storage |
| Infra | GitHub Actions CI/CD | Build > Deploy > R2 assets > Cache warm |

## Asset architecture

All public media uses one canonical URL scheme:

```text
R2 bucket: agrospear-files-prod
Image key: images/agrochemical/<category>/<path>
PDF key:   site/downloads/<path>
CDN URL:   https://assets.agrospear.com/images/agrochemical/<category>/<path>
```

The `待优化/` directory is local-only and is never committed or read by CI. Keep source files outside GitHub and upload them through the approved Cloudflare R2 workflow.

## Customization

Edit `site.config.yaml` and run `node scaffold.mjs` to regenerate.
