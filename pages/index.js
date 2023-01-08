import Meta from "components/meta";
import Container from "components/container";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import Layout from "components/layout";
import Hero from "components/hero";

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
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
