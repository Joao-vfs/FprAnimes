import styled from "styled-components";

import { ITypographProps } from "@/interfaces/ITypography.interface";

export const Text = styled.span<ITypographProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color }) => color};
`;
