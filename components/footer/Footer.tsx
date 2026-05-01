import Link from "next/link";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-edge">
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-12">
        <div className="flex flex-col items-center gap-5">
          <SocialLinks
            label="Footer social links"
            className="gap-6"
          />
          <div className="flex flex-col items-center gap-2 text-xs text-ink-muted md:flex-row md:gap-6">
            <div className="flex items-center gap-6">
              <Link
                href="/imprint"
                className="transition-colors duration-200 hover:text-ink"
              >
                Imprint
              </Link>
              <Link
                href="/privacy-policy"
                className="transition-colors duration-200 hover:text-ink"
              >
                Privacy Policy
              </Link>
            </div>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              ah-development. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
