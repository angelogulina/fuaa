import { Post } from '@/typings/post'

export interface PostDataService {
  getAvailablePosts(): Promise<Post[]>
}
