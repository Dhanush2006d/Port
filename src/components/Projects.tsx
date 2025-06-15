
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A web application for managing tasks and boosting productivity. Built with a modern tech stack.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience and performance.",
    tags: ["Next.js", "Stripe", "GraphQL"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "A data visualization dashboard for analyzing complex datasets in real-time.",
    tags: ["D3.js", "Python", "Flask"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = ({ addToRefs }: { addToRefs: (el: HTMLElement | null) => void }) => {
  return (
    <section id="projects" ref={addToRefs} className="animated-element container mx-auto py-24 px-4 md:px-6">
      <h2 className="font-display text-4xl font-bold tracking-tighter sm:text-5xl">My Work</h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Here are some of the projects I'm proud to have worked on.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="font-display text-2xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;

