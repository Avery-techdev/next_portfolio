import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/structured-data";
import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/features/hero";
import { SkillsSection } from "@/features/skills";
import { ProjectsSection } from "@/features/projects";
import { ContactSection } from "@/features/contact";

// Canonical is set per page (not in the layout), so sub-pages do not inherit "/".
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home(): React.JSX.Element {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Nav />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
