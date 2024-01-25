import { PostData } from '@/typings/post'

export interface PostDataService {
  getAvailablePosts(): Promise<PostData[]>
  getPostBySlug(slug: string): Promise<PostData>
}
