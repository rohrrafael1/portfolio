import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group card relative overflow-hidden p-7 rounded-2xl border border-zinc-200 bg-zinc900 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* Visual proof: image slot if present */}
      {project.imageDirectory ? (
        <div className="mb-5 rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-900 aspect-video flex items-center justify-center">
          <img
            src={`/case-studies/${project.imageDirectory}/cover.png`}
            alt={project.title + " screenshot"}
            className="object-cover w-full 100vh transition-opacity duration-300 group-hover:opacity-90"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {project.roleAndOrg}
            <span className="mx-2 text-zinc-400">•</span>
            {project.timeline}
            <br />
          </p>
        </div>
      </div>
      <div>
        <span className="shrink-0 rounded-full border border-zinc-200 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800/80 dark:bg-black/40 dark:text-zinc-200">
            {project.category}
            </span>
      </div>

      <p className="mt-5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.highlights.slice(0, 3).map((m) => (
          <span
            key={`${m.label}-${m.value}`}
            className="rounded-full border border-zinc-200 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-50"
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

      <div className="mt-7 flex flex-wrap gap-2">
        <a
          href={`/projects/${project.slug}`}
          className="btn border-indigo-200 bg-indigo-950 text-indigo-900 font-semibold hover:bg-indigo-900 hover:border-indigo-300 dark:border-indigo-700 dark:bg-indigo-950 dark:text-indigo-100 dark:hover:bg-indigo-900"
        >
          Read case study
          <span aria-hidden="true">→</span>
        </a>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn border-zinc-200 bg-zinc-900 text-zinc-900 hover:bg-zinc-800 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            GitHub repo
          </a>
        ) : null}
      </div>
    </article>
  );
}

