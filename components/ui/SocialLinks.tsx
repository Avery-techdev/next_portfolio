import {
  GitHubIcon,
  DevToIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: "https://github.com/Avery-techdev",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: "https://dev.to/avery_code",
    label: "DEV Community",
    Icon: DevToIcon,
  },
  {
    href: "https://www.linkedin.com/in/avery-hauschild-038902200/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
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
