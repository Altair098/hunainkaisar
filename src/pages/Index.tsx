import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResearchExperienceSection from "@/components/ResearchExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchPapersSection from "@/components/ResearchPapersSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ExperienceSection />
      <ResearchExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchPapersSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
