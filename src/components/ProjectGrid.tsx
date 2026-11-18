import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const formulaOneGameCard: Project = {
  slug: "formula-one-first-coding-project",
  title: "Formula I",
  roleAndOrg: "Personal project",
  timeline: "First ever coding project",
  location: "Self-taught",
  category: "HTML • CSS • JavaScript",
  summary:
    "My first ever coding project: a Formula 1-inspired browser game built while learning HTML, CSS, and JavaScript from scratch.",
  highlights: [
    { label: "Project type", value: "Browser game" },
    { label: "Stack", value: "HTML/CSS/JS" },
    { label: "Origin", value: "First build" },
  ],
  outcomes: [
    "Built my first real coding project and learned the fundamentals of interactive web development.",
    "Designed a racing game prototype with simple mechanics, visuals, and game loops using vanilla JavaScript.",
  ],
  approach: [
    "Started from scratch with HTML structure, CSS styling, and JavaScript game logic.",
    "Iterated on the mechanics to make the project feel playful and complete as a first build.",
  ],
  tools: ["HTML", "CSS", "JavaScript", "Game logic"],
  coverImageUrl: "/games/formula-i/cover.png",
  githubUrl: "https://github.com/rohrrafael1/Formula-i",
  liveUrl: "/games/formula-i/index.html",
  liveLabel: "Play game",
};

const maedimCard: Project = {
  slug: "maedim",
  title: "Maedim",
  roleAndOrg: "Personal project",
  timeline: "Mars education platform",
  location: "Portuguese-language website",
  category: "HTML • CSS • JavaScript",
  summary:
    "An interactive platform about Mars, bringing together facts, images, videos, a game, and simulations to explore the red planet.",
  highlights: [
    { label: "Focus", value: "Mars exploration" },
    { label: "Stack", value: "HTML/CSS/JS" },
    { label: "Language", value: "Portuguese" },
  ],
  outcomes: [
    "Built an educational website with multiple ways to discover Mars.",
    "Combined interactive content, a game, and simulations in one platform.",
  ],
  approach: [],
  tools: ["HTML", "CSS", "JavaScript"],
  coverImageUrl: "/experiments/maedim/fotos/assets/Marte.png",
  githubUrl: "https://github.com/rohrrafael1/Maedim",
  liveUrl: "/experiments/maedim/index.html",
  liveLabel: "Visit site",
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="flex justify-center">
      <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl bg-white/70 rounded-2xl border border-zinc-200/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/60">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
        <ProjectCard key={maedimCard.slug} project={maedimCard} />
        <ProjectCard
          key={formulaOneGameCard.slug}
          project={formulaOneGameCard}
        />
      </div>
    </div>
  );
}
