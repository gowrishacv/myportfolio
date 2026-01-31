import { motion } from "framer-motion";
import { 
  Cloud, 
  Shield, 
  Network, 
  Terminal, 
  Eye, 
  Wallet,
  Server,
  Lock
} from "lucide-react";

const skills = [
  {
    icon: Cloud,
    title: "Azure Landing Zones",
    description: "Management Groups, Policy, RBAC, Guardrails",
  },
  {
    icon: Network,
    title: "Hub-Spoke Networking",
    description: "VNet, Azure Firewall, Private Endpoints, DNS",
  },
  {
    icon: Lock,
    title: "Identity & Security",
    description: "Entra ID, Defender for Cloud, Key Vault",
  },
  {
    icon: Server,
    title: "Platforms",
    description: "AKS, App Service, Functions, API Management",
  },
  {
    icon: Terminal,
    title: "Automation",
    description: "Terraform, Bicep, Azure DevOps, GitHub Actions",
  },
  {
    icon: Eye,
    title: "Observability & Cost",
    description: "Azure Monitor, Log Analytics, FinOps",
  },
];

const topSkills = [
  { name: "Azure Networking", level: 95 },
  { name: "Cloud Governance", level: 92 },
  { name: "Terraform (IaC)", level: 88 },
];

const Skills = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="gradient-text">Strengths</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise built through years of architecting enterprise-grade cloud solutions
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
                <span className="text-primary font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: "easeOut" }}
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
              <div className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-accent transition-shadow duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
