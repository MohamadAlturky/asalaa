import type { AppLocale } from './homeContent'

export type ExploreMediaKind = 'image' | 'video' | 'gallery' | 'brandTile'

export type ExploreTileLayoutId =
  | 'palmyra'
  | 'fortressNight'
  | 'emblem'
  | 'stainedGlass'
  | 'clockTower'
  | 'norias'
  | 'street'
  | 'hillFort'
  | 'souq'
  | 'interior'

export type ExploreSyriaTile = {
  id: string
  kind: ExploreMediaKind
  /** Poster or image source (not used for brandTile) */
  src?: string
  alt: string
  layout: ExploreTileLayoutId
}

export type ExploreSyriaPageContent = {
  title: string
  breadcrumb: string
  heroImageSrc: string
  heroImageAlt: string
  brandTile: {
    lineAr: string
    lineArSub: string
    lineEn: string
  }
  overlayButtons: {
    posts: string
    visitors: string
    discover: string
  }
  tiles: ExploreSyriaTile[]
}

export type ExploreSyriaBundle = {
  locale: AppLocale
  content: ExploreSyriaPageContent
}
