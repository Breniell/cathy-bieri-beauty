import Image from "next/image";
import Link from "next/link";
import BookingBanner from "../components/BookingBanner";
import SiteShell from "../components/SiteShell";
import { contact } from "../lib/content";
import { routeMetadata } from "../lib/seo";
export const metadata = routeMetadata("Galerie et univers beauté", "Explorez les visuels éditoriaux d’ambiance de Cathy Bieri Beauty : gestes, matières et inspirations.", "/galerie", { image: "/images/v2/gallery-pedicure.jpg" });

const gallery = [
  ["/images/v2/service-nails.jpg", "Manucure bordeaux précise", "Manucure"],
  ["/images/v2/service-facial.jpg", "Soin du visage hydratant", "Visage"],
  ["/images/v2/gallery-pedicure.jpg", "Pédicure professionnelle", "Pédicure"],
  ["/images/v2/service-makeup.jpg", "Mise en beauté du regard", "Maquillage"],
  ["/images/v2/service-body.jpg", "Soin du corps relaxant", "Bien-être"],
  ["/images/v2/about-craft.jpg", "Outils et gestes de l’atelier", "Savoir-faire"],
  ["/images/v2/hero-sculptural.jpg", "Univers visuel Cathy Bieri Beauty", "Signature"],
];

export default function GalleryPage() {
  return <SiteShell>
    <section className="listing-hero gallery-hero section-pad"><p className="micro"><span>05</span>Galerie</p><h1>La matière.<br /><em>Le geste. Le résultat.</em></h1><p className="lede">Une galerie éditoriale des gestes, textures et univers qui composent l’expérience Cathy Bieri Beauty.</p></section>
    <p className="gallery-disclaimer section-pad" role="note">Ces compositions sont des visuels éditoriaux d’ambiance. Elles présentent l’univers esthétique de la marque et ne constituent pas un portfolio de réalisations clientes.</p>
    <section className="gallery-wall section-pad">{gallery.map(([src, alt, label], i) => <figure className={`gallery-item gallery-item-${i + 1}`} key={src}><div><Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized /></div><figcaption><span>{String(i + 1).padStart(2, "0")}</span>{label}</figcaption></figure>)}</section>
    <section className="social-strip section-pad" aria-labelledby="social-title"><p id="social-title">Suivre l’atelier, les prochaines créations et les disponibilités</p><div className="social-links"><Link href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Suivre Cathy Bieri Beauty sur Instagram (nouvel onglet)">Instagram {contact.socialHandle} <span aria-hidden="true">↗</span></Link><Link href={contact.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Suivre Cathy Bieri Beauty sur TikTok (nouvel onglet)">TikTok {contact.socialHandle} <span aria-hidden="true">↗</span></Link></div></section>
    <BookingBanner compact />
  </SiteShell>;
}
