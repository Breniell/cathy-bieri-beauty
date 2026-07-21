"use client";

import { useEffect } from "react";

export default function MotionLayer() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let observer: IntersectionObserver | undefined;
    if (!reduced.matches) {
      document.documentElement.classList.add("motion-ready");
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer?.unobserve(entry.target); }
      }), { threshold: .1, rootMargin: "0px 0px -5%" });
      targets.forEach(target => observer?.observe(target));
    }
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${max > 0 ? scrollY / max * 100 : 0}%`);
    };
    updateProgress();
    addEventListener("scroll", updateProgress, { passive: true });
    const cleanups: (() => void)[] = [];
    if (!reduced.matches && finePointer.matches) document.querySelectorAll<HTMLElement>(".reel-frame[data-immersive], .home-hero-image[data-immersive]").forEach(target => {
      let frame = 0;
      const move = (event: PointerEvent) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = target.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - .5;
          const y = (event.clientY - rect.top) / rect.height - .5;
          target.style.setProperty("--tilt-x", `${-y * 4}deg`); target.style.setProperty("--tilt-y", `${x * 5}deg`);
          target.style.setProperty("--shine-x", `${(x + .5) * 100}%`); target.style.setProperty("--shine-y", `${(y + .5) * 100}%`);
        });
      };
      const leave = () => { target.style.removeProperty("--tilt-x"); target.style.removeProperty("--tilt-y"); };
      target.addEventListener("pointermove", move, { passive: true }); target.addEventListener("pointerleave", leave);
      cleanups.push(() => { cancelAnimationFrame(frame); target.removeEventListener("pointermove", move); target.removeEventListener("pointerleave", leave); });
    });
    return () => { document.documentElement.classList.remove("motion-ready"); observer?.disconnect(); removeEventListener("scroll", updateProgress); cleanups.forEach(fn => fn()); };
  }, []);
  return <><div className="page-curtain" aria-hidden="true" /><div className="scroll-progress" aria-hidden="true" /></>;
}
