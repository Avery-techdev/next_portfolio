import Link from "next/link";

interface FooterLinkProps {
  href: string;
  /** Opens in a new tab with safe rel attributes (for links leaving the site) */
  isExternal?: boolean;
  children: React.ReactNode;
}

/** Text link used in the footer legal row; internal and external share one style. */
export function FooterLink({
  href,
  isExternal = false,
  children,
}: FooterLinkProps): React.JSX.Element {
  return (
    <Link
      href={href}
      className="transition-colors duration-200 hover:text-ink"
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </Link>
  );
}
