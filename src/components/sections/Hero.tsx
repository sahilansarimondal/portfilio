import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center py-16">
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-75 blur"></div>
        <div className="relative bg-background rounded-full p-1">
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full p-1">
            <div className="bg-background rounded-full w-24 h-24">
              <Image
                src="/profile2.png"
                height={240}
                width={240}
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mt-8">
        Hi, I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Sahil
        </span>
      </h1>
      <h2 className="text-xl md:text-2xl mt-4 text-muted-foreground">
        Full Stack Developer
      </h2>

      <p className="max-w-2xl mt-6 text-lg text-muted-foreground">
        I build modern web applications with React, Node.js, and TypeScript.
      </p>

      <div className="flex gap-4 mt-8">
        <Button>View Projects</Button>
        <Button variant="secondary">Contact Me</Button>
      </div>

      <div className="flex gap-4 mt-8">
        <Button variant="outline" size="icon">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Mail className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-16 animate-bounce">
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
}
