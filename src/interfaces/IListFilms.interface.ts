import { IFilmsProps } from "./IFilms.interface";

export interface IListFilmsProps {
  list: IFilmsProps[];
  loading: boolean;
  handleCardClick: (films: IFilmsProps) => void;
  addStatus: { [key: string]: boolean };
}
