import type { AppLocale } from '../../types/homeContent'
import type { ProfileArticle } from '../../types/profile'
import styles from './ProfileArticleCard.module.css'

type ProfileArticleCardProps = {
  article: ProfileArticle
  locale: AppLocale
}

export function ProfileArticleCard({ article, locale }: ProfileArticleCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={article.coverImage} alt={article.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <div className={styles.meta}>
          <span>{article.date}</span>
          <span className={styles.dot}>•</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  )
}
