import React from "react";
import { MotionSection } from "../common/MotionSection";
import { HeroHeader } from "../hero/HeroHeader";
import { HeroTyped } from "../hero/HeroTyped";
import { HeroBadgeGroup } from "../hero/HeroBadgeGroup";
import { INFO, QUALITIES } from "../../data/hero";
import { HeroCTAGroup } from "../hero/HeroCTAGroup";

type Props = { onCta: (id: string) => void };

export const Hero: React.FC<Props> = ({ onCta }) => {
  return (
    <MotionSection
      id="home"
      className="py-5 py-lg-6 border-bottom d-flex align-items-center"
    >
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center mx-auto">
          <HeroHeader />
          <HeroTyped />

          <p className="display-6 fw-bold mb-3 text-center">
            Je conçois des applications web{" "}
            <span className="text-primary">modernes</span> & performantes.
          </p>
          <p className="lead mb-3 text-center">
            Diplômé d’un Bachelor Concepteur Développeur d’Applications (Bac+3)
          </p>

          <HeroBadgeGroup items={QUALITIES} className="mb-3" />
          <HeroBadgeGroup items={INFO} className="mb-4" />

          <HeroCTAGroup onCta={onCta} />
        </div>
      </div>
    </MotionSection>
  );
};
