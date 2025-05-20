import React from "react";
import Tilt from "react-parallax-tilt";

const EducationCard = ({ title, institution, year, description, achievements }: any) => {
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
      <div className="w-[520px] bg-secondary-gradient text-white rounded-2xl p-6 shadow-md border border-gray-800 
                      group transition-all duration-500 ease-in-out hover:shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm bg-darkgray text-gray-300 border border-gray-600 px-3 py-1 rounded-full">{year}</span>
        </div>

        <p className="text-sm text-gray-400">{institution}</p>
        <p className="mt-3 text-gray-300">{description}</p>

        {/* Achievements with animation */}
        <div
          className="mt-4 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out 
                     group-hover:max-h-64 group-hover:opacity-100"
        >
          <hr className="my-3 border-t border-gray-600" />
          <h4 className="font-semibold text-sm mb-2 text-gray-400">Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
            {achievements?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Tilt>
  );
};

export default EducationCard;
