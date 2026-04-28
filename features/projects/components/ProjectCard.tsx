"use client";
// "use client" — needs Intersection Observer for scroll animation

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  gradient: string;
  delay?: number;
}

export function ProjectCard({
  project,
  gradient,
  delay = 0,
}: ProjectCardProps) {
  const isExternal =
    project.href !== "#" && !project.href.startsWith("/");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : "translateY(20px)",
        transition: `all 400ms ease-out ${delay}ms`,
      }}
    >
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
            "relative aspect-video w-full overflow-hidden bg-linear-to-br transition-transform duration-300 ease-out group-hover:scale-102",
            gradient,
          )}
          aria-label={project.imageAlt}
          role="img"
        >
          {/* Hover overlay */}
          <div
            className="absolute inset-0 bg-canvas/80 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            aria-hidden="true"
          >
            <div className="flex h-full items-center justify-center translate-y-2 transition-transform duration-300 ease-out group-hover:translate-y-0">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                View Project
              </span>
            </div>
          </div>

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
