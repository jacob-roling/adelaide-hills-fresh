export default {
  name: "image",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "src",
      label: "Image",
      type: "image",
      required: true,
    },
    {
      name: "alt",
      label: "Description",
      type: "text",
      required: true,
    },
  ],
};
