import { PinIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "orchard",
  title: "Orchard",
  type: "document",
  icon: PinIcon,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        defineArrayMember({
          title: "Latitude",
          name: "latitude",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
        defineArrayMember({
          title: "Longitude",
          name: "longitude",
          type: "number",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
  ],
});
