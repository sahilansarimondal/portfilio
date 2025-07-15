"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Sahil A.
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.path}
              asChild
              variant={pathname === item.path ? "secondary" : "ghost"}
            >
              <Link href={item.path}>{item.name}</Link>
            </Button>
          ))}
        </nav>

        <ModeToggle />
      </div>
    </header>
  );
}
