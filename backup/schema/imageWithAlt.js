import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageWithAlt",
  title: "Image",
  type: "object",
  icon: ImageIcon,
  preview: {
    select: {
      title: "alt",
      media: "src",
    },
  },
  fields: [
    defineField({
      name: "src",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Description",
      description: "A description of the image for non-sighted users.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
