import Head from 'next/head'
import { PostRepository } from '@/repositories/post'
import Header from '@/components/header'
import Main from '@/components/main'
import PostList from '@/components/postList'
import styles from '@/styles/Homepage.module.scss'

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <title>fua | frequently used acronyms</title>
        <meta name="description" content="fua | frequently used acronyms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header />
        <PostList posts={posts} className={styles.PostList} />
      </Main>
    </>
  )
}

export const getStaticProps = async () => {
  const repository = PostRepository()
  const posts = await repository.getAllPosts()
  return { props: { posts } }
}
