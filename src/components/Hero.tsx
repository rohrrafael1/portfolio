import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto h-[520px] max-w-5xl bg-gradient-to-b from-zinc-50 via-white to-transparent dark:from-zinc-950 dark:via-black" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200/70 to-transparent dark:via-zinc-800/70" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-10 pt-16 sm:pb-16 sm:pt-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-3 max-w-2xl text-xs leading-6 text-zinc-500 dark:text-zinc-400">
              {profile.titleLine}
            </p>

            <h1 className="h1 relative mb-6 text-zinc-950 dark:text-zinc-50">
              <span className="relative z-10">{profile.name}</span>
            </h1>
          </div>

          <div className="shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/profile.jpg"
              alt={`${profile.name} profile picture`}
              width={176}
              height={176}
              className="h-40 w-40 object-cover sm:h-44 sm:w-44"
            />
          </div>
        </div>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          {profile.headline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="btn border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-indigo-950 dark:hover:text-indigo-200"
          >
            Email me
          </a>
          <Link
            href="#projects"
            className="btn border-indigo-200 bg-indigo-50 text-indigo-900 font-semibold hover:bg-indigo-100 hover:border-indigo-300 dark:border-indigo-700 dark:bg-indigo-950 dark:text-indigo-100 dark:hover:bg-indigo-900"
          >
            View projects
          </Link>
          <Link
            href={profile.resumePath}
            download
            className="btn border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            Download resume
          </Link>
          <a
            href={`https://${profile.linkedIn}`}
            target="_blank"
            rel="noreferrer"
            className="btn border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-8 space-y-5">
          {[
            { label: "Skills", items: profile.skills },
            { label: "Technologies", items: profile.technologies },
          ].map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                {group.label.toUpperCase()}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle underline animation keyframes */}
        <style>{`
          @keyframes hero-underline-move {
            0% { transform: translateX(-8px) scaleX(0.98); opacity: 0.7; }
            100% { transform: translateX(8px) scaleX(1.02); opacity: 1; }
          }
        `}</style>
      </div>
    </section>
  );
}
