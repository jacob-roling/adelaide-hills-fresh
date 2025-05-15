export default {
  name: "card",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "padding",
      type: "number",
      required: true,
      default: 4,
      controlType: 'slider',
      min: 0,
      max: 16,
      step: 4,
    },
    {
      name: "children",
      type: "list",
      required: false,
      items: {
        type: "model",
        groups: ["atom"],
      },
    },
  ],
};
