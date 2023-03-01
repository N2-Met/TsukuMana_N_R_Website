import { getPostBySlug, getAllSlugs } from "lib/api";
import { extractText } from "lib/extract-text";
import { prevNextPost } from "lib/prev-next-post";
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
import Pagination from "components/pagination";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
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
            key={eyecatch.url}
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

        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs(5);
  return {
    // paths: ["/blog/schedule", "/blog/music", "/blog/microFs"],
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // const slug = "schedule";
  const slug = context.params.slug;

  const post = await getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  } else {
    const description = extractText(post.content);
    // "hoge??foo"左辺hogeがnullまたはundefinedの場合に右辺を返す。
    const eyecatch = post.eyecatch ?? eyecatchLocal;

    const { base64 } = await getPlaiceholder(eyecatch.url);
    eyecatch.blurDataURL = base64;

    const allSlugs = await getAllSlugs();
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    };
  }
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
