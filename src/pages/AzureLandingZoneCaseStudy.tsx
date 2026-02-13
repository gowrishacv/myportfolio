import {
  isValidElement,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import MermaidBlock from "@/components/MermaidBlock";

const getMarkdownUrl = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}azure-landing-zone-case-study/index.md`;
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

const AzureLandingZoneCaseStudy = () => {
  const mdUrl = useMemo(() => getMarkdownUrl(), []);
  const [markdown, setMarkdown] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

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
        if (!cancelled) setMarkdown(text);
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

  useEffect(() => {
    if (!markdown) return;
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const id = decodeURIComponent(hash.slice(1));
    // Wait for markdown to render before scrolling.
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [markdown]);

  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {error ? (
              <div className="rounded-2xl border border-border bg-card/70 p-6">
                <h1 className="text-2xl font-bold mb-2">Case Study</h1>
                <p className="text-sm text-muted-foreground mb-4">
                  We couldn’t load the content.
                </p>
                <pre className="text-xs overflow-auto rounded-lg border border-border bg-muted/40 p-4">
                  {error}
                </pre>
              </div>
            ) : null}

            {!error && !markdown ? (
              <div className="rounded-2xl border border-border bg-card/70 p-6">
                <p className="text-sm text-muted-foreground">
                  Loading case study…
                </p>
              </div>
            ) : null}

            {markdown ? (
              <article className="prose prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
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
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AzureLandingZoneCaseStudy;
