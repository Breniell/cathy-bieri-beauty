import Link from "next/link";
import BookingBanner from "../components/BookingBanner";
import ImageReel from "../components/ImageReel";
import PageIntro from "../components/PageIntro";
import SiteShell from "../components/SiteShell";
import { routeMetadata } from "../lib/seo";
export const metadata = routeMetadata("Manucure et pédicure à domicile", "Cathy Bieri Beauty propose des prestations mobiles de manucure et pédicure sur rendez-vous, directement au lieu convenu.", "/service-mobile", { image: "/images/v2/mobile-service.jpg" });

const steps = [["01", "Vous choisissez", "Indiquez le soin souhaité, votre zone et deux créneaux possibles."], ["02", "Cathy confirme", "Vous recevez une réponse personnelle avec la disponibilité et les modalités."], ["03", "Le matériel s’installe", "Le matériel nécessaire est installé avec soin dans votre espace."], ["04", "Vous profitez", "La prestation mobile se déroule au lieu convenu avec Cathy."]];

export default function MobilePage() {
  return <SiteShell>
    <PageIntro index="03" eyebrow="Beauté à domicile" title="La beauté vient à vous." intro="Une prestation mobile sur rendez-vous, organisée au lieu convenu avec Cathy." image="/images/v2/mobile-service.jpg" imageAlt="Installation éditoriale évoquant le service mobile Cathy Bieri Beauty" />
    <section className="mobile-promise section-pad"><div><p className="micro">Pourquoi le mobile ?</p><h2>Votre temps est précieux.<br /><em>Votre confort aussi.</em></h2></div><div><p>Une prestation sans déplacement, organisée sur rendez-vous selon le lieu et le créneau confirmés avec Cathy.</p></div></section>
    <ImageReel eyebrow="L’expérience en images" title="L’atelier change de lieu. Pas d’exigence." images={[{src:"/images/v2/mobile-service.jpg",alt:"Installation du service mobile Cathy Bieri",label:"Installation"},{src:"/images/v3/nails-future.jpg",alt:"Manucure signature bordeaux",label:"Résultat"},{src:"/images/v2/gallery-pedicure.jpg",alt:"Pédicure professionnelle",label:"Précision"}]} />
    <section className="mobile-steps section-pad"><div className="section-top"><div><p className="micro light">Comment ça fonctionne</p><h2>Simple à organiser.<br /><em>Précis à réaliser.</em></h2></div><Link href="/reservation" className="button button-paper">Demander un créneau <span>↗</span></Link></div><div className="step-grid">{steps.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="mobile-included section-pad"><p className="micro">Préparer votre rendez-vous</p><div className="included-grid"><article><span>01</span><h3>Un espace lumineux</h3><p>Une petite table et deux sièges suffisent pour installer la prestation.</p></article><article><span>02</span><h3>Des mains disponibles</h3><p>Retirez si possible les accessoires et signalez toute sensibilité particulière.</p></article><article><span>03</span><h3>Votre inspiration</h3><p>Préparez les couleurs ou styles qui vous attirent pour faciliter le choix.</p></article></div></section>
    <BookingBanner compact />
  </SiteShell>;
}
