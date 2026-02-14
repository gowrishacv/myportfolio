import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            ping --connect
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-5xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("contact.intro")}</p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <a
              href="mailto:gowrish@outlook.com"
              className="group rounded-2xl border border-border/70 bg-card/85 p-5 transition hover:border-primary/45"
            >
              <Mail className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {t("contact.cards.email")}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">gowrish@outlook.com</p>
              <p className="mt-3 inline-flex items-center text-xs text-primary">
                send message <ArrowUpRight className="ml-1 h-3 w-3" />
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/gowrishacv"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/70 bg-card/85 p-5 transition hover:border-primary/45"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {t("contact.cards.linkedin")}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">linkedin.com/in/gowrishacv</p>
              <p className="mt-3 inline-flex items-center text-xs text-primary">
                view profile <ArrowUpRight className="ml-1 h-3 w-3" />
              </p>
            </a>

            <a
              href="https://github.com/gowrishacv"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/70 bg-card/85 p-5 transition hover:border-primary/45"
            >
              <Github className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {t("contact.cards.github")}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">github.com/gowrishacv</p>
              <p className="mt-3 inline-flex items-center text-xs text-primary">
                explore repos <ArrowUpRight className="ml-1 h-3 w-3" />
              </p>
            </a>

            <div className="rounded-2xl border border-border/70 bg-card/85 p-5">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {t("contact.cards.location")}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{t("contact.locationValue")}</p>
              <p className="mt-3 text-xs text-muted-foreground">Open to remote and hybrid opportunities</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border/70 bg-card/90 p-6 md:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              ready-to-collaborate
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
              Ready to Start Your Project?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I can help with cloud architecture, migration strategy, landing zone implementation,
              governance controls, and platform automation.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Architecture discovery and roadmap planning
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                Enterprise landing zones and governance rollout
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                IaC and CI/CD implementation for repeatable delivery
              </li>
            </ul>

            <div className="mt-6">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:gowrish@outlook.com">
                  <Mail className="h-4 w-4" /> {t("contact.cta")}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gowrisha C. Vishwa Kumar. {t("contact.footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
