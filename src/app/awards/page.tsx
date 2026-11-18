import type { Metadata } from "next";
import Link from "next/link";
import { awards } from "@/data/awards";
import styles from "./awards.module.css";
export const metadata: Metadata = {
  title: "Awards & Academic Recognition",
  description:
    "Rafael Rohr’s science olympiad medals across biomedicine, chemistry, physics, science, astronomy, and robotics, and academic recognition at Duke.",
};
export default function AwardsPage() {
  return (
    <div className={styles.page}>
      <section className="shell page-intro awards-intro">
        <Link href="/" className="text-link">
          ← Back to home
        </Link>
        <p className="eyebrow">CURIOSITY, BEFORE THE CODE / 2022–2023</p>
        <h1>
          Many subjects.
          <br />
          <em>One curious mind.</em>
        </h1>
        <p className="lead">
          Before Duke, science olympiads gave me a reason to follow questions
          across disciplines. That curiosity still connects the way I learn,
          build, and teach.
        </p>
        <div className="awards-tally">
          <span>
            <strong>10</strong> olympiad medals
          </span>
          <span>
            <strong>6</strong> fields of exploration
          </span>
        </div>
      </section>
      <section
        className="shell awards-list"
        aria-label="High school olympiad medals"
      >
        {awards.map((award, index) => (
          <article className="award-row" key={award.organization}>
            <div className="award-subject">
              <span className="eyebrow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{award.subject}</span>
            </div>
            <div>
              <h2>
                {award.organization}
                {"abbreviation" in award && (
                  <span className="award-abbreviation">
                    {" "}
                    / {award.abbreviation}
                  </span>
                )}
              </h2>
              <ul>
                {award.entries.map((entry) => (
                  <li key={`${entry.year}-${entry.category}`}>
                    <span
                      className={`medal-dot ${entry.medal.toLowerCase()}`}
                      aria-hidden="true"
                    />
                    <strong>{entry.medal}</strong>
                    <span className="award-year">{entry.year}</span>
                    {entry.category && (
                      <span className="award-category">{entry.category}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="shell section university-recognition">
        <p className="eyebrow">THE NEXT CHAPTER / DUKE UNIVERSITY</p>
        <h2>Still learning. Still exploring.</h2>
        <div className="recognition-row">
          <span>Dean’s List with Distinction</span>
          <span>Spring 2025</span>
        </div>
        <div className="recognition-row">
          <span>Dean’s List</span>
          <span>Fall 2025</span>
        </div>
        <a
          href="/resume.pdf"
          className="text-link"
          target="_blank"
          rel="noreferrer"
        >
          View my resume ↗
        </a>
      </section>
    </div>
  );
}
