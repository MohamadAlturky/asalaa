export type MuseumThumbItem = {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
  href?: string
}

export type MuseumFeaturedItem = {
  id: string
  title?: string
  imageSrc: string
  imageAlt: string
  href?: string
  isVideo?: boolean
  videoBadgeLabel?: string
}

export type MuseumThumbSection = {
  title: string
  items: MuseumThumbItem[]
  prevAriaLabel: string
  nextAriaLabel: string
}

export type MuseumFeaturedSection = {
  title: string
  items: MuseumFeaturedItem[]
  prevAriaLabel: string
  nextAriaLabel: string
}

export type MuseumPageContent = {
  breadcrumb: string
  pageTitle: string
  mascotImageSrc: string
  mascotImageAlt: string
  sections: {
    antiques: MuseumThumbSection
    jewelry: MuseumThumbSection
    paintings: MuseumFeaturedSection
    screen: MuseumFeaturedSection
  }
}
