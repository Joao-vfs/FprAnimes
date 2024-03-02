import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 64px;
  height: 82px;
  margin-right: ${({ theme }) => theme.gaps.xg};
`;

export const FilmDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 76px;
`;

export const FilmInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const QuantitySubtotalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

export const DividerLine = styled.div`
  border-top: 1px solid ${({theme}) => theme.colors.secundary};
  width: 100%;
  padding-top: ${({theme}) => theme.gaps.lg};
`;

export const FilmSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 77px;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
  gap: 40px;
`;
