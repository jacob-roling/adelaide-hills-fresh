export default {
  name: "row",
  type: "object",
  groups: ["atom"],
  fields: [
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
      label: "Columns",
      type: "list",
      required: false,
      items: {
        type: "model",
        groups: ["atom"],
      },
    },
  ],
}