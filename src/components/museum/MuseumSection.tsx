import type { ReactNode } from 'react'
import styles from './MuseumSection.module.css'

type MuseumSectionProps = {
  title: string
  headingId: string
  children: ReactNode
}

export function MuseumSection({ title, headingId, children }: MuseumSectionProps) {
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <h2 id={headingId} className={styles.heading}>
          {title}
        </h2>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  )
}
