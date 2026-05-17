import { useEffect, useId, useRef, useState } from 'react'
import type { AppLocale } from '../../types/homeContent'
import styles from './LanguageSwitcher.module.css'

type LanguageSwitcherProps = {
  locale: AppLocale
  options: { locale: AppLocale; label: string }[]
  onSelect: (locale: AppLocale) => void
  ariaLabel: string
}

export function LanguageSwitcher({ locale, options, onSelect, ariaLabel }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const current = options.find((o) => o.locale === locale) ?? options[0]

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{current.label}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden>
          <Chevron />
        </span>
      </button>
      {open ? (
        <ul id={listId} className={styles.menu} role="listbox">
          {options.map((opt) => (
            <li key={opt.locale} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={opt.locale === locale}
                className={`${styles.option} ${opt.locale === locale ? styles.optionActive : ''}`}
                onClick={() => {
                  onSelect(opt.locale)
                  setOpen(false)
                }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
