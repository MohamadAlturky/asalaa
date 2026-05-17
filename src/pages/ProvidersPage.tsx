import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { AppLocale, HomeHeroContent } from '../types/homeContent'
import type { ProviderItem, ProvidersPageContent } from '../types/providers'
import { getHomeHeroContent } from '../services/homeContentService'
import { getProviders, getProvidersPageContent } from '../services/providersService'
import { Navbar } from '../components/home/Navbar'
import { ThemeToggle } from '../components/home/ThemeToggle'
import { ProviderCard } from '../components/providers/ProviderCard'
import styles from './ProvidersPage.module.css'

type Theme = 'light' | 'dark'

const A11Y: Record<
  AppLocale,
  {
    navAriaLabel: string
    menuOpen: string
    menuClose: string
    themeToLight: string
    themeToDark: string
    languageMenu: string
  }
> = {
  ar: {
    navAriaLabel: 'التنقل الرئيسي',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    themeToDark: 'التبديل إلى الوضع الداكن',
    languageMenu: 'اختيار اللغة',
  },
  en: {
    navAriaLabel: 'Primary navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    languageMenu: 'Choose language',
  },
}

export function ProvidersPage() {
  const [locale, setLocale] = useState<AppLocale>('ar')
  const [theme, setTheme] = useState<Theme>('dark')
  
  const [heroContent, setHeroContent] = useState<HomeHeroContent | null>(null)
  const [pageContent, setPageContent] = useState<ProvidersPageContent | null>(null)
  const [providers, setProviders] = useState<ProviderItem[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  const isRtl = locale === 'ar'
  const a11y = A11Y[locale]
  const pageReady = heroContent !== null && pageContent !== null && providers !== null

  useEffect(() => {
    const root = document.documentElement
    root.lang = locale === 'ar' ? 'ar' : 'en'
    root.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    let cancelled = false
    setHeroContent(null)
    setPageContent(null)
    setProviders(null)
    setError(null)
    
    Promise.all([
      getHomeHeroContent(locale),
      getProvidersPageContent(locale),
      getProviders(locale)
    ])
      .then(([hero, content, items]) => {
        if (!cancelled) {
          setHeroContent(hero)
          setPageContent(content)
          setProviders(items)
        }
      })
      .catch(() => {
        if (!cancelled) setError(locale === 'ar' ? 'تعذر تحميل المحتوى.' : 'Could not load content.')
      })
      
    return () => {
      cancelled = true
    }
  }, [locale])

  return (
    <div className={styles.root} data-loading={pageReady ? 'false' : 'true'}>
      {!pageReady ? (
        <div className={styles.loadingThemeDock}>
          <ThemeToggle
            theme={theme}
            onChange={setTheme}
            labels={{ switchToLight: a11y.themeToLight, switchToDark: a11y.themeToDark }}
          />
        </div>
      ) : null}
      
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      {pageReady && heroContent && pageContent && providers ? (
        <>
          <div className={styles.topNavContainer}>
            <Navbar
              brandName={heroContent.brandName}
              navLinks={heroContent.navLinks}
              navAriaLabel={a11y.navAriaLabel}
              menuOpenLabel={a11y.menuOpen}
              menuCloseLabel={a11y.menuClose}
              theme={theme}
              onThemeChange={setTheme}
              themeToggleLabels={{
                switchToLight: a11y.themeToLight,
                switchToDark: a11y.themeToDark,
              }}
              locale={locale}
              languageOptions={heroContent.languageOptions}
              onLocaleChange={setLocale}
              languageMenuAriaLabel={a11y.languageMenu}
              isRtl={isRtl}
            />
          </div>

          <main className={styles.main}>
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <h1 className={styles.title}>{pageContent.pageTitle}</h1>
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                  <ol className={styles.breadcrumbList}>
                    <li>
                      <Link to="/">{pageContent.breadcrumbHomeLabel}</Link>
                    </li>
                    <li aria-hidden className={styles.breadcrumbSep}>
                      -
                    </li>
                    <li className={styles.breadcrumbCurrent}>{pageContent.pageTitle}</li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className={styles.gridContainer}>
              <div className={styles.grid}>
                {providers.map((provider) => (
                  <ProviderCard 
                    key={provider.id} 
                    provider={provider} 
                    viewWorksLabel={pageContent.viewWorksLabel} 
                  />
                ))}
              </div>
            </div>
          </main>
        </>
      ) : (
        <div className={styles.skeleton} aria-busy="true" aria-live="polite">
          <span className="visuallyHidden">{locale === 'ar' ? 'جاري التحميل…' : 'Loading…'}</span>
        </div>
      )}
    </div>
  )
}
