import type { MuseumShowcaseContent } from '../../types/homeMockupSections'
import styles from './ElectronicMuseumShowcase.module.css'

// const STAR_TILE =
//   "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpath fill='%23ffffff' d='M100 0l8 28 26-14-6 29 28 6-28 14 6 28-29-6-14 28-14-28-29 6 6-28-28-14 28-6-26-14z'/%3E%3C/svg%3E"

type ElectronicMuseumShowcaseProps = {
  content: MuseumShowcaseContent
}

export function ElectronicMuseumShowcase({ content }: ElectronicMuseumShowcaseProps) {
  return (
    <section className={styles.section} id="museum" aria-labelledby="museum-showcase-heading">

      <div className={styles.body}>
        <div className={styles.pattern} 
        // style={{ backgroundImage: `url("${STAR_TILE}")` }}
         aria-hidden />
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h2 className={styles.heading} id="museum-showcase-heading">
              {content.heading}
            </h2>
            <p className={styles.text}>{content.body}</p>
            <a className={styles.cta} href={content.ctaHref}>
              {content.ctaLabel}
            </a>
          </div>
          <div className={styles.media}>
            <div className={styles.bustWrapper}>
              <img
                className={styles.bustDecor}
                src="/images/figma/Logo (1).png"
                alt=""
                aria-hidden="true"
                width={560}
                height={560}
              />
              <img
                className={styles.bust}
                src={content.bustImageSrc}
                alt={content.bustImageAlt}
                width={480}
                height={560}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
