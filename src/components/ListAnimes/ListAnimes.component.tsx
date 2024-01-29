import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";

import { css } from "@shadow-panda/styled-system/css";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { handleIdAnimesSelection } from "@/redux/slices/listAnimes.slices";

import { IListAnimesProps } from "@/interfaces/listAnimes.interface";

import { Pagination } from "..";

export default function ListAnimesComponent({
  data,
}: Readonly<IListAnimesProps>) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Fragment>
      <div
        className={css({
          h: "full",
          w: "full",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(221px, 1fr))",
          columnGap: "10px",
          rowGap: "10px",
        })}
      >
        {data?.map((animes) => {
          return (
            <div key={animes.id}>
              <Link href={"/specific-anime"}>
                <Image
                  src={animes?.attributes?.posterImage?.small}
                  alt={animes?.attributes?.canonicalTitle}
                  width={225}
                  height={319}
                  className={css({
                    my: "10px",
                    mx: "10px",
                    cursor: "pointer",
                  })}
                  onClick={() => dispatch(handleIdAnimesSelection(animes.id))}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination />
    </Fragment>
  );
}
