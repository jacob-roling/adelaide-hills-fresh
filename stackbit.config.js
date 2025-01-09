import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import { models } from ".stackbit";

export default defineStackbitConfig({
  stackbitVersion: "~0.7.0",
  ssgName: "custom",
  nodeVersion: "20",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"],
      models,
      assetsConfig: {
        referenceType: "relative",
        assetsDir: "src/assets",
        uploadDir: "uploads"
      },
    }),
  ],
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  experimental: {
    ssg: {
      name: "Astro",
      logPatterns: {
        up: ["is ready", "astro"],
      },
      directRoutes: {
        "socket.io": "socket.io",
      },
      passthrough: ["/vite-hmr/**"],
    },
  },
});
