import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaLink = cva(
  "border-b-2 border-accent pb-0.5 text-sm font-semibold uppercase tracking-widest transition-colors hover:text-accent",
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

interface CtaLinkProps extends VariantProps<typeof ctaLink> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CtaLink({ href, tone, className, children }: CtaLinkProps) {
  return (
    <Link href={href} className={cn(ctaLink({ tone }), className)}>
      {children}
    </Link>
  );
}
