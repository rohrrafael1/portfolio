import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
export function ProjectGrid({
  projects,
  featured = false,
}: {
  projects: Project[];
  featured?: boolean;
}) {
  return (
    <div className={featured ? "project-grid featured-grid" : "project-grid"}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
          featured={featured}
        />
      ))}
    </div>
  );
}
