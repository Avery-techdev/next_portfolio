import { ProjectCard } from "./ProjectCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CtaLink } from "@/components/ui/CtaLink";
import type { Project } from "../types";

const projects: Project[] = [
  {
    id: "design-agency",
    title: "Design Agency Website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageAlt: "Design agency website with colorful layout",
    href: "#",
  },
  {
    id: "budget-app",
    title: "Budget Tracking App",
    tags: ["React", "TypeScript", "Node.js"],
    imageAlt:
      "Budget tracking app showing charts and statistics",
    href: "#",
  },
  {
    id: "entertainment-app",
    title: "Entertainment Web App",
    tags: ["HTML", "CSS", "JavaScript"],
    imageAlt:
      "Entertainment web app with a movie grid layout",
    href: "#",
  },
  {
    id: "art-gallery",
    title: "Art Gallery Showcase",
    tags: ["HTML", "CSS", "JavaScript"],
    imageAlt:
      "Art gallery website with masonry image layout",
    href: "#",
  },
];

const gradients = [
  "from-violet-900 to-fuchsia-900",
  "from-emerald-900 to-teal-900",
  "from-blue-900 to-indigo-900",
  "from-rose-900 to-orange-900",
];

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="border-t border-edge"
    >
      <SectionWrapper>
        <div className="mb-10 flex items-baseline justify-between">
          <h2
            id="projects-heading"
            className="text-4xl font-black text-ink md:text-5xl"
          >
            Projects
          </h2>
          <CtaLink href="#contact">Contact Me</CtaLink>
        </div>

        <ul
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          role="list"
        >
          {projects.map((project, index) => (
            <li key={project.id}>
              <ProjectCard
                project={project}
                gradient={
                  gradients[index % gradients.length]
                }
              />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </section>
  );
}
