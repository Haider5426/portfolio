"use client";

import { useEffect, useState } from "react";

export const SECTIONS = [
  { id: "intro", label: "Intro", idx: "00" },
  { id: "achievements", label: "Ledger", idx: "01" },
  { id: "experience", label: "Experience", idx: "02" },
  { id: "projects", label: "Projects", idx: "03" },
  { id: "skills", label: "Skills", idx: "04" },
  { id: "contact", label: "Contact", idx: "05" },
];

export default function Nav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
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
        const first = SECTIONS.find((s) => visible.has(s.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));

    // The last section is short enough that it may never cross the band,
    // so pin it once the page is scrolled to the bottom.
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(SECTIONS[SECTIONS.length - 1].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop: fixed rail. Mobile: hidden (top bar takes over). */}
      <aside className="rail" aria-label="Section navigation">
        <a href="#intro" className="brand">
          <span className="dot" aria-hidden="true" />
          HAIDER.KHAN
        </a>
        <p className="rail-role">Data → Software</p>
        <nav className="rail-nav">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={active === s.id ? "is-active" : undefined}
                  aria-current={active === s.id ? "true" : undefined}
                >
                  <span className="rail-line" aria-hidden="true" />
                  <span className="rail-idx">{s.idx}</span>
                  <span className="rail-label">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile / tablet: sticky top bar. */}
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#intro" className="brand">
            <span className="dot" aria-hidden="true" />
            HAIDER.KHAN
          </a>
          <nav className="topbar-nav" aria-label="Sections">
            {SECTIONS.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={active === s.id ? "is-active" : undefined}
                aria-current={active === s.id ? "true" : undefined}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
