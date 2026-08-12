import Image from "next/image";
import portrait from "../../public/images/pfp-hero.jpg";

const STAGES = [
  { id: "raw", tag: "01 · RAW", num: "300+", cap: "records/mo ingested & validated" },
  { id: "clean", tag: "02 · CLEAN", num: "90%", cap: "manual errors removed" },
  { id: "model", tag: "03 · MODEL", num: "85%", cap: "predictive model accuracy" },
  { id: "ship", tag: "04 · SHIP", num: "70%", cap: "faster reporting once live" },
];

export default function Hero() {
  return (
    <section id="intro" className="hero" aria-labelledby="hero-headline">
      <div className="wrap hero-wrap">
        <div className="hero-grid">
          <p className="eyebrow reveal" data-reveal="1">
            Data Analyst &amp; Software Engineer, Riyadh
          </p>

          <h1 id="hero-headline" className="headline reveal-motion">
            Raw data in.
            <br />
            Shipped <span className="accent">product</span> out.
          </h1>

          <div className="hero-body reveal" data-reveal="3">
            <p className="lede">
              I turn messy operational data into software people actually use.
              I&rsquo;ve shipped <strong>AuditLeads</strong> — a live B2B SaaS
              with paying customers — digitized inspection workflows that cut
              reporting time 70%, and delivered{" "}
              <strong>100+ analytics and ML projects</strong> since 2018.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                See the work
              </a>
              <a href="#contact" className="btn">
                Get in touch
              </a>
            </div>
          </div>

          {/* Eager (it is above the fold) but deliberately NOT preloaded: the
              headline is the LCP element, and a high-priority image preload
              would compete with the font on the critical path. */}
          <figure className="hero-portrait reveal-motion">
            <div className="portrait-frame">
              <Image
                src={portrait}
                alt="Haider Khan"
                sizes="(max-width: 900px) 168px, 280px"
                placeholder="blur"
                loading="eager"
                quality={62}
                className="portrait-img"
              />
            </div>
          </figure>
        </div>

        {/* Signature moment: the pipeline fills stage by stage on load. */}
        <div className="pipeline reveal" data-reveal="5">
          <p className="pipeline-label">How a project moves through my hands</p>
          <div className="pipeline-track">
            {STAGES.map((stage, i) => (
              <div
                className="stage"
                data-stage={stage.id}
                style={{ "--stage-i": i } as React.CSSProperties}
                key={stage.id}
              >
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
