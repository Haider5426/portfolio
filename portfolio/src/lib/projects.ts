export type Track = "data" | "sw";

export interface CaseStudySection {
  step: string;
  detail: string;
}

export interface CaseStudy {
  /** One-line positioning statement shown under the case-study title. */
  tagline: string;
  role: string;
  timeframe: string;
  problem: string[];
  approach: string[];
  /** Rendered as the pipeline motif — one row per stage. */
  architecture: CaseStudySection[];
  result: { stat: string; label: string }[];
  stack: { group: string; items: string[] }[];
}

export interface Project {
  title: string;
  /** Present only for projects with a full case study at /projects/[slug]. */
  slug?: string;
  metric: string;
  desc: string;
  tracks: Track[];
  image?: string;
  /** Featured projects get the richer card treatment on the home page. */
  featured?: boolean;
  caseStudy?: CaseStudy;
}

export const PROJECTS: Project[] = [
  {
    title: "AuditLeads",
    slug: "auditleads",
    metric: "Live SaaS",
    desc: "Full-stack B2B SaaS for local-business prospecting — scrapes leads and scores each one's website weaknesses into an actionable Opportunity Score.",
    tracks: ["sw", "data"],
    featured: true,
    caseStudy: {
      tagline:
        "A B2B prospecting tool that finds local businesses with weak web presence and turns that weakness into a ranked sales list.",
      role: "Solo — architecture, build, billing, deploy",
      timeframe: "Live, with paying customers",
      problem: [
        "Agencies selling web services to local businesses burn hours on manual prospecting: search a category, open each result, eyeball the site, guess whether it's worth a pitch.",
        "The judgement that actually matters — is this site slow, unindexed, missing a mobile layout, running no analytics — is invisible until someone opens the page and checks by hand.",
        "That work is repetitive, inconsistent between people, and doesn't scale past a few dozen leads a week.",
      ],
      approach: [
        "Treat prospecting as a data pipeline rather than a browsing task: ingest raw business listings, audit each site programmatically, score the weaknesses, and rank the output.",
        "Score every lead into a single Opportunity Score so a user sorts one column instead of interpreting a dozen raw signals.",
        "Decouple scraping from the web app. Scraping is slow, failure-prone, and bursty; the app has to stay responsive regardless of what the scraper is doing.",
        "Meter usage per lead rather than per seat, so cost tracks value delivered — which makes correctness of the metering a billing-integrity problem, not a cosmetic one.",
      ],
      architecture: [
        {
          step: "01 · INGEST",
          detail:
            "A separate Python scraper worker pulls business listings and fetches each candidate site. Running it out-of-process keeps slow, flaky network work off the request path.",
        },
        {
          step: "02 · AUDIT",
          detail:
            "Each site is checked for concrete weaknesses — performance, mobile responsiveness, indexability, analytics, and other technical gaps that translate into a sales conversation.",
        },
        {
          step: "03 · SCORE",
          detail:
            "Signals are weighted into a single Opportunity Score, so the output is a ranked list of who to contact first rather than a raw dump of audit data.",
        },
        {
          step: "04 · METER & SHIP",
          detail:
            "Credits are decremented per delivered lead inside a transaction, so concurrent requests and partially-failed scrapes can't over- or under-charge. Paddle handles subscriptions and the credit top-up flow.",
        },
      ],
      result: [
        { stat: "Live", label: "in production with paying customers" },
        { stat: "Solo", label: "architecture through deployment" },
        { stat: "Per-lead", label: "credit metering, transactionally safe" },
      ],
      stack: [
        {
          group: "Application",
          items: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        },
        { group: "Services", items: ["Python scraper worker", "FastAPI"] },
        { group: "Commercial", items: ["Paddle subscriptions", "Credit metering"] },
      ],
    },
  },
  {
    title: "Automated Inspection ETL",
    slug: "inspection-etl",
    metric: "−70% time",
    desc: "Raw inspection images → structured metadata → live KPI dashboards, replacing a manual spreadsheet process.",
    tracks: ["sw", "data"],
    image: "/images/projects/inspection-etl.svg",
    featured: true,
    caseStudy: {
      tagline:
        "Replacing a manual, spreadsheet-driven inspection process with a platform that captures structured data at the source and reports on it automatically.",
      role: "Data Analyst / Software Engineer",
      timeframe: "Tamimi Global Co. (TAFGA) · Oct 2024 – Present",
      problem: [
        "Site inspections were recorded by hand and reconciled into spreadsheets afterwards, so the reporting lag was measured in days and the numbers were only as good as the transcription.",
        "Because entry was manual and unvalidated, the same field could be recorded three different ways across three sites — which made cross-site comparison unreliable.",
        "Management needed trend reporting across sites, but assembling it meant someone rebuilding the same workbook every reporting cycle.",
      ],
      approach: [
        "Move data capture into the product itself: a Next.js inspection platform where the structure is enforced at entry rather than cleaned up afterwards.",
        "Validate on the way in, not on the way out — the checks that used to happen during reconciliation now happen at the point of capture.",
        "Automate the handoff into Google Drive/Sheets with metadata logging, so the reporting layer is fed continuously instead of rebuilt on request.",
        "Gate access by role with JWT so inspection data stays compliant and audit-ready.",
      ],
      architecture: [
        {
          step: "01 · RAW",
          detail:
            "Inspectors capture records and images in the platform. 300+ inspection records a month enter the system already structured.",
        },
        {
          step: "02 · CLEAN",
          detail:
            "Validation runs at entry — required fields, controlled vocabularies, and consistency checks — removing the reconciliation pass entirely.",
        },
        {
          step: "03 · LOG",
          detail:
            "An ETL pipeline writes records and automated metadata into Google Drive/Sheets, giving every entry a traceable origin.",
        },
        {
          step: "04 · SHIP",
          detail:
            "KPI dashboards and cross-site trend reports read from that layer directly, so management sees current numbers instead of requesting a rebuild.",
        },
      ],
      result: [
        { stat: "−70%", label: "reporting time" },
        { stat: "−90%", label: "manual errors" },
        { stat: "+35%", label: "faster management decisions" },
        { stat: "300+", label: "records processed monthly" },
      ],
      stack: [
        { group: "Application", items: ["Next.js", "Tailwind CSS", "JWT auth"] },
        { group: "Pipeline", items: ["ETL automation", "Google Drive / Sheets API"] },
        { group: "Reporting", items: ["KPI dashboards", "Cross-site trend reports"] },
      ],
    },
  },
  {
    title: "Car Price Prediction",
    metric: "85% acc.",
    desc: "Regression model with feature engineering to price used cars from listing data.",
    tracks: ["data"],
    image: "/images/projects/car-price-prediction.svg",
    featured: true,
  },
  {
    title: "Recommendation System",
    metric: "+25% engage",
    desc: "Collaborative + content-based filtering for personalized recommendations.",
    tracks: ["data"],
    image: "/images/projects/recommendation-system.svg",
    featured: true,
  },
  {
    title: "Intrusion Detection Dashboard",
    metric: "−40% response",
    desc: "React dashboard with real-time alerts and live network security data.",
    tracks: ["sw"],
    image: "/images/projects/ids-dashboard.svg",
    featured: true,
  },
  {
    title: "Child Labor Risk Model",
    metric: "80% acc.",
    desc: "Classification model flagging risk using socio-economic indicators.",
    tracks: ["data"],
  },
  {
    title: "Central Policy Management",
    metric: "+30% workflow",
    desc: "React front end with reusable components and RESTful API integration.",
    tracks: ["sw"],
  },
  {
    title: "NAT Clone Packet Catcher",
    metric: "−25% manual",
    desc: "Real-time network traffic visualization front end for packet monitoring.",
    tracks: ["sw"],
  },
];

export const CASE_STUDIES = PROJECTS.filter(
  (p): p is Project & { slug: string; caseStudy: CaseStudy } =>
    Boolean(p.slug && p.caseStudy)
);

export function getProjectBySlug(slug: string) {
  return CASE_STUDIES.find((p) => p.slug === slug);
}
