import { getSkills } from "../logic/utils/utils";
import type { EducationItem, ExperienceItem } from "../types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp1",
    title: "Développeur Full Stack",
    company: "Groupe Ciuch",
    period: "Septembre 2023 – Août 2025",
    description: `Participation au développement d’un WCS (Warehouse Control System) en suivant la méthodologie Agile (daily meetings, weekly reviews, etc.). 
      Contribution au développement de nouvelles fonctionnalités ainsi qu’à la résolution d’anomalies.`,
    techs: getSkills(["C#", "ASP.NET", "Blazor", "GraphQL", "SQL"]),
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: "edu1",
    title: "Concepteur développeur d’applications – Alternance",
    school: "Foreach Academy",
    period: "Septembre 2023 – Août 2025",
    description: `Formation en alternance axée sur le développement full stack. 
      Apprentissage approfondi de Java et Spring Boot pour le back-end,
      et de Vue.js, Flutter (Dart) pour le front-end et Docker pour la conteneurisation.`,
  },
  {
    id: "edu2",
    title: "Formation développeur Web & Web Mobile",
    school: "Foreach Academy",
    period: "Septembre 2022 - Août 2023",
    description: `Apprentissage des bases du développement web moderne :
      HTML, CSS, JavaScript, React.js, Node.js, Express, gestion de bases de données et utilisation de Git/GitHub.`,
  },
];
