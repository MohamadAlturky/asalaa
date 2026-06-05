export type CategoryFeatureItem = {
  id: string
  href: string
  label: string
  imageSrc: string
  imageAlt: string
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
