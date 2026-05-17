import type { AppLocale, HomeHeroContent } from '../types/homeContent'

const DATA: Record<AppLocale, HomeHeroContent> = {
  ar: {
    brandName: 'أصالة',
    navLinks: [
      { href: '#discover', label: 'اكتشف سوريا' },
      { href: '#museum', label: 'متحف أصالة' },
      { href: '#heritage', label: 'من ذاكرة التراث' },
    ],
    hero: {
      line1: 'حكاية وطن',
      line2: 'تُروى بالفن',
    },
    languageOptions: [
      { locale: 'ar', label: 'العربية' },
      { locale: 'en', label: 'English' },
    ],
  },
  en: {
    brandName: 'Asala',
    navLinks: [
      { href: '#discover', label: 'Discover Syria' },
      { href: '#museum', label: 'Asala Museum' },
      { href: '#heritage', label: 'From Heritage Memory' },
    ],
    hero: {
      line1: 'A story of a nation',
      line2: 'Told through art',
    },
    languageOptions: [
      { locale: 'en', label: 'English' },
      { locale: 'ar', label: 'العربية' },
    ],
  },
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Dummy API: replace with fetch('/api/home-hero?locale=...') when backend is ready.
 */
export async function getHomeHeroContent(locale: AppLocale): Promise<HomeHeroContent> {
  await delay(280)
  const base = DATA[locale]
  return {
    ...base,
    navLinks: base.navLinks.map((link) => ({ ...link })),
    hero: { ...base.hero },
    languageOptions: base.languageOptions.map((option) => ({ ...option })),
  }
}
