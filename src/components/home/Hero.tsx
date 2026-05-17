import styles from './Hero.module.css'

type HeroProps = {
  line1: string
  line2: string
}

export function Hero({ line1, line2 }: HeroProps) {
  return (
    <section className={styles.section} id="top">
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className={styles.lineSolid}>{line1}</span>
          <span className={styles.lineHollow}>{line2}</span>
        </h1>
      </div>
    </section>
  )
}
