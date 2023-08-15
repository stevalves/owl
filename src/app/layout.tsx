import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Anek_Tamil } from "next/font/google";
import Aside from "@/components/Nav";
import Footer from "@/components/Footer";
import BgImage from "@/components/BgImage";

const font = Anek_Tamil({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ealves",
  description: "Estevão Alves dos Santos's portfolio.",
};

interface iRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: iRootLayout) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <Aside />
        <BgImage />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
