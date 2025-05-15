export default {
  name: "section_area",
  type: "object",
  fields: [
    {
      name: "area",
      type: "enum",
      required: true,
      default: "content",
      options: [
        { label: "Content", value: "content" },
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
        { label: "Left to End of Content", value: "left / content-end" },
        { label: "Start of Content to Right", value: "content-start / right" },
      ],
    },
    {
      name: "gap",
      type: "number",
      required: true,
      default: 0,
      controlType: 'slider',
      min: 0,
      max: 16,
      step: 4,
    },
    {
      name: "children",
      label: "Rows",
      type: "list",
      required: false,
      items: {
        type: "model",
        groups: ["atom"],
      },
    },
  ],
};
