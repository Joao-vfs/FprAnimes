import * as S from "./SelectedFilms.styles";

import Box from "@/global/layout/Box";
import { THEME } from "@/global/styles/theme";
import { totalPrice, formatPrice } from "@/utils/utils";
import { Button } from "..";
import SumQuantity from "../SumQuantity";
import { TrashIcon } from "@/icons/trash.icon";
import { handleRemoveFilm, handleResetState } from "@/redux/slices/WeMovies/weMovies.slices";
import { UseAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import Text from "@/global/Typography/Text/Text";

export default function SelectedFilmsComponent({
  selectedFilms,
}: Readonly<any>) {
  const dispatch = UseAppDispatch();
  const router = useRouter();

  const handleRedirectRouter = () => {
    if (selectedFilms.length > 0) {
      router.push("/finalizePurchases");
      dispatch(handleResetState())
    }
  };

  return (
    // <Box
    //   backgroundColor={THEME.colors.primary}
    //   display="flex"
    //   flexDirection
    //   alignItems="flex-start"
    //   justifyContent="space-between"
    //   width="960px"
    //   minHeight="245px"
    //   maxHeight="100%"
    //   padding="24px"
    //   borderRadius={THEME.borderRadius.small}
    // >
    //   <S.ContentTitles>
    //     <Text
    //       fontSize={THEME.fontSize.sm}
    //       fontWeight={THEME.fontWeight.bold}
    //       color={THEME.colors.secundary}
    //       lineHeight={"19.07px"}
    //     >
    //       PRODUTO
    //     </Text>
    //     <S.Teste3>
    //       <Text
    //         fontSize={THEME.fontSize.sm}
    //         fontWeight={THEME.fontWeight.bold}
    //         color={THEME.colors.secundary}
    //         lineHeight={"19.07px"}
    //       >
    //         QTD
    //       </Text>
    //       <Text
    //         fontSize={THEME.fontSize.sm}
    //         fontWeight={THEME.fontWeight.bold}
    //         color={THEME.colors.secundary}
    //         lineHeight={"19.07px"}
    //       >
    //         SUBTOTAL
    //       </Text>
    //     </S.Teste3>
    //   </S.ContentTitles>
    //   {selectedFilms.map((moviesPurchase: any) => (
    //     <S.Teste key={moviesPurchase.id}>
    //       <S.Teste2>
    //         <S.ImageProduct src={moviesPurchase.image} alt="" />
    //         <S.DescriptionProduct>
    //           <Text
    //             fontSize={THEME.fontSize.sm}
    //             fontWeight={THEME.fontWeight.bold}
    //             color={THEME.colors.dark}
    //             lineHeight={"19.07px"}
    //           >
    //             {moviesPurchase.title}
    //           </Text>
    //           <Text
    //             fontSize={THEME.fontSize.md}
    //             fontWeight={THEME.fontWeight.bold}
    //             color={THEME.colors.dark}
    //             lineHeight={"21.79px"}
    //           >
    //             R$ {formatPrice(moviesPurchase.price)}
    //           </Text>
    //         </S.DescriptionProduct>
    //       </S.Teste2>
    //       <SumQuantity />
    //       <S.ContentIcons>
    //         <Text
    //           fontSize={THEME.fontSize.md}
    //           fontWeight={THEME.fontWeight.bold}
    //           color={THEME.colors.dark}
    //           lineHeight={"31.39px"}
    //         >
    //           {formatPrice(moviesPurchase.price)}
    //         </Text>
    //         <div onClick={() => dispatch(handleRemoveFilm(moviesPurchase.id))}>
    //           <TrashIcon />
    //         </div>
    //       </S.ContentIcons>
    //     </S.Teste>
    //   ))}
    //   <S.Hr />
    //   <S.ContentFilmSelected>
    //     <Button onClick={handleRedirectRouter}>
    //       <Text
    //         fontSize={THEME.fontSize.sm}
    //         fontWeight={THEME.fontWeight.bold}
    //         color={THEME.colors.primary}
    //         lineHeight={"31.39px"}
    //         pointer
    //       >
    //         Finalizar Pedido
    //       </Text>
    //     </Button>
    //     <S.ContentPrice>
    //       <Text
    //         fontSize={THEME.fontSize.sm}
    //         fontWeight={THEME.fontWeight.bold}
    //         color={THEME.colors.secundary}
    //         lineHeight={"19.07px"}
    //       >
    //         Total
    //       </Text>
    //       <Text
    //         fontSize={THEME.fontSize.xg}
    //         fontWeight={THEME.fontWeight.bold}
    //         color={THEME.colors.dark}
    //         lineHeight={"31.39px"}
    //       >
    //         R$ {formatPrice(totalPrice(selectedFilms))}
    //       </Text>
    //     </S.ContentPrice>
    //   </S.ContentFilmSelected>
    // </Box>
    <Box
      backgroundColor={THEME.colors.primary}
      display="flex"
      flexDirection
      alignItems="flex-start"
      justifyContent="space-between"
      width="343PX"
      minHeight="716px"
      maxHeight="100%"
      padding="16px"
      borderRadius={THEME.borderRadius.small}
    >
      PDRODUTO
      <div>
        <S.Hr />
        <S.ContentPrice>
          <Text
            fontSize={THEME.fontSize.sm}
            fontWeight={THEME.fontWeight.bold}
            color={THEME.colors.secundary}
            lineHeight={"19.07px"}
          >
            Total
          </Text>
          <Text
            fontSize={THEME.fontSize.xg}
            fontWeight={THEME.fontWeight.bold}
            color={THEME.colors.dark}
            lineHeight={"31.39px"}
          >
            R$ {formatPrice(totalPrice(selectedFilms))}
          </Text>
        </S.ContentPrice>
        <Button onClick={handleRedirectRouter}>
          <Text
            fontSize={THEME.fontSize.sm}
            fontWeight={THEME.fontWeight.bold}
            color={THEME.colors.primary}
            lineHeight={"31.39px"}
            pointer
          >
            Finalizar Pedido
          </Text>
        </Button>
      </div>
    </Box>
  );
}
