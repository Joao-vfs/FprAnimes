import Box from "@/global/layout/Box";
import { Cards } from "../Cards";
import { formatPrice } from "@/utils/utils";

export default function ListFilmsComponent({
  list,
  handleFilmClick,
  selectedIds,
}: Readonly<any>) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap
      width={"65%"}
      gap={"16px"}
    >
      {list.map((films: any) => (
        <div key={films.id}>
          <Cards
            image={films.image}
            title={films.title}
            price={formatPrice(films.price)}
            onClick={() => handleFilmClick(films)}
            add={selectedIds.includes(films.id)}
          />
        </div>
      ))}
    </Box>
  );
}
