import { getAllPosts } from "lib/api";
import Meta from "components/meta";
import Container from "components/container";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import Layout from "components/layout";
import Hero from "components/hero";
import Posts from "components/posts";
import Pagination from "components/pagination";
import { getPlaiceholder } from "plaiceholder";

//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";

//不要？
/*
export default function Blog() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
}
*/

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}

export async function getStaticProps() {
  const url =
    "https://images.microcms-assets.io/assets/c9420bce48424df09245ddb43c82dc21/d3ab043a96c940a7a62bc4c31278281e/about.jpg";
  console.log(await getPlaiceholder(url));

  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}

/*
const inter = Inter({ subsets: ["latin"] });

function EachPost({ title, url }) {
  return (
    <article>
      <a href={url} target="_blank" rel="noreferrer">
        <h3>{title}</h3>
      </a>
    </article>
  );
}

function Decoration({ children }) {
  return <div style={{ color: "red" }}>{children}</div>;
}

const props1 = {
  title: "スケジュール管理と猫の理論",
  url: "https://www.google.com/?hl=ja",
};

const props2 = {
  title: "音楽が呼び起こす美味しいものの記憶",
  url: "https://www.google.co.jp/maps/?hl=ja",
};

export default function Posts() {
  return (
    <section>
      <Decoration>
        <h1>CUBE</h1>
        <p>アウトプットしていくサイト</p>
      </Decoration>

      <h2>おすすめ記事</h2>
      <EachPost
        {...props1}
        // title="スケジュール管理と猫の理論" url="https://www.google.com/?hl=ja"
      />
      <EachPost
        {...props2}
        // title="音楽が呼び起こす美味しいものの記憶" url="https://www.google.co.jp/maps/?hl=ja"
      />
    </section>
  );
}

*/
