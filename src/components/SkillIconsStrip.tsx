import * as React from "react";

import { cn } from "@/lib/utils";

type SkillIconsStripProps = {
  icons: string;
  label?: string;
  href?: string;
  className?: string;
  perlineMobile?: number;
  perlineDesktop?: number;
  imageAlt?: string;
};

const buildSkilliconsUrl = (options: {
  icons: string;
  theme: "dark" | "light";
  perline: number;
}) => {
  const { icons, theme, perline } = options;
  return `https://skillicons.dev/icons?i=${icons}&perline=${perline}&theme=${theme}`;
};

const SkillIconsStrip = ({
  icons,
  label,
  href = "https://skillicons.dev",
  className,
  perlineMobile = 6,
  perlineDesktop = 10,
  imageAlt = "Tool icons",
}: SkillIconsStripProps) => {
  const urlLightMobile = buildSkilliconsUrl({
    icons,
    theme: "light",
    perline: perlineMobile,
  });
  const urlDarkMobile = buildSkilliconsUrl({
    icons,
    theme: "dark",
    perline: perlineMobile,
  });
  const urlLightDesktop = buildSkilliconsUrl({
    icons,
    theme: "light",
    perline: perlineDesktop,
  });
  const urlDarkDesktop = buildSkilliconsUrl({
    icons,
    theme: "dark",
    perline: perlineDesktop,
  });

  const Img = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img loading="lazy" decoding="async" {...props} />
  );

  return (
    <div className={cn("text-center", className)}>
      {label ? <p className="text-sm font-medium mb-3">{label}</p> : null}
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Open skillicons.dev (external)"
        className="inline-flex justify-center"
      >
        {/* Mobile layout (< sm) */}
        <Img
          src={urlLightMobile}
          alt={imageAlt}
          className="block dark:hidden sm:hidden max-w-full h-auto"
        />
        <Img
          src={urlDarkMobile}
          alt={imageAlt}
          className="hidden dark:block sm:hidden max-w-full h-auto"
        />

        {/* Desktop layout (>= sm) */}
        <Img
          src={urlLightDesktop}
          alt={imageAlt}
          className="hidden sm:block dark:hidden max-w-full h-auto"
        />
        <Img
          src={urlDarkDesktop}
          alt={imageAlt}
          className="hidden sm:hidden dark:sm:block max-w-full h-auto"
        />
      </a>
    </div>
  );
};

export default SkillIconsStrip;
