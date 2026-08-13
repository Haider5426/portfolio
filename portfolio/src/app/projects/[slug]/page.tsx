import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getProjectBySlug } from "@/lib/projects";
import { navTransitionMap } from "@/lib/viewTransition";

export function generateStaticParams() {
  return CASE_STUDIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  // The root layout applies a "%s · Haider Khan" template, so the name is
  // deliberately left off here.
  const title = `${project.title} — Case Study`;
  return {
    title,
    description: project.caseStudy.tagline,
    openGraph: {
      title: `${title} · Haider Khan`,
      description: project.caseStudy.tagline,
      type: "article",
    },
  };
}

export default async function CaseStudyPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const track = project.tracks[0];

  return (
    <ViewTransition enter={navTransitionMap} exit={navTransitionMap} default="none">
    <div className="page case-page">
      <main>
        <article className="wrap case">
          <Link href="/#projects" className="case-back" transitionTypes={["nav-back"]}>
            ← All projects
          </Link>

          <header className="case-head" data-track={track}>
            <p className="case-eyebrow">Case study</p>
            <h1 className="case-title">{project.title}</h1>
            <p className="case-tagline">{cs.tagline}</p>
            <dl className="case-meta">
              <div>
                <dt>Role</dt>
                <dd>{cs.role}</dd>
              </div>
              <div>
                <dt>Context</dt>
                <dd>{cs.timeframe}</dd>
              </div>
              {cs.liveUrl && (
                <div>
                  <dt>Live</dt>
                  <dd>
                    <a
                      className="case-live"
                      href={cs.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cs.liveUrl.replace(/^https?:\/\//, "")} ↗
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </header>

          {project.image && (
            <img
              className="case-hero-img"
              src={project.image}
              alt={`${project.title} illustration`}
              width={400}
              height={220}
            />
          )}

          <section className="case-section reveal-up">
            <h2>
              <span className="case-idx">01</span> Problem
            </h2>
            {cs.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>

          <section className="case-section reveal-up">
            <h2>
              <span className="case-idx">02</span> Approach
            </h2>
            <ul className="case-list">
              {cs.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>

          <section className="case-section reveal-up">
            <h2>
              <span className="case-idx">03</span> Architecture
            </h2>
            <ol className="case-arch">
              {cs.architecture.map((row, i) => (
                <li key={row.step} data-arch-i={i}>
                  <span className="arch-step">{row.step}</span>
                  <p className="arch-detail">{row.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="case-section reveal-up">
            <h2>
              <span className="case-idx">04</span> Result
            </h2>
            <div className="case-results">
              {cs.result.map((r) => (
                <div className="case-result" key={r.label}>
                  <span className="case-result-stat">{r.stat}</span>
                  <span className="case-result-label">{r.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="case-section reveal-up">
            <h2>
              <span className="case-idx">05</span> Stack
            </h2>
            <div className="case-stack">
              {cs.stack.map((group) => (
                <div className="skill-group" data-track={track} key={group.group}>
                  <h3>{group.group}</h3>
                  <div className="chip-row">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <nav className="case-footer-nav" aria-label="More case studies">
            {CASE_STUDIES.filter((p) => p.slug !== project.slug).map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="btn">
                Next: {p.title} →
              </Link>
            ))}
            <Link href="/#contact" className="btn primary">
              Get in touch
            </Link>
          </nav>
        </article>
      </main>
    </div>
    </ViewTransition>
  );
}
