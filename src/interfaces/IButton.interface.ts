import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  backGround?: string;
  height?: string;
  width?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: boolean;
  gap?: string;
  padding?: string;
  flexWrap?: boolean;
  borderRadius?: string;
  border?: string;
}
