import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export const SplashScreen: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Bienvenue sur mon portfolio"],
      typeSpeed: 60,
      showCursor: false,
    });

    return () => typed.destroy();
  });

  return (
    <motion.div
      className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
    >
      <h1 className="fw-bold text-uppercase">dryxos118</h1>
      <span ref={typedRef}></span>
    </motion.div>
  );
};
