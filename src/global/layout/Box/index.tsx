"use client";

import React from "react";

import { IBoxProps } from "@/interfaces/IBox.interface";

import { BoxLayout } from "./Box.layout";

const Box = ({
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
    <BoxLayout
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
    </BoxLayout>
  );
};

export default Box;
