import React from "react";
import type { Project } from "../../types";
import { Card } from "../common/Card";
import PLACEHOLDER from "../../assets/images/placeholderimage.png";
import { ProjectsCodeButton } from "./ProjectsCodeButton";

type Props = { project: Project };

export const ProjectsCard: React.FC<Props> = ({ project }) => {
  return (
    <Card className="h-100 card-hover">
      <Card.Img src={project.image ?? PLACEHOLDER} alt={project.title} />

      <Card.Body className="d-flex flex-column border-top">
        <Card.Title>{project.title}</Card.Title>
        <Card.SubTitle>{project.tags.join(" • ")}</Card.SubTitle>

        <Card.Text>
          <p className="text-secondary mb-2">{project.description}</p>
        </Card.Text>
      </Card.Body>

      <Card.Footer className="d-flex gap-2">
        {project.link && (
          <a
            href={project.link}
            className="btn btn-primary btn-sm w-100"
            target="_blank"
            rel="noreferrer"
          >
            Voir
          </a>
        )}
        <ProjectsCodeButton
          repoUrl={project.repoUrl}
          repoFront={project.repoFront}
          repoBack={project.repoBack}
        />
      </Card.Footer>
    </Card>
  );
};
