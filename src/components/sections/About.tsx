import { Braces, ServerCog } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function About() {
  const skills = [
    "Next.js",
    "tRPC",
    "Server Components",
    "Tailwind CSS",
    "Prisma/Drizzle",
    "Docker",
    "CI/CD",
    "ASG",
  ];

  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">My Journey</h3>
          <p className="text-muted-foreground mb-4">
            I&apos;m a passionate developer with 5+ years of experience building
            scalable web applications. I specialize in creating performant,
            accessible, and responsive user interfaces.
          </p>
          <p className="text-muted-foreground">
            When I&apos;m not coding, you can find me contributing to
            open-source projects, writing technical articles, or exploring new
            web technologies.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-primary">
            <CardHeader className="flex flex-row items-center gap-3">
              <Braces className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Full-Stack Development</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Creating responsive, SEO Friendly, performant SaaS and Web Apps
                with modern Next.js ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader className="flex flex-row items-center gap-3">
              <ServerCog className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">DevOps </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Simplifying complex deployments with battle-tested CI/CD,
                Docker, and cloud-native strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
