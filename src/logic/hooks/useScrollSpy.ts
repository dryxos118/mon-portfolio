import { useEffect, useRef, useState } from "react";

type Options = {
  offset?: number;
  minScrollForBottom?: number;
  initialId?: string;
};

export function useScrollSpy(
  sectionIds: string[],
  { offset = 80, minScrollForBottom = 24, initialId }: Options = {}
) {
  const [activeId, setActiveId] = useState<string>(
    initialId ?? sectionIds[0] ?? ""
  );

  const hasUserScrolled = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (window.scrollY > minScrollForBottom) hasUserScrolled.current = true;

      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const doc = document.documentElement;

        const atBottom =
          window.scrollY + window.innerHeight >= doc.scrollHeight - 2;
        if (atBottom && hasUserScrolled.current && sectionIds.length > 0) {
          setActiveId(sectionIds[sectionIds.length - 1]);
          ticking = false;
          return;
        }

        let currentId = activeId || sectionIds[0] || "";
        let bestDelta = Number.POSITIVE_INFINITY;
        let foundVisible = false;

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();
          const visible = rect.bottom > 0 && rect.top < window.innerHeight;
          if (!visible) continue;

          foundVisible = true;
          const delta = Math.abs(rect.top - offset);
          if (delta < bestDelta) {
            bestDelta = delta;
            currentId = id;
          }
        }

        if (!foundVisible) {
          currentId = activeId || sectionIds[0] || "";
        }

        setActiveId(currentId);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("orientationchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("orientationchange", handleScroll);
    };
  }, [sectionIds.join("|"), offset, minScrollForBottom]);

  return activeId;
}
