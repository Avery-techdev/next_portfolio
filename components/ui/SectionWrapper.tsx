import type React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  divider?: "full" | "narrow";
}

export function SectionWrapper({
  children,
  className,
  divider = "full",
}: SectionWrapperProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12">
      {divider === "narrow" && (
        <div className="mx-auto border-t-2 border-edge-subtle max-w-xl" />
      )}
      <div
        className={cn(
          "py-16 md:py-20",
          divider === "full" &&
            "border-t-2 border-edge-subtle",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
