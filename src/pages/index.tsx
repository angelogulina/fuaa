import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import { Post, PostRepository } from '@/repositories/post'

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  posts: Post[]
}

export default function Index({ posts }: Props) {
  return (
    <>
      <Head>
        <title>FUA - Frequently used acronyms</title>
        <meta name="description" content="FUA - Frequently used acronyms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={openSans.className}>
        {posts.map((post) => post.title)}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const repository = new PostRepository()
  const posts = await repository.getAllPosts()
  return { props: { posts } }
}
