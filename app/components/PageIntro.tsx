import Image from "next/image";

export default function PageIntro({ index, eyebrow, title, intro, image, imageAlt, portrait = false }: { index: string; eyebrow: string; title: string; intro: string; image: string; imageAlt: string; portrait?: boolean }) {
  return (
    <section className={`page-intro${portrait ? " page-intro-portrait" : ""}`}>
      <div className="page-intro-copy">
        <p className="micro"><span>{index}</span>{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{intro}</p>
      </div>
      <div className="page-intro-image sculptural-frame"><Image src={image} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 58vw" priority unoptimized /></div>
      <span className="vertical-note" aria-hidden="true">Cathy Bieri · Beauty atelier</span>
    </section>
  );
}
