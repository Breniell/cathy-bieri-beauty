import Image from "next/image";
import Link from "next/link";
import BookingBanner from "./components/BookingBanner";
import SiteShell from "./components/SiteShell";
import { services } from "./lib/content";
import { routeMetadata } from "./lib/seo";
export const metadata = routeMetadata("Beauté personnalisée", "Découvrez l’univers Cathy Bieri Beauty et préparez une demande de prestation personnalisée.", "/");

export default function Home() {
  return (
    <SiteShell>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="micro"><span>01</span>Beauté personnalisée · Service mobile</p>
          <h1>La beauté,<br />à votre <em>mesure.</em></h1>
          <p className="lede">Une approche attentive où chaque geste et chaque demande sont pensés autour de vos préférences.</p>
          <div className="hero-buttons"><Link href="/reservation" className="button button-terra">Prendre rendez-vous <span>↗</span></Link><Link href="/prestations" className="arrow-link">Découvrir les soins <span>→</span></Link></div>
        </div>
        <div className="home-hero-image sculptural-frame" data-immersive="true"><Image src="/images/v3/nails-future.jpg" alt="Manucure sculpturale bordeaux dans l’univers Cathy Bieri Beauty" fill sizes="(max-width: 760px) 100vw, 58vw" priority unoptimized /></div>
        <span className="discover-rail">Découvrir <b>↓</b></span>
        <div className="hero-index">
          {services.slice(0, 3).map(service => <Link href={`/prestations/${service.slug}`} key={service.slug}><b>{service.index}</b><span>{service.shortTitle}</span></Link>)}
        </div>
      </section>

      <section className="manifesto section-pad">
        <p className="micro">Notre vision</p>
        <h2>Ni une chaîne.<br />Ni un rituel copié.<br /><em>Votre atelier.</em></h2>
        <div><p>Cathy Bieri Beauty réunit soin, esthétique et bien-être dans une expérience plus personnelle. Ici, on prend le temps de comprendre avant de commencer.</p><Link href="/a-propos" className="arrow-link">Entrer dans l’univers <span>→</span></Link></div>
      </section>

      <section className="home-services section-pad">
        <div className="section-top"><div><p className="micro">Les essentiels</p><h2>Des soins complets.<br /><em>Une seule signature.</em></h2></div><Link href="/prestations" className="arrow-link">Toutes les prestations <span>→</span></Link></div>
        <div className="editorial-cards">
          {services.slice(0, 3).map((service, i) => (
            <Link href={`/prestations/${service.slug}`} className={`editorial-card editorial-card-${i + 1}`} key={service.slug}>
              <div className="card-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 34vw" unoptimized /></div>
              <div className="card-meta"><span>{service.index}</span><div><h3>{service.title}</h3><p>{service.intro}</p></div><b>↗</b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mobile-teaser">
        <div className="mobile-teaser-image"><Image src="/images/v2/mobile-service.jpg" alt="Service de beauté mobile Cathy Bieri au domicile d’une cliente" fill sizes="(max-width: 760px) 100vw, 52vw" unoptimized /></div>
        <div className="mobile-teaser-copy"><p className="micro light"><span>04</span>Le service mobile</p><h2>La beauté vient<br /><em>jusqu’à vous.</em></h2><p>Manucure et pédicure mobiles sur rendez-vous, au lieu et au créneau convenus avec Cathy.</p><Link href="/service-mobile" className="button button-paper">Comprendre le service <span>↗</span></Link></div>
      </section>

      <section className="visual-journal section-pad" aria-labelledby="journal-title">
        <div className="visual-journal-heading"><p className="micro"><span>05</span>Le journal de l’atelier</p><h2 id="journal-title">Des gestes précis.<br /><em>Des résultats visibles.</em></h2><p>Explorez les matières, les détails et les différentes façons de prendre soin de vous.</p></div>
        <Link href="/prestations/soins-du-visage" className="journal-image journal-image-tall"><Image src="/images/v3/facial-future.jpg" alt="Soin du visage dans une scénographie sculpturale" fill sizes="(max-width: 760px) 100vw, 34vw" unoptimized /><span>Soins du visage <b>↗</b></span></Link>
        <Link href="/prestations/corps-bien-etre" className="journal-image"><Image src="/images/v3/body-future.jpg" alt="Soin bien-être dans un espace contemporain" fill sizes="(max-width: 760px) 100vw, 30vw" unoptimized /><span>Corps & bien-être <b>↗</b></span></Link>
      </section>

      <section className="signature section-pad"><span className="sun-mark dark" aria-hidden="true" /><p>Précision</p><p>Présence</p><p>Personnalisation</p></section>
      <BookingBanner />
    </SiteShell>
  );
}
