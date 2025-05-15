var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.js
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");

// .stackbit/models/page.js
var page_default = {
  name: "page",
  type: "page",
  urlPath: "/{slug}",
  filePath: "content/{slug}.md",
  hideContent: true,
  fieldGroups: [
    {
      name: "seo",
      label: "SEO",
      icon: "page"
    }
  ],
  fields: [
    { group: "seo", name: "title", type: "string", required: false },
    { group: "seo", name: "description", type: "string", required: false },
    {
      group: "seo",
      type: "slug",
      name: "slug",
      label: "Slug",
      description: 'The URL path of this page relative to site root. For example, the site root (home) page could be "example.com" and the page might be "About Us" so the slug would be "/about-us"',
      required: true
    },
    {
      name: "children",
      type: "list",
      label: "Sections",
      required: false,
      items: {
        type: "model",
        models: ["section"]
      }
    }
  ]
};

// .stackbit/models/video.js
var video_default = {
  name: "video",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string"
    },
    // {
    //   name: "description",
    //   type: "string",
    // },
    {
      name: "provider",
      type: "enum",
      required: true,
      default: "mux",
      options: [
        { label: "Mux", value: "mux" },
        { label: "YouTube", value: "youtube" }
      ]
    },
    {
      name: "id",
      type: "string",
      required: true
    }
  ]
};

// .stackbit/models/section.js
var section_default = {
  name: "section",
  type: "object",
  fields: [
    {
      name: "label",
      type: "string",
      required: true
    },
    {
      name: "layout",
      type: "enum",
      required: true,
      default: "first",
      options: [
        { label: "Content First", value: "first" },
        { label: "Content Last", value: "last" },
        { label: "Centered", value: "centered" }
      ]
    },
    {
      name: "eyebrow",
      type: "string"
    },
    {
      name: "heading",
      type: "string"
    },
    {
      name: "subheading",
      type: "string"
    },
    {
      name: "content",
      type: "markdown"
    },
    video_default,
    {
      name: "image",
      type: "object",
      fields: [
        {
          name: "src",
          label: "Source",
          type: "image",
          required: true
        },
        {
          name: "alt",
          label: "Description",
          type: "string",
          required: true
        }
      ]
    },
    {
      name: "buttons",
      type: "list",
      items: {
        type: "model",
        models: ["button"]
      }
    }
  ]
};

// .stackbit/models/button.js
var button_default = {
  name: "button",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "color",
      type: "enum",
      required: true,
      default: "neutral",
      options: [
        { label: "Neutral", value: "neutral" },
        { label: "Primary", value: "primary" }
      ]
    },
    {
      name: "variant",
      type: "enum",
      required: true,
      default: "link",
      options: [
        { label: "Link", value: "link" },
        { label: "Outline", value: "outline" },
        { label: "Solid", value: "solid" },
        { label: "Ghost", value: "hhost" }
      ]
    },
    {
      name: "link",
      type: "reference",
      models: ["page"]
    },
    {
      name: "text",
      type: "string",
      required: true
    },
    {
      name: "icon",
      type: "string"
    }
    // {
    //   name: "children",
    //   label: "Children",
    //   type: "list",
    //   required: true,
    //   items: {
    //     type: "model",
    //     models: ["text", "icon"],
    //   },
    // },
  ]
};

// .stackbit/models/text.js
var text_default = {
  name: "text",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "text",
      type: "string",
      required: true
    }
  ]
};

// .stackbit/models/icon.js
var icon_default = {
  name: "icon",
  type: "object",
  groups: ["atom"],
  fields: [
    {
      name: "size",
      type: "enum",
      required: true,
      default: "base",
      options: [
        { label: "Small", value: "sm" },
        { label: "Base", value: "base" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" }
      ]
    },
    {
      name: "color",
      type: "enum",
      required: true,
      default: "gray-scale",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Gray Scale", value: "gray-scale" }
      ]
    },
    {
      name: "variant",
      type: "enum",
      required: false,
      options: [
        { label: "Tonal", value: "tonal" },
        { label: "Bordered", value: "bordered" },
        { label: "Solid", value: "solid" }
      ]
    },
    {
      name: "name",
      type: "string",
      required: true,
      default: "lucide:check"
    }
  ]
};

// .stackbit/index.js
var models = [
  page_default,
  section_default,
  text_default,
  icon_default,
  button_default
  // site_configuration,
  // section_area,
  // row,
  // content,
  // button,
  // text,
  // card,
  // image,
  // grid,
  // process,
  // contact_form,
  // service_area_map,
];

// stackbit.config.js
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.7.0",
  ssgName: "custom",
  nodeVersion: "20",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/home/jacob/code/adelaide-hills-fresh",
      contentDirs: ["content"],
      models,
      assetsConfig: {
        referenceType: "relative",
        assetsDir: "content/assets",
        uploadDir: "uploads"
      }
    })
  ],
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  experimental: {
    ssg: {
      name: "Astro",
      logPatterns: {
        up: ["is ready", "astro"]
      },
      directRoutes: {
        "socket.io": "socket.io"
      },
      passthrough: ["/vite-hmr/**"]
    }
  }
});
//# sourceMappingURL=stackbit.config.FZSDQ6JQ.cjs.map
