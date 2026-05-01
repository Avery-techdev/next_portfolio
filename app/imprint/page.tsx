import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint | Avery",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-xs font-medium tracking-widest text-ink-muted uppercase transition-colors duration-200 hover:text-ink"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-black text-ink md:text-5xl">
        Imprint
      </h1>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-muted">
        <section>
          <h2 className="mb-2 text-sm font-semibold tracking-widest text-ink uppercase">
            Information in accordance with Section 5 TMG
          </h2>
          <p>
            Avery Hauschild
            <br />
            Frontend Development
            <br />
            Schulze-Boysen-Stra&szlig;e 27
            <br />
            10365 Berlin
            <br />
            Germany
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold tracking-widest text-ink uppercase">
            Contact
          </h2>
          <p>
            Email:{" "}
            <a
              href="mailto:hello@ah-development.de"
              className="text-accent underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
            >
              hello@ah-development.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold tracking-widest text-ink uppercase">
            VAT ID
          </h2>
          <p>
            VAT identification number in accordance with
            Section 27 a of the German VAT Act:
            <br />
            DE 34378092
          </p>
        </section>
      </div>
    </main>
  );
}
