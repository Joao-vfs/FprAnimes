import Image from "next/image";

import * as S from './cart.styles'

import Box from "@/global/layout/Box";

import WithoutItems from "@/assets/images/Group.svg";
import { THEME } from "@/global/styles/theme";
import { Button, SelectedFilms } from "@/components";
import { useRouter } from "next/navigation";
import Text from "@/global/Typography/Text/Text";

export default function CartPage({
  itemsCart,
  isMobile,
}: {
  itemsCart: number[];
  isMobile: boolean;
}) {
  const router = useRouter();

  return itemsCart.length > 0 ? (
    <Box>
      <SelectedFilms />
    </Box>
  ) : (
    <Box
      backgroundColor={THEME.colors.primary}
      display="flex"
      flexDirection
      alignItems="center"
      justifyContent="space-between"
      maxWidth={isMobile ? "343px" : "960px"}
      minHeight="532px"
      padding={!isMobile ? "64px" : '64px 0'}
      borderRadius={THEME.borderRadius.small}
    >
      <Text
        fontSize={THEME.fontSize.lg}
        fontWeight={THEME.fontWeight.bold}
        color={THEME.colors.dark}
        lineHeight={"16.34px"}
      >
        Parece que não há nada por aqui :(
      </Text>
      <Image src={WithoutItems} alt="" />
      <S.Hr />
      <Button onClick={() => router.push("/")}>
        <Text
          fontSize={THEME.fontSize.sm}
          fontWeight={THEME.fontWeight.bold}
          color={THEME.colors.primary}
          lineHeight={"19.07px"}
        >
          Voltar
        </Text>
      </Button>
    </Box>
  );
}
