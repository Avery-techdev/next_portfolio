import type React from "react";

export interface Skill {
  name: string;
  /** Percentage proficiency 0–100 */
  proficiency: number;
  /** Hex brand color, e.g. "#E34F26" */
  color: string;
  /** Icon identifier string (e.g. "react", "nextjs", "typescript") */
  icon: string;
}
