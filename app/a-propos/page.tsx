import Image from "next/image";
import BookingBanner from "../components/BookingBanner";
import ImageReel from "../components/ImageReel";
import PageIntro from "../components/PageIntro";
import SiteShell from "../components/SiteShell";
import { routeMetadata } from "../lib/seo";
export const metadata = routeMetadata("Notre univers beauté", "Découvrez l’approche Cathy Bieri Beauty : écoute, précision et prestations personnalisées.", "/a-propos", { image: "/images/v2/about-craft.jpg" });

export default function AboutPage() {
  return <SiteShell>
    <PageIntro index="04" eyebrow="L’univers Cathy Bieri" title="Le soin comme savoir-faire." intro="Une approche attentive, professionnelle et humaine de la beauté — dans chaque geste et chaque rendez-vous." image="/images/v2/about-craft.jpg" imageAlt="Gestes et outils professionnels dans l’atelier Cathy Bieri Beauty" portrait />
    <section className="about-manifesto section-pad"><p className="micro">La philosophie</p><blockquote>« Le résultat compte. Mais la manière dont vous vous sentez pendant le soin compte tout autant. »</blockquote></section>
    <section className="about-grid section-pad"><div className="about-portrait"><Image src="/images/v2/about-craft.jpg" alt="Savoir-faire manuel et outils de beauté" fill sizes="(max-width: 760px) 100vw, 42vw" unoptimized /></div><div><p className="micro">La signature</p><h2>Précision dans le geste.<br /><em>Présence dans l’accueil.</em></h2><p>Chaque soin commence par l’écoute, se poursuit par un geste précis et se termine par un résultat fidèle à la personne.</p><div className="value-list"><span><b>01</b>Écoute</span><span><b>02</b>Hygiène</span><span><b>03</b>Précision</span><span><b>04</b>Flexibilité</span></div></div></section>
    <ImageReel eyebrow="L’atelier en mouvement" title="Une esthétique. Plusieurs façons de prendre soin." images={[{src:"/images/v3/facial-future.jpg",alt:"Soin du visage personnalisé",label:"Écoute"},{src:"/images/v3/body-future.jpg",alt:"Soin bien-être des épaules",label:"Présence"},{src:"/images/v3/nails-future.jpg",alt:"Manucure sculpturale signature",label:"Précision"}]} />
    <BookingBanner compact />
  </SiteShell>;
}
