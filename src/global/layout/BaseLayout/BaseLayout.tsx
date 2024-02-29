"use client";

import React from "react";
import { Children } from "./BaseLayout.styles";
import { Header } from "@/components";
import { ReduxProvaider } from "@/redux/provaider";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../styles/theme";
import { ResetCSS } from "../../styles/resetCss";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvaider>
      <ThemeProvider theme={THEME}>
        <ResetCSS />
        <Header />
        <Children>{children}</Children>
      </ThemeProvider>
    </ReduxProvaider>
  );
};

export default BaseLayout;
