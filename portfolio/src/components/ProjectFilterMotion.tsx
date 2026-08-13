"use client";

import { useEffect } from "react";

// Filtering itself is plain CSS (see .projects-filterable in globals.css) —
// this only adds .is-interactive after mount, which arms the @starting-style
// rule that animates cards fading back in when a filter is cleared. Doing it
// in an effect (rather than up front) keeps that entrance animation from
// ever firing on the initial page load itself.
export default function ProjectFilterMotion() {
  useEffect(() => {
    document.querySelector(".projects-filterable")?.classList.add("is-interactive");
  }, []);

  return null;
}
