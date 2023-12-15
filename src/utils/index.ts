import { ICardapio } from "../context/restaurantesContext";

export const formatPrice = (amount = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
};

export const getTotalPrice = (pratos: ICardapio[]) => {
  return pratos.reduce((acumulator, currentPrice) => {
    return (acumulator += currentPrice.preco);
  }, 0);
};

export const FormatDescription = (description: string) => {
  if (description.length > 104) return description.slice(0, 104) + "...";
  return description;
};
