import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { AppLocale, HomeHeroContent } from '../types/homeContent'
import type { ProfileData, ProfilePost } from '../types/profile'
import { getHomeHeroContent } from '../services/homeContentService'
import { getProfileData, getProfilePosts } from '../services/profileService'
import { Navbar } from '../components/home/Navbar'
import { ThemeToggle } from '../components/home/ThemeToggle'
import { ProfileHeader } from '../components/profile/ProfileHeader'
import { ProfileTabs, type ProfileTabId } from '../components/profile/ProfileTabs'
import { ProfilePostsGrid } from '../components/profile/ProfilePostsGrid'
import styles from './ProfilePage.module.css'

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

export function ProfilePage() {
  const { username } = useParams<{ username: string }>()
  const [locale, setLocale] = useState<AppLocale>('ar')
  const [theme, setTheme] = useState<Theme>('dark')
  
  const [heroContent, setHeroContent] = useState<HomeHeroContent | null>(null)
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [profilePosts, setProfilePosts] = useState<ProfilePost[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const [activeTab, setActiveTab] = useState<ProfileTabId>('posts')

  const isRtl = locale === 'ar'
  const a11y = A11Y[locale]
  const pageReady = heroContent !== null && profileData !== null && profilePosts !== null

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
    setError(null)
    
    Promise.all([
      getHomeHeroContent(locale),
      getProfileData(locale, username || ''),
      getProfilePosts(locale, username || '')
    ])
      .then(([hero, profile, posts]) => {
        if (!cancelled) {
          setHeroContent(hero)
          setProfileData(profile)
          setProfilePosts(posts)
        }
      })
      .catch(() => {
        if (!cancelled) setError(locale === 'ar' ? 'تعذر تحميل المحتوى.' : 'Could not load content.')
      })
      
    return () => {
      cancelled = true
    }
  }, [locale, username])

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

      {pageReady && heroContent && profileData && profilePosts ? (
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
            <ProfileHeader profile={profileData} locale={locale} />
            <ProfileTabs activeTab={activeTab} onChangeTab={setActiveTab} locale={locale} />
            
            {activeTab === 'posts' && <ProfilePostsGrid posts={profilePosts} locale={locale} />}
            {activeTab !== 'posts' && (
              <div className={styles.emptyState}>
                <p>{locale === 'ar' ? 'لا يوجد محتوى لعرضه.' : 'No content to show.'}</p>
              </div>
            )}
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
