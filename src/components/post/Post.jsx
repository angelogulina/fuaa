import Link from "next/link";
import styles from "@/components/post/index.module.scss";

const Post = ({ className, content, title }) => {
  return (
    <section className={`${className} ${styles.Post}`}>
      <h2 className={styles.Title}>{title}</h2>
      {content ? (
        <div>
          {content}{" "}
          <Link className={`${styles.toHome} ${styles.btn}`} href={`/`}>
            Back to home
          </Link>
        </div>
      ) : (
        <Link className={styles.btn} href={`posts/${title.toLowerCase()}`}>
          Read more...
        </Link>
      )}
    </section>
  );
};

export default Post;
