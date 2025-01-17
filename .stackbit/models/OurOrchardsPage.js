/**
 * @type {import("@stackbit/types").Model}
 */
export default OurOrchardsPage = {
    name: "OurOrchardsPage",
    type: "page",
    urlPath: "/our-orchards",
    filePath: "src/content/our-orchards.md",
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
  