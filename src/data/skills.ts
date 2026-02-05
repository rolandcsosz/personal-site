
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["C++", "Python", "JavaScript", "TypeScript", "HTML/CSS", "Go (studying)"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "Ionic", "Qt", "QML", "Electron", "SCSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Python", "Node.js", "Go", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "MongoDB"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Docker", "Linux", "CI/CD", "Jenkins", "e2e testing", "Playwright", "Cypress"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
  },
];
