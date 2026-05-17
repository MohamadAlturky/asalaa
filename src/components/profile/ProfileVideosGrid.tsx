import type { AppLocale } from '../../types/homeContent'
import type { ProfileVideo } from '../../types/profile'
import { ProfileVideoCard } from './ProfileVideoCard'
import styles from './ProfileVideosGrid.module.css'

type ProfileVideosGridProps = {
  videos: ProfileVideo[]
  locale: AppLocale
}

export function ProfileVideosGrid({ videos, locale }: ProfileVideosGridProps) {
  if (videos.length === 0) {
    return (
      <p className={styles.empty} role="status">
        {locale === 'ar' ? 'لا توجد فيديوهات بعد.' : 'No videos yet.'}
      </p>
    )
  }

  return (
    <div className={styles.grid}>
      {videos.map((video) => (
        <ProfileVideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}
