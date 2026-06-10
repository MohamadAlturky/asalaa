import type { AppLocale } from '../types/homeContent'
import type { HomeExtendedSectionsContent } from '../types/homeExtendedSections'

const CRAFT_IMAGES = [
  {
    src: '/asalaa/images/products/Gemini_Generated_Image_pkdubypkdubypkdu (3).png',
    alt_ar: 'نقش النحاس في سوق دمشق',
    alt_en: 'Coppersmithing in Damascus Souk',
    slug: 'brass-mortar',
    creator_ar: 'فاروق علاء الدين',
    creator_en: 'Farouk Alaa Al-Din',
    price_ar: '800,000 ل.س',
    price_en: '800,000 SYP',
  },
  {
    src: '/asalaa/images/products/Gemini_Generated_Image_pkdubypkdubypkdu.png',
    alt_ar: 'الفسيفساء الدمشقية المعقدة',
    alt_en: 'Mosaics in Damascus',
    slug: 'damascus-mosaic',
    creator_ar: 'سارة الحمصي',
    creator_en: 'Sara Al-Homsi',
    price_ar: '1,200,000 ل.س',
    price_en: '1,200,000 SYP',
  },
  {
    src: '/asalaa/images/products/Gemini_Generated_Image_pkdubypkdubypkdu (1).png',
    alt_ar: 'الخزف الحلبي التقليدي',
    alt_en: 'Ceramics in Aleppo',
    slug: 'ceramic-bowl',
    creator_ar: 'أحمد الحلبي',
    creator_en: 'Ahmad Al-Halabi',
    price_ar: '650,000 ل.س',
    price_en: '650,000 SYP',
  },
  {
    src: '/asalaa/images/products/Gemini_Generated_Image_pkdubypkdubypkdu (2).png',
    alt_ar: 'النسيج البدوي في تدمر',
    alt_en: 'Textiles in Palmyra',
    slug: 'silk-textile',
    creator_ar: 'ليلى البدوية',
    creator_en: 'Layla Al-Badawiyya',
    price_ar: '950,000 ل.س',
    price_en: '950,000 SYP',
  },
  {
    src: '/asalaa/images/products/Gemini_Generated_Image_zhsapyzhsapyzhsa.png',
    alt_ar: 'نفخ الزجاج الدمشقي',
    alt_en: 'Glassblowing in Damascus',
    slug: 'blown-glass-vase',
    creator_ar: 'كريم الدمشقي',
    creator_en: 'Karim Al-Dimashqi',
    price_ar: '1,500,000 ل.س',
    price_en: '1,500,000 SYP',
  },
  {
    src: '/asalaa/images/products/Gemini_Generated_Image_zhsapyzhsapyzhsa (1).png',
    alt_ar: 'التطعيم بالصدف والماركتري',
    alt_en: 'Marquetry in Damascus',
    slug: 'marquetry-box',
    creator_ar: 'نور الطرابلسي',
    creator_en: 'Nour Al-Taraboulsi',
    price_ar: '1,100,000 ل.س',
    price_en: '1,100,000 SYP',
  },
  {
    src: '/asalaa/images/products/Gemini_Generated_Image_zhsapyzhsapyzhsa (2).png',
    alt_ar: 'صناعة صابون الغار الحلبي',
    alt_en: 'Soap Making in Aleppo',
    slug: 'aleppo-soap',
    creator_ar: 'يوسف الصابوني',
    creator_en: 'Youssef Al-Sabouni',
    price_ar: '350,000 ل.س',
    price_en: '350,000 SYP',
  },
  {
    src: '/asalaa/images/products/Gemini_Generated_Image_zhsapyzhsapyzhsa (3).png',
    alt_ar: 'التطريز اليدوي في حماة',
    alt_en: 'Hand Embroidery in Hama',
    slug: 'hand-embroidery',
    creator_ar: 'هند الحموية',
    creator_en: 'Hind Al-Hamawiyya',
    price_ar: '720,000 ل.س',
    price_en: '720,000 SYP',
  },
]

function makeCards(
  locale: AppLocale,
): HomeExtendedSectionsContent['newProducts']['cards'] {
  const category = locale === 'ar' ? 'حرف يدوية' : 'Handicrafts'

  return Array.from({ length: 8 }, (_, i) => {
    const craft = CRAFT_IMAGES[i]
    return {
      id: `np-${i + 1}`,
      href: `/products/${craft.slug}`,
      imageSrc: craft.src,
      imageAlt: locale === 'ar' ? craft.alt_ar : craft.alt_en,
      categoryLabel: category,
      title: locale === 'ar' ? craft.alt_ar : craft.alt_en,
      creatorName: locale === 'ar' ? craft.creator_ar : craft.creator_en,
      priceLabel: locale === 'ar' ? craft.price_ar : craft.price_en,
    }
  })
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
      viewAllHref: '/products',
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
      viewAllHref: '/products',
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
