// NOTE: This service currently returns a single fixed mock profile regardless of
// the `_username` argument. The parameter is kept on every signature so the
// route in `App.tsx` (`/profile/:username`) can be wired to real per-user data
// without touching the call sites in `ProfilePage.tsx`. Underscored to silence
// "unused argument" lints until the service is implemented for real.

import type { AppLocale } from '../types/homeContent'
import type {
  ProfileData,
  ProfilePost,
  ProfileProduct,
  ProfileMuseumItem,
  ProfileArticle,
  ProfileVideo,
} from '../types/profile'

export async function getProfileData(locale: AppLocale, _username: string): Promise<ProfileData> {
  const isAr = locale === 'ar'

  return {
    username: 'yazantulaimat',
    name: isAr ? 'يزن طليمات' : 'Yazan Tulaimat',
    title: isAr ? 'مطور واجهات وخلفية' : 'Full Stack Developer',
    followerCount: 24,
    avatarSrc: '/images/avatar-placeholder.svg',
    coverSrc: '/images/cover-placeholder.svg',
    stats: {
      posts: 30,
      likes: 1800,
    },
  }
}

export async function getProfilePosts(locale: AppLocale, _username: string): Promise<ProfilePost[]> {
  const isAr = locale === 'ar'

  return [
    {
      id: 'post-1',
      textSnippet: isAr
        ? 'سوريا.. أرض الحضارات الأولى ✨ من أوغاريت التي أنارت العالم بأقدم أبجدية، إلى تدمر التي ازدهرت كعروس الصحراء..'
        : 'Syria — the land of the first civilizations. From Ugarit, which gave the world its oldest alphabet, to Palmyra, the bride of the desert.',
      timeLabel: isAr ? 'منذ دقيقة' : 'A minute ago',
      likeCount: 12,
      commentCount: 8,
    },
    {
      id: 'post-2',
      textSnippet: isAr
        ? 'في كل زاوية من دمشق رائحة الياسمين، وفي كل حجر حكاية لا تنتهي. المدينة التي لم ينطفئ فيها الضوء منذ آلاف السنين.'
        : 'In every corner of Damascus there is jasmine in the air, and in every stone an unfinished story. The city whose light has not gone out for thousands of years.',
      timeLabel: isAr ? 'منذ ساعة' : 'An hour ago',
      likeCount: 34,
      commentCount: 5,
    },
    {
      id: 'post-3',
      imageSrc: '/images/cover-placeholder.svg',
      imageAlt: isAr ? 'صورة من تدمر' : 'A view of Palmyra',
      textSnippet: isAr
        ? 'تدمر — تذكير بأن الحضارة لا تُمحى بسهولة، وأن الحجارة تحفظ ما لا يحفظه التاريخ المكتوب.'
        : 'Palmyra is a reminder that civilizations are not easily erased, and that stones keep what written history forgets.',
      timeLabel: isAr ? 'منذ ٣ ساعات' : '3 hours ago',
      likeCount: 88,
      commentCount: 21,
    },
    {
      id: 'post-4',
      imageSrc: '/images/cover-placeholder.svg',
      imageAlt: isAr ? 'صورة من حلب القديمة' : 'Old Aleppo',
      textSnippet: isAr
        ? 'أسواق حلب القديمة: ممرات حجرية تعبق برائحة الصابون الغار والقهوة، وتفاصيل لا تكتمل إلا بصوت الباعة.'
        : 'The old souks of Aleppo: stone passages thick with the scent of laurel soap and coffee — details that only feel complete with the sound of vendors.',
      timeLabel: isAr ? 'منذ يوم' : 'A day ago',
      likeCount: 142,
      commentCount: 47,
    },
  ]
}

export async function getProfileProducts(locale: AppLocale, _username: string): Promise<ProfileProduct[]> {
  const isAr = locale === 'ar'
  return [
    {
      id: 'prod-1',
      title: isAr ? 'دورة تطوير الويب الشاملة' : 'Full Stack Web Development Course',
      price: isAr ? '١٥٠ ر.س' : '150 SAR',
      imageSrc: '/images/cover-placeholder.svg',
      imageAlt: isAr ? 'صورة الدورة' : 'Course image',
    },
    {
      id: 'prod-2',
      title: isAr ? 'كتاب تصميم واجهات المستخدم' : 'UI/UX Design Book',
      price: isAr ? '٧٥ ر.س' : '75 SAR',
      imageSrc: '/images/cover-placeholder.svg',
      imageAlt: isAr ? 'صورة الكتاب' : 'Book image',
    },
  ]
}

export async function getProfileMuseumItems(locale: AppLocale, _username: string): Promise<ProfileMuseumItem[]> {
  const isAr = locale === 'ar'
  return [
    {
      id: 'museum-1',
      title: isAr ? 'أول جهاز كمبيوتر لي' : 'My First Computer',
      year: '2010',
      description: isAr ? 'الجهاز الذي بدأت عليه رحلتي البرمجية' : 'The machine where my coding journey started',
      imageSrc: '/images/cover-placeholder.svg',
      imageAlt: isAr ? 'صورة كمبيوتر قديم' : 'Old computer image',
    },
    {
      id: 'museum-2',
      title: isAr ? 'كأس أول هاكاثون' : 'First Hackathon Trophy',
      year: '2015',
      description: isAr ? 'المركز الأول في هاكاثون الجامعة' : 'First place at university hackathon',
      imageSrc: '/images/cover-placeholder.svg',
      imageAlt: isAr ? 'صورة الكأس' : 'Trophy image',
    },
  ]
}

export async function getProfileArticles(locale: AppLocale, _username: string): Promise<ProfileArticle[]> {
  const isAr = locale === 'ar'
  return [
    {
      id: 'art-1',
      title: isAr ? 'مستقبل تطوير الويب في 2026' : 'The Future of Web Development in 2026',
      excerpt: isAr
        ? 'نظرة عميقة على أحدث التقنيات والأدوات التي تشكل مستقبل بناء تطبيقات الويب...'
        : 'A deep dive into the latest technologies and tools shaping the future of web apps...',
      date: isAr ? '١٥ مايو ٢٠٢٦' : 'May 15, 2026',
      readTime: isAr ? '٥ دقائق قراءة' : '5 min read',
      coverImage: '/images/cover-placeholder.svg',
    },
    {
      id: 'art-2',
      title: isAr ? 'كيف تبني واجهات مستخدم احترافية' : 'How to Build Professional UIs',
      excerpt: isAr
        ? 'أهم القواعد والمبادئ التي يجب على كل مطور واجهات أمامية معرفتها...'
        : 'The most important rules and principles every frontend developer should know...',
      date: isAr ? '١٠ مايو ٢٠٢٦' : 'May 10, 2026',
      readTime: isAr ? '٧ دقائق قراءة' : '7 min read',
      coverImage: '/images/cover-placeholder.svg',
    },
  ]
}

export async function getProfileVideos(locale: AppLocale, _username: string): Promise<ProfileVideo[]> {
  const isAr = locale === 'ar'
  return [
    {
      id: 'vid-1',
      title: isAr ? 'كيف تبدأ في مجال البرمجة' : 'How to start in programming',
      thumbnailSrc: '/images/cover-placeholder.svg',
      duration: '12:45',
      viewCount: isAr ? '١.٢ ألف مشاهدة' : '1.2k views',
    },
    {
      id: 'vid-2',
      title: isAr ? 'نصائح للمبرمجين المبتدئين' : 'Tips for beginner programmers',
      thumbnailSrc: '/images/cover-placeholder.svg',
      duration: '08:20',
      viewCount: isAr ? '٨٥٠ مشاهدة' : '850 views',
    },
  ]
}
