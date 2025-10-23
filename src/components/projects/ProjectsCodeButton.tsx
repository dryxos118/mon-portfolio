import React from "react";
import { FaCodeBranch, FaServer, FaGlobe } from "react-icons/fa";

type Props = {
  repoUrl?: string;
  repoFront?: string;
  repoBack?: string;
};

export const ProjectsCodeButton: React.FC<Props> = ({
  repoUrl,
  repoFront,
  repoBack,
}) => {
  if (repoUrl) {
    return (
      <a
        href={repoUrl}
        className="btn btn-secondary btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
        target="_blank"
        rel="noreferrer"
      >
        <FaCodeBranch /> Voir le code
      </a>
    );
  }

  const hasFront = !!repoFront;
  const hasBack = !!repoBack;

  return (
    <>
      {hasFront && (
        <a
          href={repoFront}
          className="btn btn-secondary btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
          target="_blank"
          rel="noreferrer"
        >
          <FaGlobe /> Voir le Front
        </a>
      )}
      {hasBack && (
        <a
          href={repoBack}
          className="btn btn-secondary btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
          target="_blank"
          rel="noreferrer"
        >
          <FaServer /> Voir le back
        </a>
      )}
    </>
  );
};
