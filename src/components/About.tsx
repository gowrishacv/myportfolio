import { motion } from "framer-motion";
import SkillIconsStrip from "@/components/SkillIconsStrip";
import { useTranslation } from "react-i18next";

const ABOUT_TOOL_ICONS = "azure,terraform,git,kubernetes,docker";

const About = () => {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];
  const focusAreas = t("about.focusAreas", { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
            {t("about.label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-4">
            {t("about.heading.focusedOn")}{" "}
            <span className="gradient-text">
              {t("about.heading.secureCloud")}
            </span>
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-3">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="mt-6">
            <SkillIconsStrip
              icons={ABOUT_TOOL_ICONS}
              perlineMobile={6}
              perlineDesktop={10}
              imageAlt={t("about.toolingAlt")}
              className="opacity-95"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-8 rounded-2xl border border-border bg-card/70 p-6"
        >
          <h4 className="text-sm font-semibold text-foreground mb-3">
            {t("about.focusAreasTitle")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs text-muted-foreground border border-border bg-background/40"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
