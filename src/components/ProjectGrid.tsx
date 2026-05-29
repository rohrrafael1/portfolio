import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="flex justify-center">
      <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl bg-black/70 rounded-2xl border border-zinc-200/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-black/70">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

