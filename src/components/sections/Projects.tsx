import { HoverEffect } from "../ui/card-hover-effect";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping experience with payment integration",
      tech: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task board with real-time updates",
      tech: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecasts with interactive maps",
      tech: ["TypeScript", "Chart.js", "Weather API"],
    },
    {
      title: "Screener AI",
      description: "Real-time weather forecasts with interactive maps",
      tech: ["TypeScript", "Chart.js", "Weather API"],
    },
  ];

  return (
    <section id="projects" className="py-4">
      <h2 className="text-3xl font-bold px-4 py-4">My Projects</h2>

      <HoverEffect items={projects} />

      {/* <div className="grid md:grid-cols-2  gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader className="pb-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-muted rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
              <Button size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}
    </section>
  );
}
