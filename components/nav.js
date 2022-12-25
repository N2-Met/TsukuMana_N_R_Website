import Link from "next/link";
import styles from "styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div>About</div>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <div>Blog</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
