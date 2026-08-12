"use client";

import { useEffect, useState } from "react";

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
        if (first) setActive(first);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));

    // Pin the last section once the end of the page is reached.
    const sentinel = document.getElementById("page-end");
    const endIo = sentinel
      ? new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive("contact");
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

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <a href="#intro" className="brand">
          <span className="dot" aria-hidden="true" />
          Haider Khan
        </a>
        <nav aria-label="Primary">
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
        </nav>
      </div>
    </header>
  );
}
