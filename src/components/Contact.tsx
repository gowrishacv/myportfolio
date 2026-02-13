import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillIconsStrip from "@/components/SkillIconsStrip";
import { useTranslation } from "react-i18next";

const CONTACT_TOOL_ICONS = "azure,terraform,kubernetes,docker,git,vscode";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {t("contact.heading.letsBuild")}{" "}
            <span className="gradient-text">
              {t("contact.heading.nextPlatform")}
            </span>
          </h2>

          <div className="mb-10">
            <SkillIconsStrip
              icons={CONTACT_TOOL_ICONS}
              perlineMobile={6}
              perlineDesktop={12}
              imageAlt={t("projects.toolIconsAlt")}
              className="opacity-95"
            />
          </div>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("contact.intro")}
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <motion.a
              href="mailto:gowrish@outlook.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:glow-accent transition-all duration-300 break-words"
            >
              <Mail className="w-6 h-6 text-primary mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground mb-1">
                {t("contact.cards.email")}
              </p>
              <p className="font-medium text-sm group-hover:text-primary transition-colors">
                gowrish@outlook.com
              </p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/gowrishacv"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:glow-accent transition-all duration-300 break-words"
            >
              <Linkedin className="w-6 h-6 text-primary mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground mb-1">
                {t("contact.cards.linkedin")}
              </p>
              <p className="font-medium text-sm group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                /in/gowrishacv
                <ArrowUpRight className="w-3 h-3" />
              </p>
            </motion.a>

            <motion.a
              href="https://github.com/gowrishacv"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:glow-accent transition-all duration-300 break-words"
            >
              <Github className="w-6 h-6 text-primary mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground mb-1">
                {t("contact.cards.github")}
              </p>
              <p className="font-medium text-sm group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                github.com/gowrishacv
                <ArrowUpRight className="w-3 h-3" />
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <MapPin className="w-6 h-6 text-primary mb-3 mx-auto" />
              <p className="text-sm text-muted-foreground mb-1">
                {t("contact.cards.location")}
              </p>
              <p className="font-medium text-sm">
                {t("contact.locationValue")}
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:gowrish@outlook.com">
                <Mail className="w-4 h-4 mr-2" /> {t("contact.cta")}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gowrisha C. Vishwa Kumar.{" "}
            {t("contact.footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
