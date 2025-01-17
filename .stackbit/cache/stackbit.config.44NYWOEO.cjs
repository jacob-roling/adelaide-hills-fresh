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

// .stackbit/models/OurApplesPage.js
var OurApplesPage_default = OurApplesPage = {
  name: "OurApplesPage",
  type: "page",
  urlPath: "/our-apples",
  filePath: "src/content/our-apples.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    }
  ]
};

// .stackbit/models/HomePage.js
var HomePage_default = HomePage = {
  name: "HomePage",
  type: "page",
  urlPath: "/",
  filePath: "src/content/home.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    }
  ]
};

// .stackbit/models/NewsPage.js
var NewsPage_default = NewsPage = {
  name: "NewsPage",
  type: "page",
  urlPath: "/news",
  filePath: "src/content/news.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    },
    {
      name: "content",
      type: "string",
      required: true,
      default: "Content"
    }
  ]
};

// .stackbit/models/AboutUsPage.js
var AboutUsPage_default = AboutUsPage = {
  name: "AboutUsPage",
  type: "page",
  urlPath: "/about-us",
  filePath: "src/content/about-us.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    }
  ]
};

// .stackbit/models/EmploymentPage.js
var EmploymentPage_default = EmploymentPage = {
  name: "EmploymentPage",
  type: "page",
  urlPath: "/employment",
  filePath: "src/content/employment.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    }
  ]
};

// .stackbit/models/SustainabilityPage.js
var SustainabilityPage_default = SustainabilityPage = {
  name: "SustainabilityPage",
  type: "page",
  urlPath: "/sustainability",
  filePath: "src/content/sustainability.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    }
  ]
};

// .stackbit/models/OurFacilityPage.js
var OurFacilityPage_default = OurFacilityPage = {
  name: "OurFacilityPage",
  type: "page",
  urlPath: "/our-facility",
  filePath: "src/content/our-facility.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    }
  ]
};

// .stackbit/models/OurOrchardsPage.js
var OurOrchardsPage_default = OurOrchardsPage = {
  name: "OurOrchardsPage",
  type: "page",
  urlPath: "/our-orchards",
  filePath: "src/content/our-orchards.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    }
  ]
};

// .stackbit/models/FruitAustraliaPage.js
var FruitAustraliaPage_default = FruitAustraliaPage = {
  name: "FruitAustraliaPage",
  type: "page",
  urlPath: "/fruit-australia",
  filePath: "src/content/fruit-australia.md",
  canDelete: false,
  singleInstance: true,
  hideContent: true,
  labelField: "label",
  fields: [
    {
      name: "label",
      type: "string",
      required: true,
      default: "Label"
    },
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "headline",
      type: "string",
      required: true,
      default: "Headline"
    }
  ]
};

// .stackbit/models/Post.js
var Post_default = Post = {
  name: "Post",
  type: "page",
  urlPath: "/news/{slug}",
  filePath: "src/content/posts/{slug}.md",
  fields: [
    {
      name: "title",
      type: "string",
      required: true,
      default: "Title"
    },
    {
      name: "description",
      type: "string",
      required: true,
      default: "Description"
    },
    {
      name: "publishedDate",
      type: "date",
      default: /* @__PURE__ */ new Date(),
      required: true
    },
    {
      name: "updatedDate",
      type: "date",
      default: /* @__PURE__ */ new Date(),
      required: true
    }
  ]
};

// .stackbit/index.js
var models = [HomePage_default, NewsPage_default, OurApplesPage_default, AboutUsPage_default, EmploymentPage_default, SustainabilityPage_default, OurFacilityPage_default, OurOrchardsPage_default, FruitAustraliaPage_default, Post_default];

// stackbit.config.js
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.7.0",
  ssgName: "custom",
  nodeVersion: "20",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/home/jacob/code/adelaide-hills-fresh",
      contentDirs: ["src/content"],
      models,
      assetsConfig: {
        referenceType: "relative",
        assetsDir: "src/assets",
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
//# sourceMappingURL=stackbit.config.44NYWOEO.cjs.map
