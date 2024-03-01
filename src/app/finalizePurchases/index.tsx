import Image from "next/image";

import Box from "@/global/layout/Box";

import FinalizePurchases from "@/assets/images/Group 34.svg";
import { THEME } from "@/global/styles/theme";
import { Button } from "@/components";
import { useRouter } from "next/navigation";
import Text from "@/global/Typography/Text/Text";

export default function FinalizePurchasesPage({
  isMobile
}: {
  isMobile: boolean;
}) {
  const router = useRouter();

  return (
    <Box
      backgroundColor={THEME.colors.primary}
      display="flex"
      flexDirection
      alignItems="center"
      justifyContent="space-between"
      minWidth={isMobile ? "343px" : "960px"}
      minHeight={isMobile ? "574px" : "532px"}
      padding={!isMobile ? "64px" : '64px 0'}
      borderRadius={THEME.borderRadius.small}
    >
      <Text
        fontSize={THEME.fontSize.lg}
        fontWeight={THEME.fontWeight.bold}
        color={THEME.colors.dark}
        lineHeight={"27.24px"}
      >
        Compra realizada com sucesso!
      </Text>
      <Image src={FinalizePurchases} alt="" />
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
