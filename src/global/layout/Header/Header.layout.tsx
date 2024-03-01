import { THEME } from "@/global/styles/theme";
import * as S from "./Header.styles";
import { BagIcon } from "@/icons";
import Link from "next/link";
import { UseAppDispatch } from "@/redux/store";
import { handleResetState } from "@/redux/slices/WeMovies/weMovies.slices";
import Text from "@/global/Typography/Text/Text";

export default function HeaderLayout({
  itemsCart,
  isMobile,
}: {
  itemsCart: number[];
  isMobile: boolean;
}) {
  const dispatch = UseAppDispatch();
  const itemsAdd = itemsCart.length;

  return (
    <S.Header>
      <Link href={"/"} onClick={() => dispatch(handleResetState())}>
        <Text
          fontSize={THEME.fontSize.lg}
          fontWeight={THEME.fontWeight.bold}
          color={THEME.colors.primary}
          lineHeight={"27.24px"}
          pointer
        >
          We Movies
        </Text>
      </Link>
      <S.ContentHeader>
        <S.ShoppingCartInfo>
          {!isMobile && (
            <Text
              fontSize={THEME.fontSize.md}
              fontWeight={THEME.fontWeight.semiBold}
              color={THEME.colors.primary}
              lineHeight={"19.07px"}
            >
              Meu Carrinho
            </Text>
          )}

          <Text
            fontSize={THEME.fontSize.md}
            fontWeight={THEME.fontWeight.semiBold}
            color={THEME.colors.secundary}
            lineHeight={"19.07px"}
          >
            {itemsAdd} itens
          </Text>
        </S.ShoppingCartInfo>
        <Link href={"/cart"}>
          <BagIcon />
        </Link>
      </S.ContentHeader>
    </S.Header>
  );
}
