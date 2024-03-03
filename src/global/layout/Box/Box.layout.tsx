import React from "react";

import { Container } from "./Box.styles";

import { IBoxProps } from "@/interfaces/IBox.interface";

export const BoxLayout = ({
  children,
  backGround,
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
  ...props
}: Readonly<IBoxProps>) => {
  return (
    <Container
      backGround={backGround}
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
      {...props}
    >
      {children}
    </Container>
  );
};
