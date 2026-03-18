"use client";

import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
// import { WhatsappIcon } from "@/components/icons/whatsapp"; // You'll need to create or import this

export function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Contact Information */}
        <motion.div variants={fadeIn}>
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <motion.div className="flex items-start gap-4" variants={fadeIn}>
              <Mail className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                className="w-full md:w-auto gap-2 bg-[#25D366] hover:bg-[#128C7E]"
              >
                <a
                  href="https://wa.me/6294410045"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Connect via WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeIn}>
          <form className="space-y-6">
            <motion.div className="space-y-2" variants={fadeIn}>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </motion.div>

            <motion.div className="space-y-2" variants={fadeIn}>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </motion.div>

            <motion.div className="space-y-2" variants={fadeIn}>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
