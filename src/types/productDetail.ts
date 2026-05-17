export type ProductImageItem = {
  src: string
  alt: string
}

export type ProductOptionGroup = {
  id: 'size' | 'color'
  label: string
  choices: { id: string; label: string }[]
}

export type ProductDetailContent = {
  slug: string
  pageTitle: string
  breadcrumbHomeLabel: string
  breadcrumbProductsLabel: string
  heroDecorImageSrc: string
  heroDecorImageAlt: string
  categoryLabel: string
  title: string
  descriptionParagraphs: string[]
  priceDisplay: string
  images: ProductImageItem[]
  sizeOptions: ProductOptionGroup
  colorOptions: ProductOptionGroup
  defaultSizeId: string
  defaultColorId: string
  addToCartLabel: string
  buyNowLabel: string
  galleryPrevLabel: string
  galleryNextLabel: string
  thumbnailPickerLabel: string
}

export type ProductsIndexContent = {
  pageTitle: string
  breadcrumbHomeLabel: string
  intro: string
  sampleProductTitle: string
  sampleProductHref: string
  sampleProductImageSrc: string
  sampleProductImageAlt: string
}
