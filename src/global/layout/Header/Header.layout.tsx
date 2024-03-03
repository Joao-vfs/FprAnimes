import { useRouter } from "next/navigation";

import * as S from "./Header.styles";

import { THEME } from "@/global/styles/theme";
import Text from "@/global/Typography/Text/Text";
import { isMobile } from "@/global/isMobile/isMobile";

import { BagIcon } from "@/icons/bag.icon";

import { IHeaderLayoutProps } from "@/interfaces/IHeader.interface";

export default function HeaderLayout({
  itemsCart,
  handleBackHome,
}: Readonly<IHeaderLayoutProps>) {
  const router = useRouter();
  const itemsAdd = itemsCart.length;

  const handleRedirectCart = () => {
    if (itemsAdd > 0) {
      router.push("/cart");
    } else {
      router.push("/noPurchases");
    }
  };
  return (
    <S.Header>
      <Text
        onClick={handleBackHome}
        fontSize={THEME.fontSize.lg}
        fontWeight={THEME.fontWeight.bold}
        color={THEME.colors.primary}
        lineHeight={"27.24px"}
        pointer
      >
        We Movies
      </Text>
      <S.ContentHeader>
        <S.ShoppingCartInfo>
          {!isMobile() && (
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
        <BagIcon onClick={handleRedirectCart} />
      </S.ContentHeader>
    </S.Header>
  );
}
