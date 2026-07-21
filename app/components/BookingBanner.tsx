import Link from "next/link";

export default function BookingBanner({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`booking-banner${compact ? " booking-banner-compact" : ""}`}>
      <span className="sun-mark" aria-hidden="true" />
      <p className="micro light">Votre moment commence ici</p>
      <h2>Une beauté pensée<br /><em>pour vous.</em></h2>
      <p>Choisissez votre soin, indiquez vos préférences et recevez une réponse personnelle de Cathy.</p>
      <Link href="/reservation" className="button button-paper">Préparer ma demande <span>↗</span></Link>
    </section>
  );
}

