import { getPostBySlug } from "lib/api";
import { extractText } from "lib/extract-text";
import Meta from "components/meta";
import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import ConvertBody from "components/convert-body";
import PostCategories from "components/post-categories";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgh={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px)1152px,110vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  // const slug = "schedule";
  const slug = "micro";

  const post = await getPostBySlug(slug);
  const description = extractText(post.content);
  // "hoge??foo"左辺hogeがnullまたはundefinedの場合に右辺を返す。
  const eyecatch = post.eyecatch ?? eyecatchLocal;

  const { base64 } = await getPlaiceholder(eyecatch.url);
  eyecatch.blurDataURL = base64;

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
    },
  };
}

/*
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

*/
