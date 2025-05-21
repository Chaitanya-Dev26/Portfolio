import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Check, Loader } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Integrated Healthcare Platform",
    description: "A hackathon project to simplify outpatient care with doctor search, teleconsultation, lab bookings, and health profile management.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    link: "#",
    status: "Completed",
    category: "Web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    features: ["Real-time analytics", "Inventory tracking", "Sales reporting", "User management"]
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality.",
    tags: ["React", "TypeScript", "Redux"],
    link: "#",
    status: "In Progress",
    category: "Web",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    features: ["Drag-and-drop interface", "Task prioritization", "Deadline tracking", "Team collaboration"]
  },
  {
    title: "Personal Finance Tracker",
    description: "Budget management application with expense tracking and visualization.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
    status: "Completed",
    category: "Web",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    features: ["Expense categorization", "Budget planning", "Financial insights", "Interactive reports"]
  },
  {
    title: "AI-Powered Content Generator",
    description: "Generate high-quality content with the help of machine learning algorithms.",
    tags: ["Python", "TensorFlow", "NLP"],
    link: "#",
    status: "In Progress",
    category: "AI",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    features: ["Text generation", "Topic suggestions", "SEO optimization", "Multi-language support"]
  },
  {
    title: "UX Design System",
    description: "Complete design system with reusable components for consistent user experiences.",
    tags: ["Figma", "Sketch", "UI Components"],
    link: "#",
    status: "Completed",
    category: "Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    features: ["Component library", "Design tokens", "Documentation", "Accessibility guidelines"]
  }
];

const categories = ["All", "Web", "Design", "AI"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (hoveredCard === index) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
    }
  };

  return (
    <section id="projects" className="py-16 relative bg-background/90">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="section-title group flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold relative overflow-hidden">
                <motion.span
                  className="w-10 h-0.5 bg-foreground origin-left"
                  whileHover={{ scaleX: 1.5 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <motion.span
                  className="relative inline-block"
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  FEATURED PROJECTS
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-foreground scale-x-0 origin-left"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-300 ${
                      activeFilter === category
                        ? "bg-white text-black"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    setMousePosition({ x: 0, y: 0 });
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                >
                  <Card
                    className={`border-border/50 bg-card h-full p-6 transition-all duration-300 bg-secondary-gradient - ${
                      hoveredCard === index ? 'scale-[1.05] shadow-xl' : 'shadow-md'
                    }`}
                    style={{
                      transform: hoveredCard === index
                        ? `perspective(1000px) rotateX(${mousePosition.y / 30}deg) rotateY(${-mousePosition.x / 30}deg)`
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                    }}
                  >
                    <div className="aspect-video w-full bg-black/70 relative overflow-hidden rounded-lg group transition-transform duration-500 ease-in-out transform-gpu">
                      <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300 will-change-transform filter grayscale transition-filter duration-700 ease-in-out group-hover:grayscale-0 group-hover:delay-200"
                          style={{ willChange: 'transform' }}
                        />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`text-xs ${
                            project.status === "In Progress"
                              ? "bg-destructive text-white hover:bg-destructive/80"
                              : "bg-available text-white hover:bg-available/80"
                          } flex items-center gap-1`}
                        >
                          {project.status === "In Progress" ? (
                            <Loader className="h-3 w-3 animate-spin" />
                          ) : (
                            <Check className="h-3 w-3" />
                          )}
                          {project.status}
                        </Badge>
                      </div>
                      <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={hoveredCard === index ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Button
                          className="bg-black/70 text-white px-6 py-6 rounded-lg shadow-md border-none hover:bg-black transition duration-300 text-base"
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <Github className="w-7 h-7" />
                            View Code
                          </a>
                        </Button>
                      </motion.div>

                    </div>
                    <div className="mt-4 ml-0">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardHeader className="pl-0 pt-2">
                      <CardTitle className="text-xl ml-1">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground ml-1">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pl-0 pt-2">
                      <div className="mb-4 ml-1">
                        <div className="font-semibold uppercase tracking-wide text-xs mb-2 ml-0">TECH STACK</div>
                        <div className="flex gap-2 flex-wrap ml-0">
                          {project.tags.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <Separator className="my-4 opacity-50" />
                      <div className="mt-4 ml-0">
                        <div className="font-semibold uppercase tracking-wide text-xs mb-2 text-muted-foreground ml-1">
                          KEY FEATURES
                        </div>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-1">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <a
                href="https://github.com/Chaitanya-Dev26/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-10 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-zinc-900 via-zinc-800 to-black shadow-md ring-1 ring-white/10 hover:ring-white/20 transition duration-300 overflow-hidden group"
              >
                <span className="flex items-center gap-2">
                  VIEW ALL PROJECTS

                  {/* GitHub icon (appears on hover) */}
                  <span className="inline-block opacity-0 transform translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg
                      className="w-4 h-4 fill-white"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.604-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.554 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </span>

                  {/* Arrow (animated) */}
                  <span className="inline-block animate-arrow-move">→</span>
                </span>

                {/* Shine effect */}
                <span className="absolute inset-0">
                  <span className="absolute left-[-75%] top-0 h-full w-[30%] bg-white opacity-10 blur-sm transform skew-x-[-20deg] animate-shine-reverse group-hover:animate-shine" />
                </span>
              </a>
            </div>

          {/* Showing projects count at the bottom */}
            <div className="text-center text-sm text-muted-foreground mb-4">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;