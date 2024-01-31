import styles from "@/components/post/index.module.scss";
import Link from "next/link";

const Post = ({ className, content, slug, title }) => {
  return (
    <Link href={`/posts/${slug}`} className={className}>
      <h2 className={styles.Title}>{title}</h2>
      {content && <div>{content}</div>}
    </Link>
  );
};

export default Post;
