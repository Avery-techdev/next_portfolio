import { CtaLink } from "@/components/ui/CtaLink";

export function HeroSection() {
  return (
    <section
      className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Text content — first in DOM for correct mobile order */}
        <div>
          <h1 className="text-5xl font-black leading-none tracking-tight text-ink sm:text-6xl md:text-7xl">
            Nice to meet you!{" "}
            <span className="mt-2 block">
              I&apos;m{" "}
              <span className="underline decoration-accent decoration-[3px] underline-offset-[6px]">
                Avery.
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-muted md:text-lg">
            I&apos;m a front-end developer passionate about
            building beautiful, accessible web apps that
            users love.
          </p>

          <CtaLink href="#contact" className="mt-8">
            Contact Me
          </CtaLink>
        </div>

        {/* Profile photo — replace div with next/image once you have public/profile.jpg */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative h-80 w-64 overflow-hidden border border-edge bg-canvas-elevated sm:h-96 sm:w-72"
            role="img"
            aria-label="Profile photo placeholder"
          >
            {/* Decorative circle accent */}
            <div
              className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full border-2 border-ink-muted opacity-20"
              aria-hidden="true"
            />

            {/* Placeholder person silhouette */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink-muted">
              <svg
                className="h-24 w-24 opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
              <span className="px-6 text-center text-xs leading-relaxed opacity-40">
                Add your photo to{" "}
                <code className="font-mono">
                  public/profile.jpg
                </code>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
