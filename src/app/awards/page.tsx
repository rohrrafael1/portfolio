import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { awards } from "@/data/awards";

export const metadata: Metadata = {
  title: "Awards & Academic Recognition | Rafael Rohr",
  description:
    "Rafael Rohr’s science olympiad medals across biomedicine, chemistry, physics, science, astronomy, and robotics, and academic recognition at Duke.",
};

export default function AwardsPage() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-4 pb-12 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          ← Back to home
        </Link>
        <p className="mt-8 text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
          AWARDS & ACADEMIC RECOGNITION
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          Many subjects. One curious mind.
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          Before Duke, science olympiads gave me a reason to follow questions
          across disciplines. That curiosity still connects the way I learn,
          build, and teach.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["10 olympiad medals", "6 fields of exploration", "2022–2023"].map((label) => (
            <span key={label} className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-100">
              {label}
            </span>
          ))}
        </div>
      </div>

      <Section eyebrow="HIGH SCHOOL" title="Science olympiad medals">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <article key={award.organization} className="card rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                {award.subject.toUpperCase()}{"abbreviation" in award ? ` · ${award.abbreviation}` : ""}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                {award.organization}
              </h2>
              <ul className="mt-5 space-y-4">
                {award.entries.map((entry) => (
                  <li key={`${entry.year}-${entry.category}`}>
                    <span className="inline-flex rounded-full border border-zinc-200 bg-black/5 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-100">
                      {entry.medal} · {entry.year}
                    </span>
                    {entry.category && <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{entry.category}</p>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="DUKE UNIVERSITY" title="Academic recognition">
        <div className="grid gap-6 md:grid-cols-2">
          {[{ title: "Dean’s List with Distinction", term: "Spring 2025" }, { title: "Dean’s List", term: "Fall 2025" }].map((recognition) => (
            <article key={recognition.title} className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/20">
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{recognition.title}</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{recognition.term}</p>
            </article>
          ))}
        </div>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn mt-6">View resume ↗</a>
      </Section>
    </div>
  );
}
