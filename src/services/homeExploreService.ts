import type { AppLocale } from '../types/homeContent'
import type { HomeExploreContent } from '../types/homeExplore'

const PALMYRA_CARD =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Palmyra%2C_Syria_%283%29.jpg/960px-Palmyra%2C_Syria_%283%29.jpg'

const APP_STORE_BADGE =
  'https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg'

const PLAY_STORE_BADGE =
  'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'

const DATA: Record<AppLocale, HomeExploreContent> = {
  ar: {
    categories: [
      { id: 'stores', href: '#stores', label: 'المتاجر', iconVariant: 'lamp' },
      { id: 'artisans', href: '#artisans', label: 'الحرفيين', iconVariant: 'lamp' },
      { id: 'products', href: '#products', label: 'المنتجات', iconVariant: 'lamp' },
      { id: 'app', href: '#asala-app', label: 'تطبيق أصالة', iconVariant: 'lamp' },
      { id: 'categories', href: '#categories', label: 'الفئات (فئات المنتجات)', iconVariant: 'lamp' },
    ],
    banner: {
      heading: 'اكتشف سوريا',
      ctaLabel: 'ابدأ الآن',
      ctaHref: '#discover',
      imageSrc: PALMYRA_CARD,
      imageAlt: 'آثار تدمر — تترابيلون',
    },
    heritage: {
      title: 'من ذاكرة التراث',
      viewAllLabel: 'عرض الكل',
      viewAllHref: '#',
      cards: [
        {
          id: 'c1',
          title: 'تدمر قلب سوريا الغائب الحاضر',
          excerpt:
            'رحلة قصيرة عبر صور وحكايات المدينة المنسوجة بين التاريخ والذاكرة الجمعية، وما تعنيه اليوم لمن يحملون ترابها في القلب.',
          authorName: 'يزن طليمات',
          timeLabel: 'منذ يومين',
          imageSrc: PALMYRA_CARD,
          imageAlt: 'أعمدة تدمر',
          authorAvatarSrc: '/images/avatar-placeholder.svg',
        },
        {
          id: 'c2',
          title: 'تدمر قلب سوريا الغائب الحاضر',
          excerpt:
            'رحلة قصيرة عبر صور وحكايات المدينة المنسوجة بين التاريخ والذاكرة الجمعية، وما تعنيه اليوم لمن يحملون ترابها في القلب.',
          authorName: 'يزن طليمات',
          timeLabel: 'منذ يومين',
          imageSrc: PALMYRA_CARD,
          imageAlt: 'أعمدة تدمر',
          authorAvatarSrc: '/images/avatar-placeholder.svg',
        },
        {
          id: 'c3',
          title: 'تدمر قلب سوريا الغائب الحاضر',
          excerpt:
            'رحلة قصيرة عبر صور وحكايات المدينة المنسوجة بين التاريخ والذاكرة الجمعية، وما تعنيه اليوم لمن يحملون ترابها في القلب.',
          authorName: 'يزن طليمات',
          timeLabel: 'منذ يومين',
          imageSrc: PALMYRA_CARD,
          imageAlt: 'أعمدة تدمر',
          authorAvatarSrc: '/images/avatar-placeholder.svg',
        },
      ],
    },
    appPromo: {
      heading: 'حمل تطبيق أصالة الآن على',
      mockupSrc: '/images/app-mockup.svg',
      mockupAlt: 'معاينة واجهة تطبيق أصالة على هاتف',
      appStoreHref: 'https://apps.apple.com/',
      playStoreHref: 'https://play.google.com/store',
      appStoreBadgeSrc: APP_STORE_BADGE,
      appStoreBadgeAlt: 'حمّل من App Store',
      playStoreBadgeSrc: PLAY_STORE_BADGE,
      playStoreBadgeAlt: 'احصل عليه من Google Play',
    },
  },
  en: {
    categories: [
      { id: 'stores', href: '#stores', label: 'Stores', iconVariant: 'lamp' },
      { id: 'artisans', href: '#artisans', label: 'Artisans', iconVariant: 'lamp' },
      { id: 'products', href: '#products', label: 'Products', iconVariant: 'lamp' },
      { id: 'app', href: '#asala-app', label: 'Asala app', iconVariant: 'lamp' },
      { id: 'categories', href: '#categories', label: 'Categories (product types)', iconVariant: 'lamp' },
    ],
    banner: {
      heading: 'Discover Syria',
      ctaLabel: 'Start now',
      ctaHref: '#discover',
      imageSrc: PALMYRA_CARD,
      imageAlt: 'Palmyra ruins — columns at the site',
    },
    heritage: {
      title: 'From the memory of heritage',
      viewAllLabel: 'View all',
      viewAllHref: '#',
      cards: [
        {
          id: 'c1',
          title: 'Palmyra—the absent-present heart of Syria',
          excerpt:
            'A short journey through images and stories of a city woven between history and collective memory, and what it means today for those who carry its soil in their hearts.',
          authorName: 'Yazan Tleimat',
          timeLabel: 'Two days ago',
          imageSrc: PALMYRA_CARD,
          imageAlt: 'Palmyra columns',
          authorAvatarSrc: '/images/avatar-placeholder.svg',
        },
        {
          id: 'c2',
          title: 'Palmyra—the absent-present heart of Syria',
          excerpt:
            'A short journey through images and stories of a city woven between history and collective memory, and what it means today for those who carry its soil in their hearts.',
          authorName: 'Yazan Tleimat',
          timeLabel: 'Two days ago',
          imageSrc: PALMYRA_CARD,
          imageAlt: 'Palmyra columns',
          authorAvatarSrc: '/images/avatar-placeholder.svg',
        },
        {
          id: 'c3',
          title: 'Palmyra—the absent-present heart of Syria',
          excerpt:
            'A short journey through images and stories of a city woven between history and collective memory, and what it means today for those who carry its soil in their hearts.',
          authorName: 'Yazan Tleimat',
          timeLabel: 'Two days ago',
          imageSrc: PALMYRA_CARD,
          imageAlt: 'Palmyra columns',
          authorAvatarSrc: '/images/avatar-placeholder.svg',
        },
      ],
    },
    appPromo: {
      heading: 'Download the Asala app now on',
      mockupSrc: '/images/app-mockup.svg',
      mockupAlt: 'Preview of the Asala app on a phone',
      appStoreHref: 'https://apps.apple.com/',
      playStoreHref: 'https://play.google.com/store',
      appStoreBadgeSrc: APP_STORE_BADGE,
      appStoreBadgeAlt: 'Download on the App Store',
      playStoreBadgeSrc: PLAY_STORE_BADGE,
      playStoreBadgeAlt: 'Get it on Google Play',
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
    heritage: {
      ...base.heritage,
      cards: base.heritage.cards.map((card) => ({ ...card })),
    },
    appPromo: { ...base.appPromo },
  }
}
