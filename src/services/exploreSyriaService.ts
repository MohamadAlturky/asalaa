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
      photos: 'صور',
      discover: 'اكتشف سوريا',
    },
    discoverIntro: {
      title: 'رحلة عبر التاريخ',
      body: 'اكتشف سوريا من خلال الصور والقصص والمعالم: ابدأ بمعرض الصور أو تابع أحدث المنشورات من المجتمع.',
      browsePhotosCta: 'تصفح الصور',
    },
    posts: [
      {
        id: 'p1',
        authorName: 'يزن طليمات',
        authorAvatarSrc: '/images/avatar-placeholder.svg',
        timeLabel: 'منذ دقيقة',
        body:
          'سوريا أرض الحضارات المتعاقبة، حيث التقى الفينيقيون والرومان والعرب وغيرهم على مدى آلاف السنين. من دمشق العريقة إلى حلب المزدهرة وتدمر الأسطورية، تروي الأحجار قصصاً لا تُنسى عن الإبداع البشري والصمود.',
        hashtags: ['دمشق', 'حلب', 'تدمر', 'سوريا'],
        likeCount: 12,
        commentCount: 8,
      },
      {
        id: 'p2',
        authorName: 'يزن طليمات',
        authorAvatarSrc: '/images/avatar-placeholder.svg',
        timeLabel: 'منذ 15 دقيقة',
        body: 'مشهد من أطلال تدمر تحت سماء صافية — تذكير بعراقة هذا المكان وبهائه.',
        hashtags: ['تدمر', 'التراث', 'سوريا'],
        imageSrc: '/images/explore/tile-palmyra.svg',
        imageAlt: 'أطلال تدمر',
        likeCount: 48,
        commentCount: 11,
      },
      {
        id: 'p3',
        authorName: 'ليان الحموي',
        authorAvatarSrc: '/images/avatar-placeholder.svg',
        timeLabel: 'منذ ساعة',
        body: 'النواعير في حماة تدور كما كانت منذ قرون، صوت الماء والحجر يخلّد ذاكرة المدينة.',
        hashtags: ['حماة', 'نواعير', 'سوريا'],
        imageSrc: '/images/explore/tile-norias.svg',
        imageAlt: 'نواعير حماة',
        likeCount: 31,
        commentCount: 5,
      },
    ],
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
      photos: 'Photos',
      discover: 'Explore Syria',
    },
    discoverIntro: {
      title: 'A journey through history',
      body: 'Explore Syria through photos, stories, and landmarks: open the gallery or follow the latest posts from the community.',
      browsePhotosCta: 'Browse photos',
    },
    posts: [
      {
        id: 'p1',
        authorName: 'Yazan Tlimat',
        authorAvatarSrc: '/images/avatar-placeholder.svg',
        timeLabel: 'A minute ago',
        body:
          'Syria is a crossroads of civilizations—Phoenician, Roman, Arab, and more—woven together over millennia. From ancient Damascus to storied Aleppo and legendary Palmyra, the stones still tell unforgettable stories of creativity and resilience.',
        hashtags: ['Damascus', 'Aleppo', 'Palmyra', 'Syria'],
        likeCount: 12,
        commentCount: 8,
      },
      {
        id: 'p2',
        authorName: 'Yazan Tlimat',
        authorAvatarSrc: '/images/avatar-placeholder.svg',
        timeLabel: '15 minutes ago',
        body: 'Palmyra under a clear sky—a reminder of how luminous this heritage remains.',
        hashtags: ['Palmyra', 'Heritage', 'Syria'],
        imageSrc: '/images/explore/tile-palmyra.svg',
        imageAlt: 'Palmyra ruins',
        likeCount: 48,
        commentCount: 11,
      },
      {
        id: 'p3',
        authorName: 'Layan Al-Hamawi',
        authorAvatarSrc: '/images/avatar-placeholder.svg',
        timeLabel: 'An hour ago',
        body: 'The norias of Hama still turn as they have for centuries—the sound of water and stone keeps the city’s memory alive.',
        hashtags: ['Hama', 'Norias', 'Syria'],
        imageSrc: '/images/explore/tile-norias.svg',
        imageAlt: 'Norias of Hama',
        likeCount: 31,
        commentCount: 5,
      },
    ],
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
    discoverIntro: { ...base.discoverIntro },
    posts: base.posts.map((p) => ({ ...p, hashtags: [...p.hashtags] })),
    tiles: base.tiles.map((t) => ({ ...t })),
  }
}
