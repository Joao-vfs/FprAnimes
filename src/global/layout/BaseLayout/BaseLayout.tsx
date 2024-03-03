"use client";

import React from "react";

import { ThemeProvider } from "styled-components";
import { THEME } from "../../styles/theme";
import { ResetCSS } from "../../styles/resetCss";
import { Children } from "./BaseLayout.styles";

import { ReduxProvider } from "@/redux/provider";

import { Header } from "../Header";
import Box from "../Box";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <ThemeProvider theme={THEME}>
        <ResetCSS />
        <Box
          display="flex"
          flexDirection
          alignItems="center"
          justifyContent="center"
        >
          <Header />
          <Children>{children}</Children>
        </Box>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default BaseLayout;
