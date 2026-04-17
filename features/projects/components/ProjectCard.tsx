import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  gradient: string;
}

export function ProjectCard({
  project,
  gradient,
}: ProjectCardProps) {
  const isExternal =
    project.href !== "#" && !project.href.startsWith("/");

  return (
    <article>
      <Link
        href={project.href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group block"
      >
        {/* Project image placeholder — replace with next/image once you have screenshots */}
        <div
          className={cn(
            "aspect-video w-full overflow-hidden bg-linear-to-br",
            gradient,
          )}
          aria-label={project.imageAlt}
          role="img"
        >
          {/* Decorative app-screenshot skeleton */}
          <div
            className="flex h-full flex-col gap-3 p-5 opacity-25"
            aria-hidden="true"
          >
            <div className="h-3 w-3/4 rounded-sm bg-white/50" />
            <div className="h-3 w-1/2 rounded-sm bg-white/50" />
            <div className="mt-1 flex gap-2">
              <div className="h-16 flex-1 rounded-sm bg-white/50" />
              <div className="h-16 flex-1 rounded-sm bg-white/50" />
              <div className="h-16 flex-1 rounded-sm bg-white/50" />
            </div>
            <div className="h-3 w-2/3 rounded-sm bg-white/50" />
          </div>
        </div>

        {/* Title + tech stack */}
        <div className="mt-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-ink transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 text-xs tracking-wider text-ink-muted">
            {project.tags.join("  ·  ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
