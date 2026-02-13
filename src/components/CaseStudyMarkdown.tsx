import {
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import MermaidBlock from "@/components/MermaidBlock";

type ScrollMode = "window" | "container";

type CaseStudyMarkdownProps = {
  mdUrl: string;
  initialAnchorId?: string;
  scrollMode?: ScrollMode;
  containerClassName?: string;
  articleClassName?: string;
};

const stripFrontmatter = (input: string) => {
  const trimmed = input.trimStart();
  if (!trimmed.startsWith("---\n") && trimmed !== "---") return input;

  // Frontmatter is from first --- to the next --- on its own line.
  const lines = trimmed.split("\n");
  if (lines[0].trim() !== "---") return input;

  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) return input;
  return lines
    .slice(endIndex + 1)
    .join("\n")
    .trimStart();
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const nodeToText = (node: ReactNode): string => {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (isValidElement(node)) return nodeToText(node.props.children);
  return "";
};

const CaseStudyMarkdown = ({
  mdUrl,
  initialAnchorId,
  scrollMode = "window",
  containerClassName,
  articleClassName,
}: CaseStudyMarkdownProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [markdown, setMarkdown] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const normalizedAnchor = useMemo(() => {
    if (!initialAnchorId) return null;
    return decodeURIComponent(initialAnchorId.replace(/^#/, ""));
  }, [initialAnchorId]);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setError(null);
        const res = await fetch(mdUrl, { cache: "force-cache" });
        if (!res.ok) {
          throw new Error(`Failed to load case study markdown (${res.status})`);
        }
        const text = await res.text();
        if (!cancelled) setMarkdown(stripFrontmatter(text));
      } catch (e) {
        if (!cancelled) {
          setMarkdown("");
          setError(e instanceof Error ? e.message : String(e));
        }
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, [mdUrl]);

  const scrollToId = (id: string) => {
    if (!id) return;

    if (scrollMode === "window") {
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    requestAnimationFrame(() => {
      const root = containerRef.current;
      if (!root) return;
      const el = root.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  useEffect(() => {
    if (!markdown || !normalizedAnchor) return;
    scrollToId(normalizedAnchor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markdown, normalizedAnchor]);

  if (error) {
    return (
      <div className="rounded-2xl border border-border bg-card/70 p-6">
        <h2 className="text-xl font-bold mb-2">Case Study</h2>
        <p className="text-sm text-muted-foreground mb-4">
          We couldn’t load the content.
        </p>
        <pre className="text-xs overflow-auto rounded-lg border border-border bg-muted/40 p-4">
          {error}
        </pre>
      </div>
    );
  }

  if (!markdown) {
    return (
      <div className="rounded-2xl border border-border bg-card/70 p-6">
        <p className="text-sm text-muted-foreground">Loading case study…</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={containerClassName}>
      <article
        className={
          articleClassName ??
          "prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-2xl md:prose-h2:text-3xl prose-h3:text-xl md:prose-h3:text-2xl"
        }
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1({ children, ...props }) {
              const text = nodeToText(children);
              const id = slugify(text);
              return (
                <h1 id={id} {...props}>
                  {children}
                </h1>
              );
            },
            h2({ children, ...props }) {
              const text = nodeToText(children);
              const id = slugify(text);
              return (
                <h2 id={id} {...props}>
                  {children}
                </h2>
              );
            },
            h3({ children, ...props }) {
              const text = nodeToText(children);
              const id = slugify(text);
              return (
                <h3 id={id} {...props}>
                  {children}
                </h3>
              );
            },
            a({ href, children, ...props }) {
              if (href?.startsWith("#")) {
                const target = href.slice(1);
                return (
                  <a
                    href={href}
                    {...props}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(target);
                    }}
                  >
                    {children}
                  </a>
                );
              }

              return (
                <a
                  href={href}
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              );
            },
            code({ className, children }) {
              const raw = String(children ?? "");
              const match = /language-(\w+)/.exec(className || "");
              const lang = match?.[1];

              if (lang === "mermaid") {
                return (
                  <MermaidBlock
                    chart={raw.trim()}
                    className="my-6 rounded-xl border border-border bg-card/50 p-4 overflow-auto"
                  />
                );
              }

              return <code className={className}>{children}</code>;
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default CaseStudyMarkdown;
