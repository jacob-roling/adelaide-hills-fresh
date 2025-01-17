/**
 * @type {import("@stackbit/types").Model}
 */
export default OurFacilityPage = {
    name: "OurFacilityPage",
    type: "page",
    urlPath: "/our-facility",
    filePath: "src/content/our-facility.md",
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
  