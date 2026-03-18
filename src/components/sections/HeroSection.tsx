// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 md:py-4">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeIn}
            >
              Sahil Ansari M.
            </motion.h1>

            <motion.p
              className="text-xl text-primary mb-4"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              Building <span className="font-bold">ScreenerAI</span>
              {/* <span className="font-bold">Rogue</span> other cool things */}
            </motion.p>
          </div>

          {/* Passport-sized image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-md"
          >
            <Image
              src="/profile2.png" // Replace with your image path
              alt="Manu Arora"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80px, 96px"
            />
          </motion.div>
        </div>

        <motion.p
          className="text-lg text-secondary-foreground"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Full Stack Software Engineer building SaaS products and web apps. Find
          me on{" "}
          <Link
            href="https://x.com/isahilansari"
            className="font-bold hover:underline text-blue-600"
            target="_blank"
          >
            X
          </Link>{" "}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
