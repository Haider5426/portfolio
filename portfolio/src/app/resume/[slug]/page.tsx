import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PrintButton from "@/components/PrintButton";
import { CONTACT, RESUMES, getResume } from "@/lib/resumes";
import { navTransitionMap } from "@/lib/viewTransition";

export function generateStaticParams() {
  return RESUMES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(
  props: PageProps<"/resume/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const resume = getResume(slug);
  if (!resume) return {};
  return {
    title: `${resume.variant} Résumé`,
    description: `${CONTACT.name} — ${resume.role}. ${resume.variant} résumé.`,
  };
}

export default async function ResumePage(props: PageProps<"/resume/[slug]">) {
  const { slug } = await props.params;
  const resume = getResume(slug);
  if (!resume) notFound();

  const other = RESUMES.find((r) => r.slug !== resume.slug);

  return (
    <ViewTransition enter={navTransitionMap} exit={navTransitionMap} default="none">
    <div className="page resume-page">
      <main id="main">
        <div className="wrap resume">
          {/* Screen-only controls */}
          <div className="resume-bar no-print">
            <Link href="/#resume" className="case-back" transitionTypes={["nav-back"]}>
              ← Back to site
            </Link>
            <div className="resume-bar-actions">
              {other && (
                <Link href={`/resume/${other.slug}`} className="btn">
                  {other.variant} version
                </Link>
              )}
              <PrintButton />
            </div>
          </div>
          <p className="resume-hint no-print">
            Use Print → &ldquo;Save as PDF&rdquo; for a clean copy.
          </p>

          <article className="resume-doc">
            <header className="resume-head">
              <h1>{CONTACT.name}</h1>
              <p className="resume-role">{resume.role}</p>
              <p className="resume-contact">
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                <span aria-hidden="true"> · </span>
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
                <span aria-hidden="true"> · </span>
                <span>{CONTACT.location}</span>
                <span aria-hidden="true"> · </span>
                <a href={CONTACT.linkedinHref} rel="noopener">
                  {CONTACT.linkedin}
                </a>
              </p>
            </header>

            {resume.sections.map((section) => (
              <section className="resume-section reveal-up" key={section.heading}>
                <h2>{section.heading}</h2>

                {section.body?.map((p) => (
                  <p key={p}>{p}</p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul>
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                {section.entries?.map((entry) => (
                  <div className="resume-entry" key={entry.title + (entry.org ?? "")}>
                    <div className="resume-entry-head">
                      <h3>
                        {entry.title}
                        {entry.org && (
                          <span className="resume-org"> — {entry.org}</span>
                        )}
                      </h3>
                      {entry.dates && (
                        <span className="resume-dates">{entry.dates}</span>
                      )}
                    </div>
                    {entry.bullets.length > 0 && (
                      <ul>
                        {entry.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.pairs && (
                  <dl className="resume-pairs">
                    {section.pairs.map((p) => (
                      <div key={p.label}>
                        <dt>{p.label}</dt>
                        <dd>{p.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </section>
            ))}
          </article>
        </div>
      </main>
    </div>
    </ViewTransition>
  );
}
