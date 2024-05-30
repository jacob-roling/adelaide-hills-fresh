import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      title: "First Name",
      name: "firstName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Last Name",
      name: "lastName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Role",
      name: "role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "imageWithAlt",
      name: "image",
    }),
  ],
});
