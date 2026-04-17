import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-edge">
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-12">
        <div className="flex flex-col items-center gap-5">
          <SocialLinks label="Footer social links" className="gap-6" />
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Avery. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
