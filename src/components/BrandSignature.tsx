import { Cloud } from "lucide-react";

import { cn } from "@/lib/utils";

type BrandSignatureProps = {
  className?: string;
  compact?: boolean;
};

const BrandSignature = ({ className, compact = false }: BrandSignatureProps) => {
  return (
    <aside
      className={cn(
        "rounded-2xl border border-border/70 bg-background/80 p-4 backdrop-blur-xl shadow-[0_12px_32px_-18px_rgba(0,0,0,0.35)]",
        className,
      )}
      aria-label="Infrawisdom brand"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
          <Cloud className="h-5 w-5 fill-current" />
        </span>

        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            infrawisdom
          </p>
          <p
            className={cn(
              "mt-1 text-sm font-medium leading-relaxed text-foreground",
              compact && "text-xs",
            )}
          >
            Enterprise cloud architecture. secure. scalable. governed.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default BrandSignature;
