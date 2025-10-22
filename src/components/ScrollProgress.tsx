import React from "react";

export const ScrollProgress: React.FC<{ value: number }> = ({ value }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      height: 3,
      background: "var(--color-secondary)",
      width: `${value}%`,
      zIndex: 1050,
      pointerEvents: "none",
      borderRadius: "50px",
    }}
  />
);
