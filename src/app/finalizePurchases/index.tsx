import Image from "next/image";

import Box from "@/global/layout/Box";
import { THEME } from "@/global/styles/theme";
import Text from "@/global/Typography/Text/Text";
import { isMobile } from "@/global/isMobile/isMobile";

import FinalizePurchases from "@/assets/images/Group 34.svg";

import { Button, Loading } from "@/components";

export default function FinalizePurchasesPage({
  handleBackHome,
  loading,
}: {
  loading: boolean;
  handleBackHome: () => void;
}) {
  const renderTextMobile = () => {
    if (isMobile()) {
      return (
        <Box display="flex">
          <Text
            fontSize={THEME.fontSize.lg}
            fontWeight={THEME.fontWeight.bold}
            color={THEME.colors.dark}
            lineHeight={"30.24px"}
            textAlign="center"
          >
            Compra realizada <br /> com sucesso!
          </Text>
        </Box>
      );
    } else {
      return (
        <Text
          fontSize={THEME.fontSize.lg}
          fontWeight={THEME.fontWeight.bold}
          color={THEME.colors.dark}
          lineHeight={"16.34px"}
        >
          Compra realizada com sucesso!
        </Text>
      );
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <Box
      backGround={THEME.colors.primary}
      display="flex"
      flexDirection
      alignItems="center"
      justifyContent="space-between"
      minWidth={isMobile() ? "343px" : "960px"}
      minHeight={isMobile() ? "574px" : "532px"}
      padding={isMobile() ? "64px 0" : "64px"}
      gap={"32px"}
      borderRadius={THEME.borderRadius.small}
    >
      {renderTextMobile()}
      <Image src={FinalizePurchases} alt="" />
      <Button
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={THEME.gaps.lg}
        height={"40px"}
        width={"180px"}
        padding={THEME.paddings.xxs}
        backGround={THEME.colors.tertiary}
        borderRadius={THEME.borderRadius.small}
        border={"none"}
        onClick={handleBackHome}
      >
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
