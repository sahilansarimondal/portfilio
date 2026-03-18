import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LifeChangelog from "@/components/sections/LifeChangeLog";

export default function Home() {
  return (
    <main className="max-w-4xl w-full bg-white dark:bg-black mx-auto  px-4">
      <Navbar />
      <HeroSection />
      {/* <ContentSection /> */}
      <Projects />
      <LifeChangelog />
      <Contact />
      <Footer />
    </main>
  );
}
