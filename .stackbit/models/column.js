export default {
  name: "column",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "area",
      type: "enum",
      required: false,
      options: [
        { label: "Full Width", value: "full" },
        { label: "Content", value: "content" },
        { label: "Start to Content End", value: "start / content-end" },
        { label: "Content Start to End", value: "content-start / end" },
      ],
    },
    {
      name: "gap",
      type: "number",
      required: false,
      default: 0,
      controlType: "slider",
      min: 0,
      max: 16,
      step: 4,
    },
    // {
    //   name: "children",
    //   label: "Rows",
    //   type: "list",
    //   required: false,
    //   items: {
    //     type: "model",
    //     groups: ["atom"],
    //   },
    // },
  ],
};
