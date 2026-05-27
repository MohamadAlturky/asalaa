import type { AppLocale } from '../types/homeContent'
import type { HomeExploreContent } from '../types/homeExplore'

const DATA: Record<AppLocale, HomeExploreContent> = {
  ar: {
    categories: [
      { id: 'stores', href: '#stores', label: 'المتاجر', iconVariant: 'lamp' },
      { id: 'artisans', href: '#artisans', label: 'الحرفيين', iconVariant: 'lamp' },
      { id: 'products', href: '/products', label: 'المنتجات', iconVariant: 'lamp' },
      { id: 'app', href: '#asala-app', label: 'تطبيق أصالة', iconVariant: 'lamp' },
      { id: 'categories', href: '#categories', label: 'الفئات (فئات المنتجات)', iconVariant: 'lamp' },
    ],
    banner: {
      heading: 'اكتشف سوريا',
      ctaLabel: 'إبدأ الآن',
      ctaHref: '/explore-syria',
      imageSrc: '/images/figma/palmyra-tetrapylon.png',
      imageAlt: 'رباعي الأعمدة في تدمر',
    },
  },
  en: {
    categories: [
      { id: 'stores', href: '#stores', label: 'Stores', iconVariant: 'lamp' },
      { id: 'artisans', href: '#artisans', label: 'Artisans', iconVariant: 'lamp' },
      { id: 'products', href: '/products', label: 'Products', iconVariant: 'lamp' },
      { id: 'app', href: '#asala-app', label: 'Asala app', iconVariant: 'lamp' },
      { id: 'categories', href: '#categories', label: 'Categories (product types)', iconVariant: 'lamp' },
    ],
    banner: {
      heading: 'Discover Syria',
      ctaLabel: 'Start now',
      ctaHref: '/explore-syria',
      imageSrc: '/images/figma/palmyra-tetrapylon.png',
      imageAlt: 'Tetrapylon at Palmyra',
    },
  },
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Dummy API: replace with fetch('/api/home-explore?locale=...') when backend is ready.
 */
export async function getHomeExploreContent(locale: AppLocale): Promise<HomeExploreContent> {
  await delay(220)
  const base = DATA[locale]
  return {
    categories: base.categories.map((c) => ({ ...c })),
    banner: { ...base.banner },
  }
}
