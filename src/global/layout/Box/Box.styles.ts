import styled from "styled-components";

import { IBoxProps } from "@/interfaces/IBox.interface";

export const Container = styled.div<IBoxProps>`
  background-color: ${({ backGround }) =>
    backGround ?? "transparent"};
  height: ${({ height }) => height ?? "auto"};
  width: ${({ width }) => width ?? "auto"};
  max-width: ${({ maxWidth, width }) => width !== "auto" && maxWidth};
  max-height: ${({ maxHeight, height }) => height !== "auto" && maxHeight};
  min-width: ${({ minWidth, width }) => width !== "auto" && minWidth};
  min-height: ${({ minHeight, height }) => height !== "auto" && minHeight};
  display: ${({ display }) => display ?? "block"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  flex-direction: ${({ flexDirection }) => (flexDirection ? "column" : "row")};
  gap: ${({ gap }) => gap ?? "0"};
  padding: ${({ padding }) => padding ?? "0"};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "nowrap")};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
