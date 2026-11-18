import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Section } from "@/components/Section";
import { PersonalProjects } from "@/components/PersonalProjects";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
const featuredSlugs = [
  "itau-investment-intelligence",
  "stoneco-payments-ai-automation",
  "duke-head-ta-data-structures",
];
export default function Home() {
  const featured = featuredSlugs.map(
    (slug) => projects.find((project) => project.slug === slug)!,
  );
  const more = projects.filter(
    (project) => !featuredSlugs.includes(project.slug),
  );
  return (
    <>
      <Hero />
      <Section
        id="work"
        eyebrow="01 / SELECTED EXPERIENCE"
        title="Different problems. The same curiosity."
      >
        <span id="projects" className="anchor-target" />
        <p className="section-intro">
          From investment intelligence to the classroom, I like turning complex
          problems into something useful.
        </p>
        <ProjectGrid projects={featured} featured />
      </Section>
      <div className="about-band">
        <Section
          id="about"
          eyebrow="02 / A LITTLE ABOUT ME"
          title="An engineer, with a few other sides."
        >
          <div className="about-grid">
            <div className="about-story">
              <p>
                I’m Brazilian, studying Electrical & Computer Engineering and
                Mathematics at Duke, with a minor in Finance. I’m interested in
                what happens where disciplines meet: how a model becomes a
                product, how code moves a machine, and how an explanation makes
                a difficult idea click.
              </p>
              <p>
                I’ve worked across AI and software engineering at Itaú and
                StoneCo, built FPGA systems, and taught data structures and
                algorithms. Each has shaped the way I approach a problem:
                understand it carefully, build something concrete, and keep
                learning from the people around me.
              </p>
              <Link href="/awards" className="text-link">
                Where that curiosity started ↗
              </Link>
            </div>
            <div className="personal-notes">
              <div>
                <p className="eyebrow">BEYOND THE CODE</p>
                <p>
                  Football. Chess. Philosophy.
                  <br />A notebook for poetry.
                </p>
              </div>
              <div>
                <p className="eyebrow">BUILDING COMMUNITY</p>
                <p>
                  As president of BRASA at Duke, I lead a 25-member team
                  connecting Brazilian students through community, culture, and
                  opportunities.
                </p>
              </div>
              <div className="language-note">
                Portuguese & English / Spanish / French
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Section
        id="more-work"
        eyebrow="03 / PROJECTS & RESEARCH"
        title="From an idea to something real."
      >
        <p className="section-intro">
          Processors, robotics, research tools, and a little hands-on
          experimentation.
        </p>
        <ProjectGrid projects={more} />
      </Section>
      <Section
        id="personal-projects"
        eyebrow="04 / BUILT FOR THE FUN OF IT"
        title="A place to play. A reason to learn."
      >
        <PersonalProjects />
      </Section>
      <section id="contact" className="contact-section shell">
        <p className="eyebrow">05 / LET’S CONNECT</p>
        <div className="contact-grid">
          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <div>
            <p>
              Working on an interesting problem? Have a question about my work?
              I’d love to hear from you.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} ↗
            </a>
            <div className="contact-links">
              <a href={profile.linkedIn} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={profile.resumePath} target="_blank" rel="noreferrer">
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
