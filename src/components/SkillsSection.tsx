import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaDocker, FaNodeJs, FaFigma, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const skills = [
  { tech: "React.js", percent: 90, icon: <FaReact className="text-cyan-400" /> },
  { tech: "JavaScript", percent: 85, icon: <FaJsSquare className="text-yellow-400" /> },
  { tech: "Docker", percent: 65, icon: <FaDocker className="text-blue-500" /> },
  { tech: "TypeScript", percent: 70, icon: <FaCss3Alt className="text-blue-600" /> },
  { tech: "Node.js", percent: 60, icon: <FaNodeJs className="text-green-500" /> },
  { tech: "UI/UX Design", percent: 85, icon: <FaFigma className="text-pink-500" /> },
  { tech: "Figma", percent: 95, icon: <FaFigma className="text-pink-500" /> },
  { tech: "DevOps", percent: 50, icon: <FaDocker className="text-blue-500" /> },
];

const SkillsExpertise = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        width: `${skills[i].percent}%`,
        transition: { duration: 1, delay: i * 0.1 },
      }));
    }
  }, [controls, inView]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Heading above the card */}
      <h2 className="section-title group flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold relative overflow-hidden mb-12 -ml-5">
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

      {/* Card container */}
      <Card className="max-w-6xl mx-auto p-7 min-h-[675px] bg-secondary-gradient border border-border/30 shadow-lg">
        <div className="text-white" ref={ref}>
        {/* Technical Proficiency Heading with Vertical Line */}
          <div className="flex items-center mb-6">
            <div className="w-2 h-6 bg-white mr-4"></div>
            <h3 className="text-xl font-bold">Technical Proficiency</h3>
          </div>
          <p className="text-gray-400 text-sm mb-8">
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
    </div>
  );
};

export default SkillsExpertise;
