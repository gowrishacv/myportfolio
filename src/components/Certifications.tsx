import { motion } from "framer-motion";
import { Award, Globe } from "lucide-react";

const certifications = [
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    description:
      "Enterprise-level Azure architecture certification validating expertise in designing secure, scalable, and governed cloud platforms. Strong alignment with Azure Landing Zone design, governance, networking, and security architecture.",
    icon: "☁️",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    description:
      "Validates hands-on expertise in Infrastructure as Code using Terraform. Focused on building repeatable, auditable, and enterprise-ready Azure Landing Zones and platform foundations.",
    icon: "🏆",
  },
  {
    name: "Google Associate Cloud Engineer",
    issuer: "Google",
    description:
      "Demonstrates multi-cloud fundamentals and operational understanding of cloud platforms. Complements Azure specialization with cross-cloud architectural awareness.",
    icon: "🌐",
  },
];

const languages = [{ name: "English", level: "Professional Working" }];

const Certifications = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{cert.icon}</span>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      {cert.description && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Languages</h2>
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-secondary">
                      {lang.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
