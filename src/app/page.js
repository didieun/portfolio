import HeroSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main>
          <Header/>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectsSection/>
          <CareerSection/>
          <Footer/>
      </main>
  );
}
