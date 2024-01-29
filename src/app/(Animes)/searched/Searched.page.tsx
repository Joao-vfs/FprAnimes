import { css } from "@shadow-panda/styled-system/css";

import { IPageProps } from "@/interfaces/IPages.intefaces";

import { ListAnimes, TitleList } from "@/components";


export default function SearchedPage({listAnimes, title}: Readonly<IPageProps>) {
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
      <TitleList title={title} />
      <ListAnimes data={listAnimes} />
    </div>
  );

}
