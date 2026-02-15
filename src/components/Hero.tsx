import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  TerminalSquare,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const heroStats = [
  { value: "10+", label: "Years in Cloud" },
  { value: "50+", label: "Workloads Migrated" },
  { value: "99.9%", label: "Availability Focus" },
];

const quickPills = [
  "Azure Landing Zones",
  "Cloud Security",
  "Terraform Automation",
];

const Hero = () => {
  const { t } = useTranslation();
  const animatedRoles = useMemo(() => {
    const roles = t("hero.animatedRoles", {
      returnObjects: true,
    });

    return Array.isArray(roles) && roles.length > 0
      ? roles
      : [t("hero.title")];
  }, [t]);

  const baseUrl = import.meta.env.BASE_URL || "/";
  const withBase = (path: string) => {
    const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
    return `${normalizedBase}${normalizedPath}`;
  };

  const [profileSrc, setProfileSrc] = useState(withBase("profile.png"));
  const [typedRoleText, setTypedRoleText] = useState("");
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [isDeletingRoleText, setIsDeletingRoleText] = useState(false);

  useEffect(() => {
    const currentRole = animatedRoles[activeRoleIndex] ?? "";
    const typingDelay = isDeletingRoleText ? 40 : 75;
    const holdDelay = 1300;
    const switchDelay = 240;

    const timer = window.setTimeout(() => {
      if (!isDeletingRoleText && typedRoleText === currentRole) {
        setIsDeletingRoleText(true);
        return;
      }

      if (isDeletingRoleText && typedRoleText.length === 0) {
        setIsDeletingRoleText(false);
        setActiveRoleIndex((prev) => (prev + 1) % animatedRoles.length);
        return;
      }

      const nextText = isDeletingRoleText
        ? currentRole.slice(0, typedRoleText.length - 1)
        : currentRole.slice(0, typedRoleText.length + 1);
      setTypedRoleText(nextText);
    }, !isDeletingRoleText && typedRoleText === currentRole
      ? holdDelay
      : isDeletingRoleText && typedRoleText.length === 0
        ? switchDelay
        : typingDelay);

    return () => window.clearTimeout(timer);
  }, [activeRoleIndex, animatedRoles, isDeletingRoleText, typedRoleText]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-6rem] top-20 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute right-[-7rem] top-48 h-60 w-60 rounded-full bg-emerald-200/45 blur-3xl" />
        <div className="absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs tracking-[0.14em] text-muted-foreground backdrop-blur">
              <TerminalSquare className="h-4 w-4 text-primary" />
              <span className="font-mono">printf \"cloud architect profile\"</span>
            </div>

            <h1 className="mt-6 font-mono text-[2.4rem] font-semibold leading-[1.03] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              <span className="block break-all sm:break-normal">gowrisha@devops:~$</span>
              <span className="gradient-text">whoami</span>
            </h1>

            <div className="mt-5 flex min-h-[2.75rem] items-center md:min-h-[3rem]">
              <p className="font-mono text-lg font-medium text-foreground/90 md:text-2xl">
                <span className="text-primary">&gt;</span> {typedRoleText}
                <span className="ml-1 inline-block animate-pulse text-primary">
                  |
                </span>
              </p>
            </div>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("hero.summary")}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {quickPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:gowrish@outlook.com">
                  <Mail className="h-4 w-4" /> Email Me
                </a>
              </Button>
              <a
                href="https://www.linkedin.com/in/gowrishacv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card/70 px-4 text-sm font-medium text-foreground transition hover:border-primary/45"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/gowrishacv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card/70 px-4 text-sm font-medium text-foreground transition hover:border-primary/45"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-lg border border-border/70 bg-card/60 px-3 py-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{t("hero.location")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: "easeOut" }}
            className="mx-auto w-full max-w-md"
          >
            <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-[0_18px_50px_-35px_rgba(20,43,90,0.7)] backdrop-blur">
              <div className="mb-5 flex justify-center">
                <Avatar className="h-36 w-36 border-4 border-primary/25 ring-8 ring-primary/10 md:h-40 md:w-40">
                  <AvatarImage
                    src={profileSrc}
                    alt="Gowrisha C. Vishwa Kumar"
                    className="object-cover"
                    onError={() => setProfileSrc(withBase("profile-placeholder.svg"))}
                  />
                  <AvatarFallback className="text-lg font-semibold">
                    GCVK
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex justify-center">
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-3 py-1 text-sm font-medium text-emerald-700">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  {t("hero.status")}
                </p>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/70 bg-background/70 px-3 py-3 text-center"
                  >
                    <p className="font-mono text-lg font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 hidden justify-center lg:flex"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground"
          >
            {t("hero.scrollHint")} <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
