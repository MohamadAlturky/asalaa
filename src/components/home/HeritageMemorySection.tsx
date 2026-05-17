import type { HeritageSectionContent } from '../../types/homeExplore'
import styles from './HeritageMemorySection.module.css'

type HeritageMemorySectionProps = {
  content: HeritageSectionContent
  isRtl: boolean
}

export function HeritageMemorySection({ content, isRtl }: HeritageMemorySectionProps) {
  const arrow = isRtl ? '\u2190' : '\u2192'

  return (
    <section className={styles.section} id="heritage" aria-labelledby="heritage-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title} id="heritage-heading">
            {content.title}
          </h2>
          <a className={styles.viewAll} href={content.viewAllHref}>
            <span>{content.viewAllLabel}</span>
            <span className={styles.arrow} aria-hidden>
              {arrow}
            </span>
          </a>
        </header>

        <ul className={styles.grid}>
          {content.cards.map((card) => (
            <li key={card.id} className={styles.card}>
              <article className={styles.article}>
                <div className={styles.media}>
                  <img
                    className={styles.photo}
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.excerpt}>{card.excerpt}</p>
                  <footer className={styles.footer}>
                    <img
                      className={styles.avatar}
                      src={card.authorAvatarSrc ?? '/images/avatar-placeholder.svg'}
                      alt=""
                      width={36}
                      height={36}
                    />
                    <div className={styles.meta}>
                      <span className={styles.author}>{card.authorName}</span>
                      <span className={styles.time}>{card.timeLabel}</span>
                    </div>
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
