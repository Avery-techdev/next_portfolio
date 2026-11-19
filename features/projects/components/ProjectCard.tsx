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
import { CompanionIllustration } from "./CompanionIllustrations";
import { FlowForgeIllustration } from "./FlowForgeIllustration";

/** SVG illustration mapped by project id */
const illustrations: Record<string, React.ReactNode> = {
  "sky-catcher": <SkyCatcherIllustration />,
  "hive-words": <HiveWordsIllustration />,
  "memo-world": <MemoWorldIllustration />,
  "avery-trading-companion": <CompanionIllustration />,
  "flow-forge": <FlowForgeIllustration />,
};

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

/**
 * Renders a single project card with an animated reveal overlay.
 * On hover (desktop) or tap (mobile) the overlay expands and exposes
 * the project's action links (e.g. "Live Demo" and "GitHub") so the user
 * can choose where to go before leaving the portfolio.
 */
export function ProjectCard({
  project,
  delay = 0,
}: ProjectCardProps): React.JSX.Element {
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
            "relative w-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-102",
            project.featured
              ? "aspect-4/3 sm:aspect-21/9"
              : "aspect-video",
            project.background,
          )}
          aria-label={project.imageAlt}
          role="img"
        >
          {/* Optional status badge — fades out with the rest of the card content */}
          {project.badge && (
            <span
              className={cn(
                "absolute left-6 top-6 rounded-full border border-edge bg-canvas-elevated px-2 py-0.5 text-[10px] font-semibold tracking-widest text-ink-muted uppercase transition-opacity duration-300 ease-out",
                overlayOpen
                  ? "opacity-0"
                  : "group-hover:opacity-0",
              )}
            >
              {project.badge}
            </span>
          )}

          {/* Illustration — top right */}
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
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed text-white/80 drop-shadow-sm",
                project.featured && "max-w-2xl",
              )}
            >
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
                "flex h-full items-center justify-center transition-transform duration-300 ease-out",
                project.featured
                  ? "flex-wrap content-center gap-3 px-6 sm:gap-4"
                  : "gap-4",
                overlayOpen
                  ? "translate-y-0"
                  : "translate-y-2 group-hover:translate-y-0",
              )}
            >
              {project.links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    "rounded border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2",
                    i === 0
                      ? "border-accent text-accent hover:bg-accent hover:text-canvas focus-visible:ring-accent"
                      : "border-ink-muted text-ink-muted hover:border-ink hover:text-ink focus-visible:ring-ink",
                  )}
                >
                  {link.label} ↗
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
