import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Container from "components/container";
import PostHeader from "components/post-header";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";

import { eyecatchLocal } from "lib/constants";

export default function Category({ name, posts }) {
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={psots} />
    </Container>
  );
}

export async function getStaticPaths() {
  const allCats = await getAllCategories();
  return {
    // paths: ["/blog/category/technology"],
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const catSlug = context.params.slug;

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);

  const posts = await getAllPostsByCategory(cat.id);

  //////////////////////////////////////////////////////

  return {
    props: {
      name: cat.name,
    },
  };
}
