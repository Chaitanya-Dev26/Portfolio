
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/50 py-4' : 'py-6'}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-3xl font-bold">Chaitanya.Dev</a>
        
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
