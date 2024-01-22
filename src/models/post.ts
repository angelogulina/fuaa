import { PostResponse, Post } from '@/typings/post'
import { PostDataService } from '@/services/abstract'
import { MarkdownService } from '@/services/markdown'

const dataService = new MarkdownService()

export class PostModel {
  constructor(protected readonly service: PostDataService = dataService) {}

  public getAllPosts(): Promise<PostResponse[]> {
    return this.service.getAvailablePosts()
  }

  public getPostBySlug(slug: Post['slug']): Promise<PostResponse> {
    return this.service.getPostBySlug(slug)
  }
}
