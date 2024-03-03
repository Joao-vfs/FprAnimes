"use client";

import React from "react";

import { IButtonProps } from "@/interfaces/IButton.interface";

import ButtonComponent from "./Button.component";

export function Button({
  children,
  onClick,
  backGround,
  height,
  width,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  padding,
  flexWrap,
  borderRadius,
  ...props
}: Readonly<IButtonProps>) {
  return (
    <ButtonComponent
      onClick={onClick}
      backGround={backGround}
      height={height}
      width={width}
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
    </ButtonComponent>
  );
}
