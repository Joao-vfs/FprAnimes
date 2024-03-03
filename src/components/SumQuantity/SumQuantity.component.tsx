import * as S from "./SumQuantity.styles";

import Box from "@/global/layout/Box";
import { THEME } from "@/global/styles/theme";

import { LessIcon } from "@/icons/less.icon";
import { PlusIcon } from "@/icons/plus.icon";

import { ICounterInputProps } from "@/interfaces/ISumQuantity.interface";

const SumQuantityComponent = ({
  decrement,
  increment,
  value,
}: Readonly<ICounterInputProps>) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      gap={THEME.gaps.md}
    >
      <S.IcLess onClick={decrement}>
        <LessIcon />
      </S.IcLess>
      <S.Input type="text" value={value} readOnly />
      <S.IcPlus onClick={increment}>
        <PlusIcon />
      </S.IcPlus>
    </Box>
  );
};

export default SumQuantityComponent;
