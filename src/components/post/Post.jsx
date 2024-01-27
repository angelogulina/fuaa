import styles from "@/components/post/index.module.scss";
import Link from "next/link";

const Post = ({ className, content, title }) => {
  return (
    <Link href={`/posts/${title}`} className={className}>
      <h2 className={styles.Title}>{title}</h2>
      {content && <div>{content}</div>}
    </Link>
  );
};

export default Post;
