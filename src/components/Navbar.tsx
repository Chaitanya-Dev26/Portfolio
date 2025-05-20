import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border/50 py-4">
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-black tracking-tighter flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => { setIsHovering(true); setHoverItem('Home'); }}
          onMouseLeave={() => { setIsHovering(false); setHoverItem(null); }}
        >
          <span style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold" }}>
            <Typewriter
              words={["Chaitanya", "Chaitanya.Dev"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <Button className="bg-white text-background hover:bg-white/90 font-medium">
          Resume
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
