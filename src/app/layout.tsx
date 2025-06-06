import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";

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
