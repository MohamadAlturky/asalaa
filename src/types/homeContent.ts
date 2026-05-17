export type AppLocale = 'ar' | 'en'

export type NavLinkItem = {
  href: string
  label: string
}

export type HomeHeroContent = {
  brandName: string
  navLinks: NavLinkItem[]
  hero: {
    line1: string
    line2: string
  }
  languageOptions: { locale: AppLocale; label: string }[]
}
