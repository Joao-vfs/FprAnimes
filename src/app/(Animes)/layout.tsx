import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ReduxProvaider } from "@/redux/provaider";

import "./globals.css";
import { css } from "@shadow-panda/styled-system/css";
import "@radix-ui/themes/styles.css";

import { Footer, Header, Sidebar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animes",
  description: "Site de animes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ReduxProvaider>
          <div
            className={css({
              display: "flex",
            })}
          >
            <Sidebar />
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                w: "full",
                h: "full",
              })}
            >
              <Header />

              {children}
            </div>
          </div>
          <Footer />
        </ReduxProvaider>
      </body>
    </html>
  );
}
