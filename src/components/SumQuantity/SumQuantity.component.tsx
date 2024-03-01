import { LessIcon } from "@/icons/less.icon";
import * as S from "./SumQuantity.styles";

import Box from "@/global/layout/Box";
import { PlusIcon } from "@/icons/plus.icon";
import { THEME } from "@/global/styles/theme";

interface CounterInputProps {
  decrement: () => void;
  increment: () => void;
  value: number;
}

const SumQuantityComponent = ({
  decrement,
  increment,
  value,
}: Readonly<CounterInputProps>) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start" gap={THEME.gaps.md}>
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
