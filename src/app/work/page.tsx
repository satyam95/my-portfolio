import WorkClient from "./WorkClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Satyam Sagar",
  description: "Explore the portfolio projects of Satyam Sagar, Frontend Developer and UI Engineer. See real-world work and case studies.",
  openGraph: {
    title: "Projects | Satyam Sagar",
    description: "Explore the portfolio projects of Satyam Sagar, Frontend Developer and UI Engineer. See real-world work and case studies.",
    type: "website",
    url: "https://satyamsagar.com/work",
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
    title: "Projects | Satyam Sagar",
    description: "Explore the portfolio projects of Satyam Sagar, Frontend Developer and UI Engineer. See real-world work and case studies.",
    images: [
      {
        url: "/sample-pic.jpeg",
        alt: "Satyam Sagar profile picture",
      },
    ],
  },
  alternates: {
    canonical: "/work",
  },
};

export default function ProjectPage() {
  return <WorkClient />;
}
