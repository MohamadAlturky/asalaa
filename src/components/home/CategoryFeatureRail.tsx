import type { CategoryFeatureItem } from '../../types/homeExplore'
import { CategoryFeatureIcon } from './CategoryFeatureIcon'
import styles from './CategoryFeatureRail.module.css'

type CategoryFeatureRailProps = {
  items: CategoryFeatureItem[]
  ariaLabel: string
}

export function CategoryFeatureRail({ items, ariaLabel }: CategoryFeatureRailProps) {
  return (
    <nav className={styles.nav} aria-label={ariaLabel}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <a className={styles.link} href={item.href}>
              <span className={styles.iconWrap}>
                <CategoryFeatureIcon />
              </span>
              <span className={styles.label}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
