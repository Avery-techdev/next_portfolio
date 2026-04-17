import Link from "next/link";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Nav() {
  return (
    <header className="border-b border-edge">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-ink transition-colors hover:text-accent"
        >
          avery.
        </Link>

        <SocialLinks label="Social links" />
      </div>
    </header>
  );
}
