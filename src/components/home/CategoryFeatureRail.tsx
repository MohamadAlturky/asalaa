import type { ReactNode } from 'react'
import type { CategoryFeatureItem } from '../../types/homeExplore'
import { Link } from 'react-router-dom'
import styles from './CategoryFeatureRail.module.css'

function CategoryLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  if (/^https?:\/\//i.test(href) || href.startsWith('mailto:')) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }
  if (href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link className={className} to={href}>
        {children}
      </Link>
    )
  }
  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

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
            <CategoryLink className={styles.link} href={item.href}>
              <span className={styles.iconWrap}>
                <img src={item.imageSrc} alt={item.imageAlt} className={styles.categoryImg} />
              </span>
              <span className={styles.label}>{item.label}</span>
            </CategoryLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
