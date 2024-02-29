import React from "react";
import { Text } from "./Typography.styles";
import { ITypographProps } from "@/interfaces/ITypography.interface";

const Typography = ({
  children,
  fontSize = "14",
  fontWeight = 400,
  pointer = false,
  color = "#2F2E41",
  lineHeight: lineHeigth = "normal",
  ...props
}: Readonly<ITypographProps>) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      pointer={pointer}
      lineHeight={lineHeigth}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
