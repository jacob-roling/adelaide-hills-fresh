export default {
  name: "icon",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "size",
      type: "enum",
      required: true,
      default: "base",
      options: [
        { label: "Small", value: "sm" },
        { label: "Base", value: "base" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
      ],
    },
    {
      name: "color",
      type: "enum",
      required: true,
      default: "gray-scale",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Gray Scale", value: "gray-scale" },
      ],
    },
    {
      name: "variant",
      type: "enum",
      required: false,
      options: [
        { label: "Tonal", value: "tonal" },
        { label: "Bordered", value: "bordered" },
        { label: "Solid", value: "solid" },
      ],
    },
    {
      name: "name",
      type: "string",
      required: true,
      default: "lucide:check",
    },
  ],
};
