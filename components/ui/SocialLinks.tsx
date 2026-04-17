import {
  GitHubIcon,
  CodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons/SocialIcons";

const socialLinks = [
  { href: "https://github.com", label: "GitHub", Icon: GitHubIcon },
  { href: "https://codepen.io", label: "CodePen", Icon: CodeIcon },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://twitter.com", label: "Twitter", Icon: TwitterIcon },
];

interface SocialLinksProps {
  label: string;
  className?: string;
}

export function SocialLinks({ label, className }: SocialLinksProps) {
  return (
    <nav aria-label={label}>
      <ul
        className={`flex items-center gap-5${className ? ` ${className}` : ""}`}
        role="list"
      >
        {socialLinks.map(({ href, Icon, label: iconLabel }) => (
          <li key={iconLabel}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={iconLabel}
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
