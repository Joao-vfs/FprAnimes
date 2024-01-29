"use client";

import React from "react";

import ButtonCustomComponent from "./ButtonCustom.component";
import { IButtonCustomProps } from "@/interfaces/buttonCustom.interface";

export  function ButtonCustom({
  width,
  height,
  borderRadius,
  bgColor,
  padding,
  display,
  justifyContent,
  alignItems,
  gap,
  onFunction,
  children,
}: Readonly<IButtonCustomProps>) {
  return (
    <ButtonCustomComponent
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgColor={bgColor}
      padding={padding}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      onFunction={onFunction}
    >
      {children}
    </ButtonCustomComponent>
  );
}
