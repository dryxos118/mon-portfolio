import { SKILLS } from "../../data/skills";
import type { Skill } from "../../types";

export const getSkills = (names: string[]): Skill[] => {
  return SKILLS.filter((skill) => names.includes(skill.name));
};
