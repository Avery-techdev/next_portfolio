import { ProjectCard } from "./ProjectCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CtaLink } from "@/components/ui/CtaLink";
import type { Project } from "../types";

const projects: Project[] = [
  {
    id: "avery-trading-companion",
    category: "product",
    title: "Avery Trading Companion",
    description:
      "Web app that checks every order against the trader’s own rules, calculates stop-loss and position size and supports the trader during the running trade. German interface.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    imageAlt:
      "Avery Trading Companion: navy surface with the Companion mark",
    background: "bg-companion-navy",
    badge: "In development",
    featured: true,
    links: [
      {
        label: "Landing Page",
        href: "https://trading-companion.avery-labs.io/",
      },
      {
        label: "Trading Plan Generator",
        href: "https://trading-companion.avery-labs.io/trading-plan-erstellen/",
      },
      // Später: dritter Button "Case Study" (secondary-Stil, einfach hier ergänzen)
    ],
  },
  {
    id: "flow-forge",
    category: "app",
    title: "FlowForge",
    description:
      "Visual workflow builder — design automations from templates, run them and track every execution.",
    tags: ["React 19", "TypeScript", "React Flow", "Zustand"],
    imageAlt:
      "FlowForge: indigo surface with the FlowForge mark, two connected workflow nodes",
    background: "bg-linear-to-br from-flowforge-indigo to-canvas",
    links: [
      {
        label: "Live Demo",
        href: "https://flow-forge-nu-livid.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/Avery-techdev/flow-forge",
      },
    ],
  },
  {
    id: "sky-catcher",
    category: "game",
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
    // Sky·Catcher — sunset world: sky-top → sky-mid → sky-bottom
    background:
      "bg-linear-to-b from-[#ffd4a0] via-[#ff8c42] to-[#ff4500]",
    links: [
      { label: "Live Demo", href: "https://sky-catcher.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/Avery-techdev/sky-catcher",
      },
    ],
  },
  {
    id: "hive-words",
    category: "game",
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
    // Hive·Words — honey world: deep brown canvas → golden hex border
    background:
      "bg-linear-to-br from-[#3d2500] via-[#4d2e00] to-[#c17f24]",
    links: [
      { label: "Live Demo", href: "https://hive-words.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/Avery-techdev/hive-words",
      },
    ],
  },
  {
    id: "memo-world",
    category: "game",
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
    // Memo·World — dark photography stage: graphite → near-black
    background:
      "bg-linear-to-br from-[#4a4a4a] via-[#242424] to-[#050505]",
    links: [
      { label: "Live Demo", href: "https://memo-world-six.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/Avery-techdev/memo-world",
      },
    ],
  },
];

const regularProjects = projects.filter((p) => !p.featured);

export function ProjectsSection(): React.JSX.Element {
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
          {projects.map((project) => {
            // Delay counts only the regular cards, so the featured card
            // does not shift the stagger of the others.
            const regularIndex = regularProjects.indexOf(project);
            const isLastOddRegular =
              regularIndex === regularProjects.length - 1 &&
              regularProjects.length % 2 !== 0;

            return (
              <li
                key={project.id}
                className={
                  project.featured
                    ? "sm:col-span-2"
                    : isLastOddRegular
                      ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-1rem)]"
                      : undefined
                }
              >
                <ProjectCard
                  project={project}
                  delay={
                    project.featured ? 0 : regularIndex * 70
                  }
                />
              </li>
            );
          })}
        </ul>
      </SectionWrapper>
    </section>
  );
}
