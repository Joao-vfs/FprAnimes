import { css } from "@shadow-panda/styled-system/css";

import { IPageProps } from "@/interfaces/pages.intefaces";

import { TitleList, ListAnimes } from "@/components";

export default function CategoryPage({
  listAnimes,
  title,
}: Readonly<IPageProps>) {
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
