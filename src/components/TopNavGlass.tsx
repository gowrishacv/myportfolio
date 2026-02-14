import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
};

type HighlightRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const scrollToSection = (id: string) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const TopNavGlass = () => {
  const { t } = useTranslation();

  const items = useMemo<NavItem[]>(
    () => [
      { id: "home", label: t("nav.home") },
      { id: "about", label: t("nav.about") },
      { id: "impact", label: t("nav.impact") },
      { id: "skills", label: t("nav.skills") },
      { id: "projects", label: t("nav.projects") },
      { id: "contact", label: t("nav.contact") },
    ],
    [t],
  );

  const [activeId, setActiveId] = useState<string>("home");

  const listRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [highlight, setHighlight] = useState<HighlightRect | null>(null);

  const setButtonRef = (id: string) => (el: HTMLButtonElement | null) => {
    buttonRefs.current[id] = el;
  };

  const updateHighlight = useCallback((id: string) => {
    const root = listRef.current;
    const btn = buttonRefs.current[id];
    if (!root || !btn) return;

    const rootRect = root.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    setHighlight({
      x: btnRect.left - rootRect.left,
      y: btnRect.top - rootRect.top,
      width: btnRect.width,
      height: btnRect.height,
    });
  }, []);

  useEffect(() => {
    const idsToObserve = items.map((i) => i.id).filter((id) => id !== "home");

    const elements = idsToObserve
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
          return;
        }

        // If we are near the top, keep Home active.
        if (window.scrollY < 100) setActiveId("home");
      },
      {
        root: null,
        // activate a section a bit before it reaches the very top
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
      },
    );

    for (const el of elements) io.observe(el);

    return () => {
      io.disconnect();
    };
  }, [items]);

  useLayoutEffect(() => {
    updateHighlight(activeId);
  }, [activeId, items, updateHighlight]);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;

    const ro = new ResizeObserver(() => updateHighlight(activeId));
    ro.observe(root);

    const onResize = () => updateHighlight(activeId);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [activeId, updateHighlight]);

  return (
    <nav aria-label={t("nav.aria")} className="pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto",
          "rounded-2xl border border-border/60",
          "bg-background/65 dark:bg-background/35",
          "backdrop-blur-xl",
          "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]",
          "px-2 py-2",
        )}
      >
        <div className="flex items-center">
          <div
            ref={listRef}
            className="relative flex items-center gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {highlight ? (
              <motion.div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute left-0 top-0",
                  "rounded-xl",
                  "bg-background/90 dark:bg-background/60",
                  "border border-border/60",
                  "shadow-sm",
                )}
                initial={false}
                animate={{
                  x: highlight.x,
                  y: highlight.y,
                  width: highlight.width,
                  height: highlight.height,
                }}
                transition={{ type: "spring", stiffness: 520, damping: 38 }}
              />
            ) : null}

            {items.map((item, idx) => {
              const isActive = activeId === item.id;
              const showSeparator = idx !== 0;

              return (
                <div key={item.id} className="flex items-center">
                  {showSeparator ? (
                    <span
                      aria-hidden="true"
                      className="mx-1 h-5 w-px bg-border/60"
                    />
                  ) : null}

                  <button
                    type="button"
                    ref={setButtonRef(item.id)}
                    onClick={() => {
                      setActiveId(item.id);
                      scrollToSection(item.id);
                    }}
                    className={cn(
                      "relative z-10 select-none rounded-xl px-5 py-2 text-sm font-medium transition-colors",
                      "text-muted-foreground hover:text-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      isActive && "text-foreground",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavGlass;
