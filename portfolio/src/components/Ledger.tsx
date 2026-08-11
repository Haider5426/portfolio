const ROWS = [
  {
    idx: "01",
    text: "Replaced manual spreadsheet reporting with automated ETL workflows at Tamimi",
    stat: "−70% time",
  },
  {
    idx: "02",
    text: "Structured data intake pipelines with validation checks",
    stat: "−90% errors",
  },
  {
    idx: "03",
    text: "End-to-end analytics & ML projects delivered for clients worldwide (Fiverr, since 2018)",
    stat: "100+ projects",
  },
  {
    idx: "04",
    text: "Predictive models shipped for regression & classification tasks",
    stat: "up to 85%",
  },
  {
    idx: "05",
    text: "KPI dashboards & cross-site trend reporting for management",
    stat: "+35% speed",
  },
];

export default function Ledger() {
  return (
    <section id="achievements" className="alt">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">01</span>
          <h2>Ledger</h2>
        </div>
        <p className="section-sub">
          The numbers behind five years of analytics and engineering work.
        </p>
        <div className="ledger">
          {ROWS.map((row) => (
            <div className="ledger-row" key={row.idx}>
              <span className="row-idx">{row.idx}</span>
              <span className="row-text">{row.text}</span>
              <span className="row-stat">{row.stat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
