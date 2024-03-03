import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import BaseLayout from "@/global/layout/BaseLayout/BaseLayout";
import StyledComponentsRegistry from "@/global/layout/StyledComponentsRegistry/StyledComponentsRegistry.registry";

const OPENS_SANS = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "We Movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={OPENS_SANS.className}>
        <StyledComponentsRegistry>
          <BaseLayout>{children}</BaseLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
