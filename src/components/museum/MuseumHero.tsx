import styles from './MuseumHero.module.css'

type MuseumHeroProps = {
  pageTitle: string
  breadcrumb: string
  mascotImageSrc: string
  mascotImageAlt: string
}

export function MuseumHero({ pageTitle, breadcrumb, mascotImageSrc, mascotImageAlt }: MuseumHeroProps) {
  return (
    <div className={styles.heroRow}>
      <div className={styles.mascotWrap}>
        <img
          className={styles.mascot}
          src={mascotImageSrc}
          alt={mascotImageAlt}
          width={120}
          height={140}
          loading="eager"
          decoding="async"
        />
      </div>
      <div className={styles.copy}>
        <h1 className={styles.title}>{pageTitle}</h1>
        <p className={styles.breadcrumb}>{breadcrumb}</p>
      </div>
    </div>
  )
}
