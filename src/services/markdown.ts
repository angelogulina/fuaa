import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { PostDataService } from '@/services/abstract'
import { Post } from '@/typings/post'

const markdownPostsDirectory = join(process.cwd(), '_posts')

export class MarkdownService implements PostDataService {
  constructor(
    private readonly postsDirectory: string = markdownPostsDirectory
  ) {}

  private getPostSlugs() {
    return fs.readdirSync(this.postsDirectory)
  }

  private getPostPath(slug: string) {
    return join(this.postsDirectory, slug)
  }

  private getAllPosts() {
    return this.getPostSlugs()
      .filter((slug) => slug.match(/.md$/))
      .map((slug) => this.getPostPath(slug))
  }

  public async getPostBySlug(slug: string) {
    const fileContent = fs.readFileSync(this.getPostPath(`${slug}.md`), 'utf8')
    const { data, content } = matter(fileContent)
    return {
      id: new Date(data.date).valueOf(),
      author: data?.author,
      content: content.trim(),
      date: new Date(data.date),
      description: data?.description,
      excerpt: data.excerpt,
      slug,
      title: data.title,
      url: data?.url,
    } as Post
  }

  public async getAvailablePosts() {
    return Promise.all(this.getAllPosts().map(this.getPostBySlug.bind(this)))
  }
}
