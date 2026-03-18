"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2Icon } from "lucide-react"; // Using Lucide-React for the checkmark icon

// Ensure you have lucide-react installed: npm install lucide-react

// Type definition for a changelog item
interface ChangelogItem {
  id: string;
  description: string;
  emoji?: string; // Optional emoji for visual flair
}

// Type definition for a year group
interface ChangelogYear {
  year: number;
  items: ChangelogItem[];
}

// Dummy data for the Life Changelog and Updates
const lifeChangelog: ChangelogYear[] = [
  {
    year: 2023,
    items: [
      { id: "2023-1", description: "300+ users on Algochurn �", emoji: "📈" },
      {
        id: "2023-2",
        description:
          "Algochurn crossed 300 users and I couldn't be any happier.",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        id: "2022-1",
        description: "Started working on Moonbeam 🤯",
        emoji: "🤯",
      },
      {
        id: "2022-2",
        description:
          "Started working on Moonbeam as a front-end developer. Building a chrome extension was the most fun and challenging part.",
      },
      {
        id: "2022-3",
        description: "Algochurn crosses 200 users 📈",
        emoji: "📈",
      },
      {
        id: "2022-4",
        description:
          "Algochurn is now helping 200+ registered users and 14,000+ monthly users.",
      },
      {
        id: "2022-5",
        description: "1,000+ Followers on Twitter 💥",
        emoji: "💥",
      },
      {
        id: "2022-6",
        description:
          "Crossed 1,000 mark on Twitter. You can help increase the count by following me. 😊",
        emoji: "😊",
      },
      {
        id: "2022-7",
        description: "Built and launched Algochurn 🧑‍💻",
        emoji: "🧑‍💻",
      },
      {
        id: "2022-8",
        description:
          "Built Algochurn, A platform to practice DS Algo along with front-end to ace your next technical interview.",
      },
      {
        id: "2022-9",
        description: "Promoted to Senior Software Engineer 🎉",
        emoji: "🎉",
      },
      {
        id: "2022-10",
        description:
          "Promoted to Senior Software Engineer - Worked on applications handling 20,000+ users per day. Working on Web, Mobile, and even TV applications. 🔥",
        emoji: "🔥",
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        id: "2021-1",
        description: "Built Tailwind Master Kit 🚀",
        emoji: "🚀",
      },
      {
        id: "2021-2",
        description:
          "Built Tailwind Master Kit - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // Add more 2021 items here as needed
    ],
  },
  // Add more years as needed
];

const LifeChangelog: React.FC = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Life Changelog and Updates
        </motion.h2>

        <div className="space-y-12">
          {lifeChangelog.map((yearGroup) => (
            <motion.div
              key={yearGroup.year}
              className="relative pl-6 md:pl-10 pb-8 last:pb-0"
              initial="hidden"
              animate="show"
              variants={containerVariants} // Stagger items within each year
            >
              {/* Vertical line timeline */}
              <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 rounded-full" />

              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white relative z-10 -left-6 md:-left-10 bg-gray-50 dark:bg-gray-900 pr-4"
                variants={itemVariants}
              >
                {yearGroup.year}
              </motion.h3>

              <ul className="space-y-4">
                {yearGroup.items.map((item) => (
                  <motion.li
                    key={item.id}
                    className="relative flex items-start gap-3"
                    variants={itemVariants}
                  >
                    {/* Icon for timeline point */}
                    <div className="absolute -left-6 md:-left-10 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-500 text-white flex-shrink-0 mt-1.5 md:mt-1.5">
                      <CheckCircle2Icon className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <p className="flex-1 text-lg text-gray-700 dark:text-gray-300">
                      {item.description}{" "}
                      {item.emoji && <span className="ml-1">{item.emoji}</span>}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeChangelog;
