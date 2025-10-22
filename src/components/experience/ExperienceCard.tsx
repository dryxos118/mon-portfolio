import React from "react";
import type { ExperienceItem } from "../../types";
import { Card } from "../common/Card";
import { TechBadge } from "../common/TechBadge";

type Props = { item: ExperienceItem };

export const ExperienceCard: React.FC<Props> = ({ item }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>

        <Card.SubTitle>
          {item.company} • {item.period}
        </Card.SubTitle>

        <p className="mb-3" style={{ whiteSpace: "pre-line" }}>
          {item.description}
        </p>

        {item.techs?.length > 0 && (
          <div className="d-flex flex-wrap gap-2">
            {item.techs.map((tech) => {
              return (
                <TechBadge
                  key={tech.name}
                  icon={tech.icon}
                  title={tech.name}
                  color={tech.color}
                />
              );
            })}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
