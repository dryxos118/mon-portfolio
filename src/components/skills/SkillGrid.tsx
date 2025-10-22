import React from "react";
import type { SkillGroups } from "../../types";
import { SkillCard } from "./SkillCard";

type Props = { groups: SkillGroups };

export const SkillGrid: React.FC<Props> = ({ groups }) => {
  return (
    <div className="row row-cols-1 g-4">
      {Object.entries(groups).map(([category, items]) => {
        return (
          <div className="col" key={category}>
            <SkillCard title={category} items={items} />
          </div>
        );
      })}
    </div>
  );
};
