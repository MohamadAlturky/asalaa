import type { AppLocale } from '../../types/homeContent'
import type { ProfileProduct } from '../../types/profile'
import { ProfileProductCard } from './ProfileProductCard'
import styles from './ProfileProductsGrid.module.css'

type ProfileProductsGridProps = {
  products: ProfileProduct[]
  locale: AppLocale
}

export function ProfileProductsGrid({ products, locale }: ProfileProductsGridProps) {
  if (products.length === 0) {
    return (
      <p className={styles.empty} role="status">
        {locale === 'ar' ? 'لا توجد منتجات بعد.' : 'No products yet.'}
      </p>
    )
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProfileProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
