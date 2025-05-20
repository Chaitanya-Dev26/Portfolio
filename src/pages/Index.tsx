import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import EducationCard from '../components/EducationCard';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container px-4 py-16">
          <ProfileCard />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
          <div className="max-w-2xl mx-auto">
            <EducationCard
              title="Bachelor of Technology in Computer Science"
              institution="ITM Skills University"
              year="2023 - 2027"
              description="Pursuing foundational and advanced subjects in computer science with a focus on practical applications."
              achievements={[
                "Top 5 finalist at Mumbai Hacks 2025",
                "Developed CampusKitchen using React and Tailwind CSS",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
