import type { AppLocale } from '../../types/homeContent'
import type { ProfileMuseumItem } from '../../types/profile'
import { ProfileMuseumItemCard } from './ProfileMuseumItemCard'
import styles from './ProfileMuseumGrid.module.css'

type ProfileMuseumGridProps = {
  items: ProfileMuseumItem[]
  locale: AppLocale
}

export function ProfileMuseumGrid({ items, locale }: ProfileMuseumGridProps) {
  if (items.length === 0) {
    return (
      <p className={styles.empty} role="status">
        {locale === 'ar' ? 'المتحف فارغ بعد.' : 'The museum is empty.'}
      </p>
    )
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ProfileMuseumItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}
