import Link from "next/link";
import { RESUMES } from "@/lib/resumes";
import { revealDelay } from "@/lib/reveal";

const BLURB: Record<string, string> = {
  "data-analyst":
    "Python, SQL, Power BI, ETL automation and predictive modelling — framed around analytics and reporting outcomes.",
  "software-engineer":
    "Next.js, React, Node and the full path from pipeline to interface — framed around shipped product work.",
};

export default function Resume() {
  return (
    <section id="resume">
      <div className="wrap">
        <div className="section-head reveal-up">
          <span className="idx">05</span>
          <h2>Résumé</h2>
        </div>
        <p className="section-sub reveal-up">
          Two versions of the same five years, depending on which half of the
          pipeline you&rsquo;re hiring for.
        </p>

        <div className="resume-grid">
          {RESUMES.map((r, i) => (
            <Link
              key={r.slug}
              href={`/resume/${r.slug}`}
              className="card card-link resume-card reveal-up"
              style={revealDelay(i)}
              data-track={r.slug === "data-analyst" ? "data" : "sw"}
            >
              <div className="card-top">
                <h3>{r.variant}</h3>
                <span className="card-metric">Read</span>
              </div>
              <p>{BLURB[r.slug]}</p>
              <span className="card-cta" aria-hidden="true">
                View résumé →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
