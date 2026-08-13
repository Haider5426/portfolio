"use client";

import { useEffect, useRef, useState } from "react";

// All page sections, used for scroll detection (kept broad so the active
// state resolves correctly even for sections that aren't linked directly).
const SECTIONS = [
  "intro",
  "achievements",
  "experience",
  "projects",
  "skills",
  "resume",
  "contact",
];

// What the nav actually shows: logo + a few links, no numbering.
const NAV_LINKS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("intro");
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(
    null
  );

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (els.length === 0) return;

    const visible = new Set<string>();

    // A detection band across the middle of the viewport: whichever section
    // crosses it is the one being read.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const first = SECTIONS.find((id) => visible.has(id));
        if (first) {
          setActive(first);
          // Keep the address bar in sync with whatever section is actually
          // on screen, not just the last one explicitly clicked — replace
          // (never push) so scrolling never spams browser history, and so
          // a refresh lands back on the section the user was reading.
          const hash = `#${first}`;
          if (window.location.hash !== hash) {
            window.history.replaceState(null, "", hash);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));

    // Pin the last section once the end of the page is reached.
    const sentinel = document.getElementById("page-end");
    const endIo = sentinel
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActive("contact");
              if (window.location.hash !== "#contact") {
                window.history.replaceState(null, "", "#contact");
              }
            }
          },
          { threshold: 0 }
        )
      : null;
    if (sentinel && endIo) endIo.observe(sentinel);

    return () => {
      io.disconnect();
      endIo?.disconnect();
    };
  }, []);

  // Slides a small underline beneath whichever nav link is active, instead
  // of the link just snapping to its highlighted color.
  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;
    const activeEl = navEl.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (!activeEl) {
      setIndicator(null);
      return;
    }
    const update = () =>
      setIndicator({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <a href="#intro" className="brand">
          <span className="dot" aria-hidden="true" />
          Haider Khan
        </a>
        <nav aria-label="Primary" ref={navRef}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
          <span
            className="nav-indicator"
            aria-hidden="true"
            style={
              indicator
                ? {
                    opacity: 1,
                    transform: `translateX(${indicator.left}px)`,
                    width: indicator.width,
                  }
                : { opacity: 0 }
            }
          />
        </nav>
      </div>
    </header>
  );
}
