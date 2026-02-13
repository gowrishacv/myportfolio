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
  renderHeader?: boolean;
  hideFirstHeading?: boolean;
  hideTableOfContents?: boolean;
};

type Frontmatter = {
  attributes: Record<string, string>;
  body: string;
};

const extractFrontmatter = (input: string): Frontmatter => {
  const trimmed = input.trimStart();
  if (!trimmed.startsWith("---\n") && trimmed !== "---") {
    return { attributes: {}, body: input };
  }

  // Frontmatter is from first --- to the next --- on its own line.
  const lines = trimmed.split("\n");
  if (lines[0].trim() !== "---") return { attributes: {}, body: input };

  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) return { attributes: {}, body: input };

  const frontmatterLines = lines.slice(1, endIndex);
  const attributes: Record<string, string> = {};
  for (const line of frontmatterLines) {
    const match = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line);
    if (!match) continue;
    const key = match[1];
    const value = match[2]?.trim() ?? "";
    attributes[key] = value.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
  }

  const body = lines
    .slice(endIndex + 1)
    .join("\n")
    .trimStart();
  return { attributes, body };
};

const extractIntro = (markdownBody: string) => {
  // Try to capture a short subtitle under the first H1.
  // Example:
  // # Title
  // **Subtitle**
  // Another line.
  const match = /^#\s+.+\n([\s\S]*?)(\n\n|\n---\n)/m.exec(markdownBody);
  if (!match) return "";
  const raw = match[1]
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 3)
    .join(" ");
  return raw.replace(/\*\*/g, "").trim();
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
  renderHeader = false,
  hideFirstHeading = true,
  hideTableOfContents = true,
}: CaseStudyMarkdownProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const seenH1Ref = useRef(false);
  const skippingTocRef = useRef(false);

  const [markdown, setMarkdown] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");

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
        if (cancelled) return;

        const { attributes, body } = extractFrontmatter(text);
        const fmTitle = attributes.title || "";
        setTitle(fmTitle);
        setSubtitle(extractIntro(body));
        setMarkdown(body);
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
      {renderHeader ? (
        <header className="mb-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Case Study
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            {title || "Azure Landing Zone"}
          </h1>
          {subtitle ? (
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </header>
      ) : null}

      <article
        className={
          articleClassName ??
          "prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:scroll-mt-24 prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-2xl md:prose-h2:text-3xl prose-h3:text-xl md:prose-h3:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:my-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-a:text-primary hover:prose-a:text-primary/80 prose-hr:my-8 prose-hr:border-border/40 prose-img:rounded-xl prose-img:border prose-img:border-border/60 prose-blockquote:border-l-primary/40 prose-blockquote:bg-muted/30 prose-blockquote:rounded-lg prose-blockquote:px-4 prose-blockquote:py-1"
        }
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1({ children, ...props }) {
              const text = nodeToText(children);
              const id = slugify(text);

              if (hideFirstHeading && !seenH1Ref.current) {
                seenH1Ref.current = true;
                // Keep anchor support without visually duplicating the page title.
                return <span id={id} className="sr-only" />;
              }

              return (
                <h1 id={id} {...props}>
                  {children}
                </h1>
              );
            },
            h2({ children, ...props }) {
              const text = nodeToText(children);
              const id = slugify(text);

              const isToc = text.trim().toLowerCase() === "table of contents";
              if (hideTableOfContents && isToc) {
                skippingTocRef.current = true;
                return null;
              }

              if (skippingTocRef.current) {
                // We were skipping ToC content; new non-ToC H2 means we can stop skipping.
                skippingTocRef.current = false;
              }

              return (
                <h2 id={id} {...props}>
                  {children}
                </h2>
              );
            },
            h3({ children, ...props }) {
              if (skippingTocRef.current) return null;

              const text = nodeToText(children);
              const id = slugify(text);
              return (
                <h3 id={id} {...props}>
                  {children}
                </h3>
              );
            },
            p({ children, ...props }) {
              if (skippingTocRef.current) return null;
              return <p {...props}>{children}</p>;
            },
            ul({ children, ...props }) {
              if (skippingTocRef.current) return null;
              return <ul {...props}>{children}</ul>;
            },
            ol({ children, ...props }) {
              if (skippingTocRef.current) return null;
              return <ol {...props}>{children}</ol>;
            },
            hr(props) {
              if (skippingTocRef.current) return null;
              return <hr {...props} />;
            },
            img({ alt, ...props }) {
              return <img alt={alt ?? ""} loading="lazy" {...props} />;
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
              if (skippingTocRef.current) return null;

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
