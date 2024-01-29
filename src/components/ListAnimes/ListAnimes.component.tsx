import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";

import { css } from "@shadow-panda/styled-system/css";

import { UseAppDispatch } from "@/redux/store";
import { handleIdAnimesSelection } from "@/redux/slices/ListAnimes/ListAnimes.slices";

import { IListAnimesProps } from "@/interfaces/IListAnimes.interface";

import { Pagination } from "..";

export default function ListAnimesComponent({
  data,
}: Readonly<IListAnimesProps>) {
  const dispatch = UseAppDispatch();

  return (
    <Fragment>
      <div
        className={css({
          h: "full",
          w: "full",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(208px, 1fr))",
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
