import type { AppLocale } from '../../types/homeContent'
import type { ProfileData } from '../../types/profile'
import styles from './ProfileHeader.module.css'

type ProfileHeaderProps = {
  profile: ProfileData
  locale: AppLocale
}

function getHeaderStrings(locale: AppLocale) {
  if (locale === 'ar') {
    return {
      follow: 'متابعة',
      followers: (n: number) => `${n} متابع`,
      postsLabel: 'منشور',
      likesLabel: 'أحببته',
    }
  }
  return {
    follow: 'Follow',
    followers: (n: number) => `${n} followers`,
    postsLabel: 'Posts',
    likesLabel: 'Likes',
  }
}

export function ProfileHeader({ profile, locale }: ProfileHeaderProps) {
  const strings = getHeaderStrings(locale)

  return (
    <div className={styles.wrapper}>
      {/* Cover Image */}
      <div className={styles.coverWrapper}>
        <img src={profile.coverSrc} alt="" className={styles.coverImage} />
        
        {/* Stats Box overlapping cover */}
        <div className={styles.statsBox}>
          <div className={styles.statItem}>
            <div className={styles.statContent}>
              <span className={styles.statValue}>{profile.stats.posts}</span>
              <span className={styles.statLabel}>{strings.postsLabel}</span>
            </div>
            <IconEdit className={styles.statIcon} />
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <div className={styles.statContent}>
              <span className={styles.statValue}>{profile.stats.likes}</span>
              <span className={styles.statLabel}>{strings.likesLabel}</span>
            </div>
            <IconHeart className={styles.statIcon} />
          </div>
        </div>
      </div>

      {/* User Info Row */}
      <div className={styles.infoRow}>
        <div className={styles.avatarWrapper}>
          <img src={profile.avatarSrc} alt={profile.name} className={styles.avatarImage} />
        </div>
        
        <div className={styles.detailsBlock}>
          <div className={styles.nameRow}>
            <h1 className={styles.name}>{profile.name}</h1>
            <button className={styles.followBtn}>{strings.follow}</button>
          </div>
          <p className={styles.followers}>{strings.followers(profile.followerCount)}</p>
        </div>
      </div>
    </div>
  )
}

function IconEdit({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  )
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  )
}
