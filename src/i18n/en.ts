const en = {
  nav: {
    aria: "Primary",
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  common: {
    language: "Language",
    en: "EN",
    de: "DE",
    current: "Current",
    techStack: "Tech Stack",
    toolsDayToDay: "Tools I use day-to-day",
    iconsPoweredBy: "Icons powered by skillicons.dev",
  },
  hero: {
    status: "Actively seeking new opportunities",
    title: "Cloud Solutions Architect · Cloud Security",
    location: "Greater Düsseldorf Area, Germany",
    summary:
      "Designing secure, compliant, enterprise-scale Azure platforms that accelerate business outcomes.",
    cta: {
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      downloadResumeAria: "Download resume (coming soon)",
      contact: "Contact",
    },
    scrollHint: "Scroll to explore",
  },
  projects: {
    label: "Projects",
    heading: {
      selected: "Selected",
      work: "Work",
    },
    intro:
      "A focused set of projects highlighting measurable outcomes, governance maturity, and enterprise-grade Azure architecture.",
    toolIconsAlt: "Project tooling icons",
    techStackLabel: "Tech Stack",
    links: {
      github: "GitHub",
      caseStudy: "Case Study",
      diagram: "Diagram",
    },
    items: {
      landingZone: {
        title: "Azure Landing Zone",
        summary:
          "Standardized, secure Azure foundation for fast and consistent workload onboarding.",
        impact: [
          "Built a standardized Azure foundation with governance, security, and networking patterns so new workloads can be onboarded fast and consistently.",
          "Reduced misconfiguration risk by enforcing guardrails with policy, RBAC, and secure defaults across subscriptions.",
          "Improved visibility and audit readiness with centralized logging, monitoring, and security posture management.",
        ],
        tech: "Azure, Management Groups, Subscriptions, Entra ID, RBAC, PIM, Azure Policy, Key Vault, Log Analytics, Azure Monitor, Defender for Cloud, VNets, Hub-Spoke/vWAN, NSG, Private DNS, Private Endpoints, Azure Firewall, Terraform/Bicep, Azure DevOps/GitHub Actions",
      },
      migration: {
        title: "On-Prem to Azure Migration",
        summary:
          "Phased migration with minimal downtime, improved reliability, and automated operations.",
        impact: [
          "Planned and executed a phased migration from on prem to Azure with minimal downtime and clear cutover and rollback steps.",
          "Improved reliability and operational efficiency by moving suitable workloads to Azure managed services and standardizing backup and monitoring.",
          "Reduced infrastructure maintenance overhead through automation and consistent deployment pipelines.",
        ],
        tech: "Azure Migrate, Azure Site Recovery, VPN Gateway/ExpressRoute, VMs, App Service, Azure SQL DB/SQL MI, Storage Accounts, Azure Backup, Azure Monitor, Log Analytics, Terraform/Bicep, Azure DevOps/GitHub Actions, PowerShell, Azure CLI",
      },
      bcdr: {
        title: "BCDR Plan & Execution",
        summary:
          "Defined and tested recovery strategy with automation and resilience patterns.",
        impact: [
          "Defined BCDR strategy with application tiering and clear RTO/RPO targets, then implemented and tested recovery procedures end to end.",
          "Reduced recovery risk by automating backups, failover steps, and validation checks, and by documenting runbooks for operations teams.",
          "Increased service resilience using zone or region redundancy patterns, and validated readiness through scheduled DR drills.",
        ],
        tech: "Azure Backup, Recovery Services Vault, Azure Site Recovery, Availability Zones, GRS, Traffic Manager/Front Door, App Gateway/Load Balancer, Azure Monitor, Log Analytics, Azure Automation/Logic Apps, Key Vault, PowerShell, Azure CLI",
      },
    },
  },
  experience: {
    heading: {
      professional: "Professional",
      experience: "Experience",
    },
    intro: "A journey through enterprise cloud architecture and transformation",
    toolsAltSuffix: "tools icons",
  },
  skills: {
    label: "Skills",
    heading: {
      tech: "Tech",
      stack: "Stack",
    },
    intro:
      "Grouped expertise across cloud architecture, automation, security, and reliability.",
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
        title: "Containers",
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
    education: "Education",
    certifications: "Certifications",
  },
  about: {
    label: "About",
    heading: {
      focusedOn: "Focused on",
      secureCloud: "secure cloud",
    },
    paragraphs: [
      "I’m a Cloud Solutions Architect focused on secure, scalable, and compliant Azure platforms for regulated environments.",
      "I care about governance, automation, and measurable outcomes.",
      "I translate business needs into practical reference architectures and repeatable delivery.",
      "Open to Cloud Solutions Architect and Cloud Security roles in Europe (hybrid/remote).",
    ],
    focusAreasTitle: "Focus Areas",
    focusAreas: [
      "Azure Landing Zone Design & Governance",
      "Cloud Migration Strategy & Execution",
      "DevOps Automation & Cost Optimization",
      "Infrastructure as Code (Terraform & Bicep)",
    ],
    toolingAlt: "About tooling icons",
  },
  contact: {
    heading: {
      letsBuild: "Let’s build your",
      nextPlatform: "next platform",
    },
    intro:
      "Open to Cloud Architect and DevOps-focused platform roles. Reach out to discuss how I can help modernize your cloud infrastructure.",
    cards: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location",
    },
    locationValue: "Greater Düsseldorf",
    cta: "Schedule a Consultation",
    footer: "Built with passion for cloud architecture.",
  },
};

export default en;
