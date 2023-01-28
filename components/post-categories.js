import styles from "styles/post-categories.module.css";
import Link from "next/link";

export default function PostCategories({ categories }) {
  return (
    <ul className={styles.list}>
      {categories.map(({ name, slug }) => (
        <li key={slug}>
          {/* テキストでは<a>{name}</a>だが警告が出るためaタグは使用しない。 */}
          <Link href={`/blog/category/${slug}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
