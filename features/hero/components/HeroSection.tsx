import Image from "next/image";
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
            I&apos;m a frontend developer passionate about
            building beautiful, accessible web apps that
            users love.
          </p>

          <CtaLink href="#contact" className="mt-8">
            Contact Me
          </CtaLink>
        </div>

        {/* Profile photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-80 w-64 overflow-hidden border border-edge sm:h-96 sm:w-72">
            {/* Decorative circle accent */}
            <div
              className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full border-2 border-ink-muted opacity-20"
              aria-hidden="true"
            />
            <Image
              src="/Avery.jpeg"
              alt="Avery — frontend developer"
              fill
              sizes="(max-width: 640px) 256px, 288px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
