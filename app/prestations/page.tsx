import Image from "next/image";
import Link from "next/link";
import BookingBanner from "../components/BookingBanner";
import SiteShell from "../components/SiteShell";
import { services } from "../lib/content";
import { routeMetadata } from "../lib/seo";
export const metadata = routeMetadata("Prestations beauté personnalisées", "Explorez les prestations Cathy Bieri Beauty et trouvez le soin adapté à vos besoins et à votre style.", "/prestations", { noIndex: true });

export default function PrestationsPage() {
  return (
    <SiteShell>
      <section className="listing-hero section-pad"><p className="micro"><span>02</span>Le menu de soins</p><h1>Prendre soin.<br /><em>Vraiment.</em></h1><p className="lede">Une sélection complète de soins esthétiques et de bien-être, ajustée à vos besoins plutôt qu’à un protocole impersonnel.</p></section>
      <section className="service-catalog section-pad">
        {services.map((service, i) => (
          <article className={`catalog-row${i % 2 ? " catalog-row-reverse" : ""}`} key={service.slug}>
            <Link href={`/prestations/${service.slug}`} className="catalog-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 54vw" unoptimized /></Link>
            <div className="catalog-copy"><p className="micro"><span>{service.index}</span>{service.eyebrow}</p><h2>{service.title}</h2><p>{service.intro}</p><Link href={`/prestations/${service.slug}`} className="arrow-link">Découvrir {service.title.toLocaleLowerCase("fr")} <span>→</span></Link><Link href={`/reservation?service=${service.slug}`} className="catalog-request">Demander ce soin ↗</Link></div>
          </article>
        ))}
      </section>
      <BookingBanner compact />
    </SiteShell>
  );
}
