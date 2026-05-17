import type { AppLocale } from '../types/homeContent'
import type { 
  ProfileData, 
  ProfilePost,
  ProfileProduct,
  ProfileMuseumItem,
  ProfileArticle,
  ProfileVideo
} from '../types/profile'

export async function getProfileData(locale: AppLocale, _username: string): Promise<ProfileData> {
  const isAr = locale === 'ar'
  
  return {
    username: 'yazantulaimat',
    name: isAr ? 'يزن طليمات' : 'Yazan Tulaimat',
    title: 'Full Stack Developer',
    followerCount: 24,
    avatarSrc: '/images/avatar-placeholder.svg', // Placeholder
    coverSrc: '/images/cover-placeholder.svg',   // Placeholder
    stats: {
      posts: 30,
      likes: 1800,
    }
  }
}

export async function getProfilePosts(locale: AppLocale, _username: string): Promise<ProfilePost[]> {
  const isAr = locale === 'ar'
  
  return [
    {
      id: 'post-1',
      textSnippet: isAr 
        ? 'سوريا.. أرض الحضارات الأولى ✨ من أوغاريت التي أنارت العالم بأقدم أبجدية، إلى تدمر التي ازدهرت كعروس الصحراء، مروراً بحلب ودمشق أقدم مدن التاريخ الحيّة.. سوريا كانت وما زالت شاهدة على عظمة الإنسان وقدرته على البناء والإبداع...'
        : 'Syria.. The land of first civilizations ✨ from Ugarit that illuminated the world with the oldest alphabet, to Palmyra that flourished as the bride of the desert...',
      timeLabel: isAr ? 'منذ دقيقة' : 'A minute ago',
      likeCount: 12,
      commentCount: 8,
    },
    {
      id: 'post-2',
      textSnippet: isAr 
        ? 'سوريا.. أرض الحضارات الأولى ✨ من أوغاريت التي أنارت العالم بأقدم أبجدية، إلى تدمر التي ازدهرت كعروس الصحراء، مروراً بحلب ودمشق أقدم مدن التاريخ الحيّة.. سوريا كانت وما زالت شاهدة على عظمة الإنسان وقدرته على البناء والإبداع...'
        : 'Syria.. The land of first civilizations ✨ from Ugarit that illuminated the world with the oldest alphabet, to Palmyra that flourished as the bride of the desert...',
      timeLabel: isAr ? 'منذ دقيقة' : 'A minute ago',
      likeCount: 12,
      commentCount: 8,
    },
    {
      id: 'post-3',
      imageSrc: '/images/cover-placeholder.svg', // Replace with palmyra image
      imageAlt: 'Palmyra',
      textSnippet: isAr 
        ? 'سوريا.. أرض الحضارات الأولى ✨ من أوغاريت التي أنارت العالم بأقدم أبجدية، إلى تدمر التي ازدهرت كعروس الصحراء، مروراً بحلب ودمشق أقدم مدن التاريخ الحيّة.. سوريا كانت وما زالت شاهدة على عظمة الإنسان وقدرته على البناء والإبداع...'
        : 'Syria.. The land of first civilizations ✨ from Ugarit that illuminated the world with the oldest alphabet, to Palmyra that flourished as the bride of the desert...',
      timeLabel: isAr ? 'منذ دقيقة' : 'A minute ago',
      likeCount: 12,
      commentCount: 8,
    },
    {
      id: 'post-4',
      imageSrc: '/images/cover-placeholder.svg', // Replace with palmyra image
      imageAlt: 'Palmyra',
      textSnippet: isAr 
        ? 'سوريا.. أرض الحضارات الأولى ✨ من أوغاريت التي أنارت العالم بأقدم أبجدية، إلى تدمر التي ازدهرت كعروس الصحراء، مروراً بحلب ودمشق أقدم مدن التاريخ الحيّة.. سوريا كانت وما زالت شاهدة على عظمة الإنسان وقدرته على البناء والإبداع...'
        : 'Syria.. The land of first civilizations ✨ from Ugarit that illuminated the world with the oldest alphabet, to Palmyra that flourished as the bride of the desert...',
      timeLabel: isAr ? 'منذ دقيقة' : 'A minute ago',
      likeCount: 12,
      commentCount: 8,
    }
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
    }
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
    }
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
    }
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
    }
  ]
}
