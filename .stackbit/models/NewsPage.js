/**
 * @type {import("@stackbit/types").Model}
 */
export default NewsPage = {
  name: "NewsPage",
  type: "page",
  urlPath: "/news",
  filePath: "src/content/news.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label",
    },
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
      name: "headline",
      type: "string",
      required: true,
      default: "Headline",
    },
    {
      name: "content",
      type: "string",
      required: true,
      default: "Content",
    },
  ],
};