import * as S from "./Button.styles";

import { Text } from "@/global/Typography/Typography.styles";
import { THEME } from "@/global/styles/theme";
import { CartIcon } from "@/icons";

export default function ButtonComponent({ title, add, item, onClick }: Readonly<any>) {
  return (
    <S.ButtonCustom add={add} onClick={onClick}>
      <S.ItemAdd>
        <CartIcon />
        <Text
          fontSize={THEME.fontSize.nano}
          fontWeight={THEME.fontWeight.normal}
          color={THEME.colors.primary}
          lineHeight={"16.34px"}
        >
          {item}
        </Text>
      </S.ItemAdd>
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
