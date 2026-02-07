import { motion } from "framer-motion";

const coreStrengths = [
  {
    title: "Enterprise Landing Zones & Governance",
    detail:
      "Architecting enterprise-scale Azure foundations with a focus on security, compliance, and scalable governance using Management Groups, Azure Policy, and robust RBAC models.",
  },
  {
    title: "Cloud Migration & Modernization",
    detail:
      "Developing comprehensive migration strategies and executing seamless transitions of on-premise workloads to Azure, including lift-and-shift, re-platforming, and application modernization.",
  },
  {
    title: "DevOps, IaC & Cost Optimization",
    detail:
      "Championing DevOps culture through CI/CD automation with Azure DevOps and GitHub Actions. Driving efficiency and cost savings via Infrastructure as Code (Terraform) and FinOps best practices.",
  },
];

const focusAreas = [
  "Azure Landing Zone Design & Governance",
  "Cloud Migration Strategy & Execution",
  "DevOps Automation & Cost Optimization",
  "Infrastructure as Code (Terraform & Bicep)",
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

const highlights = [
  { label: "Years in IT", value: "14+" },
  { label: "Years in Cloud", value: "9+" },
  { label: "Focus", value: "Regulated Environments" },
];

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Designing <span className="gradient-text">Enterprise Azure</span>
            <span className="text-foreground"> Platforms</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Architecture leadership across modernization, landing zones,
            governance, and migration strategy for secure, scalable cloud
            transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-5 text-center"
            >
              <div className="text-2xl font-semibold text-foreground">
                {item.value}
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold mb-3">Profile</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I’m a Cloud Solutions Architect specializing in Microsoft
                  Azure, with 14+ years in IT and 9+ years in cloud. I design
                  secure, scalable, and cost-efficient Azure platforms for
                  regulated environments where governance and auditability are
                  non-negotiable.
                </p>
                <p>
                  At Santander Deutschland, I lead Azure architecture across
                  cloud modernization, Landing Zone implementation, and
                  migration planning. I translate complex business, security,
                  and compliance requirements into clear target architectures,
                  reference designs, and production-ready build plans.
                </p>
                <p>
                  Based in the Greater Düsseldorf area. Open to Azure Cloud
                  Architect, Platform Architect, and Cloud Transformation roles.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Primary Focus Areas
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Core Strengths</h3>
            <div className="space-y-5">
              {coreStrengths.map((item) => (
                <div key={item.title} className="space-y-2">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                  <div className="h-px bg-border/60" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-12"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((item) => (
              <div
                key={`${item.degree}-${item.year}`}
                className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6"
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
