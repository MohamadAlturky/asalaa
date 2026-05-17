import type { AppLocale } from '../../types/homeContent'
import type { ProfilePost } from '../../types/profile'
import { ProfilePostCard } from './ProfilePostCard'
import styles from './ProfilePostsGrid.module.css'

type ProfilePostsGridProps = {
  posts: ProfilePost[]
  locale: AppLocale
}

export function ProfilePostsGrid({ posts, locale }: ProfilePostsGridProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <ProfilePostCard key={post.id} post={post} locale={locale} />
      ))}
    </div>
  )
}
