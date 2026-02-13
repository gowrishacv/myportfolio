import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import SkillIconsStrip from "@/components/SkillIconsStrip";

const CERT_TOOL_ICONS = "azure,terraform";

const certifications = [
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "GITAM Deemed to be University",
    year: "2020",
    location: "Visakhapatnam, India",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Tamil Nadu Open University",
    year: "2014",
    location: "India",
  },
];

const Certifications = () => {
  return (
    <section id="education" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8">
            <SkillIconsStrip
              icons={CERT_TOOL_ICONS}
              perlineMobile={4}
              perlineDesktop={8}
              imageAlt="Certification tooling icons"
              className="opacity-95"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-card/70 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-4">
                {education.map((item) => (
                  <div
                    key={`${item.degree}-${item.year}`}
                    className="rounded-xl border border-border bg-background/60 p-4"
                  >
                    <p className="font-medium text-foreground">{item.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {item.location} · {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="rounded-xl border border-border bg-background/60 p-4"
                  >
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
