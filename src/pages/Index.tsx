import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Profile />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
};

export default Index;
