import { Link } from 'react-router-dom'
import type { DiscoverBannerContent } from '../../types/homeExplore'
import styles from './DiscoverSyriaBanner.module.css'

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href) || href.startsWith('mailto:')
}

type DiscoverSyriaBannerProps = {
  banner: DiscoverBannerContent
}

export function DiscoverSyriaBanner({ banner }: DiscoverSyriaBannerProps) {
  const headingWords = banner.heading.trim().split(/\s+/)
  return (
    <section className={styles.section} aria-labelledby="discover-syria-heading">
      <div className={styles.bg} aria-hidden />
      <div className={styles.media} aria-hidden>
        <img
          className={styles.photo}
          src={banner.imageSrc}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading} id="discover-syria-heading">
            {headingWords.map((word, index) => (
              <span key={index} className={styles.headingWord}>
                {word}
              </span>
            ))}
          </h2>
          {isExternalHref(banner.ctaHref) ? (
            <a className={styles.cta} href={banner.ctaHref}>
              {banner.ctaLabel}
            </a>
          ) : (
            <Link className={styles.cta} to={banner.ctaHref}>
              {banner.ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
