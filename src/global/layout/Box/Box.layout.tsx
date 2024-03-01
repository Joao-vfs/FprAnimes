"use client";

import React from "react";

import { Container } from "./Box.styles";

import { IBoxProps } from "@/interfaces/IBox.interface";

export const BoxLayout = ({
  children,
  onClick,
  backgroundColor,
  height,
  width,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  padding,
  flexWrap,
  borderRadius,
}: Readonly<IBoxProps>) => {
  return (
    <Container
      onClick={onClick}
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      padding={padding}
      flexWrap={flexWrap}
      borderRadius={borderRadius}
    >
      {children}
    </Container>
  );
};
