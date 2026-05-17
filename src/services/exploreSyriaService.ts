import type { AppLocale } from '../types/homeContent'
import type { ExploreSyriaPageContent } from '../types/exploreSyria'

const DATA: Record<AppLocale, ExploreSyriaPageContent> = {
  ar: {
    title: 'اكتشف سوريا',
    breadcrumb: 'الصفحة الرئيسية - اكتشف سوريا',
    heroImageSrc: '/images/explore/door.svg',
    heroImageAlt: 'باب خشبي مزخرف',
    brandTile: {
      lineAr: 'الجمهورية العربية السورية',
      lineArSub: 'SYRIAN ARAB REPUBLIC',
      lineEn: 'SYRIAN ARAB REPUBLIC',
    },
    overlayButtons: {
      posts: 'المنشورات',
      visitors: 'زوار',
      discover: 'اكتشف سوريا',
    },
    tiles: [
      { id: 'palmyra', kind: 'video', src: '/images/explore/tile-palmyra.svg', alt: 'مشهد أثري', layout: 'palmyra' },
      { id: 'fortress-night', kind: 'video', src: '/images/explore/tile-fortress-night.svg', alt: 'قلعة مضاءة ليلاً', layout: 'fortressNight' },
      { id: 'emblem', kind: 'brandTile', alt: '', layout: 'emblem' },
      { id: 'stained', kind: 'gallery', src: '/images/explore/tile-stained-glass.svg', alt: 'زجاج ملون', layout: 'stainedGlass' },
      { id: 'clock', kind: 'video', src: '/images/explore/tile-clock-tower.svg', alt: 'برج ساعة وقبة', layout: 'clockTower' },
      { id: 'norias', kind: 'gallery', src: '/images/explore/tile-norias.svg', alt: 'نواعير حماة', layout: 'norias' },
      { id: 'street', kind: 'gallery', src: '/images/explore/tile-street.svg', alt: 'زقاق تاريخي', layout: 'street' },
      { id: 'hill-fort', kind: 'image', src: '/images/explore/tile-hill-fort.svg', alt: 'قلعة على تل', layout: 'hillFort' },
      { id: 'souq', kind: 'video', src: '/images/explore/tile-souq.svg', alt: 'سقف سوق حجري', layout: 'souq' },
      { id: 'interior', kind: 'video', src: '/images/explore/tile-interior.svg', alt: 'قاعة بأقواس حجرية', layout: 'interior' },
    ],
  },
  en: {
    title: 'Explore Syria',
    breadcrumb: 'Home - Explore Syria',
    heroImageSrc: '/images/explore/door.svg',
    heroImageAlt: 'Ornate carved wooden door',
    brandTile: {
      lineAr: 'الجمهورية العربية السورية',
      lineArSub: 'SYRIAN ARAB REPUBLIC',
      lineEn: 'SYRIAN ARAB REPUBLIC',
    },
    overlayButtons: {
      posts: 'Posts',
      visitors: 'Visitors',
      discover: 'Explore Syria',
    },
    tiles: [
      { id: 'palmyra', kind: 'video', src: '/images/explore/tile-palmyra.svg', alt: 'Ancient amphitheatre scene', layout: 'palmyra' },
      { id: 'fortress-night', kind: 'video', src: '/images/explore/tile-fortress-night.svg', alt: 'Fortress at night', layout: 'fortressNight' },
      { id: 'emblem', kind: 'brandTile', alt: '', layout: 'emblem' },
      { id: 'stained', kind: 'gallery', src: '/images/explore/tile-stained-glass.svg', alt: 'Stained glass window', layout: 'stainedGlass' },
      { id: 'clock', kind: 'video', src: '/images/explore/tile-clock-tower.svg', alt: 'Clock tower and dome', layout: 'clockTower' },
      { id: 'norias', kind: 'gallery', src: '/images/explore/tile-norias.svg', alt: 'Norias of Hama', layout: 'norias' },
      { id: 'street', kind: 'gallery', src: '/images/explore/tile-street.svg', alt: 'Historic alley', layout: 'street' },
      { id: 'hill-fort', kind: 'image', src: '/images/explore/tile-hill-fort.svg', alt: 'Fortress on a green hill', layout: 'hillFort' },
      { id: 'souq', kind: 'video', src: '/images/explore/tile-souq.svg', alt: 'Stone souq ceiling', layout: 'souq' },
      { id: 'interior', kind: 'video', src: '/images/explore/tile-interior.svg', alt: 'Arched stone hall', layout: 'interior' },
    ],
  },
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Dummy API: replace with fetch('/api/explore-syria?locale=...') when backend is ready.
 */
export async function getExploreSyriaContent(locale: AppLocale): Promise<ExploreSyriaPageContent> {
  await delay(240)
  const base = DATA[locale]
  return {
    ...base,
    brandTile: { ...base.brandTile },
    overlayButtons: { ...base.overlayButtons },
    tiles: base.tiles.map((t) => ({ ...t })),
  }
}
