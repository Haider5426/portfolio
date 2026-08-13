import { revealDelay } from "@/lib/reveal";

const STATS = [
  {
    stat: "−70% time",
    text: "Replaced manual spreadsheet reporting with automated ETL workflows at Tamimi",
  },
  {
    stat: "−90% errors",
    text: "Structured data intake pipelines with validation checks",
  },
  {
    stat: "100+ projects",
    text: "End-to-end analytics & ML projects delivered for clients worldwide (Fiverr, since 2018)",
  },
  {
    stat: "up to 85%",
    text: "Predictive models shipped for regression & classification tasks",
  },
  {
    stat: "+35% speed",
    text: "KPI dashboards & cross-site trend reporting for management",
  },
];

export default function Ledger() {
  return (
    <section id="achievements" className="alt">
      <div className="wrap">
        <div className="section-head reveal-up">
          <span className="idx">01</span>
          <h2>Ledger</h2>
        </div>
        <p className="section-sub reveal-up">
          The numbers behind five years of analytics and engineering work.
        </p>
        <div className="stat-grid">
          {STATS.map((s, i) => (
            <div
              className="stat-tile reveal-up"
              style={revealDelay(i)}
              key={s.text}
            >
              <span className="stat-tile-num">{s.stat}</span>
              <p className="stat-tile-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
