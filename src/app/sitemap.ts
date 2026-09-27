import type { MetadataRoute } from "next";
import { contentPages } from "@/lib/content";
const base = "https://trademarkinfringementattorney.com";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const mainRoutes = ["", ...contentPages.map((page) => `/${page.slug}`)];
  const stateRoutes = ["california", "new-york", "texas", "florida", "illinois"].map((state) => `/trademark-lawyer/${state}`);
  return [...mainRoutes, ...stateRoutes].map((route) => ({ url: `${base}${route}`, lastModified: now, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route.startsWith("/trademark-lawyer/") ? 0.72 : 0.8 }));
}
