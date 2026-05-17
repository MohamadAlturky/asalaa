import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { NewProductCardContent, NewProductsSectionContent } from '../../types/homeExtendedSections'
import styles from './NewProductsSection.module.css'

type NewProductsSectionProps = {
  content: NewProductsSectionContent
}

function SmartLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  const isAppRoute = href.startsWith('/') && !href.startsWith('//')
  if (isAppRoute) {
    return (
      <Link className={className} to={href}>
        {children}
      </Link>
    )
  }
  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

function HeartOutline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 22" width="24" height="22" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M12 19.5S3.5 13.2 3.5 7.9C3.5 5.1 5.6 3 8.2 3c1.6 0 3.1.8 3.8 2.1.7-1.3 2.2-2.1 3.8-2.1 2.6 0 4.7 2.1 4.7 4.9 0 5.3-8.5 11.6-8.5 11.6Z"
      />
    </svg>
  )
}

function HeartFilled({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 22" width="24" height="22" aria-hidden>
      <path
        fill="currentColor"
        d="M12 19.5S3.5 13.2 3.5 7.9C3.5 5.1 5.6 3 8.2 3c1.6 0 3.1.8 3.8 2.1.7-1.3 2.2-2.1 3.8-2.1 2.6 0 4.7 2.1 4.7 4.9 0 5.3-8.5 11.6-8.5 11.6Z"
      />
    </svg>
  )
}

function ProductCard({
  card,
  wishlisted,
  onToggleWishlist,
  labels,
}: {
  card: NewProductCardContent
  wishlisted: boolean
  onToggleWishlist: () => void
  labels: { add: string; remove: string }
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <SmartLink className={styles.imageLink} href={card.href}>
          <img className={styles.image} src={card.imageSrc} alt={card.imageAlt} width={400} height={400} loading="lazy" decoding="async" />
        </SmartLink>
        <button
          type="button"
          className={styles.wishlistBtn}
          aria-label={wishlisted ? labels.remove : labels.add}
          aria-pressed={wishlisted}
          onClick={onToggleWishlist}
        >
          {wishlisted ? <HeartFilled className={styles.heartIcon} /> : <HeartOutline className={styles.heartIcon} />}
        </button>
      </div>
      <SmartLink className={styles.bodyLink} href={card.href}>
        <div className={styles.body}>
          <span className={styles.tag}>{card.categoryLabel}</span>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.creator}>{card.creatorName}</p>
          <p className={styles.price}>{card.priceLabel}</p>
        </div>
      </SmartLink>
    </article>
  )
}

export function NewProductsSection({ content }: NewProductsSectionProps) {
  const [wishlistedIds, setWishlistedIds] = useState<Set<string>>(() => new Set())

  const toggle = (id: string) => {
    setWishlistedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className={styles.section} id="products-new" aria-labelledby="new-products-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title} id="new-products-heading">
            {content.sectionTitle}
          </h2>
          <SmartLink className={styles.viewAll} href={content.viewAllHref}>
            {content.viewAllLabel}
          </SmartLink>
        </header>
        <div className={styles.grid}>
          {content.cards.map((card) => (
            <ProductCard
              key={card.id}
              card={card}
              wishlisted={wishlistedIds.has(card.id)}
              onToggleWishlist={() => toggle(card.id)}
              labels={{
                add: content.wishlistAddAriaLabel,
                remove: content.wishlistRemoveAriaLabel,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
