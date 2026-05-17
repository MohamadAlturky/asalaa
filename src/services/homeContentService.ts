import type { AppLocale, HomeHeroContent } from '../types/homeContent'

const PALMYRA_STRIP =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Palmyra_in_Syria_%285345187207%29.jpg/1200px-Palmyra_in_Syria_%285345187207%29.jpg'

const FUNERARY_BUST =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Funerary_relief_for_a_woman%2C_Palmyra%2C_Syria%2C_3rd_century_AD%2C_limestone_-_Cincinnati_Art_Museum_-_DSC04743.JPG/900px-Funerary_relief_for_a_woman%2C_Palmyra%2C_Syria%2C_3rd_century_AD%2C_limestone_-_Cincinnati_Art_Museum_-_DSC04743.JPG'

const DATA: Record<AppLocale, HomeHeroContent> = {
  ar: {
    brandName: 'أصالة',
    navLinks: [
      { href: '#discover', label: 'اكتشف سوريا' },
      { href: '#museum', label: 'متحف أصالة' },
      { href: '#heritage', label: 'من ذاكرة التراث' },
    ],
    hero: {
      topStripSrc: PALMYRA_STRIP,
      topStripAlt: 'آثار سورية عند الغروب',
      title: 'متحف أصالة الإلكتروني',
      taglines: [
        'نافذة رقمية إلى تراث سوريا وحضارتها، تجمع بين العلم والجمال لتحفظ الذاكرة وترويها لأجيال القادمين.',
        'استكشف القطع والحكايات التي شكلت هوية الوطن عبر العصور.',
      ],
      ctaLabel: 'ابدأ رحلتك',
      ctaHref: '#heritage',
      bustSrc: FUNERARY_BUST,
      bustAlt: 'نحت حجري فني من تدمر، المتحف الأمريكي بالسينسيناتي',
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
      topStripSrc: PALMYRA_STRIP,
      topStripAlt: 'Syrian ruins at dusk',
      title: 'Asala Electronic Museum',
      taglines: [
        'A digital window into Syria’s heritage and civilization—where scholarship and beauty meet to preserve memory for future generations.',
        'Explore the objects and stories that shaped the nation across the ages.',
      ],
      ctaLabel: 'Start your journey',
      ctaHref: '#heritage',
      bustSrc: FUNERARY_BUST,
      bustAlt: 'Palmyrene limestone funerary relief (3rd century), Cincinnati Art Museum',
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
    hero: {
      ...base.hero,
      taglines: [...base.hero.taglines],
    },
    languageOptions: base.languageOptions.map((option) => ({ ...option })),
  }
}
