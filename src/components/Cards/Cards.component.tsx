import * as S from "./Cards.styles";

import { Text } from "@/global/Typography/Typography.styles";
import { THEME } from "@/global/styles/theme";
import { Button } from "..";
import { UseAppDispatch } from "@/redux/store";
import { handleAddItemsCart } from "@/redux/slices/ListFilms/ListFilms.slices";

export default function CardsComponent({
  image,
  title,
  item,
  filmId,
  titleButton,
  price,
}: Readonly<any>) {
  const dispatch = UseAppDispatch()
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
      <Button title={titleButton} item={item} onClick={() => dispatch(handleAddItemsCart({itemId: filmId}))} />
    </S.ContainerCard>
  );
}
