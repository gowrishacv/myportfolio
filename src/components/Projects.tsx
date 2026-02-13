import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SkillIconsStrip from "@/components/SkillIconsStrip";

const PROJECT_TOOL_ICONS = "azure,terraform,githubactions,git,bash,powershell";

const projects = [
  {
    title: "Azure Landing Zone",
    summary:
      "Standardized, secure Azure foundation for fast and consistent workload onboarding.",
    impact: [
      "Built a standardized Azure foundation with governance, security, and networking patterns so new workloads can be onboarded fast and consistently.",
      "Reduced misconfiguration risk by enforcing guardrails with policy, RBAC, and secure defaults across subscriptions.",
      "Improved visibility and audit readiness with centralized logging, monitoring, and security posture management.",
    ],
    tech: "Azure, Management Groups, Subscriptions, Entra ID, RBAC, PIM, Azure Policy, Key Vault, Log Analytics, Azure Monitor, Defender for Cloud, VNets, Hub-Spoke/vWAN, NSG, Private DNS, Private Endpoints, Azure Firewall, Terraform/Bicep, Azure DevOps/GitHub Actions",
    links: {
      github: "https://github.com/gowrishacv",
      caseStudy: "#",
      diagram: "#",
    },
  },
  {
    title: "On-Prem to Azure Migration",
    summary:
      "Phased migration with minimal downtime, improved reliability, and automated operations.",
    impact: [
      "Planned and executed a phased migration from on prem to Azure with minimal downtime and clear cutover and rollback steps.",
      "Improved reliability and operational efficiency by moving suitable workloads to Azure managed services and standardizing backup and monitoring.",
      "Reduced infrastructure maintenance overhead through automation and consistent deployment pipelines.",
    ],
    tech: "Azure Migrate, Azure Site Recovery, VPN Gateway/ExpressRoute, VMs, App Service, Azure SQL DB/SQL MI, Storage Accounts, Azure Backup, Azure Monitor, Log Analytics, Terraform/Bicep, Azure DevOps/GitHub Actions, PowerShell, Azure CLI",
    links: {
      github: "https://github.com/gowrishacv",
      caseStudy: "#",
      diagram: "#",
    },
  },
  {
    title: "BCDR Plan & Execution",
    summary:
      "Defined and tested recovery strategy with automation and resilience patterns.",
    impact: [
      "Defined BCDR strategy with application tiering and clear RTO/RPO targets, then implemented and tested recovery procedures end to end.",
      "Reduced recovery risk by automating backups, failover steps, and validation checks, and by documenting runbooks for operations teams.",
      "Increased service resilience using zone or region redundancy patterns, and validated readiness through scheduled DR drills.",
    ],
    tech: "Azure Backup, Recovery Services Vault, Azure Site Recovery, Availability Zones, GRS, Traffic Manager/Front Door, App Gateway/Load Balancer, Azure Monitor, Log Analytics, Azure Automation/Logic Apps, Key Vault, PowerShell, Azure CLI",
    links: {
      github: "https://github.com/gowrishacv",
      caseStudy: "#",
      diagram: "#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A focused set of projects highlighting measurable outcomes,
            governance maturity, and enterprise-grade Azure architecture.
          </p>

          <div className="mt-6">
            <SkillIconsStrip
              icons={PROJECT_TOOL_ICONS}
              perlineMobile={6}
              perlineDesktop={12}
              imageAlt="Project tooling icons"
              className="opacity-95"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.summary}
                </p>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                {project.impact.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Tech Stack
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.tech}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <span className="text-muted-foreground inline-flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> Case Study
                </span>
                <span className="text-muted-foreground inline-flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> Diagram
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
