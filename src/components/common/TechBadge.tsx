import React, { type ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
  color?: string;
  className?: string;
};

export const TechBadge: React.FC<Props> = ({
  icon,
  title,
  color,
  className = "",
}) => {
  return (
    <div className={`d-tech-badge ${className}`}>
      <div className="d-flex justify-content-center gap-2">
        {icon && <div style={{ color }}>{icon}</div>}
        <span className="fw-medium">{title}</span>
      </div>
    </div>
  );
};
