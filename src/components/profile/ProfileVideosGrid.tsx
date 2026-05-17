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
    return null
  }

  return (
    <div className={styles.grid}>
      {videos.map(video => (
        <ProfileVideoCard key={video.id} video={video} locale={locale} />
      ))}
    </div>
  )
}
