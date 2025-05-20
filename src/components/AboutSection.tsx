
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">ABOUT ME</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a passionate designer and developer with 6+ years of experience
              creating beautiful, functional interfaces. I specialize in React.js,
              Tailwind CSS, and responsive design principles that deliver
              exceptional user experiences.
            </p>
            
            <p>
              When I'm not coding, I enjoy exploring new technologies, watching
              anime, and experimenting with creative side projects. I believe in
              continuous learning and staying ahead of design trends to deliver
              innovative solutions to my clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
