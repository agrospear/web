# Agrospear

> Agrochemical formulation, OEM/ODM manufacturing, registration support and export for crop protection brands, distributors and sourcing teams.

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

3. Static photos, videos and PDFs are uploaded to R2 via GitHub Actions workflows:
   - Images: `images/agrochemical/` → `assets.agrospear.com/images/agrochemical/`
   - PDFs: `site/downloads/` → `assets.agrospear.com/site/downloads/`
   - QC/QA documents: `site/downloads/qcqa/` → `assets.agrospear.com/site/downloads/qcqa/`

4. Or use: `node deploy.mjs`

## Architecture

5-layer decoupling — swap `src/product/` and `src/config/` to launch a new site.

| Layer | Location | Purpose |
|-------|----------|---------|
| Product | `src/product/` | Brand data, content, AI prompts, entity JSON-LD |
| Config | `src/config/` | SITE_ID, domain, locales, feature flags, navigation |
| Foundation | `src/features/` | Auth, search, AI, SEO, inquiry, admin, content rendering |
| Platform | Cloudflare D1+KV+R2+Workers | Edge runtime + storage |
| Infra | GitHub Actions CI/CD | Build → Deploy → R2 assets → Cache warm |

## Content Structure

### Pages (src/content/site/pages/)
- **Products**: `products-herbicides`, `products-insecticides`, `products-fungicides`, `products-biopesticides`, `products-pgr`, `products-seed-treatment`, `products-premix-formulations`, `products-adjuvants`
- **Solutions**: `solutions-agrochemical-oem`, `solutions-private-label-pesticides`, `solutions-custom-formulation`, `solutions-distributors`, `solutions-government-tender`, `solutions-co-branding`
- **Manufacturing**: `manufacturing-factory`, `manufacturing-quality-control`, `manufacturing-research-development`, `qcqa-documents`
- **Markets**: `markets-africa`, `markets-southeast-asia`, `markets-latin-america`, `markets-west-asia`
- **Knowledge**: `knowledge`, `research-*`, `resources-*`
- **Company**: `about-agrospear`, `about-identity`, `proof-center`, `partners`

### Locales
- English (EN): all pages
- Spanish (ES): all pages with `.es.yaml` suffix

## Asset Architecture

All public media uses one canonical URL scheme:

```text
R2 bucket: agrospear-files-prod
Image key: images/agrochemical/<category>/<path>
PDF key:   site/downloads/<path>
CDN URL:   https://assets.agrospear.com/images/agrochemical/<category>/<path>
```

## SEO & AI Optimization

- **Structured Data**: JSON-LD Organization schema in `src/product/geo/entity.json`
- **llms.txt**: Machine-readable company facts at `/llms.txt`
- **llms-full.txt**: Full site content as Markdown at `/llms-full.txt`
- **Sitemaps**: Auto-generated XML sitemaps for pages, products, news, and Spanish content
- **Meta Tags**: OpenGraph, Twitter Cards, canonical URLs on all pages
- **Multilingual**: EN/ES with `hreflang` tags and language-specific sitemaps

## QC/QA Documentation

The website includes a public QC/QA document library with downloadable PDFs:
- SC & WDG Production QC SOP
- Herbicide, Insecticide, Fungicide, Acaricide/Nematicide, PGR QC Systems
- 4-Stage Insecticide Release Dossier
- IQC, IPQC, FQC/OQC Inspection Reports
- Batch Traceability Reports

PDFs are stored in `public/downloads/` and uploaded to R2 via the `compress-and-upload-pdfs.yml` workflow.

## Customization

Edit `site.config.yaml` and run `node scaffold.mjs` to regenerate.
