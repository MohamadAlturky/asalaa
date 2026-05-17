export type ProfileStats = {
  posts: number
  likes: number
}

export type ProfileData = {
  username: string
  name: string
  title: string
  followerCount: number
  avatarSrc: string
  coverSrc: string
  stats: ProfileStats
}

export type ProfilePost = {
  id: string
  imageSrc?: string
  imageAlt?: string
  textSnippet: string
  timeLabel: string
  likeCount: number
  commentCount: number
}

export type ProfileProduct = {
  id: string
  title: string
  price: string
  imageSrc: string
  imageAlt: string
}

export type ProfileMuseumItem = {
  id: string
  title: string
  year: string
  description: string
  imageSrc: string
  imageAlt: string
}

export type ProfileArticle = {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  coverImage: string
}

export type ProfileVideo = {
  id: string
  title: string
  thumbnailSrc: string
  duration: string
  viewCount: string
}
