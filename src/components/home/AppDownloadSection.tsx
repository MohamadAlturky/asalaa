import type { AppDownloadContent } from '../../types/homeMockupSections'
import styles from './AppDownloadSection.module.css'

const AppleIcon = () => (
  <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const PlayIcon = () => (
  <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
  </svg>
)

type AppDownloadSectionProps = {
  content: AppDownloadContent
}

export function AppDownloadSection({ content }: AppDownloadSectionProps) {
  return (
    <section className={styles.section} id="asala-app" aria-labelledby="app-download-heading">
      <div className={styles.inner}>
        <img
          className={styles.bgLogo}
          src="/asalaa/images/figma/Logo (1).png"
          alt=""
          aria-hidden="true"
        />
        <div className={styles.media}>
          <img
            className={styles.phone}
            style={{ transform: 'translateY(50px) rotate(2.9deg) scale(1.9)' }}
            src={content.phoneImageSrc}
            alt={content.phoneImageAlt}
            width={320}
            height={640}
            loading="lazy"
            decoding="async"
          />
        </div>
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
              <AppleIcon />
              <div className={styles.storeBtnText}>
                <span className={styles.storeSmall}>Download on the</span>
                <span className={styles.storeStrong}>App Store</span>
              </div>
            </a>
            <a
              className={styles.storeBtn}
              href={content.playStoreHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={content.playStoreAriaLabel}
            >
              <PlayIcon />
              <div className={styles.storeBtnText}>
                <span className={styles.storeSmall}>GET IT ON</span>
                <span className={styles.storeStrong}>Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
