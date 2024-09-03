import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jewelry Store",
  description: "Modern jewelry store with live gold and silver prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
