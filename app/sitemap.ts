import type { MetadataRoute } from "next";
import { CASES } from "@/lib/cases";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/projetos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...CASES.map((item) => ({
      url: `${SITE_URL}/projetos/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
