import { css } from "@shadow-panda/styled-system/css";

export default function HomePage() {
  return (
    <div
      className={css({
        h: "full",
        w: "full",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <h1 className={css({ textStyle: "h1" })}>Conteudo</h1>
    </div>
  );
}
