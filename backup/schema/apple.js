import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "apple",
  title: "Apple",
  type: "document",
  icon: DocumentIcon,
  preview: {
    select: {
      title: "title",
      media: "image.src",
    },
  },
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "imageWithAlt",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "availability",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        defineArrayMember({
          name: "from",
          title: "Available From",
          description: "Number of the month it is available from.",
          type: "number",
          initialValue: 1,
          validation: (Rule) => Rule.min(1).max(12).integer().required(),
        }),
        defineArrayMember({
          name: "to",
          title: "Available To",
          description: "Number of the month it is available to.",
          type: "number",
          initialValue: 12,
          validation: (Rule) => Rule.min(1).max(12).integer().required(),
        }),
      ],
    }),
  ],
});
