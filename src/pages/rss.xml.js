import rss from "@astrojs/rss";
// import { getCollection } from "astro:content";

export async function GET(context) {
  // const posts = await getCollection("blog");
  const posts = [];

  const { title, description } = await sanityClient.getDocument(
    "830f9c5d-2ec2-4378-9590-4c01a6fecc81",
  );

  return rss({
    title,
    description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
