type Tag = "data" | "sw";

interface LogEntry {
  role: string;
  org: string;
  dates: string;
  tags: Tag[];
  bullets: string[];
}

const ENTRIES: LogEntry[] = [
  {
    role: "Data Analyst / Software Engineer",
    org: "Tamimi Global Co. (TAFGA)",
    dates: "Oct 2024 – Present",
    tags: ["data", "sw"],
    bullets: [
      "Built a Next.js + Tailwind inspection platform that digitized manual workflows — 70% faster reporting, 90% fewer manual errors.",
      "Engineered ETL pipelines into Google Drive/Sheets, processing 300+ inspection records a month with automated metadata logging.",
      "Shipped KPI dashboards and cross-site trend reports that sped up management decisions by 35%.",
      "Built JWT-based role access so reporting data stays compliant and audit-ready.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Horizon Tech",
    dates: "Jul 2022 – Jul 2024",
    tags: ["sw"],
    bullets: [
      "Led React interface work across 10+ applications, lifting user satisfaction 30%.",
      "Kept production at 99.9% uptime while cutting bug reports 25%.",
      "Translated cross-functional requirements into UI/UX, improving delivery time 20%.",
    ],
  },
  {
    role: "Data Analyst / Data Scientist",
    org: "Fiverr (Freelance)",
    dates: "2018 – Present",
    tags: ["data"],
    bullets: [
      "Completed 100+ analytics and ML projects: prediction, classification, recommendation systems.",
      "Built forecasting and ML models reaching up to 85% accuracy for clients across industries.",
      "Delivered dashboards that improved client decision efficiency by 60%.",
    ],
  },
];

const TAG_LABEL: Record<Tag, string> = { data: "Data", sw: "Software" };

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">02</span>
          <h2>Experience</h2>
        </div>
        <p className="section-sub">
          Three roles, one pattern: find the messy manual process, build the
          pipeline that replaces it.
        </p>

        {ENTRIES.map((entry) => (
          <div className="log-entry" key={entry.org}>
            <div className="log-head">
              <span className="log-role">{entry.role}</span>
              <span className="log-org">— {entry.org}</span>
              <span className="log-dates">{entry.dates}</span>
            </div>
            <div className="log-tags">
              {entry.tags.map((tag) => (
                <span className={`tag-pill ${tag}`} key={tag}>
                  {TAG_LABEL[tag]}
                </span>
              ))}
            </div>
            <ul className="log-list">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
