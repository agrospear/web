import { Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react'
import { Suspense, lazy } from 'react'
import { getRouteApi } from '@tanstack/react-router'
import {  useTranslation  } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { FACTS } from '@/product/facts'
import { BRAND_CONTACT } from '@/config/branding'
import { Logo } from '@/components/brand/logo'
import { ThemeToggle } from '@/features/theme/theme-toggle'
import { LangSwitch } from '@/features/i18n/lang-switch'
import { ContactFloats } from '@/components/marketing/contact-floats'

const AiChat = lazy(() => import('@/features/ai/ai-chat').then(m => ({ default: m.AiChat })))

const rootRoute = getRouteApi('__root__')
const FOOTER_YEAR = new Date().getFullYear()

export function Footer() {
  const { theme } = rootRoute.useLoaderData()
  const { t } = useTranslation()
  const fl = useLocalizePath()

  return (
    <footer className="relative border-t border-border bg-bg-alt px-5 pb-12 pt-16 md:px-8 lg:px-10">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-aqua/50 to-sun/40" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-3.5 max-w-[24em] text-[13.5px] leading-relaxed text-fg-3">{t('agro.footer.tagline')}</p>
          <div className="mt-5 flex flex-col gap-2 text-[13.5px] text-fg-2">
            <a href={`mailto:${BRAND_CONTACT.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Mail size={15} className="text-primary" /> {BRAND_CONTACT.email}
            </a>
            <a href={FACTS.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Phone size={15} className="text-primary" /> {FACTS.contact.whatsapp}
            </a>
            <p className="inline-flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" /> {FACTS.contact.address}
            </p>
            <a href={fl('/contact')} className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <MessageCircle size={15} className="text-primary" /> {t('agro.footer.inquiryForm')}
            </a>
          </div>
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-3">{t('agro.footer.followUs')}</p>
            <div className="mt-2.5 flex gap-3">
              <a href={FACTS.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-bg text-fg-2 transition-colors hover:bg-primary hover:text-primary-foreground" aria-label={t('agro.footer.facebook')}>
                <Facebook size={15} />
              </a>
              <a href={FACTS.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-bg text-fg-2 transition-colors hover:bg-primary hover:text-primary-foreground" aria-label={t('agro.footer.linkedin')}>
                <Linkedin size={15} />
              </a>
              <a href={FACTS.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-bg text-fg-2 transition-colors hover:bg-primary hover:text-primary-foreground" aria-label={t('agro.footer.youtube')}>
                <Youtube size={15} />
              </a>
            </div>
          </div>
        </div>

        <nav className="contents" aria-label={t('common.footerNav')}>
        {/* Products */}
        <FooterCol title={t('agro.footer.colProducts')}>
          <a className="foot-link" href={fl('/products')}>{t('agro.nav.productsDropdown.all')}</a>
          <a className="foot-link" href={fl('/customizer')}>{t('agro.nav.productsDropdown.customizer')}</a>
          <a className="foot-link" href={fl('/formulation-type-comparison')}>{t('agro.nav.productsServicesDropdown.constructionComparison')}</a>
          <a className="foot-link" href={fl('/product-development')}>{t('agro.footer.productDevelopment')}</a>
          <a className="foot-link" href={fl('/oem-odm-private-label-comparison')}>{t('agro.nav.productsServicesDropdown.comparison')}</a>
          <a className="foot-link" href={fl('/new-brand-trial-order')}>{t('agro.nav.oemDropdown.newBrandTrial')}</a>
        </FooterCol>

        {/* Manufacturing & Quality */}
        <FooterCol title={t('agro.footer.colManufacturing')}>
          <a className="foot-link" href={fl('/factory')}>{t('agro.footer.factory')}</a>
          <a className="foot-link" href={fl('/factory/capacity')}>{t('agro.footer.factoryCapacity')}</a>
          <a className="foot-link" href={fl('/quality')}>{t('agro.nav.manufacturingDropdown.quality')}</a>
          <a className="foot-link" href={fl('/proof-center')}>{t('agro.nav.manufacturingDropdown.proofCenter')}</a>
          <a className="foot-link" href={fl('/agrochemical-regulation-by-market')}>{t('agro.nav.proofQualityDropdown.complianceByMarket')}</a>
          <a className="foot-link" href={fl('/factory-audit-checklist')}>{t('agro.nav.proofQualityDropdown.auditChecklist')}</a>
          <a className="foot-link" href={fl('/warranty')}>{t('agro.nav.manufacturingDropdown.warranty')}</a>
          <a className="foot-link" href={fl('/technology')}>{t('agro.nav.manufacturingDropdown.technology')}</a>
        </FooterCol>

        {/* Solutions */}
        <FooterCol title={t('agro.footer.colSolutions')}>
          <a className="foot-link" href={fl('/solutions/distributors')}>{t('agro.footer.privateLabel')}</a>
          <a className="foot-link" href={fl('/solutions/co-branding')}>{t('agro.footer.coBrand')}</a>
          <a className="foot-link" href={fl('/solutions/distributor-partners')}>{t('agro.footer.distributorPartners')}</a>
          <a className="foot-link" href={fl('/solutions/distributors')}>{t('agro.footer.bulkBuyers')}</a>
          <a className="foot-link" href={fl('/solutions/distributors')}>{t('agro.nav.industriesDropdown.distributors')}</a>
          <a className="foot-link" href={fl('/b2b-solutions-matrix')}>{t('agro.footer.b2bMatrix')}</a>
          <a className="foot-link" href={fl('/oem/agrochemical-oem-africa')}>{t('agro.footer.marketsAfrica')}</a>
          <a className="foot-link" href={fl('/oem/agrochemical-oem-southeast-asia')}>{t('agro.footer.marketsSoutheastAsia')}</a>
        </FooterCol>

        {/* Resources */}
        <FooterCol title={t('agro.footer.colResources')}>
          <a className="foot-link" href={fl('/knowledge')}>{t('agro.nav.guides')}</a>
          <a className="foot-link" href={fl('/faq')}>{t('agro.footer.faq')}</a>
          <a className="foot-link" href={fl('/oem-onboarding-guide')}>{t('agro.nav.resourcesDropdown.onboarding')}</a>
          <a className="foot-link" href={fl('/oem-moq-guide')}>{t('agro.nav.resourcesDropdown.moqGuide')}</a>
          <a className="foot-link" href={fl('/what-is-agrochemical-oem')}>{t('agro.footer.whatIsAgrochemicalOem')}</a>
          <a className="foot-link" href={fl('/oem-moq-guide')}>{t('agro.nav.resourcesDropdown.moqAndPricing')}</a>
          <a className="foot-link" href={fl('/news')}>{t('agro.footer.news')}</a>
        </FooterCol>

        {/* Company */}
        <FooterCol title={t('agro.footer.colCompany')}>
          <a className="foot-link" href={fl('/about/identity')}>{t('agro.footer.aboutIdentity')}</a>
          <a className="foot-link" href={fl('/projects')}>{t('agro.nav.projects')}</a>
          <a className="foot-link" href={fl('/partners')}>{t('agro.footer.partners')}</a>
          <a className="foot-link" href={fl('/contact')}>{t('agro.footer.contact')}</a>
          <a className="foot-link" href={fl('/terms')}>{t('agro.footer.terms')}</a>
          <a className="foot-link" href={fl('/privacy')}>{t('agro.footer.privacy')}</a>
        </FooterCol>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-[13px] text-fg-3">
            &copy; {FOOTER_YEAR} {t('common.appName')}. {t('agro.footer.rights')}
          </p>
          <p className="mt-1 text-[12.5px] text-fg-3/80">{t('agro.footer.owner')}</p>
          <p className="mt-1 max-w-xl text-[12.5px] text-fg-3/80">{t('agro.footer.compliance')}</p>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} />
          <LangSwitch />
        </div>
      </div>
      <ContactFloats />
      <Suspense><AiChat /></Suspense>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-fg-3">{title}</h2>
      <div className="flex flex-col gap-0.5 [&_.foot-link]:py-2 md:[&_.foot-link]:py-1 [&_.foot-link]:text-sm [&_.foot-link]:text-fg-2 [&_.foot-link:hover]:text-foreground [&_.foot-link]:transition-colors">
        {children}
      </div>
    </div>
  )
}