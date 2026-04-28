import {
  GitHubIcon,
  CodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: "https://github.com",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://codepen.io",
    label: "CodePen",
    Icon: CodeIcon,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    Icon: TwitterIcon,
  },
];

interface SocialLinksProps {
  label: string;
  className?: string;
}

export function SocialLinks({
  label,
  className,
}: SocialLinksProps) {
  return (
    <nav aria-label={label}>
      <ul
        className={cn("flex items-center gap-5", className)}
        role="list"
      >
        {socialLinks.map(
          ({ href, Icon, label: iconLabel }) => (
            <li key={iconLabel}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={iconLabel}
                className="text-ink-muted transition-all duration-200 hover:text-ink hover:scale-110"
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
