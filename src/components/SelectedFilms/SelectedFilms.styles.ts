import Image from "next/image";
import styled from "styled-components";

export const ContentTitles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 78%;
  height: 20px;
`;

export const Teste3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 46%;
`;

export const Teste2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

export const Teste = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 114px;
  margin: ${({ theme }) => theme.gaps.md} 0;
`;

export const ContentFilmSelected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const DescriptionProduct = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ImageProduct = styled.img`
  width: 89px;
  height: 114px;
  margin-right: 40px;
`;

export const Hr = styled.hr`
  color: ${({ theme }) => theme.colors.secundary};
  width: 100%;
  height: 1px;
  margin-bottom: 25px;
`;

export const ContentPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.lg};
`;
