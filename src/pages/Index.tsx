import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import IntroAnimation from "../components/IntroAnimation"; // Adjust path if needed
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Timeline from "../components/Timeline";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LearningSection from "../components/LearningSection";

const greetings = [
  "Namaste!", // Hindi
  "Salam", // Arabic/Islamic
  "Bonjour", // French
  "nǐ hǎo", // Chinese
  "Hola", // Spanish
  "Konnichiwa", // Japanese
  "Hello" // English (last)
];

function useTextScramble(text, duration = 1000) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const queue = useRef([]);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const oldText = display;
    const length = Math.max(oldText.length, text.length);
    queue.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = text[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.current.push({ from, to, start, end });
    }
    frame.current = 0;
    let running = true;
    function update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = queue.current.length; i < n; i++) {
        let { from, to, start, end, char } = queue.current[i];
        if (frame.current >= end) {
          complete++;
          output += to;
        } else if (frame.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue.current[i].char = char;
          }
          output += `<span class='dud'>${char}</span>`;
        } else {
          output += from;
        }
      }
      setDisplay(output);
      if (complete === queue.current.length) {
        running = false;
      } else {
        frame.current++;
        raf.current = requestAnimationFrame(update);
      }
    }
    update();
    return () => {
      running = false;
      cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line
  }, [text]);

  return display;
}

function ScramblePreloader({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [scrambleText, setScrambleText] = useState(greetings[0]);
  const [scrambling, setScrambling] = useState(true);
  const scramble = useTextScramble(scrambleText);

  useEffect(() => {
    if (!show) return;
    if (!scrambling) {
      // Wait before starting scramble
      const breakTimeout = setTimeout(() => {
        setScrambleText(greetings[index]);
        setScrambling(true);
      }, 400); // 400ms break
      return () => clearTimeout(breakTimeout);
    } else {
      // After scramble, wait before next
      const timeout = setTimeout(() => {
        if (index < greetings.length - 1) {
          setIndex(i => i + 1);
          setScrambling(false);
        } else {
          setShow(false);
          setTimeout(onFinish, 600);
        }
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [index, show, scrambling, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="scramble-preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          style={{ pointerEvents: 'none' }}
        >
          <span
            className="scramble-text"
            style={{ color: '#fff', textShadow: '0 2px 16px #00cfff55', textTransform: 'none' }}
            dangerouslySetInnerHTML={{ __html: scramble }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Index = () => {
  const [dynamicData, setDynamicData] = useState<any>({});
  const [preloadDone, setPreloadDone] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("/api/languages/");
        const data = await response.json();
        setDynamicData(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    fetchGitHubData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground relative">
      <ScramblePreloader onFinish={() => setPreloadDone(true)} />
      {preloadDone && (
        <>
          <Navbar />
          <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-[#0a0a0a]">
            <div className="container px-4 py-16">
              <ProfileCard />
            </div>
          </section>
          <section id="education" className="py-15 px-4 bg-[#0a0a0a]">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center text-white tracking-tight">
                Education Journey
              </h2>
              <Timeline />
            </div>
          </section>
          <section id="message" className="py-20 px-4">
            <LearningSection />
          </section>
          <section id="projects" className="py-15 px-4">
            <ProjectsSection />
          </section>
          <section id="skills" className="py-15 px-4">
            <SkillsSection dynamicData={dynamicData} />
          </section>
          <section id="testimonials" className="py-15 px-4">
            <Testimonials />
          </section>
          <section id="contact" className="py-15 px-4">
            <ContactSection />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
