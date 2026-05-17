export type CategoryFeatureItem = {
  id: string
  href: string
  label: string
  /** Maps to a shared icon variant until per-item assets exist */
  iconVariant: 'lamp'
}

export type DiscoverBannerContent = {
  heading: string
  ctaLabel: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
}

export type HeritageCardItem = {
  id: string
  title: string
  excerpt: string
  authorName: string
  timeLabel: string
  imageSrc: string
  imageAlt: string
  authorAvatarSrc?: string
}

export type HeritageSectionContent = {
  title: string
  viewAllLabel: string
  viewAllHref: string
  cards: HeritageCardItem[]
}

export type AppPromoContent = {
  heading: string
  mockupSrc: string
  mockupAlt: string
  appStoreHref: string
  playStoreHref: string
  appStoreBadgeSrc: string
  appStoreBadgeAlt: string
  playStoreBadgeSrc: string
  playStoreBadgeAlt: string
}

export type HomeExploreContent = {
  categories: CategoryFeatureItem[]
  banner: DiscoverBannerContent
  heritage: HeritageSectionContent
  appPromo: AppPromoContent
}
