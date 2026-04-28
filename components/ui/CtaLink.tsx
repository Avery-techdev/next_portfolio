import Link from "next/link";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaLink = cva(
  "relative border-b-2 border-accent pb-0.5 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full",
  {
    variants: {
      tone: {
        light: "text-ink",
        muted: "text-ink-muted",
      },
    },
    defaultVariants: { tone: "light" },
  },
);

interface CtaLinkProps extends VariantProps<
  typeof ctaLink
> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CtaLink({
  href,
  tone,
  className,
  children,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(ctaLink({ tone }), className)}
    >
      {children}
    </Link>
  );
}
