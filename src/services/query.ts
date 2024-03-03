import { api } from "./api";

import { IFilmsProps } from "@/interfaces/IFilms.interface";

export const getFilms = async (): Promise<IFilmsProps[]> => {
  try {
    const { data } = await api.get(`/products`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
