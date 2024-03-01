import React from "react";
import { ITypographyProps } from "@/interfaces/ITypography.interface";
import { Paragraph } from "./Text.styles";

const Text = ({
  children,
  fontSize,
  fontWeight,
  pointer,
  color,
  lineHeight,
  textAling,
  ...props
}: Readonly<ITypographyProps>) => {
  return (
    <Paragraph
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      pointer={pointer}
      lineHeight={lineHeight}
      textAling={textAling}
      {...props}
    >
      {children}
    </Paragraph>
  );
};

export default Text;
