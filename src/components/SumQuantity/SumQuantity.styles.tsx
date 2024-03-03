import styled from "styled-components";

export const IcPlus = styled.div``;

export const IcLess = styled.div``;

export const Input = styled.input`
  width: 62px;
  height: 26px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.assistText};
  padding: ${({ theme }) => theme.paddings.md};
`;
