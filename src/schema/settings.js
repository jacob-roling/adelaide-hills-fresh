import { CogIcon, PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const TITLE = "Settings";

export default defineType({
  name: "settings",
  title: TITLE,
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      };
    },
  },
});
