import styles from './ThemeToggle.module.css'

type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  theme: Theme
  onChange: (theme: Theme) => void
  labels: { switchToLight: string; switchToDark: string }
}

export function ThemeToggle({ theme, onChange, labels }: ThemeToggleProps) {
  const isLight = theme === 'light'
  return (
    <button
      type="button"
      className={styles.button}
      aria-pressed={isLight}
      aria-label={isLight ? labels.switchToDark : labels.switchToLight}
      onClick={() => onChange(isLight ? 'dark' : 'light')}
    >
      <span className={styles.track} aria-hidden>
        <span className={`${styles.thumb} ${isLight ? styles.thumbAtEnd : ''}`}>
          {isLight ? <SunIcon /> : <MoonIcon />}
        </span>
      </span>
    </button>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}
