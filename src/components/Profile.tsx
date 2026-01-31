import { motion } from "framer-motion";
import { FileDown, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    label: "Cloud focus",
    value: "9+ years",
  },
  {
    label: "Delivery",
    value: "Global enterprises",
  },
  {
    label: "Specialty",
    value: "Azure governance",
  },
];

const Profile = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Profile snapshot</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build confidence with a{" "}
              <span className="gradient-text">clear, shareable profile</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Share your story with a sleek one-page website, highlight your
              strengths, and provide a downloadable PDF of your LinkedIn
              profile. Host the page on GitHub Pages and share the link anywhere
              you apply.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <FileDown className="w-4 h-4 mr-2" />
                  Download LinkedIn PDF
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  View LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="text-2xl font-semibold">{item.value}</p>
              </motion.div>
            ))}
            <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground mb-2">
                Hosting tip
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Upload your LinkedIn PDF as <span className="text-foreground font-medium">public/resume.pdf</span>{" "}
                so the download button works on GitHub Pages.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
