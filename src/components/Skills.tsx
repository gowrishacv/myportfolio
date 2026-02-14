import { motion } from "framer-motion";
import {
  Blocks,
  Bot,
  Cpu,
  GitBranch,
  Radar,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import SkillIconsStrip from "@/components/SkillIconsStrip";

const skillGroupIds = [
  "cloud",
  "iac",
  "containers",
  "devops",
  "security",
  "monitoring",
] as const;

const capabilityCards = [
  {
    title: "Cloud Architecture",
    badge: "advanced",
    description: "Secure and scalable Azure platform design for enterprise workloads.",
    points: [
      "Landing zone architecture",
      "Network segmentation and policy controls",
      "Blueprint-driven environment provisioning",
    ],
    icon: Blocks,
    tone: "text-sky-600",
  },
  {
    title: "IaC Automation",
    badge: "expert",
    description: "Reusable, testable, and policy-aligned infrastructure delivery.",
    points: [
      "Terraform module strategy",
      "CI validation and drift checks",
      "Versioned environment templates",
    ],
    icon: GitBranch,
    tone: "text-emerald-600",
  },
  {
    title: "Cloud Security",
    badge: "advanced",
    description: "Security-first patterns integrated directly into platform workflows.",
    points: [
      "Identity and access governance",
      "Policy-as-code guardrails",
      "Threat detection and hardening",
    ],
    icon: ShieldCheck,
    tone: "text-indigo-600",
  },
  {
    title: "SRE Practices",
    badge: "advanced",
    description: "Operational reliability and incident readiness across production platforms.",
    points: [
      "SLO and reliability baselines",
      "Runbooks and operational playbooks",
      "Root-cause analysis workflows",
    ],
    icon: Radar,
    tone: "text-blue-600",
  },
  {
    title: "Platform Engineering",
    badge: "advanced",
    description: "Developer-friendly platforms with standardized golden paths.",
    points: [
      "Self-service infrastructure patterns",
      "Reusable release pipelines",
      "Internal platform standards",
    ],
    icon: Cpu,
    tone: "text-violet-600",
  },
  {
    title: "AI-Ready Ops",
    badge: "growing",
    description: "Foundations to run ML and AI workloads with governance and scale in mind.",
    points: [
      "GPU-capable infrastructure planning",
      "Secure model hosting patterns",
      "Data and network governance",
    ],
    icon: Bot,
    tone: "text-cyan-600",
  },
];

const ecosystemBands = [
  {
    title: "Cloud",
    values: ["Azure", "AWS", "GCP"],
  },
  {
    title: "Infra",
    values: ["Terraform", "Bicep", "ARM"],
  },
  {
    title: "Runtime",
    values: ["AKS", "Docker", "Linux"],
  },
  {
    title: "Delivery",
    values: ["GitHub Actions", "Azure DevOps", "PowerShell"],
  },
];

const skillicons =
  "azure,aws,gcp,terraform,kubernetes,docker,git,githubactions,powershell,bash,linux,vscode,nginx,prometheus,grafana";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            platform --capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Cloud & Platform <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Core disciplines I apply to architect secure platforms, automate delivery, and support reliable operations.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/70 bg-card/85 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className={`h-5 w-5 ${card.tone}`} />
                  <span className="rounded-full border border-border/70 bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {card.badge}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="rounded-3xl border border-border/70 bg-card/85 p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              ./skills --list --verbose
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
              Technical Stack Matrix
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Structured skill groups for architecture, delivery, reliability, and operations.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skillGroupIds.map((groupId, index) => {
                const title = t(`skills.groups.${groupId}.title`);
                const items = t(`skills.groups.${groupId}.items`, {
                  returnObjects: true,
                }) as string[];

                return (
                  <motion.article
                    key={groupId}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-xl border border-border/70 bg-background/70 p-4"
                  >
                    <h4 className="font-mono text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                      {title}
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-border/70 bg-background/70 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                cat /etc/tech-ecosystem.conf
              </p>
              <div className="mt-4">
                <SkillIconsStrip
                  icons={skillicons}
                  perlineMobile={6}
                  perlineDesktop={10}
                  imageAlt="Cloud and DevOps tooling icons"
                />
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {ecosystemBands.map((band) => (
                  <div
                    key={band.title}
                    className="rounded-xl border border-border/70 bg-card/70 px-4 py-3"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80">
                      {band.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {band.values.map((value) => (
                        <span
                          key={value}
                          className="rounded-full border border-border/70 bg-background/80 px-2 py-1 text-xs text-muted-foreground"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
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

export default Skills;
