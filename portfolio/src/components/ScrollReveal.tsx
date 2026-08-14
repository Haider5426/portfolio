"use client";

import { useEffect } from "react";

// One shared observer drives every .reveal-up element site-wide, so
// sections and cards all get the exact same fade + upward-translate
// treatment instead of a bespoke transition per component.
//
// This component lives in the root layout, which does NOT remount on
// client-side navigation — only the page content under it swaps out. So a
// plain mount-time querySelectorAll only ever sees the elements present on
// the very first page load; every .reveal-up that arrives afterward (a case
// study page, or the home page's own elements re-mounting on "back") would
// never get observed and would stay permanently at opacity:0 forever. A
// MutationObserver on document.body is what actually catches those later
// arrivals, on every route, without needing to know when navigation happens.
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      // No IntersectionObserver support: nothing will ever reveal these,
      // so don't leave them stuck hidden.
      document.querySelectorAll(".reveal-up").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    const observe = (el: Element) => {
      if (el.classList.contains("is-visible")) return;
      io.observe(el);
    };

    document.querySelectorAll<HTMLElement>(".reveal-up").forEach(observe);

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(".reveal-up")) observe(node);
          node.querySelectorAll?.(".reveal-up").forEach(observe);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
