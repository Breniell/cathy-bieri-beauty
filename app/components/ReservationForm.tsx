"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { contact, services } from "../lib/content";

export default function ReservationForm() {
  const serviceSelect = useRef<HTMLSelectElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const slug = new URLSearchParams(location.search).get("service");
    const match = services.find(item => item.slug === slug);
    if (match && serviceSelect.current) serviceSelect.current.value = match.title;
  }, []);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setReady(true);
    const data = new FormData(event.currentTarget);
    const body = [`Nom : ${data.get("name")}`, `Téléphone : ${data.get("phone")}`, `Prestation : ${data.get("service")}`, `Lieu souhaité : ${data.get("location")}`, `Date ou période : ${data.get("date")}`, "", `Message : ${data.get("message") || "—"}`].join("\n");
    location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Demande de rendez-vous — ${data.get("service")}`)}&body=${encodeURIComponent(body)}`;
  }
  return <form className="reservation-form" onSubmit={handleSubmit}>
    <div className="form-note" role="note"><strong>Comment cela fonctionne</strong><p>Ce formulaire prépare un e-mail dans votre application. Il ne transmet aucune donnée automatiquement : vous relisez puis envoyez vous-même.</p></div>
    <fieldset><legend><span>01</span> Vos coordonnées</legend><div className="form-grid"><label><span>Nom et prénom *</span><input name="name" required autoComplete="name" /></label><label><span>Téléphone *</span><input name="phone" required autoComplete="tel" inputMode="tel" /></label></div></fieldset>
    <fieldset><legend><span>02</span> Votre soin</legend><div className="form-grid"><label><span>Prestation *</span><select ref={serviceSelect} name="service" required defaultValue=""><option value="" disabled>Choisir une prestation</option>{services.map(item => <option key={item.slug} value={item.title}>{item.title}</option>)}<option>Service mobile à domicile</option><option>Autre demande</option></select></label><label><span>Lieu souhaité *</span><select name="location" required defaultValue=""><option value="" disabled>Choisir une préférence</option><option>À mon domicile</option><option>À confirmer avec Cathy</option></select></label></div></fieldset>
    <fieldset><legend><span>03</span> Vos préférences</legend><div className="form-grid"><label className="form-wide"><span>Date ou période souhaitée *</span><input name="date" required aria-describedby="date-help" /><small id="date-help">Par exemple : samedi après-midi ou semaine du 12 août.</small></label><label className="form-wide"><span>Détails utiles <small>(facultatif)</small></span><textarea name="message" rows={5} placeholder="Style souhaité, zone approximative, sensibilités, occasion…" /></label></div></fieldset>
    {ready && <p className="form-status" role="status">Votre application e-mail va s’ouvrir. Vérifiez le message avant de l’envoyer.</p>}
    <div className="form-submit"><p>Vous gardez le contrôle : rien n’est envoyé sans votre action dans l’application e-mail.</p><button className="button button-terra" type="submit">Ouvrir ma demande par e-mail <span>↗</span></button></div>
  </form>;
}
