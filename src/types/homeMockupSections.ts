export type MuseumShowcaseContent = {
  stripImageSrc: string
  stripImageAlt: string
  bustImageSrc: string
  bustImageAlt: string
  heading: string
  body: string
  ctaLabel: string
  ctaHref: string
}

export type HeritageCardContent = {
  id: string
  href: string
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  authorName: string
  timeLabel: string
}

export type HeritageMemoryContent = {
  sectionTitle: string
  viewAllLabel: string
  viewAllHref: string
  cards: HeritageCardContent[]
}

export type AppDownloadContent = {
  heading: string
  appStoreHref: string
  appStoreAriaLabel: string
  playStoreHref: string
  playStoreAriaLabel: string
  phoneImageSrc: string
  phoneImageAlt: string
}

export type HomeMockupSectionsContent = {
  museum: MuseumShowcaseContent
  heritage: HeritageMemoryContent
  app: AppDownloadContent
}
