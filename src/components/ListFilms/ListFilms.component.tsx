import Box from "@/global/layout/Box";

import { formatPrice } from "@/utils/utils";

import { IListFilmsProps } from "@/interfaces/IListFilms.interface";

import { Loading } from "..";
import { Cards } from "../Cards";

export default function ListFilmsComponent({
  list,
  loading,
  handleCardClick,
  addStatus,
}: Readonly<IListFilmsProps>) {
  return loading ? (
    <Loading />
  ) : (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap
      maxWidth={"1283px"}
      gap={"16px"}
    >
      {list.map((films) => (
        <div key={films.id}>
          <Cards
            image={films.image}
            title={films.title}
            price={formatPrice(films.price)}
            onClick={() => handleCardClick(films)}
            add={addStatus[films.id]}
          />
        </div>
      ))}
    </Box>
  );
}
