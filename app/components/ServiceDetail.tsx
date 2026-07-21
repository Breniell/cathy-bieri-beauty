import Image from "next/image";
import Link from "next/link";
import type { Service } from "../lib/content";
import BookingBanner from "./BookingBanner";
import PageIntro from "./PageIntro";
import SiteShell from "./SiteShell";

export default function ServiceDetail({ service }: { service: Service }) {
  const secondaryImages: Record<string, [string, string, string][]> = {
    "manucure-pedicure": [["/images/v3/nails-future.jpg", "Manucure sculpturale bordeaux", "Signature"], ["/images/v2/gallery-pedicure.jpg", "Pédicure professionnelle réalisée avec précision", "Pédicure"], ["/images/v2/hero-sculptural.jpg", "Finition bordeaux Cathy Bieri Beauty", "Finition"]],
    "soins-du-visage": [["/images/v3/facial-future.jpg", "Soin facial personnalisé et lumineux", "Le soin"], ["/images/v2/about-craft.jpg", "Produits et outils préparés pour un soin personnalisé", "Préparation"], ["/images/v2/service-makeup.jpg", "Peau lumineuse après une mise en beauté", "Éclat"]],
    "corps-bien-etre": [["/images/v3/body-future.jpg", "Soin des épaules dans un espace apaisant", "Présence"], ["/images/v2/booking-still.jpg", "Atmosphère calme avant un soin bien-être", "Rituel"], ["/images/v2/service-facial.jpg", "Moment de détente dans l’atelier", "Détente"]],
    "regard-maquillage": [["/images/v3/facial-future.jpg", "Peau et regard mis en lumière", "Lumière"], ["/images/v2/service-makeup.jpg", "Mise en beauté éditoriale", "Le résultat"], ["/images/v2/about-craft.jpg", "Outils préparés avec soin", "Le geste"]],
  };
  const visuals = secondaryImages[service.slug];
  return (
    <SiteShell>
      <nav className="breadcrumbs section-pad" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><Link href="/prestations">Prestations</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
      <PageIntro index={service.index} eyebrow={service.eyebrow} title={service.title} intro={service.intro} image={service.image} imageAlt={service.imageAlt} />
      <section className="service-story section-pad">
        <div><p className="micro">L’approche</p><h2>Le soin juste,<br /><em>sans automatisme.</em></h2></div>
        <div className="story-copy"><p>{service.description}</p><dl><div><dt>Durée</dt><dd>{service.duration}</dd></div><div><dt>Modalités</dt><dd>Confirmées avec Cathy</dd></div></dl><Link href={`/reservation?service=${service.slug}`} className="button button-terra">Demander ce soin <span>↗</span></Link></div>
      </section>
      <section className="service-highlights section-pad">
        <p className="micro">Ce que le rendez-vous peut inclure</p>
        <div className="highlight-grid">{service.highlights.map((item, i) => <article key={item}><span>{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3></article>)}</div>
        <p className="service-note">Le contenu exact du soin et son tarif sont confirmés lors de votre demande, selon vos besoins.</p>
      </section>
      <section className="service-visual-break section-pad" aria-label={`L’univers ${service.title}`}>
        <div className="service-visual-copy"><p className="micro">Voir, ressentir, choisir</p><h2>Le détail fait<br /><em>la différence.</em></h2><p>Une ambiance, des matières, un résultat.</p></div>
        {visuals.map(([src, alt, label], i) => <figure className={`service-visual service-visual-${i + 1}`} key={src}><div><Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 38vw" unoptimized /></div><figcaption>{label}<span>0{i + 1}</span></figcaption></figure>)}
      </section>
      <section className="process-section section-pad">
        <div className="process-title"><p className="micro light">Le rituel</p><h2>Trois temps.<br /><em>Une expérience.</em></h2></div>
        <div className="process-list">{service.process.map((step, i) => <article key={step.title}><span>0{i + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
      </section>
      <div className="back-link section-pad"><Link href="/prestations">← Toutes les prestations</Link><Link href={`/reservation?service=${service.slug}`}>Demander ce soin →</Link></div>
      <BookingBanner compact />
    </SiteShell>
  );
}
