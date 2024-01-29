import Image from "next/image";

import { css } from "@shadow-panda/styled-system/css";

import { UseAppDispatch } from "@/redux/store";
import {
  toggleNextPage,
  togglePrevPage,
} from "@/redux/slices/Pagination/Pagination.slices";

import { IPaginationProps } from "@/interfaces/IPagination.interface";

import IcArrowLeft from "@/assets/img/arrow-left.svg";
import IcArrowRight from "@/assets/img/arrow-right.svg";

import { ButtonCustom } from "..";

export default function PaginationComponent({
  page,
}: Readonly<IPaginationProps>) {
  const dispatch = UseAppDispatch();

  return (
    <div
      className={css({
        w: "full",
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-end",
        gap: "20px",
        p: "20px",
        mb: "50px",
      })}
    >
      {page > 20 && (
        <ButtonCustom
          width={"48px"}
          height={"44px"}
          borderRadius={"10px"}
          bgColor={"#F46D1B"}
          padding={"0"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"0"}
          onFunction={() => dispatch(togglePrevPage())}
        >
          <Image src={IcArrowLeft} alt="" />
        </ButtonCustom>
      )}
      <ButtonCustom
        width={"48px"}
        height={"44px"}
        borderRadius={"10px"}
        bgColor={"#F46D1B"}
        padding={"0"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"0"}
        onFunction={() => dispatch(toggleNextPage())}
      >
        <Image src={IcArrowRight} alt="" />
      </ButtonCustom>
    </div>
  );
}
