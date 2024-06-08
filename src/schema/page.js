import { defineField, defineType, defineArrayMember } from "sanity";
import {
  BlockContentIcon,
  DocumentTextIcon,
  TextIcon,
  UlistIcon,
} from "@sanity/icons";

export default defineType({
  title: "Page",
  name: "page",
  type: "document",
  icon: DocumentTextIcon,
  groups: [
    {
      name: "editorial",
      title: "Editorial",
    },
    {
      name: "seo",
      title: "Search Engine Optimisation",
    },
  ],
  preview: {
    select: {
      title: "label",
    },
  },
  fields: [
    defineField({
      title: "Label",
      name: "label",
      type: "string",
      description:
        "A label for the page in the CMS (has no effect on the actual website).",
      group: "editorial",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "The page's title that will appear in search results.",
      validation: (Rule) => Rule.required().min(10).max(80),
      group: "seo",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
      description: "The page's description that will appear in search results.",
      validation: (Rule) => Rule.required().min(10).max(160),
      group: "seo",
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      description: "The page's content.",
      validation: (Rule) => Rule.required(),
      group: "editorial",
      of: [
        defineArrayMember({
          title: "Heading",
          type: "object",
          name: "heading",
          icon: TextIcon,
          fields: [
            defineField({
              name: "heading",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineArrayMember({
          type: "imageWithAlt",
        }),
        defineArrayMember({
          type: "youtubeVideo",
        }),
        defineArrayMember({
          title: "Content",
          name: "content",
          type: "object",
          icon: BlockContentIcon,
          fields: [
            defineField({
              type: "array",
              name: "content",
              validation: (Rule) => Rule.required(),
              of: [
                defineArrayMember({
                  type: "block",
                }),
              ],
            }),
          ],
        }),
        defineArrayMember({
          title: "Reference List",
          name: "referenceList",
          type: "object",
          icon: UlistIcon,
          fields: [
            defineField({
              type: "array",
              name: "list",
              title: "List",
              validation: (Rule) => Rule.required(),
              of: [
                defineArrayMember({
                  type: "reference",
                  to: [
                    defineArrayMember({
                      type: "person",
                    }),
                    defineArrayMember({
                      type: "apple",
                    }),
                    defineArrayMember({
                      type: "orchard",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineArrayMember({
          title: "Description List",
          name: "descriptionList",
          type: "object",
          icon: UlistIcon,
          fields: [
            defineField({
              type: "array",
              name: "list",
              title: "List",
              validation: (Rule) => Rule.required(),
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      title: "Title",
                      type: "string",
                      name: "title",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      title: "Description",
                      type: "text",
                      name: "description",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
