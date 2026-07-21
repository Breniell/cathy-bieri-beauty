import type { MetadataRoute } from "next";
import { origin } from "./lib/seo";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/prestations/manucure-pedicure", "/service-mobile", "/galerie", "/a-propos", "/reservation", "/contact"].map(path => ({ url: `${origin}${path}`, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })); }
