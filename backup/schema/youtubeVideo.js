import { PlayIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "youtubeVideo",
  title: "YouTube Video",
  type: "object",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "The video's title.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "id",
      type: "string",
      title: "ID",
      description:
        "The video ID, can be found from the URL of the YouTube video as the value following 'v='. For example, the ID of a YouTube video with the URL 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' would be 'dQw4w9WgXcQ'.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
