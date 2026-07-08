import type { Skill } from "../types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SkillCard } from "./SkillCard";

const skills: Skill[] = [
  {
    name: "React.js",
    color: "#61DAFB",
    icon: "react",
    label: "PRIMARY",
  },
  {
    name: "Next.js",
    color: "#d4d4d4",
    icon: "nextjs",
    label: "PROFICIENT",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: "typescript",
    label: "PRIMARY",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: "javascript",
    label: "PRIMARY",
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    icon: "tailwind",
    label: "PROFICIENT",
  },
  {
    name: "Vue.js",
    color: "#4FC08D",
    icon: "vue",
    label: "PROFICIENT",
  },
  {
    name: "Accessibility",
    color: "#7C3AED",
    icon: "accessibility",
    label: "PROFICIENT",
  },
];

const taglines = [
  {
    icon: "✦",
    text: "Building clean, scalable web applications",
  },
  {
    icon: "⚡",
    text: "Focused on performance & accessibility",
  },
];

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading">
      <SectionWrapper>
        <div className="mb-10 flex items-baseline justify-between">
          <h2
            id="skills-heading"
            className="text-4xl font-black text-ink md:text-5xl"
          >
            Skills
          </h2>
        </div>
        <ul
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3"
          role="list"
        >
          {skills.map((skill, index) => (
            <li key={skill.name}>
              <SkillCard skill={skill} delay={index * 60} />
            </li>
          ))}
        </ul>

        {/* Taglines row */}
        <ul
          role="list"
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-8"
        >
          {taglines.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-2.5"
            >
              <span
                className="text-ink-muted"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <p className="text-sm text-ink-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </section>
  );
}
