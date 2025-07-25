import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "invoice-generator",
    title: "InvoiceGen: Create and Manage Invoices Easily",
    image: "/invoice/invoice_main.jpg",
    alt: "invoicegen thumbnail",
    subtitle: "Fullstack App",
    description:
      "InvoiceGen: A simple, intuitive solution for creating, managing, and tracking professional invoices with ease.",
    skills: [
      { icon: "/skills-colored/nextjs.svg", name: "next.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/auth.webp", name: "auth" },
      { icon: "/skills-colored/reactpdf.png", name: "react-pdf" },
      { icon: "/skills-colored/drizzle.png", name: "drizzle" },
      { icon: "/skills-colored/postgresql.png", name: "postgresql" },
    ],
    skillsExtended: [
      { icon: "/skills-colored/html.svg", name: "html" },
      { icon: "/skills-colored/css.svg", name: "css" },
      { icon: "/skills-colored/nextjs.svg", name: "next.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/auth.webp", name: "auth" },
      { icon: "/skills-colored/reactpdf.png", name: "react-pdf" },
      { icon: "/skills-colored/drizzle.png", name: "drizzle" },
      { icon: "/skills-colored/postgresql.png", name: "postgresql" },
      { icon: "/skills-colored/neon.png", name: "neon" },
    ],
    images: ["/invoice/invoice_main.jpg", "/invoice/invoice_1.jpg"],
    externalLinks: [
      {
        text: "Live Preview",
        link: "https://invg.vercel.app/",
      },
      {
        text: "Github (Source Code)",
        link: "https://github.com/satyam95/invoice-generator",
      },
    ],
  },
  {
    slug: "donut-component-library",
    title: "Donut UI: React Component Library",
    image: "/donut/donut_main.jpg",
    alt: "donut component library thumbnail",
    subtitle: "Component Library",
    description:
      "A modular and customizable React component library designed to streamline UI development with reusable, accessible, and visually consistent components.",
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
    slug: "wp-ecom",
    title: "Store: Next.js Ecommerce using Wordpress as Backend",
    image: "/ecom/ecom_main.jpg",
    alt: "next.js ecommerce website thumbnail",
    subtitle: "Next.js App",
    description:
      "Store: A Next.js e-commerce platform seamlessly integrated with WordPress as the backend for content and product management.",
    skills: [
      { icon: "/skills-colored/nextjs.svg", name: "next.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/graphql.svg", name: "graphql" },
      { icon: "/skills-colored/woographql.png", name: "woographql" },
      { icon: "/skills-colored/wordpress.png", name: "wordpress" },
    ],
    skillsExtended: [
      { icon: "/skills-colored/html.svg", name: "html" },
      { icon: "/skills-colored/css.svg", name: "css" },
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/nextjs.svg", name: "next.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/graphql.svg", name: "graphql" },
      { icon: "/skills-colored/woographql.png", name: "woographql" },
      { icon: "/skills-colored/wordpress.png", name: "wordpress" },
    ],
    images: [
      "/ecom/ecom_main.jpg",
      "/ecom/ecom_1.jpg",
      "/ecom/ecom_2.jpg",
      "/ecom/ecom_3.jpg",
      "/ecom/ecom_4.jpg",
      "/ecom/ecom_5.jpg",
      "/ecom/ecom_6.jpg",
      "/ecom/ecom_7.jpg",
      "/ecom/ecom_8.jpg",
    ],
    externalLinks: [
      {
        text: "Live Preview",
        link: "https://ecomkit.vercel.app/",
      },
      {
        text: "Github (Source Code)",
        link: "https://github.com/satyam95/wp-next-ecommerce",
      },
    ],
  },
  {
    slug: "stock-inventory-management",
    title: "Stock: Inventory Management System",
    image: "/stock/stock_main.jpg",
    alt: "dashboard thumbnail",
    subtitle: "MERN STACK",
    description: "A web app for managing product inventory.",
    skills: [
      { icon: "/skills-colored/node.png", name: "node" },
      { icon: "/skills-colored/express.png", name: "express" },
      { icon: "/skills-colored/prisma.png", name: "prisma" },
      { icon: "/skills-colored/postgresql.png", name: "postgresql" },
      { icon: "/skills-colored/nextjs.svg", name: "next.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/redux.svg", name: "redux" },
    ],
    skillsExtended: [
      { icon: "/skills-colored/html.svg", name: "html" },
      { icon: "/skills-colored/css.svg", name: "css" },
      { icon: "/skills-colored/nextjs.svg", name: "next.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/redux.svg", name: "redux" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/shadcn.png", name: "shadcn" },
      { icon: "/skills-colored/node.png", name: "node" },
      { icon: "/skills-colored/express.png", name: "express" },
      { icon: "/skills-colored/prisma.png", name: "prisma" },
      { icon: "/skills-colored/postgresql.png", name: "postgresql" },
    ],
    images: [
      "/stock/stock_main.jpg",
      "/stock/stock_1.jpg",
      "/stock/stock_2.jpg",
      "/stock/stock_3.jpg",
      "/stock/stock_4.jpg",
      "/stock/stock_5.jpg",
    ],
    externalLinks: [
      {
        text: "Live Preview",
        link: "https://stock-dashboard-9611.vercel.app/",
      },
      {
        text: "Github (Source Code)",
        link: "https://github.com/satyam95/stock-dashboard",
      },
    ],
  },
  {
    slug: "brainly",
    title: "Brainly: Link sharing tool",
    image: "/brain/brain_main.jpg",
    alt: "brainly thumbnail",
    subtitle: "MERN STACK",
    description: "A web app that enable you to share you links.",
    skills: [
      { icon: "/skills-colored/node.png", name: "node" },
      { icon: "/skills-colored/express.png", name: "express" },
      { icon: "/skills-colored/mongo.svg", name: "mongodb" },
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/redux.svg", name: "redux" },
    ],
    skillsExtended: [
      { icon: "/skills-colored/html.svg", name: "html" },
      { icon: "/skills-colored/css.svg", name: "css" },
      { icon: "/skills-colored/node.png", name: "node" },
      { icon: "/skills-colored/express.png", name: "express" },
      { icon: "/skills-colored/mongo.svg", name: "mongodb" },
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/tailwind.svg", name: "tailwind" },
      { icon: "/skills-colored/redux.svg", name: "redux" },
    ],
    images: [
      "/brain/brain_1.jpg",
      "/brain/brain_2.jpg",
      "/brain/brain_main.jpg",
      "/brain/brain_3.jpg",
      "/brain/brain_4.jpg",
    ],
    externalLinks: [
      {
        text: "Live Preview",
        link: "https://brainsh.vercel.app/",
      },
      {
        text: "Github (Source Code)",
        link: "https://github.com/satyam95/brainly",
      },
    ],
  },
  {
    slug: "laundry-app",
    title: "Laundry: React Native Expo App",
    image: "/laundry/1.png",
    alt: "laundry app thumbnail",
    subtitle: "React Native App",
    description: "A mobile app let you order laundry services.",
    skills: [
      { icon: "/skills-colored/expo.svg", name: "expo" },
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/firebase.svg", name: "firebase" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/redux.svg", name: "redux" },
    ],
    skillsExtended: [
      { icon: "/skills-colored/expo.svg", name: "expo" },
      { icon: "/skills-colored/react.svg", name: "react.js" },
      { icon: "/skills-colored/firebase.svg", name: "firebase" },
      { icon: "/skills-colored/typescript.svg", name: "typescript" },
      { icon: "/skills-colored/redux.svg", name: "redux" },
    ],
    images: ["/laundry/1.png", "/laundry/2.png"],
    externalLinks: [
      {
        text: "Github (Source Code)",
        link: "https://github.com/satyam95/native-laundry",
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
