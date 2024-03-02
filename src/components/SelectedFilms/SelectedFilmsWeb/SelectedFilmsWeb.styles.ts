import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 78%;
  height: 20px;
  margin-bottom: ${({ theme }) => theme.gaps.xg};
`;

export const QuantitySubtotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 38%;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 27%;
`;

export const FilmInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 29%;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 114px;
  margin: ${({ theme }) => theme.gaps.md} 0;
`;

export const FilmSelectedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 48px;
  gap: ${({ theme }) => theme.gaps.sm};
`;

export const ProductImage = styled.img`
  width: 89px;
  height: 114px;
  margin-right: 40px;
`;

export const DividerLine = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};
  width: 100%;
  height: 1px;
  margin: 15px 0 25px;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
