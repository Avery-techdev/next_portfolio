import { FooterLink } from "./FooterLink";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { profileUrls } from "@/lib/site";

export function Footer(): React.JSX.Element {
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
              <FooterLink href="/imprint">Imprint</FooterLink>
              <FooterLink href="/privacy-policy">
                Privacy Policy
              </FooterLink>
              <FooterLink href={profileUrls.averyLabs} isExternal>
                Avery Labs
              </FooterLink>
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
