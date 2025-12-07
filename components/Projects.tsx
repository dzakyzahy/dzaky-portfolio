"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Waves, Zap, BarChart3 } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Ocean WaveTrap Simulation",
        description: "Acoustic wave-based microplastic collector system for Indonesian waters. Simulated efficiency using Python.",
        tags: ["Oceanography", "Python", "Simulation", "Sustainability"],
        icon: <Waves className="w-12 h-12 text-accent mb-4" />,
        size: "large", // col-span-2
        gradient: "from-blue-900/50 to-cyan-900/50",
    },
    {
        id: 2,
        title: "Pertamina Geothermal Energy",
        description: "Implemented Machine Learning models to optimize geothermal energy operations in Jakarta Pusat.",
        tags: ["MachineLearning", "Energy", "Pertamina"],
        icon: <Zap className="w-12 h-12 text-yellow-400 mb-4" />,
        size: "medium",
        gradient: "from-orange-900/50 to-red-900/50",
    },
    {
        id: 3,
        title: "Predictive Data Analysis",
        description: "Complex data processing and visualization case studies (Sales/Pricing Models).",
        tags: ["DataVisualization", "Analytics", "BI"],
        icon: <BarChart3 className="w-12 h-12 text-green-400 mb-4" />,
        size: "medium",
        gradient: "from-emerald-900/50 to-teal-900/50",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-primary relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of work bridging numerical modeling, machine learning, and ocean science.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-accent/30 transition-all duration-500 ${project.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start">
                                    {project.icon}
                                    <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-accent transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
