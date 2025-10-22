import type React from "react";
import Logo from "../../assets/images/alexis_1.png";

export const HeroHeader: React.FC = () => (
  <div className="d-flex flex-column align-items-center">
    <img
      src={Logo}
      alt="Avatar de Dryxxos118"
      className="rounded-circle border shadow-sm mb-3"
      style={{ width: 96, height: 96, objectFit: "cover" }}
    />
    <h1 className="fw-semibold mb-3">Dryxos118</h1>
  </div>
);
