// lib/projects.ts

import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "donut-component-library",
    title: "Donut UI: React Component Library",
    image: "/donut/donut_main.jpg",
    alt: "donut component library thumbnail",
    subtitle: "Component Library",
    description: "A modular and customizable React component library designed to streamline UI development with reusable, accessible, and visually consistent components.",
    skills: [
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/storybook.svg", name: "storybook" },
      { icon: "/skills-colored/vite.svg", name: "vite" },
      { icon: "/skills-colored/vitest.svg", name: "vitest" },
      { icon: "/skills-colored/jest.svg", name: "jest" },
    ],
    skillsExtended: [
      { icon: "/skills-colored/html.svg", name: "html" },
      { icon: "/skills-colored/css.svg", name: "css" },
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/storybook.svg", name: "storybook" },
      { icon: "/skills-colored/vite.svg", name: "vite" },
      { icon: "/skills-colored/vitest.svg", name: "vitest" },
      { icon: "/skills-colored/jest.svg", name: "jest" },
      { icon: "/skills-colored/eslint.svg", name: "eslint" },
      { icon: "/skills-colored/prettier.png", name: "prettier" },
    ],
    images: [
      "/donut/donut_main.jpg",
      "/donut/donut_1.jpg",
      "/donut/donut_2.jpg",
      "/donut/donut_3.jpg",
    ],
    externalLinks: [
      {
        text: "NPM Package",
        link: "https://www.npmjs.com/package/@satyam95/donutui/",
      },
      {
        text: "Documentation",
        link: "https://donut-ruddy-tau.vercel.app/",
      },
      {
        text: "Github (Source Code)",
        link: "https://github.com/satyam95/donut",
      },
      {
        text: "Storybook",
        link: "https://donut-storybook.vercel.app",
      },
      {
        text: "Coverage Report",
        link: "https://donut-coverage-report.vercel.app/",
      },
    ],
  },
  {
    slug: "food-delivery-web-app",
    title: "Food Delivery Web App",
    image: "/fd/fd_main.jpg",
    alt: "food delivery web thumbnail",
    subtitle: "Web App UI",
    description: "A web app for seamless food ordering and delivery.",
    skills: [
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/nextjs.svg", name: "next.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/rtl.png", name: "react testing library" },
      { icon: "/skills-colored/jest.svg", name: "jest" },
    ],
    skillsExtended: [
      { icon: "/skills-colored/html.svg", name: "html" },
      { icon: "/skills-colored/css.svg", name: "css" },
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/nextjs.svg", name: "next.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/rtl.png", name: "react testing library" },
      { icon: "/skills-colored/jest.svg", name: "jest" },
    ],
    images: [
      "/fd/fd_main.jpg",
      "/fd/fd_1.jpg",
      "/fd/fd_2.jpg",
      "/fd/fd_3.jpg",
      "/fd/fd_4.jpg",
    ],
    externalLinks: [
      {
        text: "Github (Source Code)",
        link: "https://github.com/satyam95/Food-Delivery-App",
      },
    ],
  },
];
