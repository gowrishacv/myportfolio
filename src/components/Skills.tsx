import { motion } from "framer-motion";
import SkillIconsStrip from "@/components/SkillIconsStrip";

const skillGroups = [
  {
    title: "Cloud",
    items: [
      "Azure (Landing Zones, Policy, Networking, Identity)",
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Storage",
    ],
  },
  {
    title: "IaC",
    items: ["Terraform", "Bicep", "ARM Templates"],
  },
  {
    title: "Containers",
    items: ["AKS", "Docker", "Container Registry"],
  },
  {
    title: "DevOps",
    items: ["Azure DevOps", "GitHub Actions", "CI/CD Pipelines"],
  },
  {
    title: "Security",
    items: ["Microsoft Entra ID", "Key Vault", "Defender for Cloud"],
  },
  {
    title: "Monitoring",
    items: ["Azure Monitor", "Log Analytics", "Application Insights"],
  },
];

const Skills = () => {
  const skillicons =
    "js,azure,gcp,aws,bash,terraform,powershell,vscode,windows,redhat,apple,git,nginx,kubernetes,docker,c,vim";

  return (
    <section
      id="skills"
      className="py-20 md:py-24 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Grouped expertise across cloud architecture, automation, security,
            and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <h3 className="text-lg font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-10"
        >
          <div className="rounded-2xl border border-border bg-card/70 p-6 text-center">
            <SkillIconsStrip
              icons={skillicons}
              label="Tools I use day-to-day"
              perlineMobile={6}
              perlineDesktop={10}
              imageAlt="Skill and tooling icons"
            />
            <p className="text-xs text-muted-foreground mt-3">
              Icons powered by skillicons.dev
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
