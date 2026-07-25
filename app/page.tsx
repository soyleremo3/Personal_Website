import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import PickACard from "@/components/PickACard";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex flex-col flex-1">
        <Hero />
        <TechMarquee />
        <PickACard />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}
