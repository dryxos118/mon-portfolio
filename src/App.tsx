import React, { useEffect, useState } from "react";
import { useScrollProgress } from "./logic/hooks/useScrollProgress";
import { NavBar } from "./components/common/NavBar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/sections/Hero";
import { ExperienceEducation } from "./components/sections/ExperienceEducation";
import { Contact } from "./components/sections/Contact";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { useScrollSpy } from "./logic/hooks/useScrollSpy";
import { NAV_LINKS } from "./data/navbar";
import { SplashScreen } from "./components/SplashScreen";
import { Footer } from "./components/common/Footer";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const progress = useScrollProgress();
  const active = useScrollSpy(
    NAV_LINKS.map((x) => x.id),
    {
      offset: 80,
      initialId: "home",
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const saved = localStorage.getItem("theme");
  const initialTheme =
    saved ??
    (window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  document.documentElement.setAttribute(
    "data-bs-theme",
    initialTheme as "light" | "dark"
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ToastContainer position="top-center" />
      {loading ? (
        <SplashScreen />
      ) : (
        <div style={{ minHeight: "100dvh" }}>
          <ScrollProgress value={progress} />
          <NavBar active={active} onClick={scrollTo} />

          <main className="p-2">
            <Hero onCta={scrollTo} />
            <ExperienceEducation />
            <Projects />
            <Skills />
            <Contact />
          </main>

          <Footer />

          <ScrollTopButton />
        </div>
      )}
    </>
  );
};

export default App;
