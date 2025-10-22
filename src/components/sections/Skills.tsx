import React, { useState } from "react";
import { SKILLS } from "../../data/skills";
import { MotionSection } from "../common/MotionSection";
import { SectionHeader } from "../common/SectionHeader";
import type { Rating, SkillGroups } from "../../types";
import { SkillGrid } from "../skills/SkillGrid";
import { SkillRatingFilter } from "../skills/SkillRatingFilter";

export const Skills: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<Rating | null>(null);

  const filteredSkills = selectedRating
    ? SKILLS.filter((s) => s.rating === selectedRating)
    : SKILLS;

  const groups: SkillGroups = {
    Langages: filteredSkills.filter((s) => s.type === "LANGUAGES"),
    Frameworks: filteredSkills.filter((s) => s.type === "FRAMEWORKS"),
    Outils: filteredSkills.filter((s) => s.type === "TOOLS"),
  };

  return (
    <MotionSection id="skills" className="py-5 border-bottom">
      <div className="container">
        <SectionHeader title="Compétences" subTitle="Stack & outils utilisés">
          <SkillRatingFilter
            selected={selectedRating}
            onChange={setSelectedRating}
          />
        </SectionHeader>

        <SkillGrid groups={groups} />
      </div>
    </MotionSection>
  );
};
