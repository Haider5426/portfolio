import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// Only the weights actually referenced by the type scale — every extra weight
// is another font file on the critical path.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
      className={`${plexMono.variable} ${plexSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
