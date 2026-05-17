import type { AppLocale } from '../../types/homeContent'
import type { ExploreSyriaPageContent, ExploreSyriaTile } from '../../types/exploreSyria'
import { EXPLORE_TILE_LAYOUT } from './exploreTileLayout'
import styles from './ExploreSyriaMasonry.module.css'

type ExploreSyriaMasonryProps = {
  content: ExploreSyriaPageContent
  locale: AppLocale
}

export function ExploreSyriaMasonry({ content, locale }: ExploreSyriaMasonryProps) {
  const { tiles, overlayButtons, brandTile } = content

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {tiles.map((tile) => (
          <ExploreTile key={tile.id} tile={tile} brandCopy={brandTile} locale={locale} />
        ))}
      </div>
      <div className={styles.overlayRow}>
        <button type="button" className={`${styles.overlayBtn} ${styles.overlayBtnGold}`}>
          {overlayButtons.posts}
        </button>
        <button type="button" className={`${styles.overlayBtn} ${styles.overlayBtnGold}`}>
          {overlayButtons.visitors}
        </button>
        <button type="button" className={`${styles.overlayBtn} ${styles.overlayBtnGreen}`}>
          {overlayButtons.discover}
        </button>
      </div>
    </div>
  )
}

function ExploreTile({
  tile,
  brandCopy,
  locale,
}: {
  tile: ExploreSyriaTile
  brandCopy: ExploreSyriaPageContent['brandTile']
  locale: AppLocale
}) {
  const layout = EXPLORE_TILE_LAYOUT[tile.layout]
  const style = { gridColumn: layout.gridColumn, gridRow: layout.gridRow }

  if (tile.kind === 'brandTile') {
    return (
      <article className={styles.tile} style={style} data-layout={tile.layout} aria-label={locale === 'ar' ? brandCopy.lineAr : brandCopy.lineEn}>
        <div className={styles.brandTile}>
          <EagleMark className={styles.brandEmblem} />
          <p className={styles.brandLineAr}>{brandCopy.lineAr}</p>
          <p className={styles.brandLineSub}>{locale === 'ar' ? brandCopy.lineArSub : brandCopy.lineEn}</p>
        </div>
        <span className={styles.badge} aria-hidden>
          <IconVideo />
        </span>
      </article>
    )
  }

  const showBadge = tile.kind === 'video' || tile.kind === 'gallery'
  const badgeLabel =
    tile.kind === 'video' ? (locale === 'ar' ? 'فيديو' : 'Video') : locale === 'ar' ? 'معرض صور' : 'Gallery'

  return (
    <article className={styles.tile} style={style} data-layout={tile.layout}>
      <img className={styles.tileMedia} src={tile.src} alt={tile.alt} loading="lazy" decoding="async" />
      {showBadge ? (
        <span className={styles.badge} title={badgeLabel} aria-label={badgeLabel}>
          {tile.kind === 'video' ? <IconVideo /> : <IconGallery />}
        </span>
      ) : null}
    </article>
  )
}

function IconVideo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M4 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M16 10l4-2v8l-4-2v-4z" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

function IconGallery() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="5" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5V3.5A1.5 1.5 0 019.5 2h11A1.5 1.5 0 0122 3.5v11a1.5 1.5 0 01-1.5 1.5H19" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function EagleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill="currentColor"
        d="M32 4c-4 8-12 12-20 10 2 8 0 16-6 22 6-2 12-2 18 0 4-8 10-14 18-18-6-6-8-14-6-22-8 2-16-2-20-10zm-8 26c-2 10 2 20 8 28 6-8 10-18 8-28-4 4-8 6-12 6s-8-2-12-6zm12 6c2 8 8 14 16 16-2-8-8-14-16-16zm-12 0c-8 2-14 8-16 16 8-2 14-8 16-16z"
      />
    </svg>
  )
}
