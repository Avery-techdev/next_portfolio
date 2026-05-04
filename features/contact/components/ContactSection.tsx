import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CtaLink } from "@/components/ui/CtaLink";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <SectionWrapper divider="full">
        <div className="text-center">
          <h2
            id="contact-heading"
            className="text-4xl font-black text-ink md:text-5xl"
          >
            Got a Project in Mind?
          </h2>
          <p className="mt-3 text-sm font-medium tracking-widest text-accent uppercase">
            Available for freelance work
          </p>
          <CtaLink
            href="mailto:hello@ah-development.de"
            className="mt-8 inline-block text-xl font-bold tracking-widest"
          >
            Send an Email
          </CtaLink>
        </div>
      </SectionWrapper>
    </section>
  );
}
