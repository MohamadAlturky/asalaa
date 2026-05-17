import type { AppLocale } from '../types/homeContent'
import type { HomeExtendedSectionsContent } from '../types/homeExtendedSections'

export const EXTENDED_MOCKUP_IMAGE_PATHS = {
  productBrassMortar: '/images/mockup/product-brass-mortar.png',
} as const

const PRODUCT_ALT_AR = 'مدق هاون نحاسي مزخرف'
const PRODUCT_ALT_EN = 'Decorated brass mortar and pestle'

function makeCards(
  locale: AppLocale,
): HomeExtendedSectionsContent['newProducts']['cards'] {
  const imageSrc = EXTENDED_MOCKUP_IMAGE_PATHS.productBrassMortar
  const imageAlt = locale === 'ar' ? PRODUCT_ALT_AR : PRODUCT_ALT_EN
  const category = locale === 'ar' ? 'نحاسيات' : 'Brassware'
  const title =
    locale === 'ar'
      ? 'مدق هاون نحاس محفور يدوياً تراث..'
      : 'Hand-engraved brass mortar, heritage…'
  const creator = locale === 'ar' ? 'فاروق علاء الدين' : 'Farouk Alaa Al-Din'
  const price = locale === 'ar' ? '800,000 ل.س' : '800,000 SYP'

  return Array.from({ length: 8 }, (_, i) => ({
    id: `np-${i + 1}`,
    href: `#product-${i + 1}`,
    imageSrc,
    imageAlt,
    categoryLabel: category,
    title,
    creatorName: creator,
    priceLabel: price,
  }))
}

const DATA: Record<AppLocale, HomeExtendedSectionsContent> = {
  ar: {
    storyVideo: {
      heading: 'كل مشهد يحكي قصة من تاريخنا',
      ctaLabel: 'شاهد المزيد',
      ctaHref: '#story-video',
      playButtonAriaLabel: 'تشغيل المقطع',
    },
    newProducts: {
      sectionTitle: 'منتجات جديدة',
      viewAllLabel: 'عرض الكل ←',
      viewAllHref: '#products-new',
      wishlistAddAriaLabel: 'إضافة إلى المفضلة',
      wishlistRemoveAriaLabel: 'إزالة من المفضلة',
      cards: [],
    },
    footer: {
      logoAlt: 'شعار أصالة',
      navAriaLabel: 'روابط تذييل الصفحة',
      links: [
        { href: '#discover-syria', label: 'اكتشف سوريا' },
        { href: '#museum', label: 'متحف أصالة' },
        { href: '#heritage', label: 'من ذاكرة التراث' },
      ],
      socials: [
        { href: 'https://www.facebook.com/', ariaLabel: 'فيسبوك', network: 'facebook' },
        { href: 'https://www.instagram.com/', ariaLabel: 'إنستغرام', network: 'instagram' },
        { href: 'https://www.youtube.com/', ariaLabel: 'يوتيوب', network: 'youtube' },
      ],
    },
  },
  en: {
    storyVideo: {
      heading: 'Every scene tells a story from our history',
      ctaLabel: 'See more',
      ctaHref: '#story-video',
      playButtonAriaLabel: 'Play clip',
    },
    newProducts: {
      sectionTitle: 'New products',
      viewAllLabel: 'View all →',
      viewAllHref: '#products-new',
      wishlistAddAriaLabel: 'Add to wishlist',
      wishlistRemoveAriaLabel: 'Remove from wishlist',
      cards: [],
    },
    footer: {
      logoAlt: 'Asala logo',
      navAriaLabel: 'Footer links',
      links: [
        { href: '#discover-syria', label: 'Discover Syria' },
        { href: '#museum', label: 'Asala Museum' },
        { href: '#heritage', label: 'From the memory of heritage' },
      ],
      socials: [
        { href: 'https://www.facebook.com/', ariaLabel: 'Facebook', network: 'facebook' },
        { href: 'https://www.instagram.com/', ariaLabel: 'Instagram', network: 'instagram' },
        { href: 'https://www.youtube.com/', ariaLabel: 'YouTube', network: 'youtube' },
      ],
    },
  },
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getHomeExtendedSectionsContent(
  locale: AppLocale,
): Promise<HomeExtendedSectionsContent> {
  await delay(180)
  const base = DATA[locale]
  return {
    storyVideo: { ...base.storyVideo },
    newProducts: {
      ...base.newProducts,
      cards: makeCards(locale),
    },
    footer: {
      ...base.footer,
      links: base.footer.links.map((l) => ({ ...l })),
      socials: base.footer.socials.map((s) => ({ ...s })),
    },
  }
}
