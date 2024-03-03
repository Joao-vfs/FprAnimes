import { useRouter } from "next/navigation";

import { useCallback, useEffect, useState } from "react";

import { getFilms } from "@/services/query";

import { UseAppDispatch, UseAppSelector } from "@/redux/store";
import {
  handleFilmsSelected,
  handleRemoveFilm,
  handleResetState,
} from "@/redux/slices/WeMovies/weMovies.slices";

import { IFilmsProps } from "@/interfaces/IFilms.interface";

export function useFilm() {
  const [list, setList] = useState<IFilmsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState<{ [filmId: string]: number }>({});
  const [selectedFilms, setSelectedFilms] = useState<IFilmsProps[]>([]);
  const [addStatus, setAddStatus] = useState<{ [key: string]: boolean }>({});
  const selectedPrice = UseAppSelector(
    (state) => state.WeMoviesSlice.weMovies.filmsSelected
  );
  const dispatch = UseAppDispatch();

  const router = useRouter();

  const fetchListFilms = useCallback(async () => {
    try {
      if (list.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      setLoading(false);
      const res = await getFilms();
      setList(res);
    } catch (error) {
      setLoading(true);
      console.error("Erro ao obter filmes:", error);
    } finally {
      setLoading(false);
    }
  }, [list]);

  useEffect(() => {
    fetchListFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilmClick = (film: IFilmsProps) => {
    const isFilmSelected = selectedFilms.some(
      (selectedFilm) => selectedFilm.id === film.id
    );

    if (isFilmSelected) {
      setSelectedFilms((prevSelectedFilms) =>
        prevSelectedFilms.filter((selectedFilm) => selectedFilm.id !== film.id)
      );
      dispatch(handleRemoveFilm(film.id));
    } else {
      setSelectedFilms((prevSelectedFilms) => [...prevSelectedFilms, film]);
      dispatch(handleFilmsSelected(film));
    }
  };

  const handleCardClick = (film: IFilmsProps) => {
    handleFilmClick(film);
    setAddStatus((prevAddStatus) => ({
      ...prevAddStatus,
      [film.id]: !prevAddStatus[film.id],
    }));
  };

  const handleQuantityChange = (filmId: number, quantity: number) => {
    const updatedSelectedFilms = selectedPrice.map((film: IFilmsProps) => ({
      ...film,
    }));

    const filmIndex = updatedSelectedFilms.findIndex(
      (film: { id: number }) => film.id === filmId
    );

    if (filmIndex !== -1) {
      const updatedPrice = updatedSelectedFilms[filmIndex].price * quantity;
      setPrices((prevPrices) => ({
        ...prevPrices,
        [filmId]: updatedPrice,
      }));

      updatedSelectedFilms[filmIndex].price = updatedPrice;
    }
  };

  const handleBackHome = () => {
    router.push("/");
    dispatch(handleResetState());
  };

  const handleRedirectRouter = () => {
    if (selectedPrice.length > 0) {
      router.push("/finalizePurchases");
    }
  };

  const handleRemoveFilmId = (id: number | string) => {
    dispatch(handleRemoveFilm(id));
  };

  return {
    list,
    loading,
    selectedFilms,
    selectedPrice,
    prices,
    addStatus,
    handleFilmClick,
    handleCardClick,
    handleBackHome,
    handleRedirectRouter,
    handleRemoveFilmId,
    handleQuantityChange,
  };
}
