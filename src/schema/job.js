import { WrenchIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "job",
  title: "Job",
  type: "document",
  icon: WrenchIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
