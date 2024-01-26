import styles from '@/components/post/index.module.scss'

const Post = ({ className, content, title }) => {
  return (
    <section className={className}>
      <h2 className={styles.Title}>{title}</h2>
      {content && <div>{content}</div>}
    </section>
  )
}

export default Post
