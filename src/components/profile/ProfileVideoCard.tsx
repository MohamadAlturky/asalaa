import type { ProfileVideo } from '../../types/profile'
import styles from './ProfileVideoCard.module.css'

type ProfileVideoCardProps = {
  video: ProfileVideo
}

export function ProfileVideoCard({ video }: ProfileVideoCardProps) {
  return (
    <button type="button" className={styles.card} onClick={() => undefined}>
      <span className={styles.thumbnailContainer}>
        <img src={video.thumbnailSrc} alt="" className={styles.thumbnail} />
        <span className={styles.durationBadge}>{video.duration}</span>
        <span className={styles.playButton} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className={styles.content}>
        <span className={styles.title}>{video.title}</span>
        <span className={styles.views}>{video.viewCount}</span>
      </span>
    </button>
  )
}
