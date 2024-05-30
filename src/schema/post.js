import { ComposeIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";
import slugify from "slugify";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "image",
      type: "imageWithAlt",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "The post's URL component. All you need to do is click generate AFTER writing the post's title.",
      options: {
        source: "title",
        slugify,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(160),
    }),
    defineField({
      title: "Authors",
      name: "authors",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            defineArrayMember({
              type: "person",
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          type: "image",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
