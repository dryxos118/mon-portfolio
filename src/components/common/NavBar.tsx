import React from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../data/navbar";
import { ThemeToggle } from "../ThemeToggle";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useNavbarCollapse } from "../../logic/hooks/useNavbarCollapse";

type Props = { active?: string; onClick: (id: string) => void };

export const NavBar: React.FC<Props> = ({ active, onClick }) => {
  const { ref, isOpen, toggle, handleNavLink } = useNavbarCollapse();

  return (
    <motion.nav
      className="navbar navbar-expand-md navbar-light border-bottom sticky-top"
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-semibold"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavLink(() => onClick("home"));
          }}
        >
          Alexis Hu
        </a>

        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navMenu"
            aria-expanded={isOpen}
            onClick={toggle}
          >
            {isOpen ? <FaX size={21} /> : <FaBars size={21} />}
          </button>
          <div className="d-flex d-md-none">
            <ThemeToggle />
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navMenu" ref={ref}>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${
                    active === link.id ? "active text-primary" : ""
                  }`}
                  aria-current={active === link.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLink(() => onClick(link.id));
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-none d-md-flex ms-md-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
