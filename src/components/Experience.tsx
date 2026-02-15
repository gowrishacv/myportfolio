import { motion } from "framer-motion";
import {
  AlarmClockCheck,
  BadgeCheck,
  CloudCog,
  Gauge,
  Server,
  Shield,
  Workflow,
} from "lucide-react";

const impactMetrics = [
  {
    value: "26+",
    label: "Azure Platforms",
    detail: "Enterprise cloud foundations designed and delivered.",
    icon: CloudCog,
    tone: "text-sky-600",
  },
  {
    value: "10K",
    label: "IaC Resources",
    detail: "Provisioned and governed through Terraform modules.",
    icon: Workflow,
    tone: "text-indigo-600",
  },
  {
    value: "60+",
    label: "Production Migrations",
    detail: "Workloads moved with controlled cutovers.",
    icon: Server,
    tone: "text-emerald-600",
  },
  {
    value: "99%",
    label: "Compliance Alignment",
    detail: "Security controls aligned to enterprise policy baselines.",
    icon: Shield,
    tone: "text-emerald-700",
  },
  {
    value: "5+",
    label: "Industries Served",
    detail: "Finance, manufacturing, telecom, consulting, and public sector.",
    icon: BadgeCheck,
    tone: "text-rose-600",
  },
  {
    value: "3x",
    label: "Delivery Velocity",
    detail: "Faster environment setup through reusable blueprints.",
    icon: Gauge,
    tone: "text-amber-600",
  },
  {
    value: "75%",
    label: "Manual Effort Reduced",
    detail: "Operations streamlined by policy-driven automation.",
    icon: AlarmClockCheck,
    tone: "text-blue-600",
  },
];

const Experience = () => {
  return (
    <section id="impact" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            impact --metrics
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Impact by the <span className="gradient-text">Numbers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Measurable outcomes from cloud architecture, migration, governance, and platform engineering work.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.article
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/70 bg-card/85 p-6 shadow-sm"
              >
                <Icon className={`h-5 w-5 ${metric.tone}`} />
                <p className="mt-3 font-mono text-3xl font-bold text-foreground">{metric.value}</p>
                <p className="mt-1 text-sm font-semibold text-foreground/90">{metric.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
