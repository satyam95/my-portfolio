import TinkerClient from "./TinkerClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Projects & UI Components",
  description:
    "Browse micro projects, components, and experimental builds by Satyam Sagar - showcasing frontend, UI engineering, and creative experiments using React, Next.js, and Tailwind CSS.",
  keywords: [
    "micro projects",
    "frontend components",
    "UI components",
    "React UI components",
    "Next.js experiments",
    "UI developer projects",
    "UI engineer projects",
    "Tailwind CSS demos",
  ],
};

export default function TinkerPage() {
  return <TinkerClient />;
}
