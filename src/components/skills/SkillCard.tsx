import React from "react";
import type { Skill } from "../../types";
import { Card } from "../common/Card";
import { TechBadge } from "../common/TechBadge";

type Props = {
  title: string;
  items: Skill[];
};

export const SkillCard: React.FC<Props> = ({ title, items }) => {
  return (
    <Card className="text-center h-100">
      <Card.Body className="py-4">
        <div className="d-flex justify-content-start ms-2 mb-3">
          <h4>{title} :</h4>
        </div>
        <div className="d-flex flex-wrap gap-2">
          {items.map((s) => (
            <TechBadge
              key={s.name}
              title={s.name}
              icon={s.icon}
              color={s.color}
            />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};
