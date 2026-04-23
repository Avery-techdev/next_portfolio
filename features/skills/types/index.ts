import type React from "react";

export interface Skill {
  name: string;
  yearsOfExperience: number;
  /** Percentage proficiency 0–100 */
  proficiency: number;
  /** Hex brand color, e.g. "#E34F26" */
  color: string;
  /** Icon component */
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
