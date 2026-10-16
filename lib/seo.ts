import type { Metadata } from "next";
export function meta(title: string, description: string, path: string, image = "/images/serum.jpg"): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "NÜAGE 香港", locale: "zh_HK", type: "website", images: [{ url: image, width: 1200, height: 800, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
