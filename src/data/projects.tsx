import type { Project } from "../types";
import PORTFOLIO from "../assets/images/portfolio.png";
import THEBARAPP from "../assets/images/the_bar_app.png";
import POCKETBUDGET from "../assets/images/pocket_budget.png";

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "The Bar App",
    image: THEBARAPP,
    description: `Application web complète pour la gestion d’un catalogue de boissons et des stocks.
      Développement d’une API REST sécurisée avec Spring Boot et intégration d’un front moderne Vue 3 / Vuetify.
      Authentification via JWT et gestion dynamique des catégories, ingrédients et favoris.`,
    tags: ["Spring Boot", "Vue 3", "Vuetify", "JPA/Hibernate", "JWT"],
    repoFront: "https://github.com/dryxos118/the_bar-app_web",
    repoBack: "https://github.com/dryxos118/the_bar_app",
  },
  {
    id: "p2",
    title: "Pocket Budget",
    image: POCKETBUDGET,
    description: `Application de gestion de budget personnel développée avec Blazor.
      Suivi des dépenses, création de comptes et visualisation de données via tableaux et graphiques interactifs.
      Authentification sécurisée par JWT et stockage côté serveur avec ASP.NET / C#.`,
    tags: ["Blazor", "MudBlazor", "C#", "ASP.NET", "JWT"],
    repoUrl: "https://github.com/dryxos118/PocketBudget",
  },
  {
    id: "p3",
    title: "Portfolio",
    image: PORTFOLIO,
    description: `Portfolio personnel développé avec React et TypeScript.
      Design moderne et responsive avec Bootstrap, animations légères et navigation fluide par ancres.
      Présente mes projets, compétences et expériences de manière claire.`,
    tags: ["React", "TypeScript", "Bootstrap", "EmailJS"],
    link: "https://dryxos118.github.io/mon-portfolio/",
    repoUrl: "https://github.com/dryxos118/mon-portfolio",
  },
];
