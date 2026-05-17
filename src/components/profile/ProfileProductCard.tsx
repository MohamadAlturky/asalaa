import type { ProfileProduct } from '../../types/profile'
import styles from './ProfileProductCard.module.css'

type ProfileProductCardProps = {
  product: ProfileProduct
}

export function ProfileProductCard({ product }: ProfileProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.imageSrc} alt={product.imageAlt} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price} dir="auto">{product.price}</p>
      </div>
    </div>
  )
}
