export interface ISumQuantityProps {
  onChange: (quantity: number) => void;
  filmId: number;
}

export interface ICounterInputProps {
  decrement: () => void;
  increment: () => void;
  value: number;
}
