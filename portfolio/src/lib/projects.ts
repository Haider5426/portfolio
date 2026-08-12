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
  /** Public URL, when the project is live. */
  liveUrl?: string;
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
    image: "/images/projects/auditleads.svg",
    featured: true,
    caseStudy: {
      tagline:
        "From “dentists in Austin” to a ranked list of prospects with a concrete reason to reach out.",
      role: "Solo — architecture, build, billing, deploy",
      timeframe: "Live in production",
      liveUrl: "https://auditleads.co",
      problem: [
        "Agencies and freelancers who sell websites and marketing waste hours manually hunting for local businesses that actually need help — then guessing which ones are worth pitching.",
        "There's no fast way to go from “dentists in Austin” to a ranked list of prospects with a concrete reason to reach out.",
      ],
      approach: [
        "AuditLeads scrapes local businesses from Google Maps, visits each one's website, and computes an Opportunity Score from real signals (site speed, missing pages, technical weaknesses).",
        "The user gets a ranked lead list where a high score means a real, pitchable problem — not a random name.",
      ],
      architecture: [
        {
          step: "01 · SERVICES",
          detail:
            "Two decoupled services: a Next.js app (Prisma/Postgres, NextAuth, Paddle billing) and a standalone Python scraper worker, communicating through a job-queue pattern rather than blocking requests.",
        },
        {
          step: "02 · SCRAPE",
          detail:
            "The scraper gives each business its own fair-shared timeout so one slow website can't kill an entire batch.",
        },
        {
          step: "03 · METER",
          detail:
            "Credits are charged only per lead that gets a complete score — never for partial or failed results — enforced with atomic database updates so concurrent searches can't be double-charged or slip through free.",
        },
      ],
      result: [
        { stat: "Live", label: "in production at auditleads.co" },
        {
          stat: "E2E",
          label:
            "real signup → search → scrape → score → checkout, verified against production infrastructure",
        },
        {
          stat: "Full",
          label:
            "subscription lifecycle — upgrade, renewal, credit reset, invoicing — working end to end",
        },
      ],
      stack: [
        {
          group: "Application",
          items: ["Next.js", "Prisma", "Postgres (Neon)", "NextAuth"],
        },
        { group: "Services", items: ["Python scraper worker", "Paddle"] },
        { group: "Ops", items: ["Sentry", "Vercel", "Railway"] },
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
  /* --- Compact cards ---------------------------------------------------- */
  {
    title: "Child Labor Risk Model",
    metric: "80% acc.",
    desc: "Classification model flagging risk using socio-economic indicators.",
    tracks: ["data"],
  },
  {
    title: "Heart Stroke Prediction",
    metric: "Classification",
    desc: "Predicting stroke risk from patient health indicators.",
    tracks: ["data"],
  },
  {
    title: "Credit Card Fraud Detection",
    metric: "Imbalanced data",
    desc: "Fraud classification on a heavily skewed transaction dataset.",
    tracks: ["data"],
  },
  {
    title: "Loan Acceptance",
    metric: "Decision tree",
    desc: "Decision-tree model predicting loan approval from applicant attributes.",
    tracks: ["data"],
  },
  {
    title: "Tax Evasion Prediction",
    metric: "Classification",
    desc: "Flagging likely evasion from filing and declaration patterns.",
    tracks: ["data"],
  },
  {
    title: "Music Therapy & Mental Health",
    metric: "MxMH dataset",
    desc: "Correlation analysis between listening habits and self-reported mental health.",
    tracks: ["data"],
  },
  {
    title: "Nutritional Value Calculator",
    metric: "Image → calories",
    desc: "Full-stack ML app estimating calories and nutrition from a photo of a meal.",
    tracks: ["sw", "data"],
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
  {
    title: "Tamimi Corporate Website",
    metric: "Corporate site",
    desc: "Corporate marketing site build for Tamimi Global.",
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
