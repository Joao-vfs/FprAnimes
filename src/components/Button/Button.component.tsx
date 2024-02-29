import * as S from "./Button.styles";

import { Text } from "@/global/Typography/Typography.styles";
import { THEME } from "@/global/styles/theme";

export default function ButtonComponent({ title, add }: Readonly<any>) {
  return (
    <S.ButtonCustom add={add}>
      <Text
        fontSize={THEME.fontSize.nano}
        fontWeight={THEME.fontWeight.bold}
        color={THEME.colors.primary}
        lineHeight={"16.34px"}
      >
        {title}
      </Text>
    </S.ButtonCustom>
  );
}
