export interface ProjectLink {
  /** Button label, e.g. "Live Demo" (the arrow is added automatically) */
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  /** Short description shown below the title */
  description: string;
  tags: string[];
  imageAlt: string;
  /** Tailwind classes for the card surface (gradient or solid token color) */
  background: string;
  /**
   * Action buttons shown in the hover/tap overlay.
   * The first link is styled as primary (accent), all others as secondary.
   */
  links: ProjectLink[];
  /** Optional small label at the top left, e.g. "In development" */
  badge?: string;
  /** Wide card: spans both grid columns, 21:9 on desktop, roomier text */
  featured?: boolean;
}
