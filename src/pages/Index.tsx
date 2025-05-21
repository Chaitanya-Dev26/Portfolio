import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Timeline from '../components/Timeline'; // assuming you've added this
import Message  from '../components/LearningSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LearningSection from '../components/LearningSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-[#0a0a0a]">
        <div className="container px-4 py-16">
          <ProfileCard />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-15 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white tracking-tight">
            Education Journey
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Learning Section */}
      <section id="message" className="py-20 px-4 itm ">
        <LearningSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-15 px-4">
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 ">
        <SkillsSection />
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
