import type { AppLocale } from '../types/homeContent'
import type { HomeExploreContent } from '../types/homeExplore'

const DATA: Record<AppLocale, HomeExploreContent> = {
  ar: {
    categories: [
      { id: 'stores', href: '#stores', label: 'المتاجر', imageSrc: '/asalaa/images/categories/متاجر-removebg-preview.png', imageAlt: 'سوق تقليدي' },
      { id: 'artisans', href: '#artisans', label: 'الحرفيين', imageSrc: '/asalaa/images/categories/حرفيين-removebg-preview.png', imageAlt: 'حرفي يعمل الفخار' },
      { id: 'products', href: '/products', label: 'المنتجات', imageSrc: '/asalaa/images/categories/منتجات-removebg-preview.png', imageAlt: 'منتجات يدوية تقليدية' },
      { id: 'app', href: '#asala-app', label: 'تطبيق أصالة', imageSrc: '/asalaa/images/categories/تطبيق_أصالة-removebg-preview.png', imageAlt: 'تطبيق على الهاتف الذكي' },
    ],
    banner: {
      heading: 'اكتشف سوريا',
      ctaLabel: 'إبدأ الآن',
      ctaHref: '/explore-syria',
      imageSrc: '/asalaa/images/figma/palmyra-tetrapylon.png',
      imageAlt: 'رباعي الأعمدة في تدمر',
    },
  },
  en: {
    categories: [
      { id: 'stores', href: '#stores', label: 'Stores', imageSrc: 'https://images.unsplash.com/photo-1567981964101-13d2faf0e38b?auto=format&fit=crop&w=200&h=200&q=80', imageAlt: 'Traditional market' },
      { id: 'artisans', href: '#artisans', label: 'Artisans', imageSrc: 'https://images.unsplash.com/photo-1422246358533-95dcd3d48961?auto=format&fit=crop&w=200&h=200&q=80', imageAlt: 'Artisan doing pottery' },
      { id: 'products', href: '/products', label: 'Products', imageSrc: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=200&h=200&q=80', imageAlt: 'Traditional handmade products' },
      { id: 'app', href: '#asala-app', label: 'Asala app', imageSrc: 'https://images.unsplash.com/photo-1744900647430-965ccc7a6078?auto=format&fit=crop&w=200&h=200&q=80', imageAlt: 'App on a smartphone' },
      { id: 'categories', href: '#categories', label: 'Categories (product types)', imageSrc: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=200&h=200&q=80', imageAlt: 'Shopping and product categories' },
    ],
    banner: {
      heading: 'Discover Syria',
      ctaLabel: 'Start now',
      ctaHref: '/explore-syria',
      imageSrc: '/asalaa/images/figma/palmyra-tetrapylon.png',
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
