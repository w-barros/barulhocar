// app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.barulhocar.com.br";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/sobre`, lastModified: now },
    { url: `${base}/privacidade`, lastModified: now },
    { url: `${base}/contato`, lastModified: now },
  ];
}
