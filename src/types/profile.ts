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
