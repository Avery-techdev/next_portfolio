import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";

export function HeroSection() {
  return (
    <section
      className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28"
      aria-label="Introduction"
    >
      {/*
       * Single responsive layout.
       * Mobile: image in normal flow (centered), text below.
       * Desktop (md+): image is absolute right, text bleeds into it via w-[68%].
       * No z-index on text → no isolated stacking context →
       * mix-blend-difference on h1 blends correctly against the image.
       */}
      <div className="relative md:min-h-140">
        {/* Image — in flow on mobile, absolute on desktop */}
        <div
          className="animate-scale-in relative mx-auto mb-0 h-110 w-full overflow-hidden border border-edge md:absolute md:right-0 md:top-0 md:mx-0 md:mb-0 md:h-130 md:w-[42%]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        >
          <Image
            src="/Avery.jpeg"
            alt="Avery — frontend developer"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 420px"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Text — relative, no z-index (DOM order handles layering on desktop) */}
        <div className="relative -mt-8 md:mt-0 md:w-[68%] md:pt-4">
          <h1 className="animate-fade-up text-5xl font-black leading-none tracking-tight text-ink mix-blend-difference sm:text-6xl lg:text-7xl">
            Nice to meet you!{" "}
            <span
              className="mt-2 block animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              I&apos;m{" "}
              <span className="underline decoration-accent decoration-[3px] underline-offset-[6px]">
                Avery.
              </span>
            </span>
          </h1>

          <p
            className="animate-fade-up mt-4 text-base font-medium tracking-widest text-accent uppercase"
            style={{ animationDelay: "200ms" }}
          >
            Frontend Developer
          </p>

          <div
            className="animate-fade-up mt-6 max-w-sm space-y-3 text-base leading-relaxed text-ink-muted md:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            <p>
              I&apos;ve always sought out opportunities and
              challenges that truly matter to me — from
              media design to finance manager to podcaster.
            </p>
            <p>
              In coding, I finally found my passion. As a
              frontend developer, I love building websites
              and applications that people enjoy using.
            </p>
          </div>

          <CtaLink
            href="mailto:hello@ah-development.de"
            className="animate-fade-up mt-8 inline-block"
            style={{ animationDelay: "300ms" }}
          >
            Contact Me
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
