import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { AppLocale, HomeHeroContent } from '../types/homeContent'
import type { ProductDetailContent } from '../types/productDetail'
import { getHomeHeroContent } from '../services/homeContentService'
import { getProductDetail } from '../services/productDetailService'
import { Navbar } from '../components/home/Navbar'
import { ThemeToggle } from '../components/home/ThemeToggle'
import { ProductDetailGallery } from '../components/product/ProductDetailGallery'
import styles from './ProductDetailPage.module.css'

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
    notFound: string
    productsPageTitle: string
  }
> = {
  ar: {
    navAriaLabel: 'التنقل الرئيسي',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    themeToDark: 'التبديل إلى الوضع الداكن',
    languageMenu: 'اختيار اللغة',
    notFound: 'المنتج غير موجود.',
    productsPageTitle: 'منتجاتنا',
  },
  en: {
    navAriaLabel: 'Primary navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    languageMenu: 'Choose language',
    notFound: 'Product not found.',
    productsPageTitle: 'Our products',
  },
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const resolvedSlug = slug ?? ''
  const [locale, setLocale] = useState<AppLocale>('ar')
  const [theme, setTheme] = useState<Theme>('dark')
  const [heroContent, setHeroContent] = useState<HomeHeroContent | null>(null)
  const [product, setProduct] = useState<ProductDetailContent | null>(null)
  const [loadedSlug, setLoadedSlug] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [galleryIndex, setGalleryIndex] = useState(0)
  const [sizeId, setSizeId] = useState<string | null>(null)
  const [colorId, setColorId] = useState<string | null>(null)

  const isRtl = locale === 'ar'
  const a11y = A11Y[locale]
  const pageReady = heroContent !== null && loadedSlug === resolvedSlug && product !== null

  useEffect(() => {
    const root = document.documentElement
    root.lang = locale === 'ar' ? 'ar' : 'en'
    root.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    if (!resolvedSlug) return
    let cancelled = false
    setHeroContent(null)
    setProduct(null)
    setLoadedSlug(null)
    setGalleryIndex(0)
    setSizeId(null)
    setColorId(null)
    setError(null)
    Promise.all([getHomeHeroContent(locale), getProductDetail(locale, resolvedSlug)])
      .then(([hero, detail]) => {
        if (cancelled) return
        setHeroContent(hero)
        if (detail) {
          setProduct(detail)
          setSizeId(detail.defaultSizeId)
          setColorId(detail.defaultColorId)
        } else {
          setProduct(null)
        }
        setLoadedSlug(resolvedSlug)
      })
      .catch(() => {
        if (!cancelled) setError(locale === 'ar' ? 'تعذر تحميل المحتوى.' : 'Could not load content.')
      })
    return () => {
      cancelled = true
    }
  }, [locale, resolvedSlug])

  const showNotFound = loadedSlug === resolvedSlug && product === null && !error

  return (
    <div className={styles.root} data-loading={pageReady || showNotFound ? 'false' : 'true'}>
      {!pageReady && !showNotFound ? (
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

      {heroContent && loadedSlug === resolvedSlug ? (
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
                {product ? (
                  <>
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                      <ol className={styles.breadcrumbList}>
                        <li>
                          <Link to="/">{product.breadcrumbHomeLabel}</Link>
                        </li>
                        <li aria-hidden className={styles.breadcrumbSep}>
                          —
                        </li>
                        <li>
                          <Link to="/products">{product.breadcrumbProductsLabel}</Link>
                        </li>
                        <li aria-hidden className={styles.breadcrumbSep}>
                          —
                        </li>
                        <li className={styles.breadcrumbCurrent}>{product.title}</li>
                      </ol>
                    </nav>
                    <h1 className={styles.pageHeading}>{product.pageTitle}</h1>
                  </>
                ) : (
                  <>
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                      <ol className={styles.breadcrumbList}>
                        <li>
                          <Link to="/">{locale === 'ar' ? 'الصفحة الرئيسية' : 'Home'}</Link>
                        </li>
                        <li aria-hidden className={styles.breadcrumbSep}>
                          —
                        </li>
                        <li>
                          <Link to="/products">{a11y.productsPageTitle}</Link>
                        </li>
                      </ol>
                    </nav>
                    <h1 className={styles.pageHeading}>{a11y.productsPageTitle}</h1>
                    {showNotFound ? <p className={styles.heroAlert}>{a11y.notFound}</p> : null}
                  </>
                )}
              </div>
              <div className={styles.heroImageWrap}>
                <img
                  className={styles.heroImage}
                  src={product?.heroDecorImageSrc ?? '/images/mockup/museum-strip.svg'}
                  alt={product?.heroDecorImageAlt ?? ''}
                  width={120}
                  height={200}
                />
              </div>
            </div>
          </div>

          <main className={styles.main}>
            {product && sizeId && colorId ? (
              <div className={styles.card}>
                <div className={styles.grid}>
                  <div className={styles.galleryCol}>
                    <ProductDetailGallery
                      images={product.images}
                      activeIndex={galleryIndex}
                      onSelectIndex={setGalleryIndex}
                      prevLabel={product.galleryPrevLabel}
                      nextLabel={product.galleryNextLabel}
                      thumbnailPickerLabel={product.thumbnailPickerLabel}
                    />
                    <div className={styles.ctas}>
                      <button type="button" className={styles.btnSecondary}>
                        {product.addToCartLabel}
                      </button>
                      <button type="button" className={styles.btnPrimary}>
                        {product.buyNowLabel}
                      </button>
                    </div>
                  </div>

                  <div className={styles.infoCol}>
                    <span className={styles.categoryPill}>{product.categoryLabel}</span>
                    <h2 className={styles.productTitle}>{product.title}</h2>
                    {product.descriptionParagraphs.map((p, i) => (
                      <p key={i} className={styles.desc}>
                        {p}
                      </p>
                    ))}
                    <p className={styles.price}>{product.priceDisplay}</p>

                    <fieldset className={styles.optionFieldset}>
                      <legend className={styles.optionLegend}>{product.sizeOptions.label}</legend>
                      <div className={styles.optionRow} role="group">
                        {product.sizeOptions.choices.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            className={`${styles.optionBtn} ${sizeId === c.id ? styles.optionBtnActive : ''}`}
                            aria-pressed={sizeId === c.id}
                            onClick={() => setSizeId(c.id)}
                          >
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset className={styles.optionFieldset}>
                      <legend className={styles.optionLegend}>{product.colorOptions.label}</legend>
                      <div className={styles.optionRow} role="group">
                        {product.colorOptions.choices.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            className={`${styles.optionBtn} ${colorId === c.id ? styles.optionBtnActive : ''}`}
                            aria-pressed={colorId === c.id}
                            onClick={() => setColorId(c.id)}
                          >
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            ) : showNotFound ? (
              <div className={styles.card}>
                <p className={styles.notFound}>{a11y.notFound}</p>
                <p>
                  <Link to="/products" className={styles.backLink}>
                    {locale === 'ar' ? 'العودة إلى منتجاتنا' : 'Back to products'}
                  </Link>
                </p>
              </div>
            ) : null}
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
