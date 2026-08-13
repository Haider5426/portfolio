import Link from "next/link";
import { CONTACT } from "@/lib/resumes";

const LINKS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "haider-k-a9a144107",
    href: CONTACT.linkedinHref,
    external: true,
  },
  {
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phoneHref}`,
    external: false,
  },
  {
    label: "Location",
    value: "Riyadh, Saudi Arabia",
    href: "https://www.google.com/maps/search/?api=1&query=Riyadh%2C+Saudi+Arabia",
    external: true,
  },
];

export default function Contact() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="contact-box">
          <div className="contact-intro">
            <p className="status-chip">
              <span className="status-dot" aria-hidden="true" />
              Open to new roles
            </p>
            <p className="contact-invite">
              Have a role or project in mind? I&apos;d like to hear about it.
            </p>
            <div className="section-head">
              <span className="idx">06</span>
              <h2>Contact</h2>
            </div>
            <p className="contact-copy">
              Open to Data Analyst, Analytics Engineer, and Software Engineer
              roles. Based in Riyadh — happy to work remote or relocate.
            </p>
            <a href={`mailto:${CONTACT.email}`} className="btn contact-cta">
              Email me →
            </a>
          </div>

          <ul className="contact-links">
            {LINKS.map((l) => (
              <li key={l.label}>
                <span className="contact-link-label">{l.label}</span>
                <a
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {l.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap site-foot">
        <p className="foot-note">
          // Built by Haider Khan — data pipeline, meet software ship.
        </p>
        <nav className="foot-links" aria-label="Footer">
          <Link href="/resume/data-analyst">Data Analyst CV</Link>
          <Link href="/resume/software-engineer">Software Engineer CV</Link>
          <a href="#intro">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
