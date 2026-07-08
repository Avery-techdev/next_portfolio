"use client";
// "use client" — needs Intersection Observer API (browser-only) for fade-in animation

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
  const { name, color, icon: iconId, label } = skill;
  const Icon = iconMap[iconId] || ReactIcon;
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
      className="relative flex aspect-[5/2] items-center gap-4 rounded-xl border border-edge bg-canvas-elevated px-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:aspect-video md:gap-5 md:px-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`,
      }}
    >
      {/* Label-Badge oben rechts */}
      <span
        className="absolute right-3 top-3 rounded-full border border-edge px-2 py-0.5 text-[10px] font-semibold tracking-widest text-ink-muted uppercase"
        aria-label={label}
      >
        {label}
      </span>

      {/* Brand-tinted icon box — inline style justified: dynamic hex per skill */}
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl md:h-20 md:w-20"
        style={{ backgroundColor: `${color}26` }}
        aria-hidden="true"
      >
        <Icon
          className="h-8 w-8 md:h-10 md:w-10"
          style={{ color }}
        />
      </div>

      <h3 className="whitespace-nowrap text-xl font-bold text-ink md:text-2xl">
        {name}
      </h3>
    </article>
  );
}
