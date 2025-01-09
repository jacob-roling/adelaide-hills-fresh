import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schema";
import {
  singletonTools,
  singletonDocumentListItem,
  filteredDocumentListItems,
} from "sanity-plugin-singleton-tools";

export default defineConfig({
  name: "adelaide-hills-fresh",
  title: "Adelaide Hills Fresh",
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  plugins: [
    singletonTools(),
    structureTool({
      name: "content",
      title: "Content",
      structure: (S, context) =>
        S.list()
          .title("Pages")
          .items([
            singletonDocumentListItem({
              S,
              context,
              type: 'homePage',
              title: 'Home Page',
              id: 'homePage',
            }),
            S.divider(),
            ...filteredDocumentListItems({ S, context }),
          ]),
    }),
  ],
  basePath: "/admin",
  schema: {
    types: schemaTypes,
  },
});
