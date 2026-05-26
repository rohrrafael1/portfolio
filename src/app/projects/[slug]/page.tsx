import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-4 pt-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            ← Back to projects
          </Link>

          <span className="shrink-0 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-200">
            {project.category}
          </span>
        </div>

        <div className="mt-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.roleAndOrg} <span className="mx-2 text-zinc-300">•</span>{" "}
            {project.timeline} <span className="mx-2 text-zinc-300">•</span>{" "}
            {project.location}
          </p>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.highlights.map((m) => (
            <span
              key={`${m.label}-${m.value}`}
              className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-100"
            >
              <span className="font-semibold">{m.value}</span>{" "}
              <span className="ml-2 text-zinc-500 dark:text-zinc-400">
                {m.label}
              </span>
            </span>
          ))}
        </div>
      </div>

      <Section eyebrow="RESULTS" title="What changed">
        <ul className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
          {project.outcomes.map((o) => (
            <li key={o} className="leading-7">
              • {o}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="APPROACH" title="How I delivered it">
        <ul className="space-y-3 text-base text-zinc-700 dark:text-zinc-300">
          {project.approach.map((a) => (
            <li key={a} className="leading-7">
              • {a}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            Tech & tools
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-800 dark:bg-black/30 dark:text-zinc-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

