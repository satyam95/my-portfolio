import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", changeFrequency: "yearly", priority: 1 },
    { path: "/work", changeFrequency: "monthly", priority: 0.9 },
    {
      path: "/work/invoice-generator",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/work/donut-component-library",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/work/wp-ecom", changeFrequency: "monthly", priority: 0.8 },
    {
      path: "/work/stock-inventory-management",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/work/brainly", changeFrequency: "monthly", priority: 0.8 },
    { path: "/work/laundry-app", changeFrequency: "monthly", priority: 0.8 },
    {
      path: "/work/food-delivery-web-app",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/tinker", changeFrequency: "monthly", priority: 0.8 },
  ];

  const lastModified = new Date();

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency:
      page.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: page.priority,
  }));
}
