import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteRight } from "react-icons/fa";
import '../App.css';
import {
  FaReact,
  FaDocker,
  FaNodeJs,
  FaFigma,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
} from "react-icons/fa";
const initialSkills = [
  { tech: "React.js", percent: 74, icon: <FaReact className="text-cyan-400" /> },
  { tech: "JavaScript", percent: 20, icon: <FaJsSquare className="text-yellow-400" /> },
  { tech: "Python", percent: 56, icon: <FaPython className="text-yellow-200" /> },
  { tech: "Docker", percent: 7, icon: <FaDocker className="text-blue-500" /> },
  { tech: "TypeScript", percent: 20, icon: <FaCss3Alt className="text-blue-600" /> },
  { tech: "Node.js", percent: 56, icon: <FaNodeJs className="text-green-500" /> },
  { tech: "UI/UX Design", percent: 85, icon: <FaFigma className="text-pink-500" /> },
  { tech: "Figma", percent: 95, icon: <FaFigma className="text-pink-500" /> },
  { tech: "DevOps", percent: 5, icon: <FaDocker className="text-blue-500" /> },
];

const SkillsSection = ({ dynamicData }: { dynamicData: any }) => {
  const [skills, setSkills] = useState(initialSkills);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const updatedSkills = initialSkills.map((skill) => {
      const updatedPercent = dynamicData?.[skill.tech];
      return {
        ...skill,
        percent: updatedPercent !== undefined ? updatedPercent : skill.percent,
      };
    });

    setSkills(updatedSkills);
  }, [dynamicData]);

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        width: `${skills[i].percent}%`,
        transition: { duration: 1, delay: i * 0.1 },
      }));
    }
  }, [inView, controls, skills]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="section-title group tracking-tight flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold relative overflow-hidden mb-15 -ml-5">
        <motion.span
          className="w-10 h-0.5 bg-foreground origin-left"
          whileHover={{ scaleX: 1.5 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        <motion.span
          className="relative inline-block"
          whileHover={{ y: -3, scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          SKILLS & EXPERTISE
          <motion.span
            className="absolute left-0 -bottom-1 w-full h-0.5 bg-foreground scale-x-0 origin-left"
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.span>
      </h2>

      <Card className="max-w-6xl mx-auto p-7 min-h-[675px] bg-secondary-gradient border border-border/30 shadow-lg -ml-3 mt-14">
        <div className="text-white" ref={ref}>
          <div className="flex items-center mb-6">
            <div className="w-2 h-6 bg-white mr-4"></div>
            <h3 className="text-xl font-bold">Technical Proficiency</h3>
          </div>
          <p className="text-gray-400 text-sm mb-8 text-left">
            Below are my proficiency levels in various technologies, based on my real-world experience, with the progress bars showing my expertise.
          </p>

          <div className="space-y-6">
            {skills.map(({ tech, percent, icon }, i) => (
              <div key={tech} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <motion.div whileHover={{ scale: 1.1 }} className="text-xl">
                      {icon}
                    </motion.div>
                    <span>{tech}</span>
                  </div>
                  <span className="text-gray-400">{percent}%</span>
                </div>
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gray-500 to-white rounded-full"
                    custom={i}
                    initial={{ width: 0 }}
                    animate={controls}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="mt-12 text-center text-gray-400 italic">
        <FaQuoteRight className="text-3xl md:text-4xl text-gray-600 mx-auto mb-6 subtleRotate" />
        <p className="text-xl md:text-2xl text-gray-400">"Don’t count the bugs, make the code count."</p>
        <p className="text-lg md:text-lg mt-4 text-blue-400 font-medium mb-5">— Me</p>
      </div>
    </div>
  );
};
export default SkillsSection;
