import Image from "next/image";

type ReelImage = { src: string; alt: string; label: string };

export default function ImageReel({ eyebrow, title, images }: { eyebrow: string; title: string; images: ReelImage[] }) {
  return (
    <section className="image-reel section-pad" data-reveal="section">
      <header><p className="micro">{eyebrow}</p><h2>{title}</h2></header>
      <div className="image-reel-grid">
        {images.map((item, index) => <figure className={`reel-frame reel-frame-${index + 1}`} data-immersive={index === 0 ? "true" : undefined} key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 60vw" unoptimized /><figcaption><span>0{index + 1}</span>{item.label}</figcaption></figure>)}
      </div>
    </section>
  );
}
