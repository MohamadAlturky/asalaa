import { useEffect, useRef } from 'react'
import type { KeyboardEvent } from 'react'
import type { AppLocale } from '../../types/homeContent'
import styles from './ProfileTabs.module.css'

export type ProfileTabId = 'posts' | 'products' | 'museum' | 'articles' | 'videos'

type ProfileTabsProps = {
  activeTab: ProfileTabId
  onChangeTab: (tab: ProfileTabId) => void
  locale: AppLocale
  tablistAriaLabel: string
  sortDisabledLabel: string
}

const TABS: ProfileTabId[] = ['posts', 'products', 'museum', 'articles', 'videos']

export const PROFILE_TAB_BUTTON_ID: Record<ProfileTabId, string> = {
  posts: 'profile-tab-posts',
  products: 'profile-tab-products',
  museum: 'profile-tab-museum',
  articles: 'profile-tab-articles',
  videos: 'profile-tab-videos',
}

export const PROFILE_TAB_PANEL_ID: Record<ProfileTabId, string> = {
  posts: 'profile-panel-posts',
  products: 'profile-panel-products',
  museum: 'profile-panel-museum',
  articles: 'profile-panel-articles',
  videos: 'profile-panel-videos',
}

function getTabStrings(locale: AppLocale) {
  if (locale === 'ar') {
    return {
      posts: 'المنشورات',
      products: 'المنتجات',
      museum: 'متحفي',
      articles: 'المقالات',
      videos: 'فيديوهاتي',
      sortBy: 'ترتيب حسب الأحدث',
    }
  }
  return {
    posts: 'Posts',
    products: 'Products',
    museum: 'My Museum',
    articles: 'Articles',
    videos: 'Videos',
    sortBy: 'Sort by latest',
  }
}

export function ProfileTabs({
  activeTab,
  onChangeTab,
  locale,
  tablistAriaLabel,
  sortDisabledLabel,
}: ProfileTabsProps) {
  const strings = getTabStrings(locale)
  const buttonRefs = useRef<Record<ProfileTabId, HTMLButtonElement | null>>({
    posts: null,
    products: null,
    museum: null,
    articles: null,
    videos: null,
  })
  const shouldFocusActiveRef = useRef(false)

  useEffect(() => {
    if (shouldFocusActiveRef.current) {
      buttonRefs.current[activeTab]?.focus()
      shouldFocusActiveRef.current = false
    }
  }, [activeTab])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const activeIndex = TABS.indexOf(activeTab)
    const isRtl = typeof document !== 'undefined' && document.documentElement.dir === 'rtl'
    let nextIndex: number | null = null

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = isRtl ? activeIndex - 1 : activeIndex + 1
        break
      case 'ArrowLeft':
        nextIndex = isRtl ? activeIndex + 1 : activeIndex - 1
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = TABS.length - 1
        break
      default:
        return
    }

    if (nextIndex === null) return
    const wrapped = (nextIndex + TABS.length) % TABS.length
    event.preventDefault()
    shouldFocusActiveRef.current = true
    onChangeTab(TABS[wrapped])
  }

  return (
    <div className={styles.container}>
      <div
        role="tablist"
        aria-label={tablistAriaLabel}
        className={styles.tabsRow}
        onKeyDown={handleKeyDown}
      >
        {TABS.map((tab) => {
          const isActive = tab === activeTab
          return (
            <button
              key={tab}
              ref={(el) => {
                buttonRefs.current[tab] = el
              }}
              type="button"
              role="tab"
              id={PROFILE_TAB_BUTTON_ID[tab]}
              aria-selected={isActive}
              aria-controls={PROFILE_TAB_PANEL_ID[tab]}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChangeTab(tab)}
              className={`${styles.tab} ${isActive ? styles.tabActive : styles.tabInactive}`}
            >
              {tab === 'posts' && <IconPosts className={styles.tabIcon} />}
              {tab === 'products' && <IconProducts className={styles.tabIcon} />}
              {tab === 'museum' && <IconMuseum className={styles.tabIcon} />}
              {tab === 'articles' && <IconArticles className={styles.tabIcon} />}
              {tab === 'videos' && <IconVideos className={styles.tabIcon} />}
              <span>{strings[tab]}</span>
            </button>
          )
        })}
      </div>

      <button
        type="button"
        className={styles.sortBtn}
        disabled
        aria-disabled="true"
        title={sortDisabledLabel}
      >
        <span className={styles.sortLabel}>{strings.sortBy}</span>
        <IconChevronDown className={styles.sortIcon} />
      </button>
    </div>
  )
}

function IconPosts({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  )
}

function IconProducts({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  )
}

function IconMuseum({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  )
}

function IconArticles({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  )
}

function IconVideos({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <line x1="7" y1="2" x2="7" y2="22"></line>
      <line x1="17" y1="2" x2="17" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="2" y1="7" x2="7" y2="7"></line>
      <line x1="2" y1="17" x2="7" y2="17"></line>
      <line x1="17" y1="17" x2="22" y2="17"></line>
      <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>
  )
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}
