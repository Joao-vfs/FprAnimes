import Box from "@/global/layout/Box";
import { Cards } from "../Cards";
import { formatPrice } from "@/utils/utils";
import { Loading } from "..";

export default function ListFilmsComponent({
  list,
  loading,
  handleCardClick,
  addStatus,
}: Readonly<any>) {
  return loading ? (
    <Loading />
  ) : (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap
      width={"77%"}
      gap={"16px"}
    >
      {list.map((films: any) => (
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
