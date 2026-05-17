import type { AppLocale } from '../types/homeContent'
import type { ProfileData, ProfilePost } from '../types/profile'

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
