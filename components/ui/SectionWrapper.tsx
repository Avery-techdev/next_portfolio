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
    <div
      className={`mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-20${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
