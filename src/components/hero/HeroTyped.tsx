import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export const HeroTyped: React.FC = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (!ref.current || reduce) return;
    const typed = new Typed(ref.current, {
      strings: [
        "Concepteur d’applications web",
        "Développeur Full-stack",
        "Créateur d’expériences modernes",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  return (
    <h3
      className="text-primary fw-medium mb-3 text-center"
      aria-label="Concepteur d’applications web, développeur Full-stack"
    >
      <span ref={ref} />
    </h3>
  );
};
