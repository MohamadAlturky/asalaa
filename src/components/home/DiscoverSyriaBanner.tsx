import type { DiscoverBannerContent } from '../../types/homeExplore'
import styles from './DiscoverSyriaBanner.module.css'

type DiscoverSyriaBannerProps = {
  banner: DiscoverBannerContent
}

export function DiscoverSyriaBanner({ banner }: DiscoverSyriaBannerProps) {
  return (
    <section className={styles.section} id="discover" aria-labelledby="discover-syria-heading">
      <div className={styles.bg} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading} id="discover-syria-heading">
            {banner.heading}
          </h2>
          <a className={styles.cta} href={banner.ctaHref}>
            {banner.ctaLabel}
          </a>
        </div>
        <div className={styles.media}>
          <img
            className={styles.photo}
            src={banner.imageSrc}
            alt={banner.imageAlt}
            width={960}
            height={640}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className={styles.footerBand} aria-hidden />
    </section>
  )
}
