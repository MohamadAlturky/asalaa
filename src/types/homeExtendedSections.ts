export type StoryVideoContent = {
  heading: string
  ctaLabel: string
  ctaHref: string
  playButtonAriaLabel: string
}

export type NewProductCardContent = {
  id: string
  href: string
  imageSrc: string
  imageAlt: string
  categoryLabel: string
  title: string
  creatorName: string
  priceLabel: string
}

export type NewProductsSectionContent = {
  sectionTitle: string
  viewAllLabel: string
  viewAllHref: string
  wishlistAddAriaLabel: string
  wishlistRemoveAriaLabel: string
  cards: NewProductCardContent[]
}

export type FooterNavLink = {
  href: string
  label: string
}

export type FooterSocialLink = {
  href: string
  ariaLabel: string
  network: 'facebook' | 'instagram' | 'youtube'
}

export type AsalaHomeFooterContent = {
  logoAlt: string
  navAriaLabel: string
  links: FooterNavLink[]
  socials: FooterSocialLink[]
}

export type HomeExtendedSectionsContent = {
  storyVideo: StoryVideoContent
  newProducts: NewProductsSectionContent
  footer: AsalaHomeFooterContent
}
