export default {
  name: "video",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
    },
    // {
    //   name: "description",
    //   type: "string",
    // },
    {
      name: "provider",
      type: "enum",
      required: true,
      default: "mux",
      options: [
        { label: "Mux", value: "mux" },
        { label: "YouTube", value: "youtube" },
      ],
    },
    {
      name: "id",
      type: "string",
      required: true,
    },
  ],
};
