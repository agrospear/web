import { Check, ChevronDown, Globe } from 'lucide-react'
import { defaultLocale, type Locale } from './locale'
import { LOCALE_LABELS, ACTIVE_LOCALES } from '@/config/locales'
import { useTranslation } from './provider'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

function switchLocaleTo(target: Locale) {
  const { pathname, search, hash } = window.location
  const currentPrefix = pathname.match(/^\/([a-z]{2}(-[A-Z]{2})?)(?=\/|$)/)?.[1]
  const stripped = currentPrefix ? pathname.slice(currentPrefix.length + 1) : pathname
  const clean = stripped || '/'
  const newPath = target === defaultLocale ? clean : `/${target}${clean === '/' ? '' : clean}`
  document.cookie = `locale=${target}; path=/; max-age=31536000; samesite=lax`
  window.location.href = newPath + search + hash
}

export function LangSwitch() {
  const { locale, t } = useTranslation()
  const activeLocales = ACTIVE_LOCALES as readonly Locale[]

  if (activeLocales.length < 2) return null

  const current = LOCALE_LABELS[locale] ?? { native: locale, short: locale.toUpperCase() }

  return (
    <Popover>
      <PopoverTrigger
        type="button"
        aria-label={t('common.language')}
        className="inline-flex h-[38px] items-center gap-1.5 rounded-lg border border-transparent px-2.5 text-sm font-semibold text-fg-2 transition-colors hover:bg-bg-alt hover:text-foreground"
      >
        <Globe size={17} aria-hidden="true" />
        <span>{current.short}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent align="end" className="min-w-44 p-2">
        <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-fg-3">
          {t('common.language')}
        </p>
        <div className="mt-1 grid gap-1" role="listbox" aria-label={t('common.language')}>
          {activeLocales.map((target) => {
            const label = LOCALE_LABELS[target] ?? { native: target, short: target.toUpperCase() }
            const selected = target === locale
            return (
              <button
                key={target}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  if (!selected) switchLocaleTo(target)
                }}
                className="flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm text-fg-2 transition-colors hover:bg-bg-alt hover:text-foreground aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <span>
                  <span className="mr-2 font-semibold">{label.short}</span>
                  {label.native}
                </span>
                {selected && <Check size={15} aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
