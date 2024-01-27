import Post from "@/components/post";
import styles from "@/components/postList/index.module.scss";
import Link from "next/link";

const PostList = ({ className, posts }) => {
  return (
    <ul className={`${className} ${styles.List}`}>
      {posts.map((post) => (
        <li className={styles.Item} key={post.id}>
          <Post title={post.title} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
