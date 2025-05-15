export default {
  name: "page",
  type: "page",
  urlPath: "/{slug}",
  filePath: "content/{slug}.md",
  hideContent: true,
  fieldGroups: [
    {
      name: "seo",
      label: "SEO",
      icon: "page",
    },
  ],
  fields: [
    { group: "seo", name: "title", type: "string", required: false },
    { group: "seo", name: "description", type: "string", required: false },
    {
      group: "seo",
      type: "slug",
      name: "slug",
      label: "Slug",
      description:
        'The URL path of this page relative to site root. For example, the site root (home) page could be "example.com" and the page might be "About Us" so the slug would be "/about-us"',
      required: true,
    },
    {
      name: "children",
      type: "list",
      label: "Sections",
      required: false,
      items: {
        type: "model",
        models: ["section"],
      },
    },
  ],
};
