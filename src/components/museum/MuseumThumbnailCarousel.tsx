import { useCallback, useEffect, useRef, useState } from 'react'
import type { MuseumThumbItem } from '../../types/museum'
import styles from './MuseumThumbnailCarousel.module.css'

type MuseumThumbnailCarouselProps = {
  items: MuseumThumbItem[]
  prevAriaLabel: string
  nextAriaLabel: string
}

function ChevronBack() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
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
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
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

export function MuseumThumbnailCarousel({
  items,
  prevAriaLabel,
  nextAriaLabel,
}: MuseumThumbnailCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const x = Math.abs(el.scrollLeft)
    setAtStart(x <= 1)
    setAtEnd(x >= max - 1)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateEdges()
    el.addEventListener('scroll', updateEdges, { passive: true })
    const ro = new ResizeObserver(updateEdges)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      ro.disconnect()
    }
  }, [updateEdges, items.length])

  const scrollByCard = (dir: 'prev' | 'next') => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>(`.${styles.card}`)
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.7
    const isRtl = document.documentElement.dir === 'rtl'
    const visualDelta = dir === 'next' ? step : -step
    const delta = isRtl ? -visualDelta : visualDelta
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={`${styles.navBtn} ${styles.prev}`}
        aria-label={prevAriaLabel}
        onClick={() => scrollByCard('prev')}
        disabled={atStart}
      >
        <span className={styles.chevron}>
          <ChevronBack />
        </span>
      </button>

      <div className={styles.scroller} ref={scrollerRef}>
        <ul className={styles.track}>
          {items.map((item) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  className={styles.image}
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.next}`}
        aria-label={nextAriaLabel}
        onClick={() => scrollByCard('next')}
        disabled={atEnd}
      >
        <span className={styles.chevron}>
          <ChevronForward />
        </span>
      </button>
    </div>
  )
}
