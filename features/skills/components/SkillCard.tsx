"use client";
// "use client" — needs Intersection Observer for progress bar animation on scroll

import { useEffect, useRef, useState } from "react";
import type { Skill } from "../types";
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  VueIcon,
  TailwindIcon,
  AccessibilityIcon,
} from "../components/TechIcons";

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

// Map icon identifiers to components (in Client Component)
const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  react: ReactIcon,
  nextjs: NextjsIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  vue: VueIcon,
  tailwind: TailwindIcon,
  accessibility: AccessibilityIcon,
};

export function SkillCard({
  skill,
  delay = 0,
}: SkillCardProps) {
  const { name, proficiency, color, icon: iconId } = skill;
  const Icon = iconMap[iconId] || ReactIcon; // Fallback to React icon
  const pct = Math.min(proficiency, 100);
  const isHighProficiency = pct >= 90;
  const [isVisible, setIsVisible] = useState(false);
  const [animateBar, setAnimateBar] = useState(false);
  const [displayPct, setDisplayPct] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger progress bar animation after card fade-in
          setTimeout(() => setAnimateBar(true), 300);
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

  // Counter animation for percentage display
  useEffect(() => {
    if (!animateBar) return;

    const duration = 1400; // Match progress bar animation duration
    const startTime = performance.now();
    const startValue = 0;
    const endValue = pct;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(
        startValue + (endValue - startValue) * easeOut,
      );

      setDisplayPct(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [animateBar, pct]);

  return (
    <article
      ref={ref}
      className="relative flex flex-col gap-4 rounded-xl border border-edge bg-canvas-elevated p-4 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg md:gap-6 md:p-5"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`,
        ...(isHighProficiency
          ? {
              borderTopWidth: "3px",
              borderTopColor: `${color}66`,
            }
          : {}),
      }}
    >
      {/* Header: icon box + text */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Brand-tinted icon box — inline style justified: dynamic hex per skill */}
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg md:h-16 md:w-16 md:rounded-xl"
          style={{ backgroundColor: `${color}26` }}
          aria-hidden="true"
        >
          <Icon
            className="h-6 w-6 md:h-8 md:w-8"
            style={{ color }}
          />
        </div>
        <h3 className="min-w-0 flex-1 text-base font-bold text-ink md:text-lg lg:text-xl">
          {name}
        </h3>
      </div>

      {/* Progress bar + percentage */}
      <div className="flex flex-col gap-1.5">
        <div
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${pct}%`}
          className="h-4 w-full overflow-hidden rounded-full bg-edge"
        >
          {/* Inline style justified: dynamic brand color per skill */}
          <div
            className="h-full rounded-full"
            style={{
              width: animateBar ? `${pct}%` : "0%",
              backgroundColor: color,
              opacity: 0.85,
              transition: "width 1400ms ease-out",
            }}
          />
        </div>
        <p
          className="self-end text-base text-ink-muted transition-opacity duration-300 md:text-lg"
          style={{
            opacity: animateBar ? 1 : 0,
            transitionDelay: "200ms",
          }}
        >
          {displayPct}%
        </p>
      </div>
    </article>
  );
}
