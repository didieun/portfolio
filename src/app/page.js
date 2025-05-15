'use client';

import { useEffect } from 'react';
import HeroSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import Footer from "@/components/Footer";

export default function Home() {

    useEffect(() => {
        // 페이지 진입 시 body 스크롤 초기화
        document.body.style.overflow = 'auto';
    }, []);

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
