import React, { type JSX } from "react";
import { TechBadge } from "../../components/common/TechBadge";

type Props = {
  items: { icon: JSX.Element; title: string }[];
  className?: string;
};

export const HeroBadgeGroup: React.FC<Props> = ({ items, className }) => (
  <div
    className={`d-flex flex-wrap justify-content-center gap-2 ${
      className ?? ""
    }`}
  >
    {items.map(({ icon, title }) => (
      <TechBadge key={title} icon={icon} title={title} />
    ))}
  </div>
);
