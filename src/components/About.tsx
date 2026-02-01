import { motion } from "framer-motion";

const coreStrengths = [
  {
    title: "Azure Landing Zones",
    detail: "Management Groups. Policy. RBAC. Guardrails",
  },
  {
    title: "Hub-spoke networking",
    detail: "VNet. Azure Firewall. Private Endpoints. DNS",
  },
  {
    title: "Identity and security",
    detail: "Entra ID. Defender for Cloud. Key Vault",
  },
  {
    title: "Platforms",
    detail: "AKS. App Service. Functions. API Management",
  },
  {
    title: "Automation",
    detail: "Terraform. Bicep. Azure DevOps. GitHub Actions",
  },
  {
    title: "Observability and cost",
    detail: "Azure Monitor. Log Analytics. FinOps",
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
            <h3 className="text-xl font-semibold mb-4">Core strengths</h3>
            <ul className="space-y-3">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
