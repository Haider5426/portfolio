"use client";

import { useState } from "react";

type Category = "data" | "sw";
type Filter = "all" | Category;

interface Project {
  title: string;
  metric: string;
  desc: string;
  cat: Category;
}

const PROJECTS: Project[] = [
  {
    title: "Car Price Prediction",
    metric: "85% acc.",
    desc: "Regression model with feature engineering to price used cars from listing data.",
    cat: "data",
  },
  {
    title: "Child Labor Risk Model",
    metric: "80% acc.",
    desc: "Classification model flagging risk using socio-economic indicators.",
    cat: "data",
  },
  {
    title: "Recommendation System",
    metric: "+25% engage",
    desc: "Collaborative + content-based filtering for personalized recommendations.",
    cat: "data",
  },
  {
    title: "Automated Inspection ETL",
    metric: "Tamimi",
    desc: "Raw inspection images → structured metadata → live KPI dashboards.",
    cat: "data",
  },
  {
    title: "Intrusion Detection Dashboard",
    metric: "−40% response",
    desc: "React dashboard with real-time alerts and live network security data.",
    cat: "sw",
  },
  {
    title: "Central Policy Management",
    metric: "+30% workflow",
    desc: "React front end with reusable components and RESTful API integration.",
    cat: "sw",
  },
  {
    title: "NAT Clone Packet Catcher",
    metric: "−25% manual",
    desc: "Real-time network traffic visualization front end for packet monitoring.",
    cat: "sw",
  },
];

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "data", label: "Data & ML" },
  { key: "sw", label: "Software" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section id="projects" className="alt">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">03</span>
          <h2>Projects</h2>
        </div>
        <p className="section-sub">
          Filter by discipline — the pipeline metaphor holds either way.
        </p>
        <div className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-btn${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {visible.map((project) => (
            <div className="card" key={project.title}>
              <div className="card-top">
                <h3>{project.title}</h3>
                <span className="card-metric">{project.metric}</span>
              </div>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
