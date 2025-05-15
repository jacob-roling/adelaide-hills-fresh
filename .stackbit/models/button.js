export default {
  name: "button",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "color",
      type: "enum",
      required: true,
      default: "neutral",
      options: [
        { label: "Neutral", value: "neutral" },
        { label: "Primary", value: "primary" },
      ],
    },
    {
      name: "variant",
      type: "enum",
      required: true,
      default: "link",
      options: [
        { label: "Link", value: "link" },
        { label: "Outline", value: "outline" },
        { label: "Solid", value: "solid" },
        { label: "Ghost", value: "hhost" },
      ],
    },
    {
      name: "link",
      type: "reference",
      models: ["page"],
    },
    {
      name: "text",
      type: "string",
      required: true,
    },
    {
      name: "icon",
      type: "string",
    },
    // {
    //   name: "children",
    //   label: "Children",
    //   type: "list",
    //   required: true,
    //   items: {
    //     type: "model",
    //     models: ["text", "icon"],
    //   },
    // },
  ],
};
