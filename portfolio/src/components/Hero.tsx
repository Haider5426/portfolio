const STAGES = [
  { tag: "01 · RAW", num: "300+", cap: "records/mo ingested & validated" },
  { tag: "02 · CLEAN", num: "90%", cap: "manual errors removed" },
  { tag: "03 · MODEL", num: "85%", cap: "predictive model accuracy" },
  { tag: "04 · SHIP", num: "70%", cap: "faster reporting once live" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <p className="eyebrow">Data Analyst & Software Engineer, Riyadh</p>
        <h1 className="headline">
          Raw data in.
          <br />
          Shipped <span className="accent">product</span> out.
        </h1>
        <p className="lede">
          I build the pipeline between messy operational data and the dashboard or
          web app someone actually uses — from ETL and predictive models to the
          Next.js interface that ships them. 5+ years, 100+ delivered projects.
        </p>
        <div className="hero-actions">
          <a href="#experience" className="btn primary">
            See the work
          </a>
          <a href="#contact" className="btn">
            Get in touch
          </a>
        </div>

        <div className="pipeline">
          <p className="pipeline-label">How a project moves through my hands</p>
          <div className="pipeline-track">
            {STAGES.map((stage) => (
              <div className="stage" key={stage.tag}>
                <span className="tag">{stage.tag}</span>
                <span className="num">{stage.num}</span>
                <span className="cap">{stage.cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
