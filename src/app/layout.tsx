import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: {
    default: "Satyam Sagar",
    template: "%s - Satyam Sagar",
  },
  description: "Default description for Satyam Sagar's site.",
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
