import { ReactNode } from "react";

export interface IButtonCustomProps {
  width: string;
  height: string;
  borderRadius: string;
  bgColor: string;
  padding: string;
  display: string;
  justifyContent: string,
  alignItems: string,
  gap: string,
  onFunction: () => void;
  children: ReactNode;
}
