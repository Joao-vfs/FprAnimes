import Image from "next/image";
import Link from "next/link";

import { css } from "@shadow-panda/styled-system/css";

import IcLogo from "@/assets/img/logo.svg";
import IcLogoSmall from "@/assets/img/Untitled-1 4.svg";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toggleChangeHeader } from "@/redux/slices/header.slices";

import { IHeaderProps } from "@/interfaces/header.interface";

import { Search } from "..";

export default function HeaderComponent({
  otherHeader,
}: Readonly<IHeaderProps>) {
  const dispatch = useDispatch<AppDispatch>();

  return otherHeader === "small" ? (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        h: "102px",
        w: "full",
        bgColor: "#000",
        opacity: 0.9,
        px: 10,
      })}
    >
      <Link href={"/home"}>
        <Image
          src={IcLogoSmall}
          alt=""
          width={121}
          height={75}
          className={css({ cursor: "pointer" })}
          onClick={() => dispatch(toggleChangeHeader("large"))}
        />
      </Link>
      <Search />
    </div>
  ) : (
    <div
      className={css({
        h: "505px",
        w: "full",
        bgColor: "#000",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 4,
        })}
      >
        <Image src={IcLogo} alt="" width={192} height={118} />
        <Search />
      </div>
      <div
        className={css({
          textAlign: "center",
          fontSize: "64px",
          fontWeight: 700,
          color: "#fff",
        })}
      >
        <h1>
          O <strong className={css({ color: "#F46D1B" })}>Maior</strong>{" "}
          Catálogo de <br />
          <strong className={css({ color: "#34AC40" })}>Anime</strong> do Mundo
        </h1>
      </div>
    </div>
  );
}
