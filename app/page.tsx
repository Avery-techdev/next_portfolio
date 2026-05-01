import { Nav } from "@/components/nav/Nav";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/features/hero";
import { SkillsSection } from "@/features/skills";
// import { ProjectsSection } from "@/features/projects"; // TODO: uncomment once project is ready
import { ContactSection } from "@/features/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <SkillsSection />
        {/* <ProjectsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
