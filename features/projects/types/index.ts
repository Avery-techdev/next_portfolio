export interface Project {
  id: string;
  title: string;
  /** Short one-line description shown below the title */
  description: string;
  tags: string[];
  imageAlt: string;
  /** URL of the deployed live demo */
  liveUrl: string;
  /** URL of the GitHub repository */
  githubUrl: string;
}
