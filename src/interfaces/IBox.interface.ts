import { ReactNode } from "react";

export interface IBoxProps {
    children: ReactNode;
    onClick?: () => void;
    backgroundColor?: string;
    height?: string;
    width?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: boolean;
    gap?: string;
    padding?: string;
    flexWrap?: boolean;
    borderRadius?: string;
  }