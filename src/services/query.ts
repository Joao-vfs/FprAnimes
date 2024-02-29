import { IMovieProps } from "@/interfaces/IMovies.interface";
import { api } from "./api";

export const getFilms = async (): Promise<IMovieProps[]> => {
  try {
    const { data } = await api.get(`products`);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro na Requisição");
  }
};
