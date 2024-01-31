import Post from "@/components/post";
import styles from "@/components/postList/index.module.scss";

const PostList = ({ className, posts }) => {
  return (
    <ul className={`${className} ${styles.List}`}>
      {posts.map((post) => (
        <li className={styles.Item} key={post.id}>
          <Post slug={post.slug} title={post.title} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
