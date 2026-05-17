import { useState } from 'react'
import type { MuseumFeaturedItem } from '../../types/museum'
import styles from './MuseumFeaturedCarousel.module.css'

type MuseumFeaturedCarouselProps = {
  items: MuseumFeaturedItem[]
  prevAriaLabel: string
  nextAriaLabel: string
}

function ChevronBack() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronForward() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PlayBadge({ label }: { label?: string }) {
  return (
    <span className={styles.playBadge}>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
        <path d="M8 5v14l11-7z" fill="currentColor" />
      </svg>
      {label ? <span className={styles.playBadgeLabel}>{label}</span> : null}
    </span>
  )
}

export function MuseumFeaturedCarousel({
  items,
  prevAriaLabel,
  nextAriaLabel,
}: MuseumFeaturedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (items.length === 0) return null

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1))
  const goNext = () => setActiveIndex((i) => Math.min(items.length - 1, i + 1))

  const atStart = activeIndex === 0
  const atEnd = activeIndex === items.length - 1
  const current = items[activeIndex]

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={`${styles.navBtn} ${styles.prev}`}
        aria-label={prevAriaLabel}
        onClick={goPrev}
        disabled={atStart}
      >
        <span className={styles.chevron}>
          <ChevronBack />
        </span>
      </button>

      <div className={styles.viewport} aria-live="polite">
        <article className={styles.slide}>
          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src={current.imageSrc}
              alt={current.imageAlt}
              loading="lazy"
              decoding="async"
            />
            {current.isVideo ? <PlayBadge label={current.videoBadgeLabel} /> : null}
            {current.title && current.isVideo ? (
              <div className={styles.captionOverlay}>
                <h3 className={styles.captionTitle}>{current.title}</h3>
              </div>
            ) : null}
          </div>
        </article>
      </div>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.next}`}
        aria-label={nextAriaLabel}
        onClick={goNext}
        disabled={atEnd}
      >
        <span className={styles.chevron}>
          <ChevronForward />
        </span>
      </button>

      <ol className={styles.dots} aria-hidden>
        {items.map((item, i) => (
          <li
            key={item.id}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
          />
        ))}
      </ol>
    </div>
  )
}
