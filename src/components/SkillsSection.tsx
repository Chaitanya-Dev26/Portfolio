
import React from 'react';
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "UI/UX Design", level: 80 },
  { name: "Node.js", level: 65 },
  { name: "Next.js", level: 70 }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">SKILLS</h2>
          
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
