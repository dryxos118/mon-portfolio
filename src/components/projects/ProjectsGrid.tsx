import React from "react";
import type { Project } from "../../types";
import { ProjectsCard } from "./ProjectsCard";

type Props = { projects: Project[] };

export const ProjectsGrid: React.FC<Props> = ({ projects }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {projects.map((project) => {
        return (
          <div className="col" key={project.id}>
            <ProjectsCard project={project} />
          </div>
        );
      })}
    </div>
  );
};
