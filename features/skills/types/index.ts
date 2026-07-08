import type React from "react";

export type SkillLabel = "PRIMARY" | "PROFICIENT";

export interface Skill {
  name: string;
  /** Hex brand color, e.g. "#E34F26" */
  color: string;
  /** Icon identifier string (e.g. "react", "nextjs", "typescript") */
  icon: string;
  /** Proficiency label shown as a badge on the card */
  label: SkillLabel;
}
