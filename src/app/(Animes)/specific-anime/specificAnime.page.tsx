import Image from "next/image";

import { Fragment } from "react";

import { css } from "@shadow-panda/styled-system/css";

import IcYoutubeLogo from "@/assets/img/Vector.svg";
import IcStar from "@/assets/img/star.svg";
import IcHeart from "@/assets/img/heart.svg";

import { IListAnimesDataProps } from "@/interfaces/listAnimes.interface";

import { ButtonCustom } from "@/components";

export default function SpecificAnimePage({
  specificAnime,
}: {
  specificAnime: IListAnimesDataProps | null;
}) {
  return (
    <Fragment>
      <div
        className={css({
          h: "full",
          w: "full",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "29px",
          px: "25px",
          mb: "300px",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "25px",
          })}
        >
          <Image
            src={specificAnime?.attributes?.posterImage?.small ?? ""}
            alt={specificAnime?.attributes?.canonicalTitle ?? ""}
            width={225}
            height={319}
          />

          <ButtonCustom
            width={"221px"}
            height={"49px"}
            borderRadius={"10px"}
            bgColor={"#F46D1B"}
            padding={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            onFunction={() => {}}
          >
            <Image src={IcYoutubeLogo} alt="" width={41} height={29} />
            <span
              className={css({
                fontSize: "16px",
                fontWeight: 700,
                color: "#fff",
              })}
            >
              VER TRAILER
            </span>
          </ButtonCustom>

          <small
            className={css({
              textStyle: "small",
              textAlign: "left",
              color: "#16A085",
              fontSize: "16px",
              fontWeight: 500,
            })}
          >
            Aprovado por {specificAnime?.attributes?.averageRating}% <br /> da
            Comunidade
          </small>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              color: "#3D3D3D",
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 500,
            })}
          >
            <Image src={IcHeart} alt="" width={18} height={18} />
            <span>
              #{specificAnime?.attributes?.popularityRank} Mais Popular{" "}
            </span>
          </div>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              color: "#3D3D3D",
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 500,
            })}
          >
            <Image src={IcStar} alt="" width={18} height={18} />
            <span>
              #{specificAnime?.attributes?.ratingRank} Melhor Classificado
            </span>
          </div>
        </div>
        <div
          className={css({
            w: "784px",
          })}
        >
          <h1
            className={css({
              textStyle: "h1",
              color: "#3C3C3C",
              fontSize: "26px",
              fontWeight: 700,
            })}
          >
            {specificAnime?.attributes?.canonicalTitle}
          </h1>
          <small
            className={css({
              textStyle: "small",
              color: "#3C3C3C",
              fontSize: "16px",
              fontWeight: 400,
            })}
          >
            {specificAnime?.attributes?.synopsis}
          </small>
        </div>
      </div>
    </Fragment>
  );
}
