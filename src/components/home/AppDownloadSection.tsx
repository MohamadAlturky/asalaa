import type { AppDownloadContent } from '../../types/homeMockupSections'
import styles from './AppDownloadSection.module.css'

const STAR_TILE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cpath fill='%23ffffff' d='M100 0l8 28 26-14-6 29 28 6-28 14 6 28-29-6-14 28-14-28-29 6 6-28-28-14 28-6-26-14z'/%3E%3C/svg%3E"

type AppDownloadSectionProps = {
  content: AppDownloadContent
}

export function AppDownloadSection({ content }: AppDownloadSectionProps) {
  return (
    <section className={styles.section} id="asala-app" aria-labelledby="app-download-heading">
      <div className={styles.pattern} style={{ backgroundImage: `url("${STAR_TILE}")` }} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading} id="app-download-heading">
            {content.heading}
          </h2>
          <div className={styles.stores}>
            <a
              className={styles.storeBtn}
              href={content.appStoreHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={content.appStoreAriaLabel}
            >
              <span className={styles.storeSmall}>Download on the</span>
              <span className={styles.storeStrong}>App Store</span>
            </a>
            <a
              className={styles.storeBtn}
              href={content.playStoreHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={content.playStoreAriaLabel}
            >
              <span className={styles.storeSmall}>GET IT ON</span>
              <span className={styles.storeStrong}>Google Play</span>
            </a>
          </div>
        </div>
        <div className={styles.media}>
          <img
            className={styles.phone}
            src={content.phoneImageSrc}
            alt={content.phoneImageAlt}
            width={320}
            height={640}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
