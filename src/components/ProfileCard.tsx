import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Languages, Briefcase, Rocket, Star } from 'lucide-react';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import me from '../assets/me.png';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProfileCard: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  return (
    <motion.div
      className="max-w-6xl mx-auto p-7 min-h-[675px] bg-secondary-gradient border border-border/30 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex flex-col md:flex-row gap-8" variants={itemVariants}>
        {/* Profile Image */}
        <motion.div className="flex-shrink-0" variants={itemVariants}>
          <div className="w-32 h-32 md:w-34 md:h-34 overflow-hidden rounded-xl relative ml-[-8px] bg-darkgray shadow-[0_0_25px_4px_rgba(0,150,255,0.2)]">
            <img
              src={me}
              alt="Chaitanya Shirsat"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-xl"
            />
          </div>
        </motion.div>

        {/* Profile Info */}
        <motion.div className="flex-1 flex flex-col justify-between text-left" variants={itemVariants}>
          {/* Available status */}
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-unavailable opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-unavailable"></span>
            </span>
            <span className="text-sm font-medium uppercase tracking-wider text-unavailable">Website in development</span>
          </div>

          {/* Name */}
          <h1 className="text-3xl md:text-3xl font-bold tracking-tight mb-20 text-white text-left">
            <Typewriter
              words={['CHAITANYA SHIRSAT']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={0}
            />
          </h1>

          {/* Tags */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 mt-6 ml-3 justify-start">
            {[
              { icon: <Globe className="h-4 w-4" />, label: 'India' },
              { icon: <Languages className="h-4 w-4" />, label: 'English & Hindi' },
              { icon: <Briefcase className="h-4 w-4" />, label: 'Software Engineer' },
              { icon: <Rocket className="h-4 w-4" />, label: 'Student' },
              { icon: <GraduationCap className="h-4 w-4" />, label: 'ITM Skills University' },
              { icon: <Star className="h-4 w-4" />, label: 'Good Boy' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer flex items-center space-x-3"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:translate-x-2">
                  <div className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-md flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    {React.cloneElement(item.icon, {
                      className: 'text-white group-hover:text-black transition-colors duration-300',
                    })}
                  </div>
                  <span className="text-base text-gray-400 group-hover:text-white transition-colors duration-300 text-left">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* About Me & Connect Sections */}
      <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left" variants={itemVariants}>
        {/* About Me */}
        <motion.section variants={itemVariants}>
          <h2 className="text-white text-1xl font-semibold mb-2 pb-2">ABOUT ME</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm a passionate designer and developer with 6+ years of experience creating beautiful, functional
            interfaces. I specialize in React.js, Tailwind CSS, and responsive design principles that deliver
            exceptional user experiences.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, watching anime, and experimenting with creative
            side projects. I believe in continuous learning and staying ahead of design trends to deliver innovative
            solutions to my clients.
          </p>
        </motion.section>

        {/* Connect */}
        <motion.section variants={itemVariants}>
          <h2 className="text-white text-1xl font-semibold mb-2 pb-2">CONNECT</h2>
          <div className="space-y-4">
            {[
              {
                platform: 'Twitter',
                username: '@ChaitanyaShirsat',
                icon: <FiTwitter />,
                link: 'https://twitter.com/ChaitanyaShirsat',
              },
              {
                platform: 'LinkedIn',
                username: '@chaitanyashirsat',
                icon: <FiLinkedin />,
                link: 'https://www.linkedin.com/in/chaitanyashirsat-dev/',
              },
              {
                platform: 'Github',
                username: '@chaitanyashirsat',
                icon: <FiGithub />,
                link: 'https://github.com/Chaitanya-Dev26',
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center bg-black bg-opacity-40 p-4 rounded-lg hover:bg-opacity-60 duration-300 border border-white border-opacity-0 hover:border-opacity-5 transform group-hover:translate-x-2 transition-transform"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setHoverItem(social.platform);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setHoverItem(null);
                }}
                variants={itemVariants}
              >
                <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">{social.platform}</div>
                  <div className="font-semibold">{social.username}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
