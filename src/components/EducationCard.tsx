import React from "react";
import Tilt from "react-parallax-tilt";
import { FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

interface EducationEntry {
  title: string;
  institution: string;
  year: string;
  description: string;
  achievements?: string[];
}

const EducationCard: React.FC<EducationEntry> = ({
  title,
  institution,
  year,
  description,
  achievements,
}) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="all"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="transition-transform duration-300 ease-in-out transform hover:scale-[1.03]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-[520px] bg-secondary-gradient text-white rounded-2xl p-6 shadow-md border border-gray-800 
                    group transition-all duration-500 ease-in-out hover:shadow-lg overflow-hidden text-left"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-xs bg-darkgray text-gray-300 border border-gray-600 px-2 py-1 rounded-full">{year}</span>
        </div>

        {/* Institution with icon */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <FaUniversity className="text-gray-400" />
          <p>{institution}</p>
        </div>

        <p className="mt-3 text-gray-300">{description}</p>

        {/* Achievements */}
        <div
          className="mt-4 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out 
                      group-hover:max-h-64 group-hover:opacity-100"
        >
          <hr className="my-3 border-t border-gray-600" />
          <h4 className="font-semibold text-sm mb-2 text-gray-400">Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
            {achievements?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default EducationCard;
