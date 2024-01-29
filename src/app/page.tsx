"use client";

import React from "react";

import { css } from "@shadow-panda/styled-system/css";

import { ButtonCustom } from "@/components";
import { useRouter } from "next/navigation";

export default function PageInitial() {
  const router = useRouter();
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        bg: "#000",
        w: "full",
        h: "screen",
      })}
    >
      <h1
        className={css({
          textStyle: "h1",
          color: "#F46D1B",
          fontSize: "26px",
          fontWeight: 700,
        })}
      >
        PAGINA INICIAL
      </h1>
      <ButtonCustom
        width={"221px"}
        height={"49px"}
        borderRadius={"10px"}
        bgColor={"#fff"}
        padding={"10px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
        onFunction={() => router.push("/home")}
      >
        <small
          className={css({
            textStyle: "small",
            color: "#F46D1B",
            fontSize: "16px",
            fontWeight: 500,
          })}
        >
          Começe a navegação!
        </small>{" "}
      </ButtonCustom>
    </div>
  );
}
