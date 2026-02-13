import { motion } from "framer-motion";
import SkillIconsStrip from "@/components/SkillIconsStrip";
import { useTranslation } from "react-i18next";

const skillGroupIds = [
  "cloud",
  "iac",
  "containers",
  "devops",
  "security",
  "monitoring",
] as const;

const Skills = () => {
  const { t } = useTranslation();

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
            {t("skills.label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("skills.heading.tech")}{" "}
            <span className="gradient-text">{t("skills.heading.stack")}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t("skills.intro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroupIds.map((groupId, index) => {
            const title = t(`skills.groups.${groupId}.title`);
            const items = t(`skills.groups.${groupId}.items`, {
              returnObjects: true,
            }) as string[];

            return (
              <motion.div
                key={groupId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card/70 p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
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
              label={t("common.toolsDayToDay")}
              perlineMobile={6}
              perlineDesktop={10}
              imageAlt="Skill and tooling icons"
            />
            <p className="text-xs text-muted-foreground mt-3">
              {t("common.iconsPoweredBy")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
