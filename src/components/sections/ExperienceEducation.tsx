import React from "react";
import { MotionSection } from "../common/MotionSection";
import { EDUCATIONS, EXPERIENCES } from "../../data/experiences";
import { SectionHeader } from "../common/SectionHeader";
import { EducationCard } from "../education/EducationCard";
import { ExperienceCard } from "../experience/ExperienceCard";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const ExperienceEducation: React.FC = () => (
  <MotionSection id="experience" className="py-5 border-bottom">
    <div className="container">
      <SectionHeader
        title="Expérience & Formation"
        subTitle="Mon parcours professionel et de formation"
      />

      <div className="d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-3">
        <div className="col">
          <div className="d-flex align-items-center gap-2 mb-3">
            <FaBriefcase className="text-primary" size={18} />
            <h5 className="mb-0">Expériences professionnelles :</h5>
          </div>
          {EXPERIENCES.map((exp) => (
            <div className="mb-3" key={exp.id}>
              <ExperienceCard item={exp} />
            </div>
          ))}
        </div>

        <div className="d-none d-md-block d-divider mx-2 align-self-stretch" />

        <div className="col">
          <div className="d-flex align-items-center gap-2 mb-3">
            <FaGraduationCap className="text-primary" size={21} />
            <h5 className="mb-0">Formations :</h5>
          </div>

          {EDUCATIONS.map((edu) => (
            <div className="mb-3" key={edu.id}>
              <EducationCard item={edu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </MotionSection>
);
