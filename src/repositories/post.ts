import { PostDataService } from '@/services/abstract'
import { MarkdownService } from '@/services/markdown'
import { PostData } from '@/typings/post'

export interface Post extends PostData {
  url: string
}

const dataService = new MarkdownService()

export class PostRepository {
  constructor(protected readonly service: PostDataService = dataService) {}

  private attachUrl(post: PostData): Post {
    return { ...post, url: `/posts/${post.slug}` }
  }

  public getAllPosts(): Promise<Post[]> {
    return this.service
      .getAvailablePosts()
      .then((data) => data.map(this.attachUrl))
  }

  public async getPostBySlug(slug: Post['slug']): Promise<Post> {
    const data = await this.service.getPostBySlug(slug)
    return this.attachUrl(data)
  }
}
