import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

interface EducationCardProps {
  title: string;
  institution: string;
  year: string;
  description: string;
  achievements?: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  institution,
  year,
  description,
  achievements = [],
}) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={400}
      scale={1.02}
      gyroscope={true}
      className="w-full"
    >
      <motion.div
        className="bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-md rounded-xl border border-white/10 p-5 text-white shadow-xl transition-all duration-300 group overflow-hidden"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 20px rgba(255,255,255,0.1)",
        }}
      >
        {/* Title + Year */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="font-bold text-lg mb-1 group-hover:scale-105 transition-transform duration-200">
              {title}
            </div>
            <div className="text-gray-400 text-sm">{institution}</div>
          </div>
          <div className="text-xs text-white/70 font-mono px-2 py-1 rounded-full bg-white/10 border border-white/20">
            {year}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-2">{description}</p>

        {/* Hidden Details on Hover */}
        {achievements.length > 0 && (
          <motion.div
            className="text-xs text-gray-400 mt-3 space-y-1"
            initial={{ height: 0, opacity: 0 }}
            whileHover={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-semibold text-white/70">Achievements:</div>
            <ul className="list-disc list-inside pl-1">
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </Tilt>
  );
};

export default EducationCard;
