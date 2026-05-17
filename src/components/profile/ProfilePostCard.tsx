import type { AppLocale } from '../../types/homeContent'
import type { ProfilePost } from '../../types/profile'
import styles from './ProfilePostCard.module.css'

type ProfilePostCardProps = {
  post: ProfilePost
  locale: AppLocale
}

function getCardStrings(locale: AppLocale) {
  if (locale === 'ar') {
    return {
      readMore: 'إقرأ المزيد',
      likes: (n: number) => `${n} أحببته`,
      comments: (n: number) => `${n} تعليق`,
    }
  }
  return {
    readMore: 'Read more',
    likes: (n: number) => `${n} likes`,
    comments: (n: number) => `${n} comments`,
  }
}

export function ProfilePostCard({ post, locale }: ProfilePostCardProps) {
  const strings = getCardStrings(locale)

  return (
    <article className={styles.card}>
      {post.imageSrc ? (
        <div className={styles.imageWrap}>
          <img src={post.imageSrc} alt={post.imageAlt || ''} className={styles.image} />
        </div>
      ) : null}
      
      <div className={styles.content}>
        <p className={styles.text}>
          {post.textSnippet}{' '}
          <button type="button" className={styles.readMoreBtn}>
            {strings.readMore}
          </button>
        </p>

        <div className={styles.metaRow}>
          <span className={styles.time}>{post.timeLabel}</span>

          <div className={styles.actions}>
            <div className={styles.actionItem}>
              <IconHeart className={styles.actionIcon} />
              <span>{strings.likes(post.likeCount)}</span>
            </div>
            <div className={styles.actionItem}>
              <IconComment className={styles.actionIcon} />
              <span>{strings.comments(post.commentCount)}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  )
}

function IconComment({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )
}
