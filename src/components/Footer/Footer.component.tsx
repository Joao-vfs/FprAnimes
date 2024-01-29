import Image from "next/image";
import Link from "next/link";

import { css } from "@shadow-panda/styled-system/css";

import IcMascot from "@/assets/img/yuzu 1.svg";
import IcLogoWhite from "@/assets/img/icon logo animes branco 1.svg";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toggleChangeHeader } from "@/redux/slices/header.slices";
import { handleFirstPage } from "@/redux/slices/pagination.slice";

export default function FooterComponent() {
  const dispatch = useDispatch<AppDispatch>();

  const handleViewAllAnimes = () => {
    dispatch(toggleChangeHeader("small"));
    dispatch(handleFirstPage());
  };
  return (
    <div
      className={css({
        position: "relative",
        h: "276px",
        w: "full",
        bg: "#262626",
      })}
    >
      <div
        className={css({
          display: "flex",
          w: "full",
          h: "full",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        })}
      >
        <div
          className={css({
            display: "flex",
            w: "full",
            h: "full",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Image
            src={IcMascot}
            alt=""
            sizes="auto"
            className={css({ position: "absolute", top: "-40px" })}
          />
          <h5
            className={css({
              textStyle: "h5",
              textAlign: "center",
              color: "#FFF",
              fontSize: "20px",
              fontWeight: "700",
            })}
          >
            Ainda está procurando algo pra assistir?
          </h5>
          <h5
            className={css({
              textStyle: "h5",
              textAlign: "center",
              color: "#34AC40",
              fontSize: "20px",
              fontWeight: "700",
            })}
          >
            Confira o nosso acervo completo
          </h5>
          <Link href={"/all"}>
            <button
              className={css({
                width: "140px",
                height: "39px",
                border: "3px solid #F46D1B",
                textAlign: "center",
                color: "#F46D1B",
                fontSize: "20px",
                fontWeight: "700",
                mt: "8px",
                cursor: "pointer",
              })}
              onClick={handleViewAllAnimes}
            >
              VER TUDO
            </button>
          </Link>
        </div>
        <div
          className={css({
            w: "full",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            p: "20px",
          })}
        >
          <small
            className={css({
              textStyle: "small",
              color: "#FFF",
              fontSize: "12px",
              fontWeight: 500,
            })}
          >
            © 2023 FPR Animes - Todos os direitos reservados.
          </small>
          <Image src={IcLogoWhite} alt="" width={12} height={28} />
        </div>
      </div>
    </div>
  );
}
