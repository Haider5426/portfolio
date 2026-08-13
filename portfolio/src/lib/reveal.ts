import type { CSSProperties } from "react";

// Sets the --reveal-up-delay custom property consumed by .reveal-up in
// globals.css, so grouped items (cards, tiles, entries) fade in with a
// staggered offset instead of all at once.
export function revealDelay(i: number, stepMs = 70): CSSProperties {
  return { "--reveal-up-delay": `${i * stepMs}ms` } as CSSProperties;
}
