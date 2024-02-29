import { THEME } from "@/global/styles/theme";
import * as S from "./Header.styles";
import { Text } from "@/global/Typography/Typography.styles";
import { BagIcon } from "@/icons";

export default function HeaderComponent() {
  return (
    <S.Header>
      <Text
        fontSize={THEME.fontSize.lg}
        fontWeight={THEME.fontWeight.bold}
        color={THEME.colors.primary}
        lineHeight={"27.24px"}
      >
        We Movies
      </Text>

      <S.ContentHeader>
        <S.ShoppingCartInfo>
          <Text
            fontSize={THEME.fontSize.md}
            fontWeight={THEME.fontWeight.semiBold}
            color={THEME.colors.primary}
            lineHeight={"19.07px"}
          >
            Meu Carrinho
          </Text>
          <Text
            fontSize={THEME.fontSize.md}
            fontWeight={THEME.fontWeight.semiBold}
            color={THEME.colors.secundary}
            lineHeight={"19.07px"}
          >
            0 itens
          </Text>
        </S.ShoppingCartInfo>
        <BagIcon />
      </S.ContentHeader>
    </S.Header>
  );
}
