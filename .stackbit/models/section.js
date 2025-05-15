import video from "./video";

export default {
  name: "section",
  type: "object",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
    },
    {
      name: "layout",
      type: "enum",
      required: true,
      default: "first",
      options: [
        { label: "Content First", value: "first" },
        { label: "Content Last", value: "last" },
        { label: "Centered", value: "centered" },
      ],
    },
    {
      name: "eyebrow",
      type: "string",
    },
    {
      name: "heading",
      type: "string",
    },
    {
      name: "subheading",
      type: "string",
    },
    {
      name: "content",
      type: "markdown",
    },
    video,
    {
      name: "image",
      type: "object",
      fields: [
        {
          name: "src",
          label: "Source",
          type: "image",
          required: true,
        },
        {
          name: "alt",
          label: "Description",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "buttons",
      type: "list",
      items: {
        type: "model",
        models: ["button"],
      },
    },
  ],
};
