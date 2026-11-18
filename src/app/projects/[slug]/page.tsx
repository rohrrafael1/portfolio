import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { CaseStudyGallery } from "@/components/CaseStudyGallery";
import { PersonalProjects } from "@/components/PersonalProjects";
import { getProjectBySlug, projects } from "@/data/projects";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <>
      <section className="page-intro shell">
        <Link className="text-link" href="/#work">
          ← Back to selected work
        </Link>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <div className="detail-meta">
          <span>{project.roleAndOrg}</span>
          <span> / {project.timeline}</span>
          <span> / {project.location}</span>
        </div>
        <p className="lead">{project.summary}</p>
        <div className="detail-highlights">
          {project.highlights.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        {project.githubUrl && (
          <div className="actions" style={{ marginTop: 24 }}>
            <a
              className="button"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explore the source ↗
            </a>
          </div>
        )}
      </section>
      <Section>
        <div className="detail-columns">
          <div>
            <p className="eyebrow">THE WORK</p>
            <h2>
              {slug === "duke-head-ta-data-structures"
                ? "Inside the classroom"
                : "What I contributed"}
            </h2>
            <ul>
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">THE APPROACH</p>
            <h2>
              {slug === "duke-head-ta-data-structures"
                ? "Helping ideas click"
                : "How it came together"}
            </h2>
            <ul>
              {project.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tools-list" aria-label="Tools and areas">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </Section>
      {project.imageDirectory && (
        <div className="supporting-section">
          <Section eyebrow="A CLOSER LOOK" title="From the project notebook">
            <CaseStudyGallery
              key={project.slug}
              imageDirectory={project.imageDirectory}
              title={project.title}
            />
          </Section>
        </div>
      )}
      <Section eyebrow="KEEP EXPLORING" title="Built for the fun of it.">
        <PersonalProjects compact />
        <div className="detail-next">
          <Link className="text-link" href="/#more-work">
            More projects & research ↗
          </Link>
          <Link className="text-link" href="/#contact">
            Let’s connect ↗
          </Link>
        </div>
      </Section>
    </>
  );
}
