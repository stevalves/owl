import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Anek_Tamil } from "next/font/google";
import Footer from "@/components/Footer";

const font = Anek_Tamil({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ealves",
  description: "Estevão Alves dos Santos's portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
