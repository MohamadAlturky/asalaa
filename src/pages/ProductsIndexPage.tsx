import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { AppLocale, HomeHeroContent } from '../types/homeContent'
import { useAppPreferences } from '../context/AppPreferencesContext'
import type { ProductsIndexContent } from '../types/productDetail'
import { getHomeHeroContent } from '../services/homeContentService'
import { getProductsIndexContent } from '../services/productDetailService'
import { Navbar } from '../components/home/Navbar'
import { ThemeToggle } from '../components/home/ThemeToggle'
import styles from './ProductsIndexPage.module.css'

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

export function ProductsIndexPage() {
  const { locale, setLocale, theme, setTheme } = useAppPreferences()
  const [heroContent, setHeroContent] = useState<HomeHeroContent | null>(null)
  const [indexContent, setIndexContent] = useState<ProductsIndexContent | null>(null)
  const [error, setError] = useState<string | null>(null)

  const isRtl = locale === 'ar'
  const a11y = A11Y[locale]
  const pageReady = heroContent !== null && indexContent !== null

  useEffect(() => {
    let cancelled = false
    setHeroContent(null)
    setIndexContent(null)
    setError(null)
    Promise.all([getHomeHeroContent(locale), getProductsIndexContent(locale)])
      .then(([hero, idx]) => {
        if (!cancelled) {
          setHeroContent(hero)
          setIndexContent(idx)
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

      {pageReady && heroContent && indexContent ? (
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
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                  <ol className={styles.breadcrumbList}>
                    <li>
                      <Link to="/">{indexContent.breadcrumbHomeLabel}</Link>
                    </li>
                    <li aria-hidden className={styles.breadcrumbSep}>
                      —
                    </li>
                    <li className={styles.breadcrumbCurrent}>{indexContent.pageTitle}</li>
                  </ol>
                </nav>
                <h1 className={styles.title}>{indexContent.pageTitle}</h1>
                <p className={styles.intro}>{indexContent.intro}</p>
              </div>
              <div className={styles.heroImageWrap}>
                <img
                  className={styles.heroImage}
                  src="/asalaa/images/mockup/museum-strip.svg"
                  alt=""
                  width={120}
                  height={200}
                />
              </div>
            </div>
          </div>
          <main className={styles.main}>
            <ul className={styles.grid}>
              {indexContent.products.map((product) => (
                <li key={product.slug}>
                  <Link className={styles.sampleCard} to={product.href}>
                    <span className={styles.sampleImgWrap}>
                      <img
                        className={styles.sampleImg}
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        width={200}
                        height={200}
                      />
                    </span>
                    <span className={styles.sampleCategory}>{product.categoryLabel}</span>
                    <span className={styles.sampleTitle}>{product.title}</span>
                    <span className={styles.samplePrice}>{product.priceDisplay}</span>
                  </Link>
                </li>
              ))}
            </ul>
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
