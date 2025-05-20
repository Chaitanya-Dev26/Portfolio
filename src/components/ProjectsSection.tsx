
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "A responsive admin dashboard for e-commerce platforms with analytics and inventory management.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality.",
    tags: ["React", "TypeScript", "Redux"],
    link: "#"
  },
  {
    title: "Personal Finance Tracker",
    description: "Budget management application with expense tracking and visualization.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title">PROJECTS</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-border/50 bg-card">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
