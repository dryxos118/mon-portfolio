import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="py-4 border-top">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <span className="text-secondary small">
          © {new Date().getFullYear()} Alexis Hu — Tous droits réservés.
        </span>
        <div className="d-flex align-items-center flex-wrap gap-3 small">
          <a
            href="https://linkedin.com/in/alexis-hu-hiest-46bb76254"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
            title="Contact moi sur LinkedIn"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/dryxos118"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
            title="Vien voir mon compte GitHub"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
