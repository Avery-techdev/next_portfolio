"use client";
// "use client" — needs Intersection Observer + click-toggle for mobile overlay

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "../types";
import {
  SkyCatcherIllustration,
  HiveWordsIllustration,
  MemoWorldIllustration,
} from "./ProjectIllustrations";

/** SVG illustration mapped by project id */
const illustrations: Record<string, React.ReactNode> = {
  "sky-catcher": <SkyCatcherIllustration />,
  "hive-words": <HiveWordsIllustration />,
  "memo-world": <MemoWorldIllustration />,
};

interface ProjectCardProps {
  project: Project;
  gradient: string;
  delay?: number;
}

/**
 * Renders a single project card with an animated reveal overlay.
 * On hover (desktop) or tap (mobile) the overlay expands and exposes
 * two action links — "Live Demo" and "GitHub" — so the user can choose
 * where to go before leaving the portfolio.
 */
export function ProjectCard({
  project,
  gradient,
  delay = 0,
}: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  /** Mobile: toggle overlay on tap so the two buttons are reachable */
  const [overlayOpen, setOverlayOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Scroll-triggered entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Close overlay when clicking outside the card
  useEffect(() => {
    if (!overlayOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOverlayOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );
    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
  }, [overlayOpen]);

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
      {/* Clickable image area — toggles overlay on mobile, hover on desktop */}
      <div
        className="group relative cursor-pointer"
        onClick={() => setOverlayOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-label={`Optionen für ${project.title} anzeigen`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOverlayOpen((prev) => !prev);
          }
        }}
      >
        {/* Project gradient card */}
        <div
          className={cn(
            "relative aspect-video w-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-102",
            gradient,
          )}
          aria-label={project.imageAlt}
          role="img"
        >
          {/* Illustration — centered, fills ~60% of card height */}
          {illustrations[project.id] && (
            <div
              className={cn(
                "absolute inset-0 hidden sm:flex items-start justify-end p-6 transition-opacity duration-300 ease-out",
                overlayOpen
                  ? "opacity-0"
                  : "group-hover:opacity-0",
              )}
            >
              <div className="h-28 w-28 opacity-90">
                {illustrations[project.id]}
              </div>
            </div>
          )}

          {/* Bottom scrim + text */}
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 via-black/40 to-transparent px-5 pb-5 pt-16 transition-opacity duration-300 ease-out",
              overlayOpen
                ? "opacity-0"
                : "group-hover:opacity-0",
            )}
          >
            <h3 className="text-xl font-black uppercase tracking-widest text-white drop-shadow-md">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80 drop-shadow-sm">
              {project.description}
            </p>
            <p className="mt-3 text-xs tracking-wider text-white/50">
              {project.tags.join("  ·  ")}
            </p>
          </div>

          {/* Action overlay — visible on hover (md+) or when overlayOpen (mobile) */}
          <div
            className={cn(
              "absolute inset-0 bg-canvas/85 transition-opacity duration-300 ease-out",
              overlayOpen
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100",
            )}
          >
            <div
              className={cn(
                "flex h-full items-center justify-center gap-4 transition-transform duration-300 ease-out",
                overlayOpen
                  ? "translate-y-0"
                  : "translate-y-2 group-hover:translate-y-0",
              )}
            >
              {/* Live Demo link */}
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-200 hover:bg-accent hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Live Demo ↗
              </Link>

              {/* GitHub link */}
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded border border-ink-muted px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink-muted transition-colors duration-200 hover:border-ink hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                GitHub ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
