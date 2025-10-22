import React from "react";
import type { Rating, SkillRatingOption } from "../../types";
import { FaStar } from "react-icons/fa";
import { Tooltip } from "../common/Tooltip";

interface Props {
  selected: number | null;
  onChange: (value: Rating | null) => void;
}

export const SkillRatingFilter: React.FC<Props> = ({ selected, onChange }) => {
  const options: SkillRatingOption[] = [
    {
      label: "Tous",
      value: null,
    },
    {
      label: "Débutant",
      value: 1,
    },
    {
      label: "Intermédiaire",
      value: 2,
    },
    {
      label: "Avancé",
      value: 3,
    },
  ];

  return (
    <div className="d-flex align-items-center gap-2">
      {options.map((opt) => (
        <Tooltip key={opt.label} text={opt.label}>
          <button
            key={opt.label}
            className={`btn btn-sm ${
              selected === opt.value ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => onChange(opt.value)}
          >
            {opt.value === null ? (
              <span>{opt.label}</span>
            ) : (
              <span className="d-flex align-items-center">
                {[...Array(opt.value)].map((_, i) => (
                  <FaStar key={i} size={21} />
                ))}
              </span>
            )}
          </button>
        </Tooltip>
      ))}
    </div>
  );
};
