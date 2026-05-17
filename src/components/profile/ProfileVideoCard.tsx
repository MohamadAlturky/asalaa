import type { AppLocale } from '../../types/homeContent'
import type { ProfileVideo } from '../../types/profile'
import styles from './ProfileVideoCard.module.css'

type ProfileVideoCardProps = {
  video: ProfileVideo
  locale: AppLocale
}

export function ProfileVideoCard({ video, locale }: ProfileVideoCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnailContainer}>
        <img src={video.thumbnailSrc} alt={video.title} className={styles.thumbnail} />
        <div className={styles.durationBadge}>{video.duration}</div>
        <div className={styles.playButton} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{video.title}</h3>
        <p className={styles.views}>{video.viewCount}</p>
      </div>
    </div>
  )
}
