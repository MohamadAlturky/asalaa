import { forwardRef, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { AppLocale, NavLinkItem } from '../../types/homeContent'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'
import styles from './Navbar.module.css'

type Theme = 'light' | 'dark'

export type NavbarProps = {
  brandName: string
  navLinks: NavLinkItem[]
  navAriaLabel: string
  menuOpenLabel: string
  menuCloseLabel: string
  theme: Theme
  onThemeChange: (theme: Theme) => void
  themeToggleLabels: { switchToLight: string; switchToDark: string }
  locale: AppLocale
  languageOptions: { locale: AppLocale; label: string }[]
  onLocaleChange: (locale: AppLocale) => void
  languageMenuAriaLabel: string
  isRtl: boolean
}

export function Navbar({
  brandName,
  navLinks,
  navAriaLabel,
  menuOpenLabel,
  menuCloseLabel,
  theme,
  onThemeChange,
  themeToggleLabels,
  locale,
  languageOptions,
  onLocaleChange,
  languageMenuAriaLabel,
  isRtl,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!mobileOpen) return
    firstLinkRef.current?.focus()
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeDrawer = () => setMobileOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div className={styles.start}>
          <Link to="/" className={styles.brand} onClick={closeDrawer}>
            <span className={styles.brandMark} aria-hidden>
              <BrandMark />
            </span>
            <span className={styles.brandName}>{brandName}</span>
          </Link>

          <nav className={styles.desktopNav} aria-label={navAriaLabel}>
            <ul className={styles.desktopList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavAnchor className={styles.navLink} link={link} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.end}>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="visuallyHidden">{mobileOpen ? menuCloseLabel : menuOpenLabel}</span>
            <span aria-hidden className={styles.menuIcon}>
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </span>
          </button>

          <div className={styles.avatar} aria-hidden title="Profile">
            <img src="/images/avatar-placeholder.svg" alt="" width={36} height={36} />
          </div>

          <ThemeToggle theme={theme} onChange={onThemeChange} labels={themeToggleLabels} />

          <LanguageSwitcher
            locale={locale}
            options={languageOptions}
            onSelect={onLocaleChange}
            ariaLabel={languageMenuAriaLabel}
          />
        </div>
      </div>

      {mobileOpen ? (
        <button type="button" className={styles.backdrop} aria-label={menuCloseLabel} onClick={closeDrawer} />
      ) : null}

      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`${styles.drawer} ${mobileOpen ? '' : styles.drawerClosed} ${isRtl ? styles.drawerRtl : styles.drawerLtr}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>{brandName}</span>
          <button type="button" className={styles.drawerClose} onClick={closeDrawer} aria-label={menuCloseLabel}>
            <IconClose />
          </button>
        </div>
        <nav aria-label={navAriaLabel}>
          <ul className={styles.drawerList}>
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <DrawerNavLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  link={link}
                  className={styles.drawerLink}
                  onNavigate={closeDrawer}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href) || href.startsWith('mailto:')
}

function NavAnchor({ link, className }: { link: NavLinkItem; className: string }) {
  if (isExternalHref(link.href)) {
    return (
      <a className={className} href={link.href}>
        {link.label}
      </a>
    )
  }
  return (
    <Link className={className} to={link.href}>
      {link.label}
    </Link>
  )
}

const DrawerNavLink = forwardRef<HTMLAnchorElement, { link: NavLinkItem; className: string; onNavigate: () => void }>(
  function DrawerNavLink({ link, className, onNavigate }, ref) {
    if (isExternalHref(link.href)) {
      return (
        <a ref={ref} className={className} href={link.href} onClick={onNavigate}>
          {link.label}
        </a>
      )
    }
    return (
      <Link ref={ref} className={className} to={link.href} onClick={onNavigate}>
        {link.label}
      </Link>
    )
  },
)

function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f2d27a" />
          <stop offset="100%" stopColor="#b8892a" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="19" fill="none" stroke="url(#brandGold)" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="12" fill="none" stroke="url(#brandGold)" strokeWidth="1.25" opacity="0.85" />
      <path
        d="M20 6l2.2 6.8h7l-5.7 4.1 2.2 6.8-5.7-4.1-5.7 4.1 2.2-6.8-5.7-4.1h7z"
        fill="none"
        stroke="url(#brandGold)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
