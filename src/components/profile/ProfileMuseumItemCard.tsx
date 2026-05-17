import type { AppLocale } from '../../types/homeContent'
import type { ProfileMuseumItem } from '../../types/profile'
import styles from './ProfileMuseumItemCard.module.css'

type ProfileMuseumItemCardProps = {
  item: ProfileMuseumItem
  locale: AppLocale
}

export function ProfileMuseumItemCard({ item, locale }: ProfileMuseumItemCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={item.imageSrc} alt={item.imageAlt} className={styles.image} />
        <div className={styles.yearBadge}>{item.year}</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  )
}
