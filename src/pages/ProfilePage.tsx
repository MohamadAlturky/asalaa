import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { AppLocale, HomeHeroContent } from '../types/homeContent'
import type {
  ProfileData,
  ProfilePost,
  ProfileProduct,
  ProfileMuseumItem,
  ProfileArticle,
  ProfileVideo,
} from '../types/profile'
import { getHomeHeroContent } from '../services/homeContentService'
import {
  getProfileData,
  getProfilePosts,
  getProfileProducts,
  getProfileMuseumItems,
  getProfileArticles,
  getProfileVideos,
} from '../services/profileService'
import { Navbar } from '../components/home/Navbar'
import { ThemeToggle } from '../components/home/ThemeToggle'
import { ProfileHeader } from '../components/profile/ProfileHeader'
import {
  ProfileTabs,
  PROFILE_TAB_BUTTON_ID,
  PROFILE_TAB_PANEL_ID,
  type ProfileTabId,
} from '../components/profile/ProfileTabs'
import { ProfilePostsGrid } from '../components/profile/ProfilePostsGrid'
import { ProfileProductsGrid } from '../components/profile/ProfileProductsGrid'
import { ProfileMuseumGrid } from '../components/profile/ProfileMuseumGrid'
import { ProfileArticlesGrid } from '../components/profile/ProfileArticlesGrid'
import { ProfileVideosGrid } from '../components/profile/ProfileVideosGrid'
import styles from './ProfilePage.module.css'

type Theme = 'light' | 'dark'

type LocaleStrings = {
  navAriaLabel: string
  menuOpen: string
  menuClose: string
  themeToLight: string
  themeToDark: string
  languageMenu: string
  tablistAriaLabel: string
  sortDisabledLabel: string
  loadingLabel: string
  loadError: string
  retryLabel: string
}

const A11Y: Record<AppLocale, LocaleStrings> = {
  ar: {
    navAriaLabel: 'التنقل الرئيسي',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    themeToDark: 'التبديل إلى الوضع الداكن',
    languageMenu: 'اختيار اللغة',
    tablistAriaLabel: 'أقسام الملف الشخصي',
    sortDisabledLabel: 'الترتيب غير متاح حالياً',
    loadingLabel: 'جاري التحميل…',
    loadError: 'تعذر تحميل المحتوى.',
    retryLabel: 'إعادة المحاولة',
  },
  en: {
    navAriaLabel: 'Primary navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    languageMenu: 'Choose language',
    tablistAriaLabel: 'Profile sections',
    sortDisabledLabel: 'Sorting is not available yet',
    loadingLabel: 'Loading…',
    loadError: 'Could not load content.',
    retryLabel: 'Retry',
  },
}

export function ProfilePage() {
  const { username } = useParams<{ username: string }>()
  const [locale, setLocale] = useState<AppLocale>('ar')
  const [theme, setTheme] = useState<Theme>('dark')

  const [heroContent, setHeroContent] = useState<HomeHeroContent | null>(null)
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [profilePosts, setProfilePosts] = useState<ProfilePost[] | null>(null)
  const [profileProducts, setProfileProducts] = useState<ProfileProduct[] | null>(null)
  const [profileMuseumItems, setProfileMuseumItems] = useState<ProfileMuseumItem[] | null>(null)
  const [profileArticles, setProfileArticles] = useState<ProfileArticle[] | null>(null)
  const [profileVideos, setProfileVideos] = useState<ProfileVideo[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [refetchKey, setRefetchKey] = useState(0)

  const [activeTab, setActiveTab] = useState<ProfileTabId>('posts')

  const isRtl = locale === 'ar'
  const a11y = A11Y[locale]
  const chromeReady = heroContent !== null && profileData !== null

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
    setProfileData(null)
    setProfilePosts(null)
    setProfileProducts(null)
    setProfileMuseumItems(null)
    setProfileArticles(null)
    setProfileVideos(null)
    setError(null)

    Promise.all([
      getHomeHeroContent(locale),
      getProfileData(locale, username || ''),
    ])
      .then(([hero, profile]) => {
        if (cancelled) return
        setHeroContent(hero)
        setProfileData(profile)
      })
      .catch(() => {
        if (!cancelled) setError(a11y.loadError)
      })

    return () => {
      cancelled = true
    }
  }, [locale, username, refetchKey, a11y.loadError])

  useEffect(() => {
    if (!chromeReady) return
    let cancelled = false

    const handleError = () => {
      if (!cancelled) setError(a11y.loadError)
    }

    const u = username || ''
    if (activeTab === 'posts' && profilePosts === null) {
      getProfilePosts(locale, u)
        .then((data) => {
          if (!cancelled) setProfilePosts(data)
        })
        .catch(handleError)
    } else if (activeTab === 'products' && profileProducts === null) {
      getProfileProducts(locale, u)
        .then((data) => {
          if (!cancelled) setProfileProducts(data)
        })
        .catch(handleError)
    } else if (activeTab === 'museum' && profileMuseumItems === null) {
      getProfileMuseumItems(locale, u)
        .then((data) => {
          if (!cancelled) setProfileMuseumItems(data)
        })
        .catch(handleError)
    } else if (activeTab === 'articles' && profileArticles === null) {
      getProfileArticles(locale, u)
        .then((data) => {
          if (!cancelled) setProfileArticles(data)
        })
        .catch(handleError)
    } else if (activeTab === 'videos' && profileVideos === null) {
      getProfileVideos(locale, u)
        .then((data) => {
          if (!cancelled) setProfileVideos(data)
        })
        .catch(handleError)
    }

    return () => {
      cancelled = true
    }
  }, [
    activeTab,
    chromeReady,
    locale,
    username,
    profilePosts,
    profileProducts,
    profileMuseumItems,
    profileArticles,
    profileVideos,
    a11y.loadError,
  ])

  const triggerRefetch = () => setRefetchKey((k) => k + 1)

  if (error && !chromeReady) {
    return (
      <div className={styles.root} data-loading="false">
        <div className={styles.loadingThemeDock}>
          <ThemeToggle
            theme={theme}
            onChange={setTheme}
            labels={{ switchToLight: a11y.themeToLight, switchToDark: a11y.themeToDark }}
          />
        </div>
        <div className={styles.errorState}>
          <p className={styles.errorMessage} role="alert">
            {error}
          </p>
          <button type="button" className={styles.retryBtn} onClick={triggerRefetch}>
            {a11y.retryLabel}
          </button>
        </div>
      </div>
    )
  }

  if (!chromeReady || !heroContent || !profileData) {
    return (
      <div className={styles.root} data-loading="true">
        <div className={styles.loadingThemeDock}>
          <ThemeToggle
            theme={theme}
            onChange={setTheme}
            labels={{ switchToLight: a11y.themeToLight, switchToDark: a11y.themeToDark }}
          />
        </div>
        <div className={styles.skeleton} aria-busy="true" aria-live="polite">
          <span className="visuallyHidden">{a11y.loadingLabel}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.root} data-loading="false">
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
        <ProfileHeader profile={profileData} locale={locale} />
        <ProfileTabs
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          locale={locale}
          tablistAriaLabel={a11y.tablistAriaLabel}
          sortDisabledLabel={a11y.sortDisabledLabel}
        />

        {error ? (
          <div className={styles.errorState}>
            <p className={styles.errorMessage} role="alert">
              {error}
            </p>
            <button type="button" className={styles.retryBtn} onClick={triggerRefetch}>
              {a11y.retryLabel}
            </button>
          </div>
        ) : (
          <>
            {activeTab === 'posts' && (
              <section
                role="tabpanel"
                id={PROFILE_TAB_PANEL_ID.posts}
                aria-labelledby={PROFILE_TAB_BUTTON_ID.posts}
                tabIndex={0}
                className={styles.tabPanel}
              >
                {profilePosts === null ? (
                  <div className={styles.tabPanelLoading} aria-busy="true">
                    {a11y.loadingLabel}
                  </div>
                ) : (
                  <ProfilePostsGrid posts={profilePosts} locale={locale} />
                )}
              </section>
            )}
            {activeTab === 'products' && (
              <section
                role="tabpanel"
                id={PROFILE_TAB_PANEL_ID.products}
                aria-labelledby={PROFILE_TAB_BUTTON_ID.products}
                tabIndex={0}
                className={styles.tabPanel}
              >
                {profileProducts === null ? (
                  <div className={styles.tabPanelLoading} aria-busy="true">
                    {a11y.loadingLabel}
                  </div>
                ) : (
                  <ProfileProductsGrid products={profileProducts} locale={locale} />
                )}
              </section>
            )}
            {activeTab === 'museum' && (
              <section
                role="tabpanel"
                id={PROFILE_TAB_PANEL_ID.museum}
                aria-labelledby={PROFILE_TAB_BUTTON_ID.museum}
                tabIndex={0}
                className={styles.tabPanel}
              >
                {profileMuseumItems === null ? (
                  <div className={styles.tabPanelLoading} aria-busy="true">
                    {a11y.loadingLabel}
                  </div>
                ) : (
                  <ProfileMuseumGrid items={profileMuseumItems} locale={locale} />
                )}
              </section>
            )}
            {activeTab === 'articles' && (
              <section
                role="tabpanel"
                id={PROFILE_TAB_PANEL_ID.articles}
                aria-labelledby={PROFILE_TAB_BUTTON_ID.articles}
                tabIndex={0}
                className={styles.tabPanel}
              >
                {profileArticles === null ? (
                  <div className={styles.tabPanelLoading} aria-busy="true">
                    {a11y.loadingLabel}
                  </div>
                ) : (
                  <ProfileArticlesGrid articles={profileArticles} locale={locale} />
                )}
              </section>
            )}
            {activeTab === 'videos' && (
              <section
                role="tabpanel"
                id={PROFILE_TAB_PANEL_ID.videos}
                aria-labelledby={PROFILE_TAB_BUTTON_ID.videos}
                tabIndex={0}
                className={styles.tabPanel}
              >
                {profileVideos === null ? (
                  <div className={styles.tabPanelLoading} aria-busy="true">
                    {a11y.loadingLabel}
                  </div>
                ) : (
                  <ProfileVideosGrid videos={profileVideos} locale={locale} />
                )}
              </section>
            )}
          </>
        )}
      </main>
    </div>
  )
}
