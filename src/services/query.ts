import { api } from "./api";

export const getAnimes = async (page: number) => {
  try {
    const { data } = await api.get(`anime?page[limit]=20&page[offset]=${page}`);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro na Requisição");
  }
};

export const getAnimesAllCategorys = async () => {
  try {
    const { data } = await api.get(
      `categories?page%5Blimit%5D=40&sort=-total_media_count`
    );

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro na Requisição");
  }
};

export const getAnimesCategorys = async (category: string, page: number) => {
  try {
    const { data } = await api.get(
      `anime?filter[categories]=${category}&page[limit]=20&page[offset]=${page}`
    );

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro na Requisição");
  }
};

export const getAnimesSearched = async (searchedName: string, page: number) => {
  try {
    const { data } = await api.get(
      `anime?filter[text]=${searchedName}&page[limit]=20&page[offset]=${page}`
    );

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro na Requisição");
  }
};

export const getAnimesSpecific = async (id: number) => {
  try {
    const { data } = await api.get(`anime/${id}`);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro na Requisição");
  }
};
