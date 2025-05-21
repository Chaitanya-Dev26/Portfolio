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

// Project data with categories and images
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

// Filter categories
const categories = ["All", "Web", "Design", "AI"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Filter projects based on active category
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
            {/* Section Header */}
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


              {/* Category Filters */}
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

            {/* Projects Grid */}
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
                    className={`border-border/50 bg-card h-full p-6 transition-all duration-300 bg-secondary-gradient ${
                      hoveredCard === index ? 'scale-[1.05] shadow-xl' : 'shadow-md'
                    }`}
                    style={{
                      transform: hoveredCard === index
                        ? `perspective(1000px) rotateX(${-mousePosition.y / 12}deg) rotateY(${mousePosition.x / 12}deg)`
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                    }}
                  >
                    {/* Project Image with overlay */}
                    <div className="aspect-video w-full bg-black/70 relative overflow-hidden rounded-lg group transition-transform duration-500 ease-in-out transform-gpu">
                      <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300 will-change-transform filter grayscale transition-filter duration-700 ease-in-out group-hover:grayscale-0 group-hover:delay-200"
                          style={{ willChange: 'transform' }}
                        />
                      </div>

                      {/* Status Badge */}
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

                      {/* View Code Button */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredCard === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Button
                          className="bg-black/80 text-white px-5 py-2 rounded-lg shadow-md border-none hover:bg-black transition duration-300"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="w-5 h-5" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Category Badge ABOVE heading */}
                    <div className="mt-4 ml-0">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Card Header with no left padding/margin */}
                    <CardHeader className="pl-0 pt-2">
                      <CardTitle className="text-xl ml-1">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground ml-1">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pl-0 pt-2">
                      {/* Tech Stack */}
                      <div className="mb-4 ml-1">
                        <div className="font-semibold uppercase tracking-wide text-xs mb-2 ml-0">TECH STACK</div>
                        <div className="flex gap-2 flex-wrap ml-0">
                          {project.tags.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>

                      <Separator className="my-4 opacity-50" />

                      {/* Key Features */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
