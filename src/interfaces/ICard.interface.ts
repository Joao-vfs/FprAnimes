export interface ICardProps {
  image: string;
  title: string;
  price: number | string;
  onClick: () => void;
  add: boolean;
}
