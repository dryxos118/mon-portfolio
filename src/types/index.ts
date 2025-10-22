import type { ReactNode } from "react";

/* THEME */

export type Theme = "light" | "dark" | "auto";

/* NAVBAR */

export interface NavLinkItem {
  readonly id: string;
  readonly label: string;
}

/* EXPERIENCE & Formation */

export interface ExperienceItem {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly description: string;
  readonly techs: readonly Skill[];
}

export interface EducationItem {
  readonly id: string;
  readonly title: string;
  readonly school: string;
  readonly period: string;
  readonly description: string;
}

/* PROJECTS */

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly image?: string;
  readonly link?: string;
  readonly repo?: string;
}

/* SKILL */

export type SkillType = "LANGUAGES" | "FRAMEWORKS" | "TOOLS";
export type Rating = 1 | 2 | 3;

export interface Skill {
  readonly name: string;
  readonly icon: ReactNode;
  readonly color: string;
  readonly rating: Rating; // 1..3
  readonly type: SkillType;
}

export interface SkillGroups {
  readonly Langages: readonly Skill[];
  readonly Frameworks: readonly Skill[];
  readonly Outils: readonly Skill[];
}

export interface SkillRatingOption {
  readonly label: string;
  readonly value: Rating | null; // null = Tous
}
