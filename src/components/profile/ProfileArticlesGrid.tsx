import type { AppLocale } from '../../types/homeContent'
import type { ProfileArticle } from '../../types/profile'
import { ProfileArticleCard } from './ProfileArticleCard'
import styles from './ProfileArticlesGrid.module.css'

type ProfileArticlesGridProps = {
  articles: ProfileArticle[]
  locale: AppLocale
}

export function ProfileArticlesGrid({ articles, locale }: ProfileArticlesGridProps) {
  if (articles.length === 0) {
    return (
      <p className={styles.empty} role="status">
        {locale === 'ar' ? 'لا توجد مقالات بعد.' : 'No articles yet.'}
      </p>
    )
  }

  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ProfileArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
