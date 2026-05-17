import type { AppLocale } from '../../types/homeContent'
import type { ExploreSyriaPost } from '../../types/exploreSyria'
import styles from './ExploreSyriaFeed.module.css'

type ExploreSyriaFeedProps = {
  posts: ExploreSyriaPost[]
  locale: AppLocale
  currentUserAvatarSrc: string
}

function feedStrings(locale: AppLocale) {
  if (locale === 'ar') {
    return {
      follow: 'متابعة',
      share: 'مشاركة',
      addComment: 'أضف تعليق',
      likes: (n: number) => `${n} أعجبته`,
      comments: (n: number) => `${n} تعليق`,
    }
  }
  return {
    follow: 'Follow',
    share: 'Share',
    addComment: 'Add a comment',
    likes: (n: number) => `${n} likes`,
    comments: (n: number) => `${n} comments`,
  }
}

export function ExploreSyriaFeed({ posts, locale, currentUserAvatarSrc }: ExploreSyriaFeedProps) {
  const copy = feedStrings(locale)

  return (
    <div className={styles.wrap}>
      {posts.map((post) => (
        <article key={post.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <img className={styles.avatar} src={post.authorAvatarSrc} alt="" width={44} height={44} />
            <div className={styles.headerMain}>
              <div className={styles.nameRow}>
                <span className={styles.author}>{post.authorName}</span>
                <button type="button" className={styles.followBtn}>
                  {copy.follow}
                </button>
              </div>
              <span className={styles.time}>{post.timeLabel}</span>
            </div>
          </div>
          <p className={styles.body}>{post.body}</p>
          {post.hashtags.length > 0 ? (
            <div className={styles.hashtags}>
              {post.hashtags.map((tag) => (
                <button key={tag} type="button" className={styles.tag}>
                  #{tag}
                </button>
              ))}
            </div>
          ) : null}
          {post.imageSrc ? (
            <img className={styles.postMedia} src={post.imageSrc} alt={post.imageAlt ?? ''} loading="lazy" decoding="async" />
          ) : null}
          <div className={styles.divider} aria-hidden />
          <div className={styles.actions}>
            <button type="button" className={styles.actionBtn}>
              <IconHeart className={styles.actionIcon} />
              <span>{copy.likes(post.likeCount)}</span>
            </button>
            <button type="button" className={styles.actionBtn}>
              <IconComment className={styles.actionIcon} />
              <span>{copy.comments(post.commentCount)}</span>
            </button>
            <button type="button" className={styles.actionBtn}>
              <IconShare className={styles.actionIcon} />
              <span>{copy.share}</span>
            </button>
          </div>
          <div className={styles.commentRow}>
            <img className={styles.commentAvatar} src={currentUserAvatarSrc} alt="" width={32} height={32} />
            <input className={styles.commentInput} type="text" placeholder={copy.addComment} disabled aria-disabled="true" />
          </div>
        </article>
      ))}
    </div>
  )
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.98 5.98 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconComment({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M6 19l-2 2V6a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconShare({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 14v5a2 2 0 002 2h10a2 2 0 002-2v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
