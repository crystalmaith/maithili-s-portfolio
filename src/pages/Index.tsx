import SidebarNav from "@/components/resume/SidebarNav";
import HeroSection from "@/components/resume/HeroSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import SkillsSection from "@/components/resume/SkillsSection";
import AboutSection from "@/components/resume/AboutSection";
import EducationSection from "@/components/resume/EducationSection";
import HobbiesSection from "@/components/resume/HobbiesSection";
import FooterSection from "@/components/resume/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SidebarNav />
      <main className="lg:pl-20">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <EducationSection />
        <HobbiesSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
