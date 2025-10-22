import React from "react";
import { MotionSection } from "../common/MotionSection";
import { SectionHeader } from "../common/SectionHeader";
import { ContactForm } from "../contact/ContactForm";

export const Contact: React.FC = () => {
  return (
    <MotionSection id="contact" className="py-5">
      <div className="container">
        <SectionHeader
          title="Contact"
          subTitle="Une idée, un projet ou juste envie d'échanger ? Écris-moi et je te répondrai rapidement."
        />

        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <ContactForm />
        </div>
      </div>
    </MotionSection>
  );
};
