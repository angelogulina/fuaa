import { MarkdownService } from '@/services/markdown'

const dataService = MarkdownService()

export const PostRepository = (service = dataService) => {
  const attachUrl = (post) => {
    return { ...post, url: `/posts/${post.slug}` }
  }

  const getAllPosts = () => {
    return service.getAvailablePosts().then((data) => data.map(attachUrl))
  }

  const getPostBySlug = async (slug) => {
    const data = await this.service.getPostBySlug(slug)
    return attachUrl(data)
  }

  return {
    getAllPosts,
    getPostBySlug,
  }
}
