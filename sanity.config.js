import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schema";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

export default defineConfig({
  name: "adelaide-hills-fresh",
  title: "Adelaide Hills Fresh",
  projectId: "p6snmur3",
  dataset: "production",
  plugins: [structureTool(), unsplashImageAsset()],
  basePath: "/admin",
  schema: {
    types: schemaTypes,
  },
});
