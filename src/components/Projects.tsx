import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SkillIconsStrip from "@/components/SkillIconsStrip";

const PROJECT_TOOL_ICONS = "azure,terraform,githubactions,git,bash,powershell";

const projectIds = ["landingZone", "migration", "bcdr"] as const;
type ProjectId = (typeof projectIds)[number];

const projectLinks: Record<
  ProjectId,
  { github: string; caseStudy: string; diagram: string }
> = {
  landingZone: {
    github: "https://github.com/gowrishacv",
    caseStudy: "/azure-landing-zone-case-study",
    diagram: "/azure-landing-zone-case-study#architecture-diagram",
  },
  migration: {
    github: "https://github.com/gowrishacv",
    caseStudy: "#",
    diagram: "#",
  },
  bcdr: {
    github: "https://github.com/gowrishacv",
    caseStudy: "#",
    diagram: "#",
  },
};

const Projects = () => {
  const { t } = useTranslation();

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
            {t("projects.label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("projects.heading.selected")}{" "}
            <span className="gradient-text">{t("projects.heading.work")}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("projects.intro")}
          </p>

          <div className="mt-6">
            <SkillIconsStrip
              icons={PROJECT_TOOL_ICONS}
              perlineMobile={6}
              perlineDesktop={12}
              imageAlt={t("projects.toolIconsAlt")}
              className="opacity-95"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projectIds.map((projectId, index) => {
            const title = t(`projects.items.${projectId}.title`);
            const summary = t(`projects.items.${projectId}.summary`);
            const impact = t(`projects.items.${projectId}.impact`, {
              returnObjects: true,
            }) as string[];
            const tech = t(`projects.items.${projectId}.tech`);
            const links = projectLinks[projectId];

            return (
              <motion.div
                key={projectId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="h-full rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{summary}</p>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  {impact.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {t("projects.techStackLabel")}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tech}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Github className="h-4 w-4" /> {t("projects.links.github")}
                  </a>

                  {links.caseStudy !== "#" ? (
                    <Link
                      to={links.caseStudy}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.links.caseStudy")}
                    </Link>
                  ) : (
                    <span className="text-muted-foreground inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.links.caseStudy")}
                    </span>
                  )}

                  {links.diagram !== "#" ? (
                    <Link
                      to={links.diagram}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.links.diagram")}
                    </Link>
                  ) : (
                    <span className="text-muted-foreground inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.links.diagram")}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
