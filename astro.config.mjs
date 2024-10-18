import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import tailwindcss from '@tailwindcss/vite'

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
  ],
  adapter: netlify({
    imageCDN: false,
  }),
    vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        targets: browserslistToTargets(browserslist('>= 0.25%')),
        drafts: {
          customMedia: true
        }
      }
    },
    build: {
      cssMinify: 'lightningcss'
    },
    plugins: [tailwindcss()]
  }
});
