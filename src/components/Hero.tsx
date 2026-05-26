import Link from "next/link";
import { profile } from "@/data/profile";
import { type Metric, projects } from "@/data/projects";

export function Hero() {
  const topHighlights: Metric[] = [
    projects[0]?.highlights?.[0],
    projects[0]?.highlights?.[1],
    projects[1]?.highlights?.[0],
    projects[3]?.highlights?.[1],
  ].filter((m): m is Metric => Boolean(m));

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto h-[520px] max-w-5xl bg-gradient-to-b from-zinc-50 via-white to-transparent dark:from-zinc-950 dark:via-black" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200/70 to-transparent dark:via-zinc-800/70" />
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-6 pt-10 sm:pb-10 sm:pt-14">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
          {profile.titleLine} • {profile.interests.join(" • ")}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          {profile.headline}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg">
          {profile.summary[0]}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
          >
            Email me
          </a>
          <Link
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            View projects
          </Link>
          <Link
            href={profile.resumePath}
            download
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Download resume
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {topHighlights.map((m, idx) => (
            <span
              key={`${m?.label}-${idx}`}
              className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-50"
            >
              {m.value}
              <span className="ml-2 text-zinc-500 dark:text-zinc-400">{m.label}</span>
            </span>
          ))}
          <a
            href={`https://${profile.linkedIn}`}
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

