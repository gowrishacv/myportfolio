import { motion } from "framer-motion";
import { Award, GraduationCap, History } from "lucide-react";
import { useTranslation } from "react-i18next";

const timeline = [
  {
    years: "2023 - Present",
    role: "Cloud Architect",
    company: "Santander Deutschland",
    location: "Germany",
  },
  {
    years: "2022 - 2023",
    role: "Azure Cloud Architect",
    company: "Sopra Steria",
    location: "India",
  },
  {
    years: "2021 - 2022",
    role: "Associate Technical Lead",
    company: "Tech Mahindra",
    location: "India",
  },
  {
    years: "2017 - 2021",
    role: "Cloud Consultant",
    company: "BrainScale Inc",
    location: "India",
  },
  {
    years: "2015 - 2017",
    role: "Cloud Engineer",
    company: "NetApp",
    location: "India",
  },
];

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
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Tamil Nadu Open University",
    year: "2014",
  },
];

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="journey" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            career --timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Journey & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Career progression across architecture roles, plus academic background and key certifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-6xl rounded-3xl border border-border/70 bg-card/85 p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-foreground">
            <History className="h-5 w-5 text-primary" />
            <h3 className="font-mono text-lg font-semibold">cat ./career/timeline.tsv</h3>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border/70">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead className="bg-background/80 text-left">
                <tr>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Years
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Role
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Company
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((entry) => (
                  <tr key={`${entry.company}-${entry.years}`} className="border-t border-border/70">
                    <td className="px-4 py-3 font-medium text-foreground">{entry.years}</td>
                    <td className="px-4 py-3 text-foreground/90">{entry.role}</td>
                    <td className="px-4 py-3 text-muted-foreground">{entry.company}</td>
                    <td className="px-4 py-3 text-muted-foreground">{entry.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mx-auto mt-6 grid max-w-6xl gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/70 bg-card/85 p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">{t("education.certifications")}</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-xl border border-border/70 bg-background/75 p-4"
                >
                  <p className="font-medium text-foreground">{cert.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.48 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/70 bg-card/85 p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">{t("education.education")}</h3>
            </div>
            <div className="space-y-3">
              {education.map((item) => (
                <div
                  key={`${item.degree}-${item.year}`}
                  className="rounded-xl border border-border/70 bg-background/75 p-4"
                >
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.year}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
