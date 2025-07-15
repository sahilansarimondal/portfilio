import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        Hi! I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Sahil
        </span>
      </h1>
      <h2 className="text-xl md:text-2xl mt-4 text-muted-foreground">
        Building performant, full-stack applications
      </h2>

      <p className="max-w-2xl mt-6 text-lg text-muted-foreground">
        Expert in Next.js, tRPC, Edge Functions, Docker, CI/CD and Auto Scaling
        Groups Groups.
      </p>

      <div className="flex gap-4 mt-8">
        <Link href={"#projects"}>
          <Button variant="secondary" className=" cursor-pointer">
            View Projects
          </Button>
        </Link>
        <Link href={"#contact"}>
          <Button className=" cursor-pointer">Contact Me</Button>
        </Link>
      </div>

      <div className="flex gap-4 mt-8">
        <Link href={"https://github.com/sahilansarimondal"}>
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Github className="h-5 w-5" />
          </Button>
        </Link>
        <Link href={"https://www.linkedin.com/in/sahil-ansari-mondal"}>
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Linkedin className="h-5 w-5" />
          </Button>
        </Link>

        {/* have to add direct main option */}
        {/* <Link href={"#contact"}>
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Mail className="h-5 w-5" />
          </Button>
        </Link> */}
        <Link href="https://x.com/iSahilAnsari">
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Twitter className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="mt-16 animate-bounce">
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
}
