import * as S from "./ListFilms.styles";

import { Cards } from "../Cards";

export default function ListFilmsComponent({ list, ItemsAdd }: Readonly<any>) {
  return (
    <S.ContainerListFilms>
      {list.map((films: any) => (
        <div key={films.id}>
          <Cards
            image={films.image}
            title={films.title}
            item={ItemsAdd}
            filmId={films.id}
            titleButton={"ADICIONAR AO CARRINHO"}
            price={films.price}
          />
        </div>
      ))}
    </S.ContainerListFilms>
  );
}
