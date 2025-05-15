export default {
  name: "process",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "gap",
      type: "number",
      required: true,
      default: 0,
      controlType: "slider",
      min: 0,
      max: 16,
      step: 4,
    },
    {
      name: "children",
      type: "list",
      label: "Steps",
      required: false,
      items: {
        type: "model",
        groups: ["atom"],
      },
    },
  ],
};
