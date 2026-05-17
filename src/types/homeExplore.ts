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

export type HomeExploreContent = {
  categories: CategoryFeatureItem[]
  banner: DiscoverBannerContent
}
