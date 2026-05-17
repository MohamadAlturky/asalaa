import styles from './GeometricBackdrop.module.css'

type GeometricBackdropProps = {
  variant?: 'hero' | 'section'
}

/** Faint Islamic-style star motif for museum sections */
export function GeometricBackdrop({ variant = 'hero' }: GeometricBackdropProps) {
  return (
    <svg
      className={`${styles.svg} ${variant === 'section' ? styles.sectionScale : ''}`}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.22">
        <path d="M200 20 L220 180 L380 200 L220 220 L200 380 L180 220 L20 200 L180 180 Z" />
        <path d="M200 60 L214 186 L340 200 L214 214 L200 340 L186 214 L60 200 L186 186 Z" />
        <path d="M200 100 L208 192 L300 200 L208 208 L200 300 L192 208 L100 200 L192 192 Z" />
        <circle cx="200" cy="200" r="160" />
        <circle cx="200" cy="200" r="120" />
      </g>
    </svg>
  )
}
