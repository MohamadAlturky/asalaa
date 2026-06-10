import { useEffect, useState } from 'react'
import type { AppLocale, HomeHeroContent } from '../types/homeContent'
import { useAppPreferences } from '../context/AppPreferencesContext'
import type { HomeExploreContent } from '../types/homeExplore'
import { getHomeHeroContent } from '../services/homeContentService'
import { getHomeExploreContent } from '../services/homeExploreService'
import { Navbar } from '../components/home/Navbar'
import { Hero } from '../components/home/Hero'
import { ThemeToggle } from '../components/home/ThemeToggle'
import { HomeDiscoverSection } from '../components/home/HomeDiscoverSection'
import { HomeMockupSections } from '../components/home/HomeMockupSections'
import { HomeExtendedSections } from '../components/home/HomeExtendedSections'
import styles from './HomePage.module.css'

const A11Y: Record<
  AppLocale,
  {
    navAriaLabel: string
    menuOpen: string
    menuClose: string
    themeToLight: string
    themeToDark: string
    languageMenu: string
    categoryShortcuts: string
  }
> = {
  ar: {
    navAriaLabel: 'التنقل الرئيسي',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    themeToDark: 'التبديل إلى الوضع الداكن',
    languageMenu: 'اختيار اللغة',
    categoryShortcuts: 'اختصارات الأقسام',
  },
  en: {
    navAriaLabel: 'Primary navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    languageMenu: 'Choose language',
    categoryShortcuts: 'Section shortcuts',
  },
}

export function HomePage() {
  const { locale, setLocale, theme, setTheme } = useAppPreferences()
  const [heroContent, setHeroContent] = useState<HomeHeroContent | null>(null)
  const [exploreContent, setExploreContent] = useState<HomeExploreContent | null>(null)
  const [error, setError] = useState<string | null>(null)

  const isRtl = locale === 'ar'
  const a11y = A11Y[locale]
  const pageReady = heroContent !== null && exploreContent !== null

  useEffect(() => {
    let cancelled = false
    setHeroContent(null)
    setExploreContent(null)
    setError(null)
    Promise.all([getHomeHeroContent(locale), getHomeExploreContent(locale)])
      .then(([hero, explore]) => {
        if (!cancelled) {
          setHeroContent(hero)
          setExploreContent(explore)
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

      <div className={styles.stage}>
        {pageReady && heroContent && exploreContent ? (
          <>
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
            <Hero line1={heroContent.hero.line1} line2={heroContent.hero.line2} />
            <HomeDiscoverSection content={exploreContent} categoriesNavLabel={a11y.categoryShortcuts} />
            <HomeMockupSections locale={locale} />
            <HomeExtendedSections locale={locale} />
          </>
        ) : (
          <div className={styles.skeleton} aria-busy="true" aria-live="polite">
            <span className="visuallyHidden">{locale === 'ar' ? 'جاري التحميل…' : 'Loading…'}</span>
          </div>
        )}
      </div>
    </div>
  )
}
