import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

// IBM Plex Mono now covers a narrower job — small data labels, stats, and
// code-like accents — so only the weights that scale actually uses.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Geist is a variable font — no weight array needed, the full range ships
// in one file.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://haiderkhan.dev";
const TITLE = "Haider Khan — Data Analyst & Software Engineer";
const DESCRIPTION =
  "I turn messy operational data into software people actually use — ETL pipelines, predictive models, and the Next.js interfaces that ship them. Shipped AuditLeads, a live B2B SaaS. 100+ projects delivered.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Haider Khan",
  },
  description: DESCRIPTION,
  applicationName: "Haider Khan — Portfolio",
  authors: [{ name: "Haider Khan" }],
  creator: "Haider Khan",
  keywords: [
    "Data Analyst",
    "Analytics Engineer",
    "Software Engineer",
    "Next.js",
    "Python",
    "SQL",
    "Machine Learning",
    "ETL",
    "Riyadh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Haider Khan",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${geistSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/* Runs before any content below paints, so .reveal-up elements only
            start hidden when something will actually reveal them again —
            with JS disabled (or blocked), they're just visible from the
            start instead of stuck at opacity:0. See globals.css. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js-reveal")`,
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <ScrollReveal />
        {/* Enables smooth scrolling only after the initial load finishes, so
            a direct hash-URL load (e.g. /#contact) uses the browser's plain
            instant jump instead of an animated scroll that in-flight layout
            settling can derail back to the top. See globals.css. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener("load",function(){if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.style.scrollBehavior="smooth"}})`,
          }}
        />
      </body>
    </html>
  );
}
