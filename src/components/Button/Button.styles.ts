import styled, { css } from "styled-components";

const ButtonBase = styled.button<{ add: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.lg};

  height: 40px;
  width: 287px;
  padding: ${({ theme }) => theme.paddings.xxs};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: none;
`;

export const ButtonCustom = styled(ButtonBase)<{ add: boolean }>`
  ${({ add }) =>
    add
      ? css`
          background: ${({ theme }) => theme.colors.success};
        `
      : css`
          background: ${({ theme }) => theme.colors.tertiary};
        `}
`;
