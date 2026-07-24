import Hero from "@/components/Hero";
import PickACard from "@/components/PickACard";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <PickACard />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
