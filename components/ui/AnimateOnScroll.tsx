"use client";
// "use client" — needs Intersection Observer API (browser-only)

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before animation starts (for staggering) */
  delay?: number;
  /** Animation style variant */
  variant?: "fade-up" | "fade-in";
}

/**
 * Wrapper component that triggers animations when element enters viewport.
 * Uses Intersection Observer for performance.
 */
export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  variant = "fade-up",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after first trigger (animation only once)
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
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out",
        variant === "fade-up" && [
          "opacity-0 translate-y-5",
          isVisible && "opacity-100 translate-y-0",
        ],
        variant === "fade-in" && [
          "opacity-0",
          isVisible && "opacity-100",
        ],
        className,
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
