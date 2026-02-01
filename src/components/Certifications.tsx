import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    description:
      "Enterprise-scale Azure architecture. Secure, governed, and scalable platform design.",
    icon: "☁️",
  },
  {
    name: "Google Associate Cloud Engineer",
    issuer: "Google",
    description:
      "Multi-cloud fundamentals with practical cloud operations and deployment experience.",
    icon: "☁️",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    description:
      "Infrastructure as Code for repeatable, auditable, enterprise Azure platforms.",
    icon: "🛠️",
  },
];

const Certifications = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="h-full p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                {cert.description && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
