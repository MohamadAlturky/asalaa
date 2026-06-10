import type { AppLocale } from '../types/homeContent'
import type { HomeMockupSectionsContent } from '../types/homeMockupSections'

/** Figma-provided art lives under `public/asalaa/images/figma/`. */
export const MOCKUP_IMAGE_PATHS = {
  museumStrip:
    '/asalaa/images/figma/093_mh1932_2_C_OII_sm-11652 1.png',
  museumBust: '/asalaa/images/figma/093_mh1932_2_C_OII_sm-11652%201.png',
  heritageCard: '/asalaa/images/figma/arch-Syria-Grand-Colonnade-Palmyra-ISIS%201.png',
  appPhone: '/asalaa/images/figma/Artboard3_1%201.png',
} as const

const DATA: Record<AppLocale, HomeMockupSectionsContent> = {
  ar: {
    museum: {
      stripImageSrc: MOCKUP_IMAGE_PATHS.museumStrip,
      stripImageAlt: 'منظر لآثار عند غروب الشمس',
      bustImageSrc: MOCKUP_IMAGE_PATHS.museumBust,
      bustImageAlt: 'تمثال نصفي منحوت من الحجر',
      heading: 'متحف أصالة الإلكتروني',
      body:
        'رحلة عبر التاريخ والحضارة: استكشف القطع الأثرية والقصص والتراث السوري في تجربة رقمية غنية، في أي وقت ومن أي مكان.',
      ctaLabel: 'ابدأ رحلتك',
      ctaHref: '#museum',
    },
    heritage: {
      sectionTitle: 'من ذاكرة التراث',
      viewAllLabel: 'عرض الكل ←',
      viewAllHref: '#heritage',
      cards: [
        {
          id: '1',
          href: '#article-palmyra',
          imageSrc: MOCKUP_IMAGE_PATHS.heritageCard,
          imageAlt: 'قوس النصر في تدمر',
          title: 'تدمر قلب سوريا الغائب الحاضر',
          description:
            'لمحة عن المدينة الأثرية وقيمتها الثقافية، وما تعنيه اليوم لمن يحملون ذاكرة المكان.',
          authorName: 'يزن طليمات',
          timeLabel: 'منذ يومين',
        },
        {
          id: '2',
          href: '#article-palmyra-2',
          imageSrc: MOCKUP_IMAGE_PATHS.heritageCard,
          imageAlt: 'قوس النصر في تدمر',
          title: 'تدمر قلب سوريا الغائب الحاضر',
          description:
            'لمحة عن المدينة الأثرية وقيمتها الثقافية، وما تعنيه اليوم لمن يحملون ذاكرة المكان.',
          authorName: 'يزن طليمات',
          timeLabel: 'منذ يومين',
        },
        {
          id: '3',
          href: '#article-palmyra-3',
          imageSrc: MOCKUP_IMAGE_PATHS.heritageCard,
          imageAlt: 'قوس النصر في تدمر',
          title: 'تدمر قلب سوريا الغائب الحاضر',
          description:
            'لمحة عن المدينة الأثرية وقيمتها الثقافية، وما تعنيه اليوم لمن يحملون ذاكرة المكان.',
          authorName: 'يزن طليمات',
          timeLabel: 'منذ يومين',
        },
      ],
    },
    app: {
      heading: 'حمل تطبيق أصالة الآن على',
      appStoreHref: 'https://apps.apple.com/',
      appStoreAriaLabel: 'تنزيل من App Store',
      playStoreHref: 'https://play.google.com/store',
      playStoreAriaLabel: 'تنزيل من Google Play',
      phoneImageSrc: MOCKUP_IMAGE_PATHS.appPhone,
      phoneImageAlt: 'معاينة واجهة تطبيق أصالة على هاتف',
    },
  },
  en: {
    museum: {
      stripImageSrc: MOCKUP_IMAGE_PATHS.museumStrip,
      stripImageAlt: 'Ancient ruins at sunset',
      bustImageSrc: MOCKUP_IMAGE_PATHS.museumBust,
      bustImageAlt: 'Carved stone bust',
      heading: 'Asala Electronic Museum',
      body:
        'A journey through history and civilization: explore artifacts, stories, and Syrian heritage in a rich digital experience—anytime, anywhere.',
      ctaLabel: 'Start your journey',
      ctaHref: '#museum',
    },
    heritage: {
      sectionTitle: 'From the memory of heritage',
      viewAllLabel: '→ View all',
      viewAllHref: '#heritage',
      cards: [
        {
          id: '1',
          href: '#article-palmyra',
          imageSrc: MOCKUP_IMAGE_PATHS.heritageCard,
          imageAlt: 'Arch of Triumph at Palmyra',
          title: 'Palmyra—the heart of Syria, absent yet present',
          description:
            'A short look at the ancient city, its cultural weight, and what it means today for those who carry its memory.',
          authorName: 'Yazan Taleimat',
          timeLabel: 'Two days ago',
        },
        {
          id: '2',
          href: '#article-palmyra-2',
          imageSrc: MOCKUP_IMAGE_PATHS.heritageCard,
          imageAlt: 'Arch of Triumph at Palmyra',
          title: 'Palmyra—the heart of Syria, absent yet present',
          description:
            'A short look at the ancient city, its cultural weight, and what it means today for those who carry its memory.',
          authorName: 'Yazan Taleimat',
          timeLabel: 'Two days ago',
        },
        {
          id: '3',
          href: '#article-palmyra-3',
          imageSrc: MOCKUP_IMAGE_PATHS.heritageCard,
          imageAlt: 'Arch of Triumph at Palmyra',
          title: 'Palmyra—the heart of Syria, absent yet present',
          description:
            'A short look at the ancient city, its cultural weight, and what it means today for those who carry its memory.',
          authorName: 'Yazan Taleimat',
          timeLabel: 'Two days ago',
        },
      ],
    },
    app: {
      heading: 'Download the Asala app now on',
      appStoreHref: 'https://apps.apple.com/',
      appStoreAriaLabel: 'Download on the App Store',
      playStoreHref: 'https://play.google.com/store',
      playStoreAriaLabel: 'Get it on Google Play',
      phoneImageSrc: MOCKUP_IMAGE_PATHS.appPhone,
      phoneImageAlt: 'Preview of the Asala app on a phone',
    },
  },
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getHomeMockupSectionsContent(locale: AppLocale): Promise<HomeMockupSectionsContent> {
  await delay(180)
  const base = DATA[locale]
  return {
    museum: { ...base.museum },
    heritage: {
      ...base.heritage,
      cards: base.heritage.cards.map((c) => ({ ...c })),
    },
    app: { ...base.app },
  }
}
