import { motion } from "framer-motion";

const focusAreas = [
  "Azure Landing Zone Design & Governance",
  "Cloud Migration Strategy & Execution",
  "DevOps Automation & Cost Optimization",
  "Infrastructure as Code (Terraform & Bicep)",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Focused on <span className="gradient-text">secure cloud</span>
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-3">
            <p>
              I’m a Cloud Solutions Architect focused on secure, scalable, and
              compliant Azure platforms for regulated environments.
            </p>
            <p>I care about governance, automation, and measurable outcomes.</p>
            <p>
              I translate business needs into practical reference architectures
              and repeatable delivery.
            </p>
            <p>
              Open to Cloud Solutions Architect and Cloud Security roles in
              Europe (hybrid/remote).
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-10 rounded-2xl border border-border bg-card/70 p-6"
        >
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Focus Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs text-muted-foreground border border-border bg-background/40"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
