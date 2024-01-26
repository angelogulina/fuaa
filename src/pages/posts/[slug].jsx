import Head from 'next/head'
import Header from '@/components/header'
import Main from '@/components/main'
import Post from '@/components/post'
import { PostRepository } from '@/repositories/post'

import styles from '@/styles/Slug.module.scss'

const postModel = PostRepository()

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>fuaa | frequently used acronyms</title>
        <meta name="description" content="fuaa | frequently used acronyms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header />
        <Post
          content={post.content}
          title={post.title}
          className={styles.Post}
        />
      </Main>
    </>
  )
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
