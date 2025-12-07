import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-foreground selection:bg-accent selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
