export interface ResumeSection {
  heading: string;
  /** Simple prose paragraphs. */
  body?: string[];
  /** Flat bullet list. */
  bullets?: string[];
  /** Roles / entries with their own bullets. */
  entries?: {
    title: string;
    org?: string;
    dates?: string;
    bullets: string[];
  }[];
  /** Label: value pairs (skills, certifications). */
  pairs?: { label: string; value: string }[];
}

export interface Resume {
  slug: string;
  variant: string;
  role: string;
  summaryLabel: string;
  sections: ResumeSection[];
}

export const CONTACT = {
  name: "Haider Khan",
  email: "haiderkhan12264@gmail.com",
  phone: "+966 55 782 8489",
  phoneHref: "+966557828489",
  location: "Riyadh, Saudi Arabia",
  linkedin: "linkedin.com/in/haider-k-a9a144107",
  linkedinHref: "https://linkedin.com/in/haider-k-a9a144107",
};

const EDUCATION: ResumeSection = {
  heading: "Education",
  entries: [
    {
      title: "Bachelor of Software Engineering",
      org: "National University of Sciences and Technology (NUST)",
      dates: "2018 – 2022",
      bullets: [],
    },
  ],
};

export const RESUMES: Resume[] = [
  {
    slug: "data-analyst",
    variant: "Data Analyst",
    role: "Data Analyst / Analytics Engineer",
    summaryLabel: "Profile",
    sections: [
      {
        heading: "Profile",
        body: [
          "Data Analyst / Analytics Engineer with 5+ years of experience in Python, SQL, Power BI, ETL automation, predictive analytics, and dashboard development. Delivered 100+ analytics and ML projects and built automated inspection data pipelines at Tamimi, reducing reporting time by 70% and improving decision-making speed by 35%. Strong at transforming raw data into actionable insights.",
        ],
      },
      {
        heading: "Key Achievements",
        bullets: [
          "Reduced reporting time by 70% through automated ETL workflows at Tamimi.",
          "Eliminated 90% of manual data-entry errors with structured pipelines.",
          "Delivered 100+ end-to-end analytics and ML projects worldwide.",
          "Built predictive models achieving up to 85% accuracy.",
          "Improved executive decision-making efficiency by 35%.",
        ],
      },
      {
        heading: "Experience",
        entries: [
          {
            title: "Data Analyst / Analytics Engineer",
            org: "Tamimi Global Co. Ltd. (TAFGA)",
            dates: "Oct 2024 – Present",
            bullets: [
              "Engineered automated ETL pipelines integrating Google Drive and Sheets, processing 300+ records/month.",
              "Designed KPI dashboards and analytical views that improved management decision-making by 35%.",
              "Performed data validation, anomaly detection, and cross-site trend reporting.",
              "Built secure API-driven role-based access using JWT for data integrity and compliance.",
              "Structured datasets enabling predictive analysis and audit readiness.",
            ],
          },
          {
            title: "Data Analyst / Data Scientist",
            org: "Fiverr (Freelance)",
            dates: "2018 – Present",
            bullets: [
              "Completed 100+ analytics and ML projects (prediction, classification, recommendation).",
              "Built forecasting and ML models with up to 85% accuracy.",
              "Delivered dashboards and insights improving client decision efficiency by 60%.",
              "Specialized in data cleaning, feature engineering, outlier handling, and complex dataset transformations.",
            ],
          },
        ],
      },
      {
        heading: "Skills",
        pairs: [
          {
            label: "Programming",
            value:
              "Python (Pandas, NumPy, scikit-learn), R, SQL (advanced: joins, window functions, CTEs)",
          },
          {
            label: "Data tools",
            value: "Power BI, RapidMiner, KNIME, Jupyter, ETL automation",
          },
          {
            label: "Analytics",
            value:
              "Data cleaning, feature engineering, forecasting, regression, classification",
          },
          {
            label: "Other",
            value: "APIs, JSON, Agile, documentation, business problem solving",
          },
        ],
      },
      {
        heading: "Selected Projects",
        bullets: [
          "Car Price Prediction — 85% accuracy; regression and feature engineering.",
          "Child Labor Risk Model — 80% accuracy; classification using socio-economic indicators.",
          "Recommendation System — increased engagement by 25%.",
          "Automated Inspection ETL Pipeline (Tamimi) — raw images to metadata to KPI dashboards.",
          "IDS Analytics Dashboard — real-time alerts and trend visualization.",
        ],
      },
      EDUCATION,
    ],
  },
  {
    slug: "software-engineer",
    variant: "Software Engineer",
    role: "Software Engineer",
    summaryLabel: "Profile",
    sections: [
      {
        heading: "Profile",
        body: [
          "Software engineer who builds the full path from data to interface — ETL pipelines, role-secured web applications, and the dashboards that make the result usable. Shipped AuditLeads, a live B2B SaaS, solo: Next.js and Prisma app, decoupled Python scraper service, Paddle billing, and per-lead credit metering.",
        ],
      },
      {
        heading: "Work Experience",
        entries: [
          {
            title: "Software Engineer",
            org: "Tamimi Global Co. Ltd. (TAFGA)",
            dates: "Oct 2024 – Present",
            bullets: [
              "Spearheaded the digitization of manual inspection workflows with a scalable Next.js and Tailwind CSS web application, reducing reporting time by 70% and manual errors by 90%.",
              "Engineered an inspection platform with Google Drive and Sheets integration, processing 300+ records/month with automated image storage and metadata logging.",
              "Implemented secure role-based access with JWT, enabling controlled visibility and enhancing compliance and data privacy.",
              "Built the bilingual corporate website using React and i18next, improving mobile responsiveness and SEO — a 40% increase in user engagement across devices.",
              "Designed interactive dashboards and real-time data pipelines, accelerating management decision-making by 35%.",
              "Performed data validation and quality checks improving the integrity of reports used in operational audits.",
            ],
          },
          {
            title: "Software Engineer",
            org: "Horizon Tech",
            dates: "Jul 2022 – Jul 2024",
            bullets: [
              "Led design and development of user-centric ReactJS interfaces across 10+ applications, improving user satisfaction by 30%.",
              "Implemented interactive features that increased user engagement by 40%.",
              "Achieved 99.9% uptime and reduced bug reports by 25% through diligent maintenance and timely updates.",
              "Collaborated with cross-functional teams, translating complex requirements into intuitive UI/UX, improving delivery time by 20%.",
            ],
          },
          {
            title: "Data Analyst / Data Scientist",
            org: "Fiverr (Freelance)",
            dates: "Oct 2018 – Present",
            bullets: [
              "Completed 100+ projects in data analysis, processing, and predictive modeling using Python and RapidMiner.",
              "Enhanced data quality by correcting errors, removing duplicates, handling missing data, and normalizing datasets.",
              "Built forecasting systems, recommendation engines, and predictive models with accuracy up to 85%.",
              "Delivered visualization and analytical solutions that increased client decision-making efficiency by 60%.",
            ],
          },
        ],
      },
      {
        heading: "Skills",
        pairs: [
          {
            label: "Languages & tools",
            value: "Python, R, SQL, MATLAB, KNIME, Docker, Git",
          },
          {
            label: "Web development",
            value: "React.js, Next.js, Node.js, Tailwind CSS, Prisma, REST APIs, JWT, i18next",
          },
          {
            label: "Data analysis",
            value:
              "RapidMiner, Weka, databases, data cleaning, manipulation, visualization",
          },
          {
            label: "Predictive modeling",
            value: "Forecasting models, recommendation engines",
          },
          { label: "Methodologies", value: "CRISP-DM, Agile, Scrum" },
        ],
      },
      {
        heading: "Selected Projects",
        entries: [
          {
            title: "AuditLeads — live B2B SaaS",
            bullets: [
              "Built and shipped solo: Next.js + Prisma app, decoupled Python scraper service, Paddle subscription billing, and per-lead credit metering architected to survive concurrent requests and partial scrape failures without over- or under-charging.",
            ],
          },
          {
            title: "Intrusion Detection System Dashboard",
            bullets: [
              "ReactJS dashboard with interactive visualizations and real-time alerts, integrated with back-end APIs for live network security data — reduced user response time by 40%.",
            ],
          },
          {
            title: "Central Policy Management System",
            bullets: [
              "Led front-end development with reusable UI components and dynamic filtering, integrated with RESTful APIs — improved workflow efficiency by 30%.",
            ],
          },
          {
            title: "NAT Clone Packet Catcher",
            bullets: [
              "Front end for a packet catcher with real-time traffic visualization — reduced manual network monitoring time by 25%.",
            ],
          },
        ],
      },
      {
        heading: "Certifications",
        bullets: ["Machine Learning Professional — Altair RapidMiner, 2024"],
      },
      EDUCATION,
    ],
  },
];

export function getResume(slug: string) {
  return RESUMES.find((r) => r.slug === slug);
}
