import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import CaseStudyMarkdown from "@/components/CaseStudyMarkdown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projectIds = ["landingZone", "migration", "bcdr"] as const;
type ProjectId = (typeof projectIds)[number];

const projectLinks: Record<
  ProjectId,
  { github: string; caseStudy: string; diagram: string }
> = {
  landingZone: {
    github: "https://github.com/gowrishacv",
    caseStudy: "__modal__",
    diagram: "__modal__#architecture-diagram",
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

const openSourceHighlights = [
  {
    name: "terraform-landing-zone-patterns",
    description:
      "Reference Terraform patterns for secure Azure subscription baselines and reusable environment modules.",
    tag: "IaC",
    link: "https://github.com/gowrishacv",
  },
  {
    name: "azure-governance-playbooks",
    description:
      "Documentation and automation snippets for policy, RBAC design, and cloud governance operating models.",
    tag: "Governance",
    link: "https://github.com/gowrishacv",
  },
  {
    name: "platform-observability-starter",
    description:
      "Starter architecture for monitoring, log analytics, and incident response workflows on Azure platforms.",
    tag: "SRE",
    link: "https://github.com/gowrishacv",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [caseStudyAnchor, setCaseStudyAnchor] = useState<string | undefined>(
    undefined,
  );

  const caseStudyMdUrl = useMemo(() => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    return `${normalizedBase}azure-landing-zone-case-study/index.md`;
  }, []);

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            ls ./projects --enterprise
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Selected <span className="gradient-text">Platform Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A portfolio of architecture and migration projects with measurable business and operations outcomes.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3">
          {projectIds.map((projectId, index) => {
            const title = t(`projects.items.${projectId}.title`);
            const summary = t(`projects.items.${projectId}.summary`);
            const impact = t(`projects.items.${projectId}.impact`, {
              returnObjects: true,
            }) as string[];
            const tech = t(`projects.items.${projectId}.tech`);
            const techList = tech.split(",").map((item) => item.trim()).slice(0, 6);
            const links = projectLinks[projectId];

            return (
              <motion.article
                key={projectId}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/85 p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                  <span className="rounded-full border border-border/70 bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    active
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">{summary}</p>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {impact.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {techList.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-background/80 px-2 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80"
                  >
                    <Github className="h-4 w-4" /> {t("projects.links.github")}
                  </a>

                  {links.caseStudy !== "#" ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80"
                      onClick={() => {
                        setCaseStudyAnchor(undefined);
                        setCaseStudyOpen(true);
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.links.caseStudy")}
                    </button>
                  ) : null}

                  {links.diagram !== "#" ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80"
                      onClick={() => {
                        setCaseStudyAnchor("architecture-diagram");
                        setCaseStudyOpen(true);
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.links.diagram")}
                    </button>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-6xl rounded-3xl border border-border/70 bg-card/85 p-6 md:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                find ./github -type repo
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
                Explore GitHub Repositories
              </h3>
            </div>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/gowrishacv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Terminal className="h-4 w-4" /> Open GitHub
              </a>
            </Button>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {openSourceHighlights.map((repo, index) => (
              <motion.article
                key={repo.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.42 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border/70 bg-background/75 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-mono text-sm font-semibold text-foreground">{repo.name}</h4>
                  <span className="rounded-full border border-border/70 bg-card px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {repo.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{repo.description}</p>
                <a
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                >
                  View Repository <ExternalLink className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <Dialog open={caseStudyOpen} onOpenChange={setCaseStudyOpen}>
          <DialogContent className="max-w-5xl w-[95vw] overflow-hidden p-0">
            <div className="border-b border-border bg-card/70 px-6 py-4">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold md:text-2xl">
                  Azure Landing Zone - Case Study
                </DialogTitle>
              </DialogHeader>
              <p className="mt-1 text-sm text-muted-foreground">
                Use the close button (top-right) to return.
              </p>
            </div>

            <div className="px-6 py-5">
              <CaseStudyMarkdown
                mdUrl={caseStudyMdUrl}
                initialAnchorId={caseStudyAnchor}
                scrollMode="container"
                containerClassName="max-h-[70vh] overflow-auto pr-2"
                hideFirstHeading
                hideTableOfContents
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
