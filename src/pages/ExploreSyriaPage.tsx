import { useEffect, useState } from 'react'
import type { AppLocale, HomeHeroContent } from '../types/homeContent'
import { useAppPreferences } from '../context/AppPreferencesContext'
import type { ExploreSyriaPageContent } from '../types/exploreSyria'
import { getHomeHeroContent } from '../services/homeContentService'
import { getExploreSyriaContent } from '../services/exploreSyriaService'
import { Navbar } from '../components/home/Navbar'
import { ThemeToggle } from '../components/home/ThemeToggle'
import { ExploreSyriaMasonry } from '../components/explore/ExploreSyriaMasonry'
import { ExploreSyriaFeed } from '../components/explore/ExploreSyriaFeed'
import { ExploreSyriaExploreTabs, type ExploreSyriaTabId } from '../components/explore/ExploreSyriaExploreTabs'
import styles from './ExploreSyriaPage.module.css'

const A11Y: Record<
  AppLocale,
  {
    navAriaLabel: string
    menuOpen: string
    menuClose: string
    themeToLight: string
    themeToDark: string
    languageMenu: string
    exploreTabs: string
  }
> = {
  ar: {
    navAriaLabel: 'التنقل الرئيسي',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    themeToDark: 'التبديل إلى الوضع الداكن',
    languageMenu: 'اختيار اللغة',
    exploreTabs: 'أقسام صفحة اكتشف سوريا',
  },
  en: {
    navAriaLabel: 'Primary navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    languageMenu: 'Choose language',
    exploreTabs: 'Explore Syria sections',
  },
}

export function ExploreSyriaPage() {
  const { locale, setLocale, theme, setTheme } = useAppPreferences()
  const [heroContent, setHeroContent] = useState<HomeHeroContent | null>(null)
  const [explorePage, setExplorePage] = useState<ExploreSyriaPageContent | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<ExploreSyriaTabId>('posts')

  const isRtl = locale === 'ar'
  const a11y = A11Y[locale]
  const pageReady = heroContent !== null && explorePage !== null

  useEffect(() => {
    let cancelled = false
    // eslint-disable-next-line react-hooks/set-state-in-effect -- clear stale content while refetching (same pattern as HomePage)
    setHeroContent(null)
    setExplorePage(null)
    setError(null)
    Promise.all([getHomeHeroContent(locale), getExploreSyriaContent(locale)])
      .then(([hero, explore]) => {
        if (!cancelled) {
          setHeroContent(hero)
          setExplorePage(explore)
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

      {pageReady && heroContent && explorePage ? (
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
            <div className={styles.heroRow}>
              <div className={styles.heroCopy}>
                <p className={styles.breadcrumb}>{explorePage.breadcrumb}</p>
                <h1 className={styles.title}>{explorePage.title}</h1>
              </div>
              <div className={styles.heroImageWrap}>
                <img
                  className={styles.heroImage}
                  src={explorePage.heroImageSrc}
                  alt={explorePage.heroImageAlt}
                  width={120}
                  height={200}
                />
              </div>
            </div>
          </div>
          <main className={styles.main}>
            <div className={styles.mainInner}>
              {activeTab === 'posts' ? (
                <ExploreSyriaFeed
                  posts={explorePage.posts}
                  locale={locale}
                  currentUserAvatarSrc="/asalaa/images/avatar-placeholder.svg"
                />
              ) : null}
              {activeTab === 'photos' ? <ExploreSyriaMasonry content={explorePage} locale={locale} /> : null}
              {activeTab === 'discover' ? (
                <section className={styles.discoverPanel} aria-labelledby="discover-intro-heading">
                  <h2 id="discover-intro-heading" className={styles.discoverTitle}>
                    {explorePage.discoverIntro.title}
                  </h2>
                  <p className={styles.discoverBody}>{explorePage.discoverIntro.body}</p>
                  <button type="button" className={styles.discoverCta} onClick={() => setActiveTab('photos')}>
                    {explorePage.discoverIntro.browsePhotosCta}
                  </button>
                </section>
              ) : null}
            </div>
          </main>
          <ExploreSyriaExploreTabs
            active={activeTab}
            onChange={setActiveTab}
            labels={{
              discover: explorePage.overlayButtons.discover,
              photos: explorePage.overlayButtons.photos,
              posts: explorePage.overlayButtons.posts,
            }}
            tablistAriaLabel={a11y.exploreTabs}
          />
        </>
      ) : (
        <div className={styles.skeleton} aria-busy="true" aria-live="polite">
          <span className="visuallyHidden">{locale === 'ar' ? 'جاري التحميل…' : 'Loading…'}</span>
        </div>
      )}
    </div>
  )
}
