import Header from "@/components/Header/Header";

import "./globals.css";
import 'react-tooltip/dist/react-tooltip.css'

import type { Metadata } from "next";
import { Anek_Tamil } from "next/font/google";
import { PageWrapper } from "@/components/page-wrapper";
import ParticlesAnimation from "@/components/Particles";
import Footer from "@/components/Footer";

const font = Anek_Tamil({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eSantos - Portfólio",
  description: "Estevão Alves dos Santos's portfolio.",
};

interface iRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: iRootLayout) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        <Header />
        <PageWrapper>
          <ParticlesAnimation />
          {children}
        </PageWrapper>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
