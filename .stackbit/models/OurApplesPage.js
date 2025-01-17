/**
 * @type {import("@stackbit/types").Model}
 */
export default OurApplesPage = {
    name: "OurApplesPage",
    type: "page",
    urlPath: "/our-apples",
    filePath: "src/content/our-apples.md",
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
    ],
  };
  