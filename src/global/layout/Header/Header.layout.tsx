import { THEME } from "@/global/styles/theme";
import * as S from "./Header.styles";
import { Text } from "@/global/Typography/Typography.styles";
import { BagIcon } from "@/icons";
import Link from "next/link";

export default function HeaderLayout({ itemsCart }: { itemsCart: number }) {
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
            {itemsCart} itens
          </Text>
        </S.ShoppingCartInfo>
        <Link href={'/cart'}>
          <BagIcon />
        </Link>
      </S.ContentHeader>
    </S.Header>
  );
}
