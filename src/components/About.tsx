import { motion } from "framer-motion";
import { Blocks, Cloud, ShieldCheck, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

import SkillIconsStrip from "@/components/SkillIconsStrip";

const ABOUT_TOOL_ICONS = "azure,terraform,kubernetes,docker,githubactions,powershell,bash,git";

const statCards = [
  {
    title: "10+",
    label: "Years Experience",
    note: "Cloud infrastructure and modernization",
    icon: Cloud,
    tone: "text-sky-600",
  },
  {
    title: "50+",
    label: "Projects Delivered",
    note: "Migration, governance, and automation",
    icon: Blocks,
    tone: "text-emerald-600",
  },
  {
    title: "99.9%",
    label: "Reliability Mindset",
    note: "Security-first and resilient patterns",
    icon: ShieldCheck,
    tone: "text-indigo-600",
  },
  {
    title: "24/7",
    label: "Platform Operations",
    note: "Observability and incident readiness",
    icon: Zap,
    tone: "text-amber-600",
  },
];

const About = () => {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];
  const focusAreas = t("about.focusAreas", { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            cloud-profile --summary
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            DevOps Engineer & <span className="gradient-text">Platform Architect</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
            I build secure Azure platforms, production-ready automation, and governance blueprints that scale across enterprise teams.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/70 bg-card/85 p-5 shadow-sm"
              >
                <Icon className={`h-5 w-5 ${card.tone}`} />
                <p className="mt-3 font-mono text-3xl font-bold text-foreground">{card.title}</p>
                <p className="mt-1 text-sm font-semibold text-foreground/90">{card.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">{card.note}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/70 bg-card/80 p-6"
          >
            <h3 className="font-mono text-lg font-semibold text-foreground">whoami --details</h3>
            <div className="mt-4 space-y-3 text-muted-foreground">
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-foreground">{t("about.focusAreasTitle")}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/70 bg-card/80 p-6"
          >
            <h3 className="font-mono text-lg font-semibold text-foreground">cat /etc/toolchain.conf</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tooling used across architecture, IaC, containerization, observability, and release automation.
            </p>

            <div className="mt-5 rounded-xl border border-border/60 bg-background/70 p-4">
              <SkillIconsStrip
                icons={ABOUT_TOOL_ICONS}
                perlineMobile={5}
                perlineDesktop={8}
                imageAlt={t("about.toolingAlt")}
              />
            </div>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Policy-as-Code and landing zone guardrails
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                CI/CD pipelines with security and compliance controls
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Platform observability and incident response readiness
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default About;
