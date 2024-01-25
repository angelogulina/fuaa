export type PostResponse = Maybe<PostData>

export interface PostData {
  id: number
  author: string
  content: string
  date?: string
  description?: string
  excerpt?: string
  slug: string
  title: string
  url?: string
}
