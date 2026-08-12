import { Fragment } from "react";
import Link from "next/link";
import { PROJECTS, type Project } from "@/lib/projects";

const FILTERS = [
  { id: "pf-all", label: "All" },
  { id: "pf-data", label: "Data & ML" },
  { id: "pf-sw", label: "Software & Web" },
];

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <div className="card-top">
        <h3>{project.title}</h3>
        <span className="card-metric">{project.metric}</span>
      </div>
      <p>{project.desc}</p>
      {project.slug && <span className="card-cta">Read case study →</span>}
    </>
  );
}

function ProjectCard({
  project,
  compact,
}: {
  project: Project;
  compact?: boolean;
}) {
  const className = `card${compact ? " card-compact" : ""}`;
  // data-tracks drives CSS filtering (see .projects-filterable rules).
  const attrs = { "data-tracks": project.tracks.join(" ") };

  return project.slug ? (
    <Link className={`${className} card-link`} href={`/projects/${project.slug}`} {...attrs}>
      <CardBody project={project} />
    </Link>
  ) : (
    <div className={className} {...attrs}>
      <CardBody project={project} />
    </div>
  );
}

/**
 * Filtering is pure CSS (radio inputs + :has()), so all fifteen cards ship as
 * static server HTML with no hydration cost — and the control still works as a
 * native, keyboard-navigable radio group.
 */
export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const compact = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="alt">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">03</span>
          <h2>Projects</h2>
        </div>
        <p className="section-sub">
          Two tracks, one pipeline — data work that ends in a model, and software
          work that ends in something shipped.
        </p>

        <fieldset className="projects-filterable">
          <legend className="sr-only">Filter projects by track</legend>
          {FILTERS.map((f, i) => (
            <Fragment key={f.id}>
              <input
                type="radio"
                name="project-filter"
                id={f.id}
                className="pf-input"
                defaultChecked={i === 0}
              />
              <label htmlFor={f.id} className="filter-btn">
                {f.label}
              </label>
            </Fragment>
          ))}

          <div className="proj-results">
            <div className="proj-grid">
              {featured.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>

            <p className="proj-more-label">Also built</p>

            <div className="proj-grid-compact">
              {compact.map((p) => (
                <ProjectCard key={p.title} project={p} compact />
              ))}
            </div>
          </div>
        </fieldset>
      </div>
    </section>
  );
}
