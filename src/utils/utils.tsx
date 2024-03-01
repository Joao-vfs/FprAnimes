export const formatPrice = (price: number): string => {
  const priceFixed = price?.toFixed(2);

  const priceNumber = parseFloat(priceFixed);

  const priceFormatted = priceNumber.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return priceFormatted;
};

export function totalPrice(moviesInCart: any): number {
  const total = moviesInCart
    .map((objeto: { price: number }) => objeto.price)
    .reduce((acc: number, currentValue: number) => acc + currentValue, 0);

  return total;
}
