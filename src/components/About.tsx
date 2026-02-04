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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Architecture leadership across modernization, landing zones,
            governance, and migration strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I’m a Cloud Solutions Architect specializing in Microsoft Azure,
              with 14+ years in IT and 9+ years in cloud. I design secure,
              scalable, and cost-efficient Azure platforms for regulated
              environments where governance and auditability are non-negotiable.
            </p>
            <p>
              At Santander Deutschland, I lead Azure architecture across cloud
              modernization, Landing Zone implementation, and migration
              planning. I translate complex business, security, and compliance
              requirements into clear target architectures, reference designs,
              and production-ready build plans. I work closely with engineering,
              security, and stakeholders to ensure governance and delivery move
              together.
            </p>
            <p>
              Based in the Greater Düsseldorf area. Open to Azure Cloud
              Architect, Platform Architect, and Cloud Transformation roles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-2">Core Strengths</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise Azure architecture built through real-world platform
              design, governance, and delivery
            </p>
            <ul className="space-y-4">
              {coreStrengths.map((item) => (
                <li key={item.title} className="flex flex-col">
                  <span className="font-medium text-foreground">
                    {item.title}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Primary Focus Areas
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-10 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item) => (
              <div key={`${item.degree}-${item.year}`} className="space-y-1">
                <p className="font-medium text-foreground">{item.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {item.institution}
                </p>
                <p className="text-sm text-muted-foreground">
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
