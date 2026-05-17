import type { AppPromoContent } from '../../types/homeExplore'
import { GeometricBackdrop } from './GeometricBackdrop'
import styles from './AppDownloadSection.module.css'

type AppDownloadSectionProps = {
  content: AppPromoContent
}

export function AppDownloadSection({ content }: AppDownloadSectionProps) {
  return (
    <section className={styles.section} id="asala-app" aria-labelledby="app-promo-heading">
      <div className={styles.backdrop} aria-hidden>
        <GeometricBackdrop variant="section" />
      </div>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading} id="app-promo-heading">
            {content.heading}
          </h2>
          <div className={styles.badges}>
            <a className={styles.badgeLink} href={content.appStoreHref} rel="noreferrer noopener" target="_blank">
              <img
                className={styles.badgeImg}
                src={content.appStoreBadgeSrc}
                alt={content.appStoreBadgeAlt}
                width={160}
                height={54}
                loading="lazy"
                decoding="async"
              />
            </a>
            <a className={styles.badgeLink} href={content.playStoreHref} rel="noreferrer noopener" target="_blank">
              <img
                className={`${styles.badgeImg} ${styles.playBadge}`}
                src={content.playStoreBadgeSrc}
                alt={content.playStoreBadgeAlt}
                width={180}
                height={54}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
        <div className={styles.mockup}>
          <img
            className={styles.mockupImg}
            src={content.mockupSrc}
            alt={content.mockupAlt}
            width={280}
            height={560}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
