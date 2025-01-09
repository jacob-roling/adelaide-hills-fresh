import person from "./person";
import post from "./post";
import page from "./page";
import imageWithAlt from "./imageWithAlt";
import apple from "./apple";
import job from "./job";
import youtubeVideo from "./youtubeVideo";
import orchard from "./orchard";
import { defineArrayMember, defineField, defineType } from "sanity";

export const schemaTypes = [
  defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    options: {
      singleton: true,
    },
    fields: [
      defineField({
        name: "title",
        type: "string",
        title: "Title",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "description",
        type: "string",
        title: "Description",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "headline",
        type: "string",
        title: "Headline",
        validation: (Rule) => Rule.required(),
      })
    ]
  })
];
