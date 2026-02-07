import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
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
