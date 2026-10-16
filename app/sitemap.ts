import type { MetadataRoute } from "next";
import { SITE, products, collections, articles } from "@/lib/data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const s = ["", "/shop", "/collections", "/science", "/ingredients", "/routine", "/journal", "/about", "/faq", "/contact", "/stores", "/privacy", "/terms"];
  return [...s, ...products.map((p) => `/products/${p.slug}`), ...collections.map((c) => `/collections/${c.slug}`), ...articles.map((a) => `/journal/${a.slug}`)]
    .map((p) => ({ url: SITE + p, lastModified: new Date("2026-10-16"), priority: p === "" ? 1 : 0.7 }));
}
