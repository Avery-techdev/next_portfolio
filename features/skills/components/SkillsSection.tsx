import type { Skill } from "../types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SkillBar } from "./SkillBar";

const skills: Skill[] = [
  { name: "HTML", yearsOfExperience: 4, color: "#E34F26" },
  { name: "CSS", yearsOfExperience: 4, color: "#1572B6" },
  {
    name: "JavaScript",
    yearsOfExperience: 4,
    color: "#F7DF1E",
  },
  {
    name: "Accessibility",
    yearsOfExperience: 4,
    color: "#7C3AED",
  },
  { name: "React", yearsOfExperience: 3, color: "#61DAFB" },
  {
    name: "Next.js",
    yearsOfExperience: 2,
    color: "#d4d4d4",
  },
];

export function SkillsSection() {
  return (
    <section
      aria-label="Skills"
      className="border-t border-edge"
    >
      <SectionWrapper>
        <ul
          className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3"
          role="list"
        >
          {skills.map((skill) => (
            <li key={skill.name}>
              <p className="mb-4 text-center text-2xl font-black text-ink md:text-3xl">
                {skill.name}
              </p>
              <SkillBar
                years={skill.yearsOfExperience}
                label={skill.name}
                color={skill.color}
              />
              <p className="mt-2 text-sm text-ink-muted">
                {skill.yearsOfExperience}{" "}
                {skill.yearsOfExperience === 1
                  ? "Year"
                  : "Years"}{" "}
                Experience
              </p>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </section>
  );
}
