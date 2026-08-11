const SKILL_GROUPS = [
  {
    title: "Data & Analytics",
    chips: [
      "Python (Pandas, NumPy, scikit-learn)",
      "SQL (window fns, CTEs)",
      "R",
      "Power BI",
      "ETL Automation",
      "RapidMiner",
      "KNIME",
      "Forecasting",
      "Feature Engineering",
    ],
  },
  {
    title: "Software & Web",
    chips: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "JWT Auth",
      "i18next",
      "Git",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="idx">04</span>
          <h2>Skills</h2>
        </div>
        <p className="section-sub">
          Grouped the way I actually use them, not just listed.
        </p>
        <div className="skill-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-group" key={group.title}>
              <h4>{group.title}</h4>
              <div className="chip-row">
                {group.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
