export const projectType = {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "GitHub URL",
      name: "github",
      type: "url",
    },
    {
      title: "Blog Text",
      name: "blog",
      type: "text",
    },
    {
      title: "Demo URL",
      name: "url",
      type: "url",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
        title: "Tags",
        name: "tags",
        type: "array",
        of: [{ type: "string" }],
    },
    {
        title: "Slug",
        name: "slug",
        type: "slug",
    }
  ],
};
