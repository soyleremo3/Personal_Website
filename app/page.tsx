import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import FeaturedWork from "@/components/FeaturedWork";
import ProjectIndex from "@/components/ProjectIndex";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PickACard from "@/components/PickACard";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <FeaturedWork />
      <ProjectIndex />
      <ExperienceSection />
      <SkillsSection />
      <AboutSection />
      <PickACard />
      <ContactSection />
    </>
  );
}
