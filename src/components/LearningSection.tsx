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
      className="group bg-black text-white p-6 rounded-2xl flex items-center gap-6 shadow-lg w-full min-h-[120px] border border-gray-800
                 transition-transform duration-500 ease-in-out
                 hover:scale-[1.03]
                 hover:shadow-[0_0_15px_rgba(128,128,128,0.3)]"
    >
      {/* Icon container with group for hover animation */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#bbbbbb] flex items-center justify-center">
        <Zap size={28} className="text-black group-hover:animate-tilt transition-transform duration-300" />
      </div>
      <div>
        <p className="text-gray-400 text-md">Currently expanding my knowledge in</p>
        <h2 className="text-xl font-semibold mt-1">
          Advanced Machine Learning, Cloud Architecture & Web3
        </h2>
        <div className="flex flex-wrap gap-2 mt-3">
          <Tag label="TensorFlow" color="#28C76F" />
          <Tag label="AWS Solutions" color="#0091ff" />
          <Tag label="Smart Contracts" color="#a855f7" />
          <Tag label="Blockchain" color="#facc15" />
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
