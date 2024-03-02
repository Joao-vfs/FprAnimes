"use client";

import React from "react";
import { Children } from "./BaseLayout.styles";
import { ReduxProvaider } from "@/redux/provider";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../styles/theme";
import { ResetCSS } from "../../styles/resetCss";
import { Header } from "../Header";
import Box from "../Box";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvaider>
      <ThemeProvider theme={THEME}>
        <ResetCSS />
        <Box
          display={"flex"}
          flexDirection
          alignItems="center"
          justifyContent="center"
        >
          <Header />
          <Children>{children}</Children>
        </Box>
      </ThemeProvider>
    </ReduxProvaider>
  );
};

export default BaseLayout;
