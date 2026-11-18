import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <Hero />

      <Section id="about" eyebrow="ABOUT" title="A little about me">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {profile.summary[0]}
            </p>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {profile.summary[1]}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/20">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Beyond the code
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Outside engineering, I enjoy football, chess, philosophy, and
              writing poetry.
            </p>
            <p className="mt-6 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Languages
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.languages.map((language) => (
                <span
                  key={language.name}
                  className="rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-zinc-800 dark:bg-white/5 dark:text-zinc-100"
                >
                  {language.name} · {language.level}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" eyebrow="PROJECTS" title="Impact, with numbers">
        <ProjectGrid projects={projects} />
      </Section>

      <Section id="leadership">
        <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/20">
          <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
            LEADERSHIP & COMMUNITY
          </p>
          <h3 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-zinc-50">
            Leading BRASA at Duke
          </h3>
          <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            As president of Duke’s Brazilian Student Association, I lead a team
            that connects students through culture, community, and professional
            opportunities. Our events engage 100+ students, with partnerships
            including EMS, Itaú, and StoneCo and alumni guests from Google,
            Microsoft, and Bain.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "$20K+", label: "Funding secured" },
              { value: "25", label: "Team members" },
              { value: "23%", label: "Membership growth" },
              { value: "45K", label: "Monthly Instagram accesses" },
            ].map((result) => (
              <div key={result.label}>
                <dt className="text-xs text-zinc-600 dark:text-zinc-400">
                  {result.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            Our chapter received BRASA’s Most Opportunity-Generating Chapter
            award.
          </p>
        </div>
      </Section>

      <Section id="contact" eyebrow="CONTACT" title="Let’s connect">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/20">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Best way to reach me
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              I enjoy working on technically challenging problems involving
              reliable systems, hardware verification, and applied engineering.
              If you think there’s a fit, feel free to reach out.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-6 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
              >
                Email me
              </a>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-6 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/20">
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Current focus
            </p>
            <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <p>
                <span className="font-semibold">
                  Performance & reliability:
                </span>{" "}
                measurement, verification, and iterative improvements.
              </p>
              <p>
                <span className="font-semibold">Hardware reliability:</span>{" "}
                DFT, verification, and systems that behave predictably.
              </p>
              <p>
                <span className="font-semibold">Applied research:</span>{" "}
                building tools from real needs and validating feasibility.
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
