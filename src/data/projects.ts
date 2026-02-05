
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  imgset: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CareLog",
    description: "A cross-platform mobile app for android and IOS. Built to help caregivers log and monitor patient vitals and daily activities. Featuring RAG-powered intelligent assistant and other AI features.",
    image: "/imgs/carelog.png",
    imgset: [],
    tags: ["React", "Ionic", "TypeScript", "Python", "Redis", "Vector DB", "Android", "IOS", "RAG", "LLM"],
    links: {
      github: "https://github.com/rolandcsosz/carelog",
      live: "",
    },
  },
  {
    id: 2,
    title: "Balanzo",
    description: "A progressive web application for personal finance management. Installable as native desktop application via Tauri. Features rich data visualizations.",
    image: "/imgs/balanzo.png",
    imgset: [],
    tags: ["PWA", "React", "TypeScript", "PostgreSQL", "Prisma", "Node.js", "OpenAPI"],
    links: {
      github: "https://github.com/rolandcsosz/balanzo",
      live: "",
    },
  },
  {
    id: 3,
    title: "Entity Walker",
    description: "A small, zero-dependency TypeScript library for working with normalised relational data as an immutable, type-safe graph structure. ",
    image: "/imgs/entity.png",
    imgset: [],
    tags: ["TypeScript", "Graph Data Structures", "Immutable Data", "NPM Package"],
    links: {
      github: "https://github.com/AathifZahir/ProIntern",
      live: "https://www.npmjs.com/package/entity-walker"
    },
  }
];
