import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import { PostRepository } from '@/repositories/post'
import PostList from '@/components/postList'
import styles from '@/styles/Homepage.module.scss'

const openSans = Open_Sans({
  weight: ['300', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <title>fua | frequently used acronyms</title>
        <meta name="description" content="fua | frequently used acronyms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={openSans.className}>
        <header className={styles.Header}>
          fua | frequently used acronyms
        </header>
        <PostList posts={posts} className={styles.PostList} />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const repository = PostRepository()
  const posts = await repository.getAllPosts()
  return { props: { posts } }
}
