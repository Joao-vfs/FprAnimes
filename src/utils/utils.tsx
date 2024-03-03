import { IFilmsProps } from "@/interfaces/IFilms.interface";

export const formatPrice = (price: number): string => {
  const priceFixed = price?.toFixed(2);

  const priceNumber = parseFloat(priceFixed);

  const priceFormatted = priceNumber.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return priceFormatted;
};

export const totalPriceWithQuantity = (
  selectedFilms: IFilmsProps[],
  prices: { [filmId: string]: number }
): number => {
  return selectedFilms.reduce(
    (acc, movie) => acc + (prices[movie.id] || movie.price),
    0
  );
};
