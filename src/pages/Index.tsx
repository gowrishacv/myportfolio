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
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 px-4">
        <TopNavGlass />
      </div>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
