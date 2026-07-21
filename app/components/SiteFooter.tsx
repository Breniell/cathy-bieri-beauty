import Link from "next/link";
import { contact } from "../lib/content";
import { Wordmark } from "./SiteHeader";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-cta"><div><p className="micro light">Votre prochain moment</p><h2>Prête à prendre soin de vous ?</h2></div><Link href="/reservation" className="button button-paper">Préparer ma demande <span>↗</span></Link></div>
    <div className="footer-main">
      <div><Wordmark reverse /><p>Une approche personnalisée de la beauté, au lieu convenu avec Cathy.</p></div>
      <div className="footer-nav"><small>Explorer</small><Link href="/prestations">Prestations</Link><Link href="/service-mobile">Service mobile</Link><Link href="/galerie">Galerie</Link><Link href="/a-propos">L’univers</Link><Link href="/contact">Contact</Link><Link href="/reservation">Réservation</Link></div>
      <div className="footer-nav"><small>Nous joindre</small><a href={contact.phoneHref}>{contact.phoneDisplay}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Suivre Cathy Bieri Beauty sur Instagram (nouvel onglet)">Instagram {contact.socialHandle}</a><a href={contact.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Suivre Cathy Bieri Beauty sur TikTok (nouvel onglet)">TikTok {contact.socialHandle}</a><p>Les disponibilités et le lieu sont confirmés personnellement lors de votre demande.</p></div>
    </div>
    <div className="footer-legal"><span>© {new Date().getFullYear()} Cathy Bieri Beauty</span><span>Site en français</span></div>
  </footer>;
}
