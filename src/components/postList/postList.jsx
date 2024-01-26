import styles from '@/components/postList/index.module.scss'

const PostList = ({ posts, className }) => {
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
