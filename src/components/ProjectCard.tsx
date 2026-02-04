import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl = "#",
  repoUrl = "#",
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <span className="text-4xl font-bold text-muted-foreground/20">
              {title.charAt(0)}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={demoUrl}
            className="inline-flex items-center justify-center rounded-full bg-white text-black h-10 px-6 text-sm font-medium transition-transform transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            Demo <ExternalLink className="ml-2 h-4 w-4" />
          </a>
          <a
            href={repoUrl}
            className="inline-flex items-center justify-center rounded-full bg-black/50 text-white border border-white/20 h-10 w-10 transition-transform transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 hover:bg-black/70"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
