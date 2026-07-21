import type { Metadata } from "next";
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import { origin } from "./lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: "Cathy Bieri Beauty | Beauté personnalisée", template: "%s | Cathy Bieri Beauty" },
  description: "Découvrez l’univers Cathy Bieri Beauty et demandez une prestation de beauté personnalisée, avec un accompagnement attentif et professionnel.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cathy Bieri Beauty",
    description: "Une approche personnalisée de la beauté et des prestations mobiles sur rendez-vous.",
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Cathy Bieri Beauty",
    images: [{ url: "/images/v2/hero-sculptural.jpg", alt: "Univers éditorial Cathy Bieri Beauty" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/v2/hero-sculptural.jpg"] },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": `${origin}/#organization`, name: "Cathy Bieri Beauty", url: origin, email: "mailto:cat.bieri@outlook.com", telephone: "078 211 06 03", sameAs: ["https://www.instagram.com/komobeauty/"] }, { "@type": "WebSite", "@id": `${origin}/#website`, url: origin, name: "Cathy Bieri Beauty", inLanguage: "fr", publisher: { "@id": `${origin}/#organization` } }] }).replace(/</g, "\\u003c") }} /></body>
    </html>
  );
}
