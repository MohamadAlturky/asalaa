import type { AppLocale } from '../../types/homeContent'
import type { StoryVideoContent } from '../../types/homeExtendedSections'
import styles from './StoryVideoSection.module.css'

type StoryVideoSectionProps = {
  locale: AppLocale
  content: StoryVideoContent
}

export function StoryVideoSection({ locale, content }: StoryVideoSectionProps) {
  const copy = (
    <div className={styles.copy}>
      <h2 className={styles.heading} id="story-video-heading">
        {content.heading}
      </h2>
      <a className={styles.cta} href={content.ctaHref}>
        {content.ctaLabel}
      </a>
    </div>
  )

  const video = (
    <div className={styles.videoWrap}>
      <button type="button" className={styles.playBtn} aria-label={content.playButtonAriaLabel}>
        <span className={styles.playIcon} aria-hidden />
      </button>
    </div>
  )

  return (
    <section className={styles.section} id="story-video" aria-labelledby="story-video-heading">
      <div className={styles.inner}>
        {locale === 'ar' ? (
          <>
            {copy}
            {video}
          </>
        ) : (
          <>
            {video}
            {copy}
          </>
        )}
      </div>
    </section>
  )
}
