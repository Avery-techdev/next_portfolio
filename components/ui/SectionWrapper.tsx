import type React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12">
      <div
        className={`border-t-2 border-edge-subtle py-16 md:py-20${className ? ` ${className}` : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
