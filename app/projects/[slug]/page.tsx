import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Waves, Zap, BarChart3, Calendar, Tag } from "lucide-react";

const iconMap: Record<string, any> = {
    Waves: <Waves className="w-16 h-16 text-accent mb-6" />,
    Zap: <Zap className="w-16 h-16 text-emerald-400 mb-6" />,
    BarChart3: <BarChart3 className="w-16 h-16 text-green-400 mb-6" />,
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-primary text-foreground py-24 px-4">
            <div className="container mx-auto max-w-4xl">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-gray-400 hover:text-accent mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Projects
                </Link>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 pointer-events-none`} />

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                {iconMap[project.iconName]}
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5">
                                            <Tag size={14} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {project.stats.map((stat, index) => (
                                <div key={index} className="bg-black/20 p-6 rounded-2xl border border-white/5 text-center">
                                    <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-2xl font-semibold text-white mb-4">Project Overview</h3>
                            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                                {project.fullDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
