import { ContactForm } from "./ContactForm";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact me"
      className="border-t border-edge"
    >
      <SectionWrapper>
        <div className="mx-auto max-w-lg">
          <ContactForm />
        </div>
      </SectionWrapper>
    </section>
  );
}
