import PageIntro from "../components/PageIntro";
import ReservationForm from "../components/ReservationForm";
import SiteShell from "../components/SiteShell";
import { contact } from "../lib/content";
import { routeMetadata } from "../lib/seo";
export const metadata = routeMetadata("Demander un rendez-vous beauté", "Préparez votre demande de rendez-vous et précisez la prestation, le lieu souhaité et vos disponibilités.", "/reservation", { image: "/images/v2/booking-still.jpg" });

export default function ReservationPage() {
  return <SiteShell>
    <PageIntro index="06" eyebrow="Prendre rendez-vous" title="Préparons votre moment." intro="Quelques informations suffisent pour permettre à Cathy de vous proposer le rendez-vous le plus adapté." image="/images/v2/booking-still.jpg" imageAlt="Composition sculpturale de préparation d’un rendez-vous beauté" />
    <section className="reservation-section section-pad"><div className="reservation-aside"><p className="micro">Votre demande</p><h2>Simple, précise,<br /><em>sans engagement.</em></h2><p>Après réception, Cathy vous recontacte personnellement pour confirmer la prestation, le lieu, le créneau et le tarif.</p><div className="direct-contact"><span>Vous préférez appeler ?</span><a href={contact.phoneHref}>{contact.phoneDisplay}</a></div></div><ReservationForm /></section>
  </SiteShell>;
}
