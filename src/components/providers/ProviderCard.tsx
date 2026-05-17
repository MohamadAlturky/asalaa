import { Link } from 'react-router-dom'
import type { ProviderItem } from '../../types/providers'
import styles from './ProviderCard.module.css'

export type ProviderCardProps = {
  provider: ProviderItem
  viewWorksLabel: string
}

export function ProviderCard({ provider, viewWorksLabel }: ProviderCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrap}>
        <img src={provider.avatarSrc} alt={provider.name} className={styles.avatar} width={120} height={120} />
      </div>
      <h3 className={styles.name}>{provider.name}</h3>
      <Link to={`/profile/${provider.username}`} className={styles.viewWorksBtn}>
        {viewWorksLabel}
      </Link>
    </div>
  )
}
