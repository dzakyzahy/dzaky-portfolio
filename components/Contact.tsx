"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Ready to dive into the next innovation?
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Let's collaborate on sustainable energy solutions and data-driven oceanography.
                    </p>

                    <div className="flex justify-center gap-6 mb-16">
                        <a
                            href="https://www.linkedin.com/in/dzaky-zahy-rabbani-04a9a320a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 hover:bg-accent hover:text-white text-gray-300 rounded-full transition-all duration-300 border border-white/10 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/dzakyzahy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 hover:bg-accent hover:text-white text-gray-300 rounded-full transition-all duration-300 border border-white/10 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="mailto:dzakyzr3@gmail.com"
                            className="p-4 bg-white/5 hover:bg-accent hover:text-white text-gray-300 rounded-full transition-all duration-300 border border-white/10 hover:scale-110"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-8" />

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Dzaky Zahy Rabbani. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
