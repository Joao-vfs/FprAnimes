import { css } from "@shadow-panda/styled-system/css";

import { IButtonCustomProps } from "@/interfaces/buttonCustom.interface";

export default function ButtonCustomComponent({
  width,
  height,
  borderRadius,
  bgColor,
  padding,
  display,
  justifyContent,
  alignItems,
  gap,
  onFunction,
  children,
}: Readonly<IButtonCustomProps>) {
  return (
    <button
      className={css({
        width: width,
        height: height,
        borderRadius: borderRadius,
        bgColor: bgColor,
        padding: padding,
        display: display,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
        cursor: "pointer",
      })}
      onClick={onFunction}
    >
      {children}
    </button>
  );
}
