import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { PostDataService } from '@/services/abstract'
import { PostData } from '@/typings/post'

const markdownPostsDirectory = join(process.cwd(), './_posts')

export class MarkdownService implements PostDataService {
  constructor(
    private readonly postsDirectory: string = markdownPostsDirectory
  ) {}

  private getPostSlugs(): PostData['slug'][] {
    return (fs.readdirSync(this.postsDirectory) || [])
      .filter((slug) => slug.match(/.md$/))
      .map((slug) => slug.replace(/\.md$/, ''))
  }

  private getPostPath(slug: string) {
    return join(this.postsDirectory, slug)
  }

  public async getPostBySlug(slug: string): Promise<PostData> {
    const fileContent = fs.readFileSync(this.getPostPath(`${slug}.md`), 'utf8')
    const { data, content } = matter(fileContent)
    return {
      id: new Date(data.date).valueOf(),
      author: data?.author || null,
      content: content.trim(),
      date: new Date(data.date).toDateString(),
      description: data?.description || null,
      excerpt: data.excerpt,
      slug,
      title: data.title,
      url: data?.url || null,
    }
  }

  public async getAvailablePosts(): Promise<PostData[]> {
    return Promise.all(this.getPostSlugs().map(this.getPostBySlug.bind(this)))
  }
}
