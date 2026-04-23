import type { Skill } from "../types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SkillCard } from "./SkillCard";
import {
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  AccessibilityIcon,
  ReactIcon,
  NextjsIcon,
} from "./TechIcons";

const skills: Skill[] = [
  {
    name: "HTML",
    yearsOfExperience: 4,
    proficiency: 90,
    color: "#E34F26",
    icon: Html5Icon,
  },
  {
    name: "CSS",
    yearsOfExperience: 4,
    proficiency: 88,
    color: "#1572B6",
    icon: Css3Icon,
  },
  {
    name: "JavaScript",
    yearsOfExperience: 4,
    proficiency: 85,
    color: "#F7DF1E",
    icon: JavaScriptIcon,
  },
  {
    name: "Accessibility",
    yearsOfExperience: 4,
    proficiency: 80,
    color: "#7C3AED",
    icon: AccessibilityIcon,
  },
  {
    name: "React",
    yearsOfExperience: 3,
    proficiency: 78,
    color: "#61DAFB",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    yearsOfExperience: 2,
    proficiency: 70,
    color: "#d4d4d4",
    icon: NextjsIcon,
  },
];

const taglines = [
  { icon: "✦", label: "Always Learning" },
  { icon: "</>", label: "Building Better Web" },
  { icon: "✦", label: "Clean & Accessible" },
];

export function SkillsSection() {
  return (
    <section aria-label="Skills">
      <SectionWrapper>
        <ul
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
          role="list"
        >
          {skills.map((skill) => (
            <li key={skill.name}>
              <SkillCard skill={skill} />
            </li>
          ))}
        </ul>

        {/* Taglines row */}
        <ul
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-ink-muted"
          role="list"
        >
          {taglines.map((t) => (
            <li
              key={t.label}
              className="flex items-center gap-2"
            >
              <span aria-hidden="true">{t.icon}</span>
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </section>
  );
}
