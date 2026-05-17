export type AppLocale = 'ar' | 'en'

export type NavLinkItem = {
  href: string
  label: string
}

export type MuseumHeroContent = {
  topStripSrc: string
  topStripAlt: string
  title: string
  taglines: string[]
  ctaLabel: string
  ctaHref: string
  bustSrc: string
  bustAlt: string
}

export type HomeHeroContent = {
  brandName: string
  navLinks: NavLinkItem[]
  hero: MuseumHeroContent
  languageOptions: { locale: AppLocale; label: string }[]
}
