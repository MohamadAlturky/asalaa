import type { ProfileArticle } from '../../types/profile'
import styles from './ProfileArticleCard.module.css'

type ProfileArticleCardProps = {
  article: ProfileArticle
}

export function ProfileArticleCard({ article }: ProfileArticleCardProps) {
  return (
    <button type="button" className={styles.card} onClick={() => undefined}>
      <span className={styles.imageContainer}>
        <img src={article.coverImage} alt="" className={styles.image} />
      </span>
      <span className={styles.content}>
        <span className={styles.title}>{article.title}</span>
        <span className={styles.excerpt}>{article.excerpt}</span>
        <span className={styles.meta}>
          <span>{article.date}</span>
          <span className={styles.dot} aria-hidden>•</span>
          <span>{article.readTime}</span>
        </span>
      </span>
    </button>
  )
}
