import React from "react";
import { PROJECTS } from "../../data/projects";
import { MotionSection } from "../common/MotionSection";
import { SectionHeader } from "../common/SectionHeader";
import { ProjectsGrid } from "../projects/ProjectsGrid";

export const Projects: React.FC = () => {
  return (
    <MotionSection id="projects" className="py-5 border-bottom">
      <div className="container">
        <SectionHeader
          title="Projets"
          subTitle="Voici les projets que j'ai réalisée"
        >
          <a
            href="https://github.com/dryxos118?tab=repositories"
            target="_blank"
            className="btn btn-primary"
          >
            Voir tout
          </a>
        </SectionHeader>
        <ProjectsGrid projects={PROJECTS} />
      </div>
    </MotionSection>
  );
};
