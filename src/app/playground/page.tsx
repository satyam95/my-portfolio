import PlaygroundClient from "./PlaygroundClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground | Satyam Sagar",
  description: "Explore fun and experimental projects by Satyam Sagar. UI experiments, micro-apps, and more.",
  openGraph: {
    title: "Playground | Satyam Sagar",
    description: "Explore fun and experimental projects by Satyam Sagar. UI experiments, micro-apps, and more.",
    type: "website",
    url: "https://satyamsagar.com/playground",
    images: [
      {
        url: "/sample-pic.jpeg",
        width: 800,
        height: 600,
        alt: "Satyam Sagar profile picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playground | Satyam Sagar",
    description: "Explore fun and experimental projects by Satyam Sagar. UI experiments, micro-apps, and more.",
    images: [
      {
        url: "/sample-pic.jpeg",
        alt: "Satyam Sagar profile picture",
      },
    ],
  },
  alternates: {
    canonical: "/playground",
  },
};

export default function PlaygroundPage() {
  return <PlaygroundClient />;
}
