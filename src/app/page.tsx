import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Hero />

      <Section id="about" eyebrow="ABOUT" title="Recruiter-ready builder story">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {profile.summary[0]}
            </p>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {profile.summary[1]}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              What I’m optimized for
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="font-semibold">Quant mindset:</span>{" "}
                measuring outcomes, iterating fast, and building reliable
                systems.
              </li>
              <li>
                <span className="font-semibold">Consulting energy:</span>{" "}
                turning ambiguous problems into crisp technical plans.
              </li>
              <li>
                <span className="font-semibold">Tech depth:</span> secure
                product engineering and hardware verification.
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.targetRoles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-zinc-800 dark:bg-white/5 dark:text-zinc-100"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="PROJECTS"
        title="Impact, with numbers"
      >
        <ProjectGrid projects={projects} />
      </Section>

      <Section id="contact" eyebrow="CONTACT" title="Let’s build something that ships">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Best way to reach me
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              I respond quickly. If you’re hiring for quant, consulting analytics,
              or applied software/hardware roles, send the details and I’ll
              tailor my work to your needs.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
              >
                Email me
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Current focus
            </p>
            <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <p>
                <span className="font-semibold">Quant & decision systems:</span>{" "}
                applied ML workflows and performance measurement.
              </p>
              <p>
                <span className="font-semibold">Hardware reliability:</span>{" "}
                DFT, verification, and systems that behave predictably.
              </p>
              <p>
                <span className="font-semibold">Consulting analytics:</span>{" "}
                translating ambiguous inputs into crisp plans.
              </p>
            </div>

            <div className="mt-6">
              <a
                href={`https://${profile.linkedIn}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
