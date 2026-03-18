"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky bg-white/75 dark:bg-black/75 transition: all 400ms cubic-bezier(0.68, -0.55, 0.27, 1.55) top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            <Image
              src="/profile2.png"
              height={240}
              width={240}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <ModeToggle />
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
      </div>
    </header>
  );
}
