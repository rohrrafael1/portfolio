import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
export function ProjectCard({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const cover =
    project.coverImageUrl ??
    (project.imageDirectory
      ? `/case-studies/${project.imageDirectory}/cover.${project.imageDirectory === "itau" ? "jpg" : "png"}`
      : null);
  return (
    <article className={`project-card ${featured ? "featured-card" : ""}`}>
      <Link
        href={`/projects/${project.slug}`}
        className={`project-visual ${project.slug === "duke-head-ta-data-structures" ? "teaching-visual" : ""}`}
        aria-label={`Explore ${project.title}`}
      >
        {cover ? (
          <Image
            src={cover}
            alt={`${project.title} project overview`}
            fill
            sizes={
              featured
                ? "(max-width: 760px) 100vw, 33vw"
                : "(max-width: 760px) 100vw, 50vw"
            }
          />
        ) : (
          <div className="teaching-art" aria-hidden="true">
            <span>DUKE / COMPUTER SCIENCE</span>
            <strong>
              Think it through.
              <br />
              <em>Then make it work.</em>
            </strong>
            <span>DATA STRUCTURES & ALGORITHMS</span>
          </div>
        )}
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>
      <div className="project-copy">
        <p className="eyebrow">
          {project.category.split(" • ").slice(0, 2).join(" / ")}
        </p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-role">
          {project.roleAndOrg} <span>· {project.timeline}</span>
        </p>
        <p className="project-summary">{project.summary}</p>
        <div className="project-result">
          <strong>{project.highlights[0]?.value}</strong>
          <span>{project.highlights[0]?.label}</span>
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          {project.slug === "duke-head-ta-data-structures"
            ? "Inside the classroom"
            : "Explore the work"}{" "}
          ↗
        </Link>
      </div>
    </article>
  );
}
