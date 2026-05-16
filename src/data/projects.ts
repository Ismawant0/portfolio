import { ReactNode } from "react";

export type Project = {
  id: string;
  title: string;
  role: string;
  description: string;
  category: "PWA" | "WEB";
  problemSolved?: string;
  highlights?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  icon?: string;
};

export const projects: Project[] = [
  {
    id: "tokoaida",
    title: "Tokoaida",
    role: "Front-End Developer",
    category: "PWA",
    description:
      "A modern, clean, intuitive, and SEO-optimized e-commerce platform built to deliver seamless shopping experiences with strong usability and performance.",
    problemSolved: "Streamlined the digital shopping journey for specialized products, focusing on conversion rates and mobile-first accessibility.",
    highlights: [
      "Clean UI/UX",
      "Intuitive shopping flow",
      "Production-ready architecture",
      "Responsive design",
      "SEO optimization",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://tokoida.vercel.app/",
    githubUrl: "#",
    image: "/images/projects/tokoaida.png",
    icon: "https://www.google.com/s2/favicons?domain=tokoida.vercel.app&sz=128",
  },
  {
    id: "igaba",
    title: "IGABA.id",
    role: "Front-End Developer",
    category: "WEB",
    description:
      "A modern organization website designed with clean architecture, responsive experience, and strong SEO optimization to improve visibility and user engagement.",
    problemSolved: "Centralized organizational content into a structured, SEO-friendly hub that significantly improved public reach and accessibility.",
    highlights: [
      "Accessibility",
      "Responsive design",
      "Content organization",
      "Performance optimization",
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://igaba.id",
    githubUrl: "#",
    image: "/images/projects/igaba.png",
    icon: "https://www.google.com/s2/favicons?domain=igaba.id&sz=128",
  },
  {
    id: "abapercontohan",
    title: "abapercontohan.com",
    role: "Front-End Developer",
    category: "WEB",
    description:
      "A modern educational platform focused on accessibility, clean interface, responsiveness, and user-friendly content delivery.",
    problemSolved: "Created a simplified, high-performance interface for educational resources, ensuring zero friction for users across all devices.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://abapercontohan.com",
    githubUrl: "#",
    image: "/images/projects/abapercontohan.png",
    icon: "https://www.google.com/s2/favicons?domain=abapercontohan.com&sz=128",
  },
  {
    id: "coinity",
    title: "Coinity",
    role: "Product & Front-End Developer",
    category: "PWA",
    description:
      "A progressive web application (PWA) community portal for transparent reporting and virtual payment management.",
    problemSolved: "Implemented a transparent, real-time reporting system coupled with a secure virtual payment workflow for community management.",
    highlights: [
      "PWA experience",
      "Community-driven platform",
      "Payment workflow",
      "Transparency system",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    liveUrl: "https://coinity-f05d8.web.app/",
    githubUrl: "#",
    image: "/images/projects/coinity.png",
    icon: "https://www.google.com/s2/favicons?domain=coinity-f05d8.web.app&sz=128",
  },
  {
    id: "blonjoo",
    title: "Blonjoo",
    role: "Front-End Developer",
    category: "PWA",
    description: "A modern and clean e-commerce platform for household essentials, designed with a focus on simplicity and a seamless shopping experience.",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://blonjoodb-104e5.web.app/",
    githubUrl: "#",
    icon: "https://www.google.com/s2/favicons?domain=blonjoodb-104e5.web.app&sz=128",
  },
  {
    id: "1home",
    title: "1Home",
    role: "Full-Stack Developer",
    category: "PWA",
    description: "A collaborative family financial management platform designed to streamline tracking and synchronize household expenses among family members in real-time.",
    problemSolved: "Simplified household budgeting by centralizing financial data and enabling real-time collaboration, ensuring complete financial transparency within the family.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://home-29ebb.web.app/",
    githubUrl: "#",
    icon: "https://www.google.com/s2/favicons?domain=home-29ebb.web.app&sz=128",
  },
];
