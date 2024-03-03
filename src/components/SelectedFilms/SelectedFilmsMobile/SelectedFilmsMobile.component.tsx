import * as S from "./SelectedFilmsMobile.styles";

import Box from "@/global/layout/Box";
import { THEME } from "@/global/styles/theme";
import Text from "@/global/Typography/Text/Text";

import { formatPrice, totalPriceWithQuantity } from "@/utils/utils";

import { TrashIcon } from "@/icons/trash.icon";

import { ISelectedFilms } from "@/interfaces/ISelectedFilms.interface";

import { Button, Loading, SumQuantity } from "@/components";

export function SelectedFilmsMobile({
  loading,
  selectedFilms,
  handleQuantityChange,
  prices,
  handleRemoveFilmId,
  handleRedirectRouter,
}: Readonly<ISelectedFilms>) {
  return loading ? (
    <Loading />
  ) : (
    <Box
      backGround={THEME.colors.primary}
      display="flex"
      flexDirection
      alignItems="center"
      justifyContent="space-between"
      width="343px"
      minHeight="716px"
      maxHeight="100%"
      padding="16px"
      borderRadius={THEME.borderRadius.small}
    >
      {selectedFilms?.map((moviesPurchase) => (
        <S.CartItemContainer key={moviesPurchase.id}>
          <S.ProductImage src={moviesPurchase.image} alt="" />
          <S.FilmDetailsContainer>
            <S.FilmInfoContainer>
              <Text
                fontSize={THEME.fontSize.sm}
                fontWeight={THEME.fontWeight.bold}
                color={THEME.colors.dark}
                lineHeight={"19.07px"}
              >
                {moviesPurchase.title}
              </Text>
              <Text
                fontSize={THEME.fontSize.md}
                fontWeight={THEME.fontWeight.bold}
                color={THEME.colors.dark}
                lineHeight={"21.79px"}
              >
                R$ {formatPrice(moviesPurchase.price)}
              </Text>
              <S.TrashButton
                onClick={() => handleRemoveFilmId(moviesPurchase.id)}
              >
                <TrashIcon />
              </S.TrashButton>
            </S.FilmInfoContainer>
            <S.ProductDescriptionContainer>
              <SumQuantity
                filmId={moviesPurchase.id}
                onChange={(quantity) =>
                  handleQuantityChange(moviesPurchase.id, quantity)
                }
              />
              <S.QuantitySubtotalContainer>
                <Text
                  fontSize={THEME.fontSize.sm}
                  fontWeight={THEME.fontWeight.bold}
                  color={THEME.colors.secundary}
                  lineHeight={"16.34px"}
                >
                  SUBTOTAL
                </Text>
                <Text
                  fontSize={THEME.fontSize.md}
                  fontWeight={THEME.fontWeight.bold}
                  color={THEME.colors.dark}
                  lineHeight={"21.79px"}
                >
                  R${" "}
                  {formatPrice(
                    prices[moviesPurchase.id] || moviesPurchase.price
                  )}
                </Text>
              </S.QuantitySubtotalContainer>
            </S.ProductDescriptionContainer>
          </S.FilmDetailsContainer>
        </S.CartItemContainer>
      ))}
      <S.DividerLine>
        <S.FilmSelectedContainer>
          <S.TotalPriceContainer>
            <Text
              fontSize={THEME.fontSize.sm}
              fontWeight={THEME.fontWeight.bold}
              color={THEME.colors.secundary}
              lineHeight={"19.07px"}
            >
              TOTAL
            </Text>
            <Text
              fontSize={THEME.fontSize.xg}
              fontWeight={THEME.fontWeight.bold}
              color={THEME.colors.dark}
              lineHeight={"31.39px"}
            >
              R$ {formatPrice(totalPriceWithQuantity(selectedFilms, prices))}
            </Text>
          </S.TotalPriceContainer>
          <Button
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={THEME.gaps.lg}
            height={"40px"}
            width={"311px"}
            padding={THEME.paddings.xxs}
            backGround={THEME.colors.tertiary}
            borderRadius={THEME.borderRadius.small}
            border={"none"}
            onClick={handleRedirectRouter}
          >
            <Text
              fontSize={THEME.fontSize.sm}
              fontWeight={THEME.fontWeight.bold}
              color={THEME.colors.primary}
              lineHeight={"31.39px"}
              pointer
            >
              FINALIZAR PEDIDO
            </Text>
          </Button>
        </S.FilmSelectedContainer>
      </S.DividerLine>
    </Box>
  );
}
