import type { Skill } from "../types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const skills: Skill[] = [
  { name: "HTML", yearsOfExperience: 4 },
  { name: "CSS", yearsOfExperience: 4 },
  { name: "JavaScript", yearsOfExperience: 4 },
  { name: "Accessibility", yearsOfExperience: 4 },
  { name: "React", yearsOfExperience: 3 },
  { name: "Next.js", yearsOfExperience: 2 },
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
              <p className="text-2xl font-black text-ink md:text-3xl">
                {skill.name}
              </p>
              <p className="mt-1 text-sm text-ink-muted">
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
