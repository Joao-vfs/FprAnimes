import * as S from "./Cards.styles";

import { Text } from "@/global/Typography/Typography.styles";
import { THEME } from "@/global/styles/theme";
import { Button } from "..";

export default function CardsComponent({
  image,
  title,
  titleButton,
  price,
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
      <Button title={titleButton} />
    </S.ContainerCard>
  );
}
