import { useEffect, useId, useMemo, useState } from "react";
import mermaid from "mermaid";

type MermaidBlockProps = {
  chart: string;
  className?: string;
};

const MermaidBlock = ({ chart, className }: MermaidBlockProps) => {
  const reactId = useId();
  const id = useMemo(() => `mermaid-${reactId.replace(/[:]/g, "")}`, [reactId]);

  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "default";

    mermaid.initialize({
      startOnLoad: false,
      theme,
      securityLevel: "strict",
      flowchart: { htmlLabels: false },
    });

    const render = async () => {
      try {
        setError(null);
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled) setSvg(svg);
      } catch (e) {
        if (!cancelled) {
          setSvg("");
          setError(e instanceof Error ? e.message : String(e));
        }
      }
    };

    void render();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className={className}>
        <p className="text-sm font-medium text-destructive mb-2">
          Mermaid diagram failed to render
        </p>
        <pre className="text-xs overflow-auto rounded-lg border border-border bg-muted/40 p-4">
          {error}
        </pre>
      </div>
    );
  }

  return (
    <div
      className={className}
      // Mermaid renders SVG; we store it as trusted output from mermaid with strict security.
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidBlock;
