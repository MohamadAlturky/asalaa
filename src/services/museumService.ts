import type { AppLocale } from '../types/homeContent'
import type {
  MuseumFeaturedItem,
  MuseumPageContent,
  MuseumThumbItem,
} from '../types/museum'

const PLACEHOLDER_IMAGE = '/asalaa/images/cover-placeholder.svg'

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function buildThumbItems(
  prefix: string,
  count: number,
  titleAr: (n: number) => string,
  titleEn: (n: number) => string,
  altAr: (n: number) => string,
  altEn: (n: number) => string,
  isAr: boolean,
): MuseumThumbItem[] {
  const items: MuseumThumbItem[] = []
  for (let i = 1; i <= count; i++) {
    items.push({
      id: `${prefix}-${i}`,
      title: isAr ? titleAr(i) : titleEn(i),
      imageSrc: PLACEHOLDER_IMAGE,
      imageAlt: isAr ? altAr(i) : altEn(i),
    })
  }
  return items
}

function buildFeaturedItems(
  prefix: string,
  count: number,
  titleAr: (n: number) => string,
  titleEn: (n: number) => string,
  altAr: (n: number) => string,
  altEn: (n: number) => string,
  isAr: boolean,
  isVideo = false,
  videoBadgeAr?: string,
  videoBadgeEn?: string,
): MuseumFeaturedItem[] {
  const items: MuseumFeaturedItem[] = []
  for (let i = 1; i <= count; i++) {
    items.push({
      id: `${prefix}-${i}`,
      title: isAr ? titleAr(i) : titleEn(i),
      imageSrc: PLACEHOLDER_IMAGE,
      imageAlt: isAr ? altAr(i) : altEn(i),
      isVideo,
      videoBadgeLabel: isVideo ? (isAr ? videoBadgeAr : videoBadgeEn) : undefined,
    })
  }
  return items
}

export async function getMuseumPageContent(locale: AppLocale): Promise<MuseumPageContent> {
  await delay(280)
  const isAr = locale === 'ar'

  return {
    breadcrumb: isAr
      ? 'الصفحة الرئيسية - متحف أصالة الإلكتروني'
      : 'Home - Asala Electronic Museum',
    pageTitle: isAr ? 'متحف أصالة الإلكتروني' : 'Asala Electronic Museum',
    mascotImageSrc: PLACEHOLDER_IMAGE,
    mascotImageAlt: isAr ? 'تمثال أثري' : 'Antique statue',
    sections: {
      antiques: {
        title: isAr ? 'التحف والمقتنيات الآثرية' : 'Antiques & Archaeological Items',
        prevAriaLabel: isAr ? 'السابق' : 'Previous',
        nextAriaLabel: isAr ? 'التالي' : 'Next',
        items: buildThumbItems(
          'antique',
          6,
          (n) => `قطعة أثرية ${n}`,
          (n) => `Antique ${n}`,
          (n) => `صورة قطعة أثرية ${n}`,
          (n) => `Antique ${n} image`,
          isAr,
        ),
      },
      jewelry: {
        title: isAr ? 'مجوهرات' : 'Jewelry',
        prevAriaLabel: isAr ? 'السابق' : 'Previous',
        nextAriaLabel: isAr ? 'التالي' : 'Next',
        items: buildThumbItems(
          'jewelry',
          5,
          (n) => `قطعة مجوهرات ${n}`,
          (n) => `Jewelry piece ${n}`,
          (n) => `صورة قطعة مجوهرات ${n}`,
          (n) => `Jewelry piece ${n} image`,
          isAr,
        ),
      },
      paintings: {
        title: isAr ? 'لوحات فنية' : 'Artistic Paintings',
        prevAriaLabel: isAr ? 'السابق' : 'Previous',
        nextAriaLabel: isAr ? 'التالي' : 'Next',
        items: buildFeaturedItems(
          'painting',
          4,
          (n) => `لوحة فنية ${n}`,
          (n) => `Painting ${n}`,
          (n) => `صورة لوحة فنية ${n}`,
          (n) => `Painting ${n} image`,
          isAr,
        ),
      },
      screen: {
        title: isAr ? 'حضارة سوريا عبر الشاشة' : 'Syrian Civilization on Screen',
        prevAriaLabel: isAr ? 'السابق' : 'Previous',
        nextAriaLabel: isAr ? 'التالي' : 'Next',
        items: buildFeaturedItems(
          'screen',
          4,
          (n) => (n === 1 ? 'سوريا.. البداية' : `حضارة سوريا ${n}`),
          (n) => (n === 1 ? 'Syria.. The Beginning' : `Syrian Civilization ${n}`),
          (n) => `معاينة فيديو ${n}`,
          (n) => `Video preview ${n}`,
          isAr,
          true,
          'فيديو',
          'Video',
        ),
      },
    },
  }
}
