import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Timeline from '../components/Timeline';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LearningSection from '../components/LearningSection';

const Index = () => {
  const [dynamicData, setDynamicData] = useState<any>({});

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('/api/languages/');
        const data = await response.json();
        console.log("Fetched GitHub Data:", data); // For testing
        setDynamicData(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-[#0a0a0a]">
        <div className="container px-4 py-16">
          <ProfileCard />
        </div>
      </section>

      <section id="education" className="py-15 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white tracking-tight">
            Education Journey
          </h2>
          <Timeline />
        </div>
      </section>

      <section id="message" className="py-20 px-4">
        <LearningSection />
      </section>

      <section id="projects" className="py-15 px-4">
        <ProjectsSection />
      </section>

      <section id="skills" className="py-15 px-4">
        <SkillsSection dynamicData={dynamicData} />
      </section>

      <section id="contact" className="py-20 px-4">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
};

export default Index;