import styles from "styles/hero.module.css";
import Image from "next/image";
//import cube from "images/cube.jpg";

const cube = {
  src: "https://images.microcms-assets.io/assets/c9420bce48424df09245ddb43c82dc21/41be5ae839184f678c85475589aac389/cube.jpg",
  height: 1300,
  width: 1500,
  // "data:image/jpg;base64,"は、Base64エンコードされたJPEG画像のデータを含むデータURIスキームの一部。
  // このスキームを使用すると、Webページのソースコードに画像を直接埋め込める。
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGMofPL/yv//8x+9y7r/m6Hu638GvwQmDobCa+8B4vwPOhdiFzEAAAAASUVORK5CYII=",
};

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width:768px) 50vm ,100vm"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}

/*
export default function Hero() {
  return (
    <div>
      <h1>CUBE</h1>
      <p>アウトプットしていくサイト</p>
    </div>
  );
}

*/
