import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Satyam Sagar | Frontend Developer & UI Engineer",
    template: "%s | Satyam Sagar",
  },
  description: "Portfolio of Satyam Sagar, Frontend Developer and UI Engineer. Showcasing projects, experience, and articles.",
  keywords: [
    "Satyam Sagar",
    "Frontend Developer",
    "UI Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "Web Developer",
    "Projects",
    "Blog",
  ],
  openGraph: {
    type: "website",
    url: "https://satyamsagar.com/",
    title: "Satyam Sagar | Frontend Developer & UI Engineer",
    description: "Portfolio of Satyam Sagar, Frontend Developer and UI Engineer. Showcasing projects, experience, and articles.",
    images: [
      {
        url: "/sample-pic.jpeg",
        width: 800,
        height: 600,
        alt: "Satyam Sagar profile picture",
      },
    ],
    siteName: "Satyam Sagar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Sagar | Frontend Developer & UI Engineer",
    description: "Portfolio of Satyam Sagar, Frontend Developer and UI Engineer. Showcasing projects, experience, and articles.",
    images: [
      {
        url: "/sample-pic.jpeg",
        alt: "Satyam Sagar profile picture",
      },
    ],
    creator: "@satyamsagar30",
  },
  metadataBase: new URL("https://satyamsagar.com/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export const viewport: Viewport = {
  themeColor: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`antialiased`} suppressHydrationWarning>
          <Header />
          <div className="max-w-[900px] mx-auto">{children}</div>
          <Footer />
          <BottomNav />
        </body>
      </html>
    </ViewTransitions>
  );
}