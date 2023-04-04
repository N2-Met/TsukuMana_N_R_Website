import { useState } from "react";
import Link from "next/link";
import styles from "styles/nav.module.css";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button className={styles.btn} onClick={toggleNav}>
        {" "}
        MENU
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="/">
            <div onClick={closeNav}>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div onClick={closeNav}>About</div>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <div onClick={closeNav}>Blog</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
