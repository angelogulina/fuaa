import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const markdownPostsDirectory = join(process.cwd(), './_posts')

export const MarkdownService = (postsDirectory = markdownPostsDirectory) => {
  const getPostSlugs = () => {
    return (fs.readdirSync(postsDirectory) || [])
      .filter((slug) => slug.match(/.md$/))
      .map((slug) => slug.replace(/\.md$/, ''))
  }

  const getPostPath = (slug) => {
    return join(postsDirectory, slug)
  }

  const getPostBySlug = async (slug) => {
    const fileContent = fs.readFileSync(getPostPath(`${slug}.md`), 'utf8')
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

  const getAvailablePosts = async () => {
    return Promise.all(getPostSlugs().map(getPostBySlug))
  }

  return {
    getAvailablePosts,
    getPostBySlug,
  }
}
