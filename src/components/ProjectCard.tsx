import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800/70 dark:bg-black/30">
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="h-full w-full bg-gradient-to-b from-zinc-50 via-white to-transparent dark:from-zinc-900/50 dark:via-black/20 dark:to-transparent" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {project.roleAndOrg}
            <span className="mx-2 text-zinc-400">•</span>
            {project.timeline}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800/80 dark:bg-black/40 dark:text-zinc-200">
          {project.category}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.highlights.slice(0, 3).map((m) => (
          <span
            key={`${m.label}-${m.value}`}
            className="rounded-full bg-zinc-900/5 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-white/10 dark:text-zinc-100"
          >
            <span className="mr-1 font-semibold">{m.value}</span>
            <span className="text-zinc-500 dark:text-zinc-400">{m.label}</span>
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {project.outcomes.slice(0, 2).map((line) => (
          <li
            key={line}
            className="text-sm leading-6 text-zinc-700 dark:text-zinc-300"
          >
            • {line}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          Read case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

