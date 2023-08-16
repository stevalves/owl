import Header from "@/components/Header/Header";
import Aside from "@/components/Nav";

import "./globals.css";

import type { Metadata } from "next";
import { Anek_Tamil } from "next/font/google";
import { PageWrapper } from "@/components/page-wrapper";

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
        <PageWrapper>
          <Aside />
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
