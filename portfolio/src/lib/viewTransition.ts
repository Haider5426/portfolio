// Shared enter/exit map for the <ViewTransition> wrapper on each page.tsx
// (home, case study, résumé) — only navigations tagged nav-forward/nav-back
// via a Link's transitionTypes animate; everything else (untyped browser
// back/forward, etc.) gets no directional animation at all. See the
// PAGE TRANSITIONS block in globals.css for the actual keyframes.
export const navTransitionMap = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;
