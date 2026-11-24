import {
  GitHubIcon,
  DevToIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";
import { profileUrls } from "@/lib/site";

const socialLinks = [
  {
    href: profileUrls.github,
    label: "GitHub",
    Icon: GitHubIcon,
  },
  {
    href: profileUrls.devTo,
    label: "DEV Community",
    Icon: DevToIcon,
  },
  {
    href: profileUrls.linkedIn,
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
