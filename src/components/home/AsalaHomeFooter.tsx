import type { AsalaHomeFooterContent, FooterSocialLink } from '../../types/homeExtendedSections'
import styles from './AsalaHomeFooter.module.css'

type AsalaHomeFooterProps = {
  content: AsalaHomeFooterContent
}

function Logo({ title }: { title: string }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" role="img" aria-label={title}>
      <circle cx="36" cy="36" r="34" fill="none" stroke="#c9a227" strokeWidth="2" />
      <path
        fill="#c9a227"
        d="M36 12 44 28h16L48 40l6 20-18-10-18 10 6-20-12-12h16z"
        opacity="0.95"
      />
      <circle cx="36" cy="36" r="8" fill="#0f1412" stroke="#e8d89a" strokeWidth="1.2" />
    </svg>
  )
}

function SocialIcon({ network }: { network: FooterSocialLink['network'] }) {
  const cls = styles.socialIcon
  switch (network) {
    case 'facebook':
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M14 8h3V5h-3c-2.76 0-5 2.05-5 4.58V11H8v3h3v8h3v-8h2.5l.5-3H14V9.5C14 8.65 14.35 8 15.5 8z"
          />
        </svg>
      )
    case 'instagram':
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5ZM17.8 6.7a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
          />
        </svg>
      )
    case 'youtube':
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3.1 3.1 0 0 0 .5 6.2 30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3.1 3.1 0 0 0 2.1-2.1 30 30 0 0 0 .5-5.8 30 30 0 0 0-.5-5.8ZM9.75 15.02V8.98L15.5 12 9.75 15.02Z"
          />
        </svg>
      )
    default:
      return null
  }
}

export function AsalaHomeFooter({ content }: AsalaHomeFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoMark}>
          <Logo title={content.logoAlt} />
        </div>
        <nav className={styles.nav} aria-label={content.navAriaLabel}>
          {content.links.map((link) => (
            <a key={link.href + link.label} className={styles.navLink} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.socials}>
          {content.socials.map((s) => (
            <a key={s.network} className={styles.socialLink} href={s.href} aria-label={s.ariaLabel} rel="noopener noreferrer" target="_blank">
              <SocialIcon network={s.network} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
