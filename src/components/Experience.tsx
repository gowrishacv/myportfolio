import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Santander Deutschland",
    role: "Cloud Architect",
    period: "September 2023 - Present",
    duration: "2 years 5 months",
    location: "North Rhine-Westphalia, Germany",
    highlights: [
      "Leading Azure architecture across cloud modernization and landing zone implementation",
      "Delivered secure, scalable Azure landing zones aligned to enterprise compliance",
      "Migration planning and target architecture design for regulated environments",
    ],
    current: true,
  },
  {
    company: "Sopra Steria",
    role: "Azure Cloud Architect",
    period: "August 2022 - May 2023",
    duration: "10 months",
    location: "Bengaluru, Karnataka, India",
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
    role: "Associate Technical Lead",
    period: "October 2021 - July 2022",
    duration: "10 months",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Designed and implemented high availability and security solutions",
      "Identified critical IT assets and potential threats",
      "Executed and tested disaster recovery plans",
    ],
    current: false,
  },
  {
    company: "BrainScale Inc",
    role: "Cloud Consultant",
    period: "October 2017 - October 2021",
    duration: "4 years 1 month",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Prepared capacity and architecture plans for Azure Cloud environments",
      "Provided disaster recovery recommendations",
      "Built solutions for data archiving with IaaS VMs and PaaS role instances",
    ],
    current: false,
  },
  {
    company: "NetApp",
    role: "Cloud Engineer",
    period: "October 2015 - September 2017",
    duration: "2 years",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Provided recommendations for disaster recovery to Azure IaaS",
      "Built solutions using Azure Blob storage for data archiving",
      "Configured VNet, Application Gateway, Traffic Manager, and Load Balancer",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through enterprise cloud architecture and transformation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background md:-translate-x-1/2 ${
                  exp.current ? "glow-primary" : ""
                }`}
              >
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                  {/* Header */}
                  <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:glow-accent transition-shadow">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
