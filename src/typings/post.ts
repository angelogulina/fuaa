export type PostResponse = Maybe<Post>

export interface Post {
  id: number
  author: string
  content: string
  date?: Date
  description?: string
  slug: string
  title: string
  url?: string
}
