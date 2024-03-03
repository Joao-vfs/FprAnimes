"use client";

import React from "react";

import { Paragraph } from "./Text.styles";

import { ITypographyProps } from "@/interfaces/ITypography.interface";

const Text = ({
  children,
  onClick,
  fontSize,
  fontWeight,
  pointer,
  color,
  lineHeight,
  textAlign,
  ...props
}: Readonly<ITypographyProps>) => {
  return (
    <Paragraph
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      pointer={pointer}
      lineHeight={lineHeight}
      textAlign={textAlign}
      {...props}
    >
      {children}
    </Paragraph>
  );
};

export default Text;
