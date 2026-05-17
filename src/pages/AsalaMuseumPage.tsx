import { useEffect, useState } from 'react'
import type { AppLocale, HomeHeroContent } from '../types/homeContent'
import type { MuseumPageContent } from '../types/museum'
import { getHomeHeroContent } from '../services/homeContentService'
import { getMuseumPageContent } from '../services/museumService'
import { Navbar } from '../components/home/Navbar'
import { ThemeToggle } from '../components/home/ThemeToggle'
import { MuseumHero } from '../components/museum/MuseumHero'
import { MuseumSection } from '../components/museum/MuseumSection'
import { MuseumThumbnailCarousel } from '../components/museum/MuseumThumbnailCarousel'
import { MuseumFeaturedCarousel } from '../components/museum/MuseumFeaturedCarousel'
import styles from './AsalaMuseumPage.module.css'

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
    loadingLabel: string
    loadError: string
  }
> = {
  ar: {
    navAriaLabel: 'التنقل الرئيسي',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    themeToDark: 'التبديل إلى الوضع الداكن',
    languageMenu: 'اختيار اللغة',
    loadingLabel: 'جاري التحميل…',
    loadError: 'تعذر تحميل المحتوى.',
  },
  en: {
    navAriaLabel: 'Primary navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    languageMenu: 'Choose language',
    loadingLabel: 'Loading…',
    loadError: 'Could not load content.',
  },
}

export function AsalaMuseumPage() {
  const [locale, setLocale] = useState<AppLocale>('ar')
  const [theme, setTheme] = useState<Theme>('dark')
  const [heroContent, setHeroContent] = useState<HomeHeroContent | null>(null)
  const [pageContent, setPageContent] = useState<MuseumPageContent | null>(null)
  const [error, setError] = useState<string | null>(null)

  const isRtl = locale === 'ar'
  const a11y = A11Y[locale]
  const pageReady = heroContent !== null && pageContent !== null

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
    // eslint-disable-next-line react-hooks/set-state-in-effect -- clear stale content while refetching (same pattern as ExploreSyriaPage)
    setHeroContent(null)
    setPageContent(null)
    setError(null)
    Promise.all([getHomeHeroContent(locale), getMuseumPageContent(locale)])
      .then(([hero, page]) => {
        if (!cancelled) {
          setHeroContent(hero)
          setPageContent(page)
        }
      })
      .catch(() => {
        if (!cancelled) setError(a11y.loadError)
      })
    return () => {
      cancelled = true
    }
  }, [locale, a11y.loadError])

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

      {pageReady && heroContent && pageContent ? (
        <>
          <div className={styles.topBand}>
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
            <MuseumHero
              pageTitle={pageContent.pageTitle}
              breadcrumb={pageContent.breadcrumb}
              mascotImageSrc={pageContent.mascotImageSrc}
              mascotImageAlt={pageContent.mascotImageAlt}
            />
          </div>

          <main className={styles.main}>
            <MuseumSection title={pageContent.sections.antiques.title} headingId="museum-antiques">
              <MuseumThumbnailCarousel
                items={pageContent.sections.antiques.items}
                prevAriaLabel={pageContent.sections.antiques.prevAriaLabel}
                nextAriaLabel={pageContent.sections.antiques.nextAriaLabel}
              />
            </MuseumSection>

            <MuseumSection title={pageContent.sections.jewelry.title} headingId="museum-jewelry">
              <MuseumThumbnailCarousel
                items={pageContent.sections.jewelry.items}
                prevAriaLabel={pageContent.sections.jewelry.prevAriaLabel}
                nextAriaLabel={pageContent.sections.jewelry.nextAriaLabel}
              />
            </MuseumSection>

            <MuseumSection title={pageContent.sections.paintings.title} headingId="museum-paintings">
              <MuseumFeaturedCarousel
                items={pageContent.sections.paintings.items}
                prevAriaLabel={pageContent.sections.paintings.prevAriaLabel}
                nextAriaLabel={pageContent.sections.paintings.nextAriaLabel}
              />
            </MuseumSection>

            <MuseumSection title={pageContent.sections.screen.title} headingId="museum-screen">
              <MuseumFeaturedCarousel
                items={pageContent.sections.screen.items}
                prevAriaLabel={pageContent.sections.screen.prevAriaLabel}
                nextAriaLabel={pageContent.sections.screen.nextAriaLabel}
              />
            </MuseumSection>
          </main>
        </>
      ) : (
        <div className={styles.skeleton} aria-busy="true" aria-live="polite">
          <span className="visuallyHidden">{a11y.loadingLabel}</span>
        </div>
      )}
    </div>
  )
}
