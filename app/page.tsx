import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/features/hero/components/HeroSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { ContactSection } from "@/features/contact/components/ContactSection";

export default function Home() {
  return (
    <>
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
