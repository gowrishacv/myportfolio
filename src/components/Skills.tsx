import { motion } from "framer-motion";
import {
  Cloud,
  Network,
  Terminal,
  Wallet,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const skills = [
  {
    icon: Cloud,
    title: "Enterprise Landing Zones",
    description:
      "Designing and deploying secure, scalable Azure foundations using Management Groups, Policy, and RBAC for robust governance.",
  },
  {
    icon: Rocket,
    title: "Cloud Migration & Modernization",
    description:
      "Strategizing and executing workload migrations to Azure, including re-hosting, re-platforming, and application modernization.",
  },
  {
    icon: Terminal,
    title: "DevOps & IaC Automation",
    description:
      "Building CI/CD pipelines with Azure DevOps & GitHub Actions. Championing Infrastructure as Code with Terraform and Bicep.",
  },
  {
    icon: Network,
    title: "Secure Networking",
    description:
      "Architecting Hub-Spoke topologies, VNet integration, Private Endpoints, and Azure Firewall for zero-trust security.",
  },
  {
    icon: ShieldCheck,
    title: "Identity & Security",
    description:
      "Implementing robust security controls with Entra ID, Defender for Cloud, and managing secrets with Key Vault.",
  },
  {
    icon: Wallet,
    title: "Cost Optimization & FinOps",
    description:
      "Implementing FinOps principles, rightsizing resources, and leveraging Azure Cost Management for significant savings.",
  },
];

const topSkills = [
  { name: "Azure Landing Zone Design", level: 95 },
  { name: "Cloud Migration Strategy", level: 90 },
  { name: "DevOps & IaC (Terraform)", level: 88 },
];

const Skills = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            My Core <span className="gradient-text">Strengths</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise built through years of architecting enterprise-grade cloud
            solutions
          </p>
        </motion.div>

        {/* Top Skills with Progress */}
        <div className="max-w-2xl mx-auto mb-16">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary font-mono text-sm">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative p-6 rounded-xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-accent transition-shadow duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
