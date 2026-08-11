"use client";

import Link from "next/link";
import { useState } from "react";
import { PROJECTS, type Track } from "@/lib/projects";

type Filter = "all" | Track;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "data", label: "Data & ML" },
  { key: "sw", label: "Software" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = PROJECTS.filter(
    (p) => filter === "all" || p.tracks.includes(filter)
  );

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

        <div className="filter-row" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-btn${filter === f.key ? " active" : ""}`}
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {visible.map((project) => {
            const body = (
              <>
                {project.image && (
                  <img
                    className="card-illustration"
                    src={project.image}
                    alt=""
                    width={400}
                    height={220}
                  />
                )}
                <div className="card-top">
                  <h3>{project.title}</h3>
                  <span className="card-metric">{project.metric}</span>
                </div>
                <p>{project.desc}</p>
                {project.slug && (
                  <span className="card-cta" aria-hidden="true">
                    Read case study →
                  </span>
                )}
              </>
            );

            return project.slug ? (
              <Link
                className="card card-link"
                data-track={project.tracks[0]}
                href={`/projects/${project.slug}`}
                key={project.title}
                aria-label={`${project.title} — read case study`}
              >
                {body}
              </Link>
            ) : (
              <div
                className="card"
                data-track={project.tracks[0]}
                key={project.title}
              >
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
