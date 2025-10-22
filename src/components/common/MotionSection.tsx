import React from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

type Props = React.PropsWithChildren<{
  id: string;
  className?: string;
  style?: React.CSSProperties;
  distance?: number;
  delay?: number;
  once?: boolean;
}>;

export const MotionSection: React.FC<Props> = ({
  id,
  className,
  style,
  children,
  distance = 24,
  delay = 0,
  once = true,
}) => {
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut", delay } as Transition,
    },
  };

  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={prefersReduced ? undefined : "hidden"}
      whileInView={prefersReduced ? undefined : "show"}
      viewport={{ amount: 0.15, once }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};
