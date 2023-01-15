/*

import { getPostBySlug } from "lib/api";
import Container from "components/container";

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

export async function getStaticProps() {
  const slug = "schedule";

  const post = await getPostBySlug(slug);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}

*/

import { client } from "lib/api";

export default function Schedule() {
  return <h1>記事のタイトル</h1>;
}

export async function getStaticProps() {
  const resPromise = client.get({
    endpoint: "blogs",
  });

  // resPromise.then((res) => console.log(res)).catch((err) => console.log(err));

  try {
    const res = await resPromise;
    console.log(res);
  } catch (err) {
    console.log(err);
  }

  return { props: {} };
}
