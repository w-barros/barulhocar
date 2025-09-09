// app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.barulhocar.com.br";
  return [{ url: `${base}/`, lastModified: new Date() }];
}
