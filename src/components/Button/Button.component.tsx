import * as S from "./Button.styles";

export default function ButtonComponent({
  add,
  onClick,
  children,
}: Readonly<any>) {
  return (
    <S.ButtonCustom add={add} onClick={onClick}>
      {children}
    </S.ButtonCustom>
  );
}
