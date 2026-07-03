import { ProjectCard } from "./ProjectCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CtaLink } from "@/components/ui/CtaLink";
import type { Project } from "../types";

const projects: Project[] = [
  {
    id: "sky-catcher",
    title: "Sky·Catcher",
    description:
      "Minimalist arcade catch game — move the catcher, grab what falls, chase your best score.",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
    ],
    imageAlt:
      "Sky-Catcher — warm sunset gradient representing the game world",
    liveUrl: "https://sky-catcher.vercel.app",
    githubUrl:
      "https://github.com/Avery-techdev/sky-catcher",
  },
  {
    id: "hive-words",
    title: "Hive·Words",
    description:
      "Honeycomb word game — spell words from 7 letters, one shared center, chase the highest score.",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
    ],
    imageAlt:
      "Hive-Words — deep honey gradient representing the hive world",
    liveUrl: "https://hive-words.vercel.app",
    githubUrl:
      "https://github.com/Avery-techdev/hive-words",
  },
  {
    id: "memo-world",
    title: "Memo·World",
    description:
      "Black-and-white photography memory game — flip polaroid cards, match landmarks, beat the clock.",
    tags: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
    ],
    imageAlt:
      "Memo·World — dark stage gradient representing the polaroid photography aesthetic",
    liveUrl: "https://memo-world-six.vercel.app",
    githubUrl:
      "https://github.com/Avery-techdev/memo-world",
  },
];

// Gradients are derived from each project's own design tokens (see src/styles/index.css)
const gradients = [
  // Sky·Catcher — sunset world: sky-top → sky-mid → sky-bottom
  "bg-linear-to-b from-[#ffd4a0] via-[#ff8c42] to-[#ff4500]",
  // Hive·Words — honey world: deep brown canvas → golden hex border
  "bg-linear-to-br from-[#3d2500] via-[#4d2e00] to-[#c17f24]",
  // Memo·World — dark photography stage: graphite → near-black
  "bg-linear-to-br from-[#4a4a4a] via-[#242424] to-[#050505]",
];

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-heading">
      <SectionWrapper>
        <div className="mb-10 flex items-baseline justify-between">
          <h2
            id="projects-heading"
            className="text-4xl font-black text-ink md:text-5xl"
          >
            Projects
          </h2>
          <CtaLink href="mailto:hello@ah-development.de">
            Contact Me
          </CtaLink>
        </div>

        <ul
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          role="list"
        >
          {projects.map((project, index) => (
            <li
              key={project.id}
              className={
                index === projects.length - 1 &&
                projects.length % 2 !== 0
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-1rem)]"
                  : undefined
              }
            >
              <ProjectCard
                project={project}
                gradient={
                  gradients[index % gradients.length]
                }
                delay={index * 70}
              />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </section>
  );
}
