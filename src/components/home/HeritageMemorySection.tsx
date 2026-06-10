import type { HeritageMemoryContent } from '../../types/homeMockupSections'
import styles from './HeritageMemorySection.module.css'

const AVATAR_SRC = '/asalaa/images/avatar-placeholder.svg'

type HeritageMemorySectionProps = {
  content: HeritageMemoryContent
}

export function HeritageMemorySection({ content }: HeritageMemorySectionProps) {
  return (
    <section className={styles.section} id="heritage" aria-labelledby="heritage-memory-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title} id="heritage-memory-heading">
            {content.sectionTitle}
          </h2>
          <a className={styles.viewAll} href={content.viewAllHref}>
            {content.viewAllLabel}
          </a>
        </header>
        <div className={styles.grid}>
          {content.cards.map((card) => (
            <article key={card.id} className={styles.card}>
              <a className={styles.cardLink} href={card.href}>
                <div className={styles.cardImageWrap}>
                  <img
                    className={styles.cardImage}
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                  <div className={styles.cardFooter}>
                    <img className={styles.avatar} src={AVATAR_SRC} alt="" width={40} height={40} />
                    <div className={styles.meta}>
                      <span className={styles.author}>{card.authorName}</span>
                      <span className={styles.time}>{card.timeLabel}</span>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
