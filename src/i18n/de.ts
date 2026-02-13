const de = {
  nav: {
    aria: "Primär",
    logoAria: "Nach oben",
    home: "Home",
    about: "Über mich",
    projects: "Projekte",
    contact: "Kontakt",
  },
  common: {
    language: "Sprache",
    en: "EN",
    de: "DE",
    current: "Aktuell",
    techStack: "Technologie-Stack",
    toolsDayToDay: "Tools, die ich täglich nutze",
    iconsPoweredBy: "Icons bereitgestellt von skillicons.dev",
  },
  hero: {
    status: "Aktiv auf der Suche nach neuen Möglichkeiten",
    title: "Cloud Solutions Architect · Cloud Security",
    location: "Region Düsseldorf, Deutschland",
    summary:
      "Ich entwerfe sichere, konforme Azure-Plattformen im Enterprise-Maßstab, die Business Outcomes beschleunigen.",
    cta: {
      viewProjects: "Projekte ansehen",
      downloadResume: "Lebenslauf herunterladen",
      downloadResumeAria: "Lebenslauf herunterladen (bald verfügbar)",
      contact: "Kontakt",
    },
    scrollHint: "Scrollen zum Entdecken",
  },
  projects: {
    label: "Projekte",
    heading: {
      selected: "Ausgewählte",
      work: "Arbeiten",
    },
    intro:
      "Eine fokussierte Auswahl an Projekten mit messbaren Ergebnissen, Governance-Reife und Azure-Architektur auf Enterprise-Niveau.",
    toolIconsAlt: "Projekt-Tooling-Icons",
    techStackLabel: "Technologie-Stack",
    links: {
      github: "GitHub",
      caseStudy: "Fallstudie",
      diagram: "Diagramm",
    },
    items: {
      landingZone: {
        title: "Azure Landing Zone",
        summary:
          "Standardisierte, sichere Azure-Basis für schnelles und konsistentes Onboarding von Workloads.",
        impact: [
          "Aufbau einer standardisierten Azure-Grundlage mit Governance-, Security- und Networking-Patterns, damit neue Workloads schnell und konsistent onboarden können.",
          "Reduzierung des Misconfiguration-Risikos durch Guardrails via Policy, RBAC und sichere Defaults über Subscriptions hinweg.",
          "Verbesserte Transparenz und Audit-Readiness durch zentrales Logging, Monitoring und Security-Posture-Management.",
        ],
        tech: "Azure, Management Groups, Subscriptions, Entra ID, RBAC, PIM, Azure Policy, Key Vault, Log Analytics, Azure Monitor, Defender for Cloud, VNets, Hub-Spoke/vWAN, NSG, Private DNS, Private Endpoints, Azure Firewall, Terraform/Bicep, Azure DevOps/GitHub Actions",
      },
      migration: {
        title: "On-Prem nach Azure Migration",
        summary:
          "Schrittweise Migration mit minimaler Downtime, höherer Zuverlässigkeit und automatisierten Abläufen.",
        impact: [
          "Planung und Durchführung einer stufenweisen Migration von On-Prem nach Azure mit minimaler Downtime sowie klaren Cutover- und Rollback-Schritten.",
          "Steigerung von Zuverlässigkeit und operativer Effizienz durch Nutzung geeigneter Managed Services sowie Standardisierung von Backup und Monitoring.",
          "Reduzierung des Infrastruktur-Aufwands durch Automatisierung und konsistente Deployment-Pipelines.",
        ],
        tech: "Azure Migrate, Azure Site Recovery, VPN Gateway/ExpressRoute, VMs, App Service, Azure SQL DB/SQL MI, Storage Accounts, Azure Backup, Azure Monitor, Log Analytics, Terraform/Bicep, Azure DevOps/GitHub Actions, PowerShell, Azure CLI",
      },
      bcdr: {
        title: "BCDR-Planung & Umsetzung",
        summary:
          "Recovery-Strategie definiert und getestet – mit Automatisierung und Resilienz-Patterns.",
        impact: [
          "Definition einer BCDR-Strategie mit Application-Tiering und klaren RTO/RPO-Zielen; anschließend Umsetzung und End-to-End-Tests der Recovery-Prozesse.",
          "Reduzierung des Recovery-Risikos durch Automatisierung von Backups, Failover-Schritten und Validierungschecks sowie durch dokumentierte Runbooks.",
          "Erhöhung der Service-Resilienz durch Zone- und Region-Redundanz-Patterns; Validierung der Readiness durch regelmäßige DR-Drills.",
        ],
        tech: "Azure Backup, Recovery Services Vault, Azure Site Recovery, Availability Zones, GRS, Traffic Manager/Front Door, App Gateway/Load Balancer, Azure Monitor, Log Analytics, Azure Automation/Logic Apps, Key Vault, PowerShell, Azure CLI",
      },
    },
  },
  experience: {
    heading: {
      professional: "Berufliche",
      experience: "Erfahrung",
    },
    intro: "Ein Weg durch Enterprise Cloud Architecture und Transformation",
    toolsAltSuffix: "Tool-Icons",
  },
  skills: {
    label: "Skills",
    heading: {
      tech: "Tech",
      stack: "Stack",
    },
    intro:
      "Gebündelte Expertise in Cloud-Architektur, Automatisierung, Security und Reliability.",
    groups: {
      cloud: {
        title: "Cloud",
        items: [
          "Azure (Landing Zones, Policy, Networking, Identity)",
          "Azure Virtual Machines",
          "Azure App Service",
          "Azure Storage",
        ],
      },
      iac: {
        title: "IaC",
        items: ["Terraform", "Bicep", "ARM Templates"],
      },
      containers: {
        title: "Container",
        items: ["AKS", "Docker", "Container Registry"],
      },
      devops: {
        title: "DevOps",
        items: ["Azure DevOps", "GitHub Actions", "CI/CD Pipelines"],
      },
      security: {
        title: "Security",
        items: ["Microsoft Entra ID", "Key Vault", "Defender for Cloud"],
      },
      monitoring: {
        title: "Monitoring",
        items: ["Azure Monitor", "Log Analytics", "Application Insights"],
      },
    },
  },
  education: {
    education: "Ausbildung",
    certifications: "Zertifizierungen",
  },
  about: {
    label: "Über mich",
    heading: {
      focusedOn: "Fokussiert auf",
      secureCloud: "sichere Cloud",
    },
    paragraphs: [
      "Ich bin Cloud Solutions Architect mit Fokus auf sichere, skalierbare und konforme Azure-Plattformen für regulierte Umgebungen.",
      "Mir sind Governance, Automatisierung und messbare Ergebnisse wichtig.",
      "Ich übersetze Business-Anforderungen in praxisnahe Referenzarchitekturen und wiederholbare Delivery.",
      "Offen für Cloud Solutions Architect- und Cloud Security-Rollen in Europa (hybrid/remote).",
    ],
    focusAreasTitle: "Schwerpunkte",
    focusAreas: [
      "Azure Landing Zone Design & Governance",
      "Cloud-Migrationsstrategie & Umsetzung",
      "DevOps-Automatisierung & Kostenoptimierung",
      "Infrastructure as Code (Terraform & Bicep)",
    ],
    toolingAlt: "Über-mich-Tooling-Icons",
  },
  contact: {
    heading: {
      letsBuild: "Lassen Sie uns Ihre",
      nextPlatform: "nächste Plattform bauen",
    },
    intro:
      "Offen für Rollen als Cloud Architect sowie DevOps-orientierte Plattform-Rollen. Melden Sie sich, um zu besprechen, wie ich Ihre Cloud-Infrastruktur modernisieren kann.",
    cards: {
      email: "E-Mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Standort",
    },
    locationValue: "Region Düsseldorf",
    cta: "Beratungstermin vereinbaren",
    footer: "Mit Leidenschaft für Cloud-Architektur gebaut.",
  },
};

export default de;
