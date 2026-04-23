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
          className="relative mx-auto mb-10 h-80 w-64 overflow-hidden border border-edge bg-canvas md:absolute md:right-0 md:top-0 md:mx-0 md:mb-0 md:h-130 md:w-[42%]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
        >
          {/* Decorative circle accent */}
          <div
            className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full border-2 border-ink-muted opacity-20"
            aria-hidden="true"
          />
          <Image
            src="/Avery.jpeg"
            alt="Avery — frontend developer"
            fill
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 40vw, 420px"
            className="object-contain object-top"
            priority
          />
        </div>

        {/* Text — relative, no z-index (DOM order handles layering on desktop) */}
        <div className="relative md:w-[68%] md:pt-4">
          <h1 className="text-5xl font-black leading-none tracking-tight text-ink mix-blend-difference sm:text-6xl lg:text-7xl">
            Nice to meet you!{" "}
            <span className="mt-2 block">
              I&apos;m{" "}
              <span className="underline decoration-accent decoration-[3px] underline-offset-[6px]">
                Avery.
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-muted md:text-lg">
            I&apos;m a frontend developer passionate about
            building beautiful, accessible web apps that
            users love.
          </p>

          <CtaLink href="#contact" className="mt-8">
            Contact Me
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
