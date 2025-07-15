import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
