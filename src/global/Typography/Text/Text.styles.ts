import styled from "styled-components";

import { ITypographyProps } from "@/interfaces/ITypography.interface";

export const Paragraph = styled.span<ITypographyProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;
