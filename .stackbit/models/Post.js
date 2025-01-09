/**
 * @type {import("@stackbit/types").Model}
 */
export default Post = {
  name: "Post",
  type: "page",
  urlPath: "/news/{slug}",
  filePath: "src/content/posts/{slug}.md",
  fields: [
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title",
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description",
    },
    {
      name: "publishedDate",
      type: "date",
      default: new Date(),
      required: true,
    },
    {
      name: "updatedDate",
      type: "date",
      default: new Date(),
      required: true,
    },
  ],
};