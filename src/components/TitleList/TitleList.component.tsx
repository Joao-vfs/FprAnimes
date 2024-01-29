import Image from "next/image";

import { css } from "@shadow-panda/styled-system/css";

import IcFilm from "@/assets/img/film.svg";

export default function TitleListComponent({ title }: { title: string }) {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        w: "full",
        py: 10,
        px: 3,
      })}
    >
      <Image src={IcFilm} alt="" />
      <h4
        className={css({
          textStyle: "h4",
          fontSize: "24px",
          color: "#F46D1B",
          textAlign: "left",
        })}
      >
        {title}
      </h4>
    </div>
  );
}
