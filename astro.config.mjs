import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import tailwindcss from "@tailwindcss/vite";
// import { loadEnv } from "vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    port: 3000,
  },
  site: "https://adelaidehillsfresh.com.au",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap(), icon()],
  adapter: netlify({
    imageCDN: false,
  }),
  vite: {
    server: {
      hmr: { path: '/vite-hmr/' }
    },
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
        drafts: {
          customMedia: true,
        },
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
    plugins: [tailwindcss()],
  },
});
