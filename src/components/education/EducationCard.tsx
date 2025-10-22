import React from "react";
import type { EducationItem } from "../../types";
import { Card } from "../common/Card";
import { FaGraduationCap } from "react-icons/fa";

type Props = { item: EducationItem };

export const EducationCard: React.FC<Props> = ({ item }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>

        <Card.SubTitle>
          {item.school} • {item.period}
        </Card.SubTitle>

        {item.description && <p className="mb-0">{item.description}</p>}
      </Card.Body>
    </Card>
  );
};
