import * as S from "./Cards.styles";

import { THEME } from "@/global/styles/theme";
import { Button } from "..";
import { CartIcon } from "@/icons";
import Text from "@/global/Typography/Text/Text";

export default function CardsComponent({
  image,
  title,
  price,
  onClick,
  add,
}: Readonly<any>) {
  return (
    <S.ContainerCard>
      <S.ImageFilm src={image} alt={title} />
      <S.Teste>
        <Text
          fontSize={THEME.fontSize.nano}
          fontWeight={THEME.fontWeight.bold}
          color={THEME.colors.teste}
          lineHeight={"16.34px"}
        >
          {title}
        </Text>
        <Text
          fontSize={THEME.fontSize.md}
          fontWeight={THEME.fontWeight.bold}
          color={THEME.colors.dark}
          lineHeight={"21.79px"}
        >
          R$ {price}
        </Text>
      </S.Teste>
      <Button
        display={"flex"}
        alignItems={"center"}
        justifyContent={add ? "space-evenly" : "center"}
        gap={add ? "0" : THEME.gaps.lg}
        height={"40px"}
        width={"287px"}
        padding={THEME.paddings.xxs}
        backGround={add ? THEME.colors.success : THEME.colors.tertiary}
        borderRadius={THEME.borderRadius.small}
        border={"none"}
        onClick={onClick}
      >
        <S.ItemAdd>
          <CartIcon />
          <Text
            fontSize={THEME.fontSize.nano}
            fontWeight={THEME.fontWeight.normal}
            color={THEME.colors.primary}
            lineHeight={"16.34px"}
          >
            {add ? 1 : 0}
          </Text>
        </S.ItemAdd>
        <Text
          fontSize={THEME.fontSize.nano}
          fontWeight={THEME.fontWeight.bold}
          color={THEME.colors.primary}
          lineHeight={"16.34px"}
          pointer
        >
          {add ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}
        </Text>
      </Button>
    </S.ContainerCard>
  );
}
