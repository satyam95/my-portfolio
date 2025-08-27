import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Satyam Sagar",
    template: "%s | Satyam Sagar",
  },
  description:
    "Satyam Sagar - Frontend Developer, UI Engineer, and Freelance Web Developer specializing in Next.js, React, and Figma to Code conversions.",
  keywords: [
    "Satyam Sagar",
    "frontend developer",
    "UI developer",
    "UI engineer",
    "freelance web developer",
    "React developer",
    "Next.js developer",
    "MVP development",
    "Figma to code",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Satyam Sagar" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  openGraph: {
    title: "Satyam Sagar - Frontend, UI Engineer & Freelance Web Developer",
    description:
      "Building websites, MVPs, and modern web apps using Next.js, React, and Tailwind CSS.",
    url: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
    siteName: "Satyam Sagar Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${urbanist.className} antialiased`}
          suppressHydrationWarning
        >
          <Header />
          <div className="max-w-[900px] mx-auto">{children}</div>
          <Footer />
          <BottomNav />
        </body>
      </html>
    </ViewTransitions>
  );
}
