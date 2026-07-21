import type { Metadata } from "next";

export const origin = "https://cathy-bieri-beauty.breniellkouda.chatgpt.site";
export function routeMetadata(title: string, description: string, path: string, options: { noIndex?: boolean; image?: string } = {}): Metadata {
  const image = options.image ?? "/images/v2/hero-sculptural.jpg";
  return {
    title, description, alternates: { canonical: path },
    robots: options.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title, description, url: path, siteName: "Cathy Bieri Beauty", locale: "fr_FR", type: "website", images: [{ url: image, alt: "Univers éditorial Cathy Bieri Beauty" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
