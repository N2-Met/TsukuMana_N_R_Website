import Link from "next/link";
import styles from "styles/logo.module.css";

export default function Logo({ boxOn = false }) {
  return (
    //補足：テキスト通りに<Linkタブ内で<a>を使用するとエラーとなるため使用していない。
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      CUBE
    </Link>
  );
}
