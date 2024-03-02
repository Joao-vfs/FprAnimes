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
  selectedFilms: any,
  prices: { [filmId: string]: number }
): number => {
  return selectedFilms.reduce(
    (acc: any, movie: { id: string | number; price: any }) =>
      acc + (prices[movie.id] || movie.price),
    0
  );
};
