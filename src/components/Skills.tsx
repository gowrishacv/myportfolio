import { motion } from "framer-motion";

const SKILLICONS_SKILLS =
  "js,azure,gcp,aws,bash,terraform,powershell,vscode,windows,redhat,apple,git,nginx,kubernetes,docker,c,vim";

const buildSkilliconsUrl = (options: {
  theme: "dark" | "light";
  perline: number;
}) => {
  const { theme, perline } = options;
  return `https://skillicons.dev/icons?i=${SKILLICONS_SKILLS}&perline=${perline}&theme=${theme}`;
};

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
  const skilliconsUrlLightMobile = buildSkilliconsUrl({
    theme: "light",
    perline: 6,
  });
  const skilliconsUrlDarkMobile = buildSkilliconsUrl({
    theme: "dark",
    perline: 6,
  });
  const skilliconsUrlLightDesktop = buildSkilliconsUrl({
    theme: "light",
    perline: 10,
  });
  const skilliconsUrlDarkDesktop = buildSkilliconsUrl({
    theme: "dark",
    perline: 10,
  });

  return (
    <section
      id="skills"
      className="py-28 md:py-32 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
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
          className="max-w-5xl mx-auto mt-12"
        >
          <div className="rounded-2xl border border-border bg-card/70 p-6 text-center">
            <p className="text-sm font-medium mb-3">Tools I use day-to-day</p>
            <a
              href="https://skillicons.dev"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open skillicons.dev (external)"
              className="inline-flex justify-center"
            >
              {/* Mobile layout */}
              <img
                src={skilliconsUrlLightMobile}
                alt="Skill icons"
                loading="lazy"
                decoding="async"
                className="dark:hidden sm:hidden max-w-full h-auto"
              />
              <img
                src={skilliconsUrlDarkMobile}
                alt="Skill icons"
                loading="lazy"
                decoding="async"
                className="hidden dark:block sm:hidden max-w-full h-auto"
              />

              {/* Desktop layout */}
              <img
                src={skilliconsUrlLightDesktop}
                alt="Skill icons"
                loading="lazy"
                decoding="async"
                className="hidden sm:block dark:hidden max-w-full h-auto"
              />
              <img
                src={skilliconsUrlDarkDesktop}
                alt="Skill icons"
                loading="lazy"
                decoding="async"
                className="hidden dark:sm:block max-w-full h-auto"
              />
            </a>
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
