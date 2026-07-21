import Link from "next/link";
import PageIntro from "../components/PageIntro";
import SiteShell from "../components/SiteShell";
import { contact } from "../lib/content";
import { routeMetadata } from "../lib/seo";
export const metadata = routeMetadata("Nous contacter", "Contactez Cathy Bieri Beauty par téléphone, e-mail ou Instagram pour préparer votre demande.", "/contact", { image: "/images/v2/booking-still.jpg" });

export default function ContactPage() {
  return <SiteShell>
    <PageIntro index="07" eyebrow="Contact" title="Parlons de votre prochain soin." intro="Une question, une envie particulière ou un rendez-vous à organiser ? Choisissez le canal qui vous convient." image="/images/v2/booking-still.jpg" imageAlt="Outils et matières de l’atelier Cathy Bieri Beauty" />
    <section className="contact-grid section-pad">
      <a href={contact.phoneHref}><span>01</span><small>Téléphone</small><strong>{contact.phoneDisplay}</strong><b>↗</b></a>
      <a href={`mailto:${contact.email}`}><span>02</span><small>E-mail</small><strong>{contact.email}</strong><b>↗</b></a>
      <a href={contact.instagram} target="_blank" rel="noreferrer"><span>03</span><small>Instagram</small><strong>@Komobeauty</strong><b>↗</b></a>
    </section>
    <section className="contact-note section-pad"><div><p className="micro light">Disponibilités</p><h2>Un créneau adapté.<br /><em>Confirmé avec vous.</em></h2></div><div><p>Les disponibilités et les modalités sont confirmées personnellement. Indiquez deux créneaux possibles pour faciliter l’organisation de votre rendez-vous.</p><Link href="/reservation" className="button button-paper">Préparer une demande <span>↗</span></Link></div></section>
  </SiteShell>;
}
