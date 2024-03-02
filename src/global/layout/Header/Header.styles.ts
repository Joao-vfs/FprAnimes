import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 48%;

  @media only screen and (max-width: 1536px) {
    width: 60%;
  }

  @media only screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.sm};
`;

export const ShoppingCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
