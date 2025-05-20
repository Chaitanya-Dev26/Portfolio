import React from "react";
import EducationCard from "./EducationCard";

interface EducationEntry {
  title: string;
  institution: string;
  year: string;
  description: string;
  achievements?: string[];
}

const educationData: EducationEntry[] = [
  {
    title: "Matriculation",
    institution: "D.A.V Public Schools",
    year: "2019 – 2021",
    description: "Completed with Science stream.",
    achievements: [
      "Represented school in zonal football tournaments.",
      "Scored 91% overall, consistently top 5 in class.",
    ],
  },
  {
    title: "Intermediate",
    institution: "D.A.V Public School",
    year: "2021 – 2023",
    description: "Specialized in Physics, Chemistry and Mathematics with high distinction.",
    achievements: [
      "Represented school in zonal football tournaments.",
      "Scored 91% overall, consistently top 5 in class.",
    ],
  },
  {
    title: "Bachelor's Degree",
    institution: "ITM Skills University",
    year: "2023 – Present",
    description:
      "Computer Science and Engineering, specializing in AI & Machine Learning.",
    achievements: ["Hackathon finalist 2025.", "Maintaining 8.5+ GPA."],
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative py-16">
      {/* Center timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-600" />

      <div className="flex flex-col gap-20">
        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className="relative flex items-center justify-between">
              {/* Left side */}
              {isLeft ? (
                <>
                  <div className="w-1/2 flex justify-end pr-8">
                    <EducationCard {...edu} />
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white bg-black text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="w-1/2" />
                </>
              ) : (
                <>
                  <div className="w-1/2" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white bg-black text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start pl-8">
                    <EducationCard {...edu} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;