"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [["/prestations", "Prestations"], ["/service-mobile", "À domicile"], ["/galerie", "Galerie"], ["/a-propos", "L’univers"], ["/contact", "Contact"]];

export function Wordmark({ reverse = false }: { reverse?: boolean }) {
  return <span className="brand-lockup"><Image src={reverse ? "/brand/cathy-bieri-primary-reverse.svg" : "/brand/cathy-bieri-primary.svg"} alt="Cathy Bieri Beauty" width={232} height={54} priority={!reverse} /></span>;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef(false);
  useEffect(() => {
    if (!open) return;
    const toggleButton = toggle.current;
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") { restoreFocus.current = true; setOpen(false); return; }
      if (event.key !== "Tab" || !panel.current) return;
      const focusable = [...panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", keyboard);
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => { document.removeEventListener("keydown", keyboard); if (restoreFocus.current) { restoreFocus.current = false; toggleButton?.focus(); } };
  }, [open]);
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  return <>
    <header className="site-header">
      <Link href="/" className="logo-link" aria-label="Cathy Bieri Beauty — Accueil"><Wordmark /><Image className="mobile-mark" src="/brand/cathy-bieri-monogram.svg" alt="" width={46} height={46} /></Link>
      <nav className="main-nav" aria-label="Navigation principale">{nav.map(([href, label]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}</nav>
      <Link href="/reservation" className="nav-cta" aria-current={pathname === "/reservation" ? "page" : undefined}><span>Prendre rendez-vous</span><b aria-hidden="true">↗</b></Link>
      <button ref={toggle} className="nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => { if (open) restoreFocus.current = true; setOpen(value => !value); }}><i /><i /></button>
    </header>
    {open && <div className="nav-overlay" onMouseDown={() => { restoreFocus.current = true; setOpen(false); }} aria-hidden="true" />}
    <div ref={panel} id="mobile-navigation" className="nav-panel" data-open={open} aria-hidden={!open}><nav aria-label="Navigation mobile">{nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={active(href) ? "page" : undefined}>{label}</Link>)}<Link href="/reservation" onClick={() => setOpen(false)} aria-current={pathname === "/reservation" ? "page" : undefined} className="mobile-reserve">Prendre rendez-vous <span>↗</span></Link></nav></div>
  </>;
}
