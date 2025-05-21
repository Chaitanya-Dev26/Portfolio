import { Zap } from 'lucide-react';

type TagProps = {
  label: string;
  color: string;
};

const Tag = ({ label, color }: TagProps) => (
  <span className="text-sm px-5 py-1 rounded-full flex items-center gap-2 bg-[#1e1e1e]">
    <span
      className="w-2 h-2 rounded-full"
      style={{ backgroundColor: color }}
    />
    {label}
  </span>
);

const LearningSection = () => {
  return (
    <div
      className="group bg-black text-white p-6 rounded-2xl flex items-center gap-6 shadow-lg w-full min-h-[120px] border border-gray
                 transition-transform duration-500 ease-in-out
                 hover:scale-[1.03]
                 hover:shadow-[0_0_15px_rgba(128,128,128,0.3)]"
    >
      {/* Icon container with group for hover animation */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#bbbbbb] flex items-center justify-center">
        <Zap size={28} className="text-black group-hover:animate-tilt transition-transform duration-300" />
      </div>
      <div>
        <p className="text-gray-400 text-md text-left">Currently expanding my knowledge in</p>
        <h2 className="text-xl font-semibold mt-1 text-left">
          Building expertise in Python and Machine Learning
        </h2>
        <div className="flex flex-wrap gap-2 mt-3">
          <Tag label="Python" color="#3572A5" />
          <Tag label="Machine Learning" color="#FFC107" />
          <Tag label="NumPy" color="#9C27B0" />
          <Tag label="Pandas" color="#4CAF50" />
        </div>
      </div>
    </div>
  );
};

export default function LearningSectionWrapper() {
  return (
    <div className="flex items-center justify-center px-4 py-1">
      <div className="w-full max-w-6xl">
        <LearningSection />
      </div>
    </div>
  );
}
