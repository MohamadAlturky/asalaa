import { useCallback } from 'react'
import type { ProductImageItem } from '../../types/productDetail'
import styles from './ProductDetailGallery.module.css'

export type ProductDetailGalleryProps = {
  images: ProductImageItem[]
  activeIndex: number
  onSelectIndex: (index: number) => void
  prevLabel: string
  nextLabel: string
  thumbnailPickerLabel: string
}

export function ProductDetailGallery({
  images,
  activeIndex,
  onSelectIndex,
  prevLabel,
  nextLabel,
  thumbnailPickerLabel,
}: ProductDetailGalleryProps) {
  const len = images.length
  const safeIndex = len === 0 ? 0 : Math.min(Math.max(activeIndex, 0), len - 1)
  const current = images[safeIndex]

  const goPrev = useCallback(() => {
    if (len === 0) return
    onSelectIndex((safeIndex - 1 + len) % len)
  }, [len, onSelectIndex, safeIndex])

  const goNext = useCallback(() => {
    if (len === 0) return
    onSelectIndex((safeIndex + 1) % len)
  }, [len, onSelectIndex, safeIndex])

  if (!current) {
    return null
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.stage}>
        <img
          className={styles.mainImg}
          src={current.src}
          alt={current.alt}
          width={720}
          height={540}
          decoding="async"
        />
        {len > 1 ? (
          <>
            <button type="button" className={`${styles.navBtn} ${styles.navPrev}`} onClick={goPrev} aria-label={prevLabel}>
              <ChevronIcon mirrored />
            </button>
            <button type="button" className={`${styles.navBtn} ${styles.navNext}`} onClick={goNext} aria-label={nextLabel}>
              <ChevronIcon />
            </button>
          </>
        ) : null}
      </div>

      {len > 1 ? (
        <div className={styles.thumbs} role="group" aria-label={thumbnailPickerLabel}>
          {images.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              className={`${styles.thumb} ${i === safeIndex ? styles.thumbActive : ''}`}
              onClick={() => onSelectIndex(i)}
              aria-label={img.alt}
              aria-pressed={i === safeIndex}
            >
              <img src={img.src} alt="" width={88} height={88} decoding="async" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ChevronIcon({ mirrored }: { mirrored?: boolean }) {
  return (
    <svg
      className={mirrored ? styles.chevronMirrored : undefined}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
