import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import TopNavGlass from "@/components/TopNavGlass";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed inset-x-0 top-[calc(env(safe-area-inset-top)+1rem)] z-40 px-4 flex justify-center">
        <TopNavGlass />
      </div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
};

export default Index;
