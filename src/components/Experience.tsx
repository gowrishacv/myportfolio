import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SkillIconsStrip from "@/components/SkillIconsStrip";

const experiences = [
  {
    company: "Santander Deutschland",
    logo: "santander.png",
    role: "Cloud Architect",
    period: "September 2023 - Present",
    duration: "2 years 5 months",
    location: "North Rhine-Westphalia, Germany",
    tools:
      "azure,terraform,kubernetes,docker,git,githubactions,powershell,bash,vscode",
    highlights: [
      "Leading Azure architecture across cloud modernization and landing zone implementation",
      "Delivered secure, scalable Azure landing zones aligned to enterprise compliance",
      "Migration planning and target architecture design for regulated environments",
    ],
    current: true,
  },
  {
    company: "Sopra Steria",
    logo: "sopra-steria.png",
    role: "Azure Cloud Architect",
    period: "August 2022 - May 2023",
    duration: "10 months",
    location: "Bengaluru, Karnataka, India",
    tools: "azure,terraform,powershell,bash,git,githubactions",
    highlights: [
      "Cut infrastructure cost ~20% through right-sizing and IaC automation",
      "Led cloud security audits and enforced identity governance with Entra ID",
      "Migrated 50+ servers to Azure with zero downtime using Azure Migrate",
      "Built TCO analysis and ROI models for C-level decision-making",
    ],
    current: false,
  },
  {
    company: "Tech Mahindra",
    logo: "tech-mahindra.png",
    role: "Associate Technical Lead",
    period: "October 2021 - July 2022",
    duration: "10 months",
    location: "Bengaluru, Karnataka, India",
    tools: "azure,nginx,windows,redhat,git",
    highlights: [
      "Designed and implemented high availability and security solutions",
      "Identified critical IT assets and potential threats",
      "Executed and tested disaster recovery plans",
    ],
    current: false,
  },
  {
    company: "BrainScale Inc",
    logo: "brainscale.png",
    role: "Cloud Consultant",
    period: "October 2017 - October 2021",
    duration: "4 years 1 month",
    location: "Bengaluru, Karnataka, India",
    tools: "azure,powershell,bash,windows,git",
    highlights: [
      "Prepared capacity and architecture plans for Azure Cloud environments",
      "Provided disaster recovery recommendations",
      "Built solutions for data archiving with IaaS VMs and PaaS role instances",
    ],
    current: false,
  },
  {
    company: "NetApp",
    logo: "netapp.png",
    role: "Cloud Engineer",
    period: "October 2015 - September 2017",
    duration: "2 years",
    location: "Bengaluru, Karnataka, India",
    tools: "azure,nginx,windows,redhat,git",
    highlights: [
      "Provided recommendations for disaster recovery to Azure IaaS",
      "Built solutions using Azure Blob storage for data archiving",
      "Configured VNet, Application Gateway, Traffic Manager, and Load Balancer",
    ],
    current: false,
  },
];

const getCompanyInitials = (name: string) => {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

const Experience = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const withBase = (path: string) => {
    const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
    return `${normalizedBase}${normalizedPath}`;
  };

  return (
    <section
      id="experience"
      className="py-20 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through enterprise cloud architecture and transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <Accordion
              type="single"
              collapsible
              defaultValue={experiences.find((exp) => exp.current)?.company}
              className="px-6"
            >
              {experiences.map((exp) => (
                <AccordionItem key={exp.company} value={exp.company}>
                  <AccordionTrigger className="text-left">
                    <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden">
                          {exp.logo ? (
                            <img
                              src={withBase(exp.logo)}
                              alt={`${exp.company} logo`}
                              className="h-7 w-7 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-xs font-semibold text-primary">
                              {getCompanyInitials(exp.company)}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground">
                            {exp.role}
                          </p>
                          <p className="text-sm text-muted-foreground break-words">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 flex-wrap">
                          <Calendar className="w-4 h-4" />
                          <span className="break-words">{exp.period}</span>
                        </div>
                        {exp.current && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="flex flex-wrap gap-4 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      {exp.duration && <span>{exp.duration}</span>}
                    </div>

                    {exp.tools ? (
                      <div className="mb-4">
                        <SkillIconsStrip
                          icons={exp.tools}
                          perlineMobile={7}
                          perlineDesktop={14}
                          imageAlt={`${exp.company} tools icons`}
                        />
                      </div>
                    ) : null}

                    <ul className="space-y-2 text-sm">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
