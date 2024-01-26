import { PostRepository } from '@/repositories/post'

const postModel = PostRepository()

export default function PostPage({ post }) {
  return <div>{post.title}</div>
}

export const getStaticProps = async (context) => {
  const post = await postModel.getPostBySlug(context?.params?.slug || '')

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = await postModel.getAllPosts()
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post?.slug,
        },
      }
    }),
    fallback: false,
  }
}
