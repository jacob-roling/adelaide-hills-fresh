import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://adelaidehillsfresh.com.au",
  devToolbar: {
    enabled: false,
  },
  prefetch: false,
  integrations: [
    mdx(),
    sitemap(),
    sanity({
      projectId: "p6snmur3",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react(),
    icon(),
    playformInline(),
    playformCompress({
      CSS: false,
    }),
  ],
  adapter: netlify({
    imageCDN: false,
  }),
});
