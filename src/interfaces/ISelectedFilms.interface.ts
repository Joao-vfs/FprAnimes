import { IFilmsProps } from "./IFilms.interface";

export interface ISelectedFilms {
  loading: boolean;
  selectedFilms: IFilmsProps[];
  handleQuantityChange: (filmId: number, quantity: number) => void;
  prices: { [filmId: string]: number };
  handleRemoveFilmId: (id: number | string) => void;
  handleRedirectRouter: () => void;
}
