import type { MuseumHeroContent } from '../../types/homeContent'
import { GeometricBackdrop } from './GeometricBackdrop'
import styles from './Hero.module.css'

type HeroProps = {
  hero: MuseumHeroContent
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className={styles.section} id="top">
      <div className={styles.topStrip}>
        <img className={styles.stripImg} src={hero.topStripSrc} alt={hero.topStripAlt} width={1200} height={200} />
      </div>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h1 className={styles.title} id="museum">
              {hero.title}
            </h1>
            {hero.taglines.map((line, i) => (
              <p key={i} className={styles.tagline}>
                {line}
              </p>
            ))}
            <a className={styles.cta} href={hero.ctaHref}>
              {hero.ctaLabel}
            </a>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualInner}>
              <GeometricBackdrop />
              <img
                className={styles.bust}
                src={hero.bustSrc}
                alt={hero.bustAlt}
                width={640}
                height={800}
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
