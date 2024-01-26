import { Post } from '@/repositories/post'
import styles from '@/components/postList/index.module.scss'

interface Props {
  posts: Post[]
}

const PostList: ReactFCWithClassname<Props> = ({ posts, className }) => {
  return (
    <ul className={`${className} ${styles.List}`}>
      {posts.map((post) => (
        <li className={styles.Item} key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}

export default PostList
