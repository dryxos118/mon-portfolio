import React from "react";

type Props = { onCta: (id: string) => void };

export const HeroCTAGroup: React.FC<Props> = ({ onCta }) => (
  <div className="d-flex flex-wrap justify-content-center gap-4">
    <button className="btn btn-primary" onClick={() => onCta("projects")}>
      Voir mes projets
    </button>
    <button className="btn btn-secondary" onClick={() => onCta("contact")}>
      Me contacter
    </button>
  </div>
);
