"use client";

import { motion } from "framer-motion";

const skills = [
    "Python Modeling",
    "Data Analysis & Management",
    "Marine Renewable Energy",
    "Machine Learning (Scikit-Learn, TensorFlow)",
    "MATLAB & Numerical Simulation",
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 border-l-4 border-accent pl-6">
                        The Hybrid Profile
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                I don't just study the ocean; I model it. As an <span className="text-accent font-medium">Oceanography student at ITB</span>,
                                I combine physical science with Python-based numerical modeling to solve energy challenges.
                            </p>
                            <p>
                                My work bridges the gap between deep ocean science and data intelligence, leveraging machine learning to optimize marine energy solutions and predict environmental patterns.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-semibold text-white mb-6">Key Capabilities</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="px-4 py-2 bg-white/10 hover:bg-accent/20 border border-white/5 hover:border-accent/50 rounded-full text-sm text-gray-200 hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
