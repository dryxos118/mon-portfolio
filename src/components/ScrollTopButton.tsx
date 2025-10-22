import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

export const ScrollTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={scrollToTop}
          initial={
            prefersReduced ? undefined : { opacity: 0, y: 20, scale: 0.9 }
          }
          animate={prefersReduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          exit={prefersReduced ? undefined : { opacity: 0, y: 20, scale: 0.9 }}
          transition={prefersReduced ? undefined : { duration: 0.25 }}
          className="d-scroll-top-btn"
          title="Haut de page"
        >
          <BsArrowUp size={20} color="fff" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
