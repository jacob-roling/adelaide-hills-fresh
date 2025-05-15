export default {
    name: "grid",
    type: "object",
    groups: ["atom"],
    fields: [
      {
        name: "auto_sizing",
        type: "enum",
        required: true,
        default: "auto-fit",
        options: [
          { label: "Fit", value: "auto-fit" },
          { label: "Fill", value: "auto-fill" },
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
        name: "min_width",
        type: "number",
        label: "Minimum Child Width",
        required: true,
        default: 30,
        controlType: 'slider',
        min: 20,
        max: 80,
        step: 10,
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
  }