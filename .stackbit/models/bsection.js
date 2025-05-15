export default {
  name: "section",
  type: "object",
  fields: [
    {
      name: "label",
      type: "string",
    },
    // {
    //   name: "background_color",
    //   type: "enum",
    //   options: [
    //     { label: 'App background', value: 'app_background' },
    //     { label: 'Subtle background', value: 'subtle_background' },
    //   ],
    // },
    {
      name: "children",
      label: "Columns",
      type: "list",
      required: false,
      items: {
        type: "model",
        models: ["column"],
      },
    },
  ],
};
