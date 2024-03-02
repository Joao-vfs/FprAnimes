import * as S from "./Button.styles";

import { IButtonProps } from "@/interfaces/IButton.interface";

export default function ButtonComponent({
  children,
  onClick,
  backGround,
  height,
  width,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  padding,
  flexWrap,
  borderRadius,
  ...props
}: Readonly<IButtonProps>) {
  return (
    <S.ButtonCustom
      onClick={onClick}
      backGround={backGround}
      height={height}
      width={width}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      padding={padding}
      flexWrap={flexWrap}
      borderRadius={borderRadius}
      {...props}
    >
      {children}
    </S.ButtonCustom>
  );
}
