import WorkClient from "./WorkClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Frontend & UI Engineering Work",
  description:
    "Explore Satyam Sagar's portfolio projects including web apps, MVPs, and UI libraries built with React, Next.js, Tailwind CSS, and TypeScript.",
  keywords: [
    "Next.js projects",
    "React projects",
    "frontend portfolio",
    "UI developer portfolio",
    "UI engineer portfolio",
    "web app development",
    "freelance projects",
    "UI component library",
    "TypeScript developer",
  ],
};

export default function ProjectPage() {
  return <WorkClient />;
}
