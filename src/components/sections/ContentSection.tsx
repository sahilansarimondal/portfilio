// components/ContentSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ContentSection = () => {
  const blogs = [
    {
      title:
        "Ace the Javascript Interview - Practical questions to help you clear your next interview",
      views: "17,617 views",
    },
    {
      title: "Free portfolio website template that gets you hired in 2021",
      views: "6,007 views",
    },
  ];


  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 md:py-4">
      {/* Recent Blogs Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="mb-16"
      >
        <motion.h2 className="text-2xl font-bold mb-6" variants={fadeIn}>
          Recent Blogs
        </motion.h2>

        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -2 }}
              className="group"
            >
              <Link
                href="#"
                className="block p-6 bg-secondary rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-500 mt-2">{blog.views}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="mt-6">
          <Link
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            See All Blogs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.section>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-gray-200 my-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ContentSection;
