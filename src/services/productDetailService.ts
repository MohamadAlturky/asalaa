import type { AppLocale } from '../types/homeContent'
import type { ProductDetailContent, ProductsIndexContent } from '../types/productDetail'

const IMG_BASE = '/images/products/brass-mortar-1.png'

const DETAIL: Record<AppLocale, ProductDetailContent> = {
  ar: {
    slug: 'brass-mortar',
    pageTitle: 'منتجاتنا',
    breadcrumbHomeLabel: 'الصفحة الرئيسية',
    breadcrumbProductsLabel: 'منتجاتنا',
    heroDecorImageSrc: '/images/mockup/museum-strip.svg',
    heroDecorImageAlt: 'زخرفة تراثية',
    categoryLabel: 'نحاسيات',
    title: 'مدق هاون نحاس محفور يدوياً تراثي',
    descriptionParagraphs: [
      'قطعة أصيلة من الحرف اليدوية السورية، نُفّذت بدقة على النحاس الصلب وتميزت بنقوش تراثية تعكس ذاكرة البيت الشامي.',
      'مناسبة للاستخدام اليومي وللعرض كقطعة ديكور تمثل تراثاً حياً؛ كل قطعة فريدة قليلاً بسبب الطابع اليدوي للحفر والتشطيب.',
    ],
    priceDisplay: '١٬٢٠٠٬٠٠٠ ل.س',
    images: [
      { src: IMG_BASE, alt: 'مدق هاون نحاس من الأمام' },
      { src: IMG_BASE, alt: 'مدق هاون نحاس بزاوية' },
      { src: IMG_BASE, alt: 'تفاصيل النقش على النحاس' },
      { src: IMG_BASE, alt: 'المدق والهاون معاً' },
    ],
    sizeOptions: {
      id: 'size',
      label: 'اختر المقاس',
      choices: [
        { id: 'large', label: 'كبير' },
        { id: 'medium', label: 'متوسط' },
        { id: 'small', label: 'صغير' },
      ],
    },
    colorOptions: {
      id: 'color',
      label: 'اختر اللون',
      choices: [
        { id: 'gold', label: 'ذهبي' },
        { id: 'black', label: 'أسود' },
        { id: 'grey', label: 'رمادي' },
      ],
    },
    defaultSizeId: 'large',
    defaultColorId: 'black',
    addToCartLabel: 'إضافة إلى سلة المشتريات',
    buyNowLabel: 'اشتري الآن',
    galleryPrevLabel: 'الصورة السابقة',
    galleryNextLabel: 'الصورة التالية',
    thumbnailPickerLabel: 'معرض الصور',
  },
  en: {
    slug: 'brass-mortar',
    pageTitle: 'Our products',
    breadcrumbHomeLabel: 'Home',
    breadcrumbProductsLabel: 'Our products',
    heroDecorImageSrc: '/images/mockup/museum-strip.svg',
    heroDecorImageAlt: 'Heritage ornament',
    categoryLabel: 'Brassware',
    title: 'Traditional hand-engraved brass mortar',
    descriptionParagraphs: [
      'An authentic piece of Syrian craftsmanship, worked in solid brass with heritage engravings that echo Levantine home traditions.',
      'Suitable for everyday use or display as decor; each piece varies slightly thanks to hand engraving and finishing.',
    ],
    priceDisplay: '1,200,000 SYP',
    images: [
      { src: IMG_BASE, alt: 'Brass mortar front view' },
      { src: IMG_BASE, alt: 'Brass mortar angled view' },
      { src: IMG_BASE, alt: 'Engraving detail on brass' },
      { src: IMG_BASE, alt: 'Mortar and pestle together' },
    ],
    sizeOptions: {
      id: 'size',
      label: 'Choose size',
      choices: [
        { id: 'large', label: 'Large' },
        { id: 'medium', label: 'Medium' },
        { id: 'small', label: 'Small' },
      ],
    },
    colorOptions: {
      id: 'color',
      label: 'Choose color',
      choices: [
        { id: 'gold', label: 'Gold' },
        { id: 'black', label: 'Black' },
        { id: 'grey', label: 'Grey' },
      ],
    },
    defaultSizeId: 'large',
    defaultColorId: 'black',
    addToCartLabel: 'Add to cart',
    buyNowLabel: 'Buy now',
    galleryPrevLabel: 'Previous image',
    galleryNextLabel: 'Next image',
    thumbnailPickerLabel: 'Image gallery',
  },
}

const INDEX: Record<AppLocale, ProductsIndexContent> = {
  ar: {
    pageTitle: 'منتجاتنا',
    breadcrumbHomeLabel: 'الصفحة الرئيسية',
    intro: 'تصفح منتجاتنا التراثية المختارة.',
    sampleProductTitle: 'مدق هاون نحاس محفور يدوياً تراثي',
    sampleProductHref: '/products/brass-mortar',
    sampleProductImageSrc: IMG_BASE,
    sampleProductImageAlt: 'مدق هاون نحاس',
  },
  en: {
    pageTitle: 'Our products',
    breadcrumbHomeLabel: 'Home',
    intro: 'Browse our curated heritage products.',
    sampleProductTitle: 'Traditional hand-engraved brass mortar',
    sampleProductHref: '/products/brass-mortar',
    sampleProductImageSrc: IMG_BASE,
    sampleProductImageAlt: 'Brass mortar and pestle',
  },
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function cloneDetail(content: ProductDetailContent): ProductDetailContent {
  return {
    ...content,
    descriptionParagraphs: [...content.descriptionParagraphs],
    images: content.images.map((img) => ({ ...img })),
    sizeOptions: {
      ...content.sizeOptions,
      choices: content.sizeOptions.choices.map((c) => ({ ...c })),
    },
    colorOptions: {
      ...content.colorOptions,
      choices: content.colorOptions.choices.map((c) => ({ ...c })),
    },
  }
}

/** Dummy API: replace with fetch when backend is ready. */
export async function getProductDetail(locale: AppLocale, slug: string): Promise<ProductDetailContent | null> {
  await delay(260)
  const row = DETAIL[locale]
  if (row.slug !== slug) return null
  return cloneDetail(row)
}

export async function getProductsIndexContent(locale: AppLocale): Promise<ProductsIndexContent> {
  await delay(200)
  return { ...INDEX[locale] }
}
